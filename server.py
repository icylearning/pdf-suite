import os
import sys
import io
import shutil
import tempfile
import subprocess
from flask import Flask, request, send_file, jsonify, send_from_directory

app = Flask(__name__, static_folder=".")

def find_soffice():
    p = shutil.which("soffice.com") or shutil.which("soffice") or shutil.which("libreoffice")
    if p:
        return p
    candidates = [
        r"C:\Program Files\LibreOffice\program\soffice.com",
        r"C:\Program Files\LibreOffice\program\soffice.exe",
        r"C:\Program Files (x86)\LibreOffice\program\soffice.com",
        r"C:\Program Files (x86)\LibreOffice\program\soffice.exe",
        os.path.expandvars(r"%LOCALAPPDATA%\Programs\LibreOffice\program\soffice.com"),
    ]
    for c in candidates:
        if os.path.exists(c):
            return c
    return None

@app.route("/")
def index():
    return send_from_directory(".", "index.html")


@app.route("/api/health")
def health():
    soffice = find_soffice()
    has_pdf2docx = False
    try:
        import pdf2docx
        has_pdf2docx = True
    except ImportError:
        pass

    return jsonify({
        "status": "ok",
        "engine": "libreoffice" if soffice else "client-fallback",
        "soffice_path": soffice,
        "has_pdf2docx": has_pdf2docx,
        "supported_conversions": {
            "to_pdf": ["pptx", "ppt", "odp", "pps", "ppsx", "docx", "doc", "rtf", "odt", "txt", "xlsx", "xls", "xlsm", "xlsb", "csv", "tsv", "ods"],
            "from_pdf": ["docx", "xlsx"]
        }
    })

@app.route("/api/convert", methods=["POST"])
def convert():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    if not file.filename:
        return jsonify({"error": "Empty filename"}), 400

    target_format = (request.form.get("target_format") or request.args.get("format") or "pdf").lower().strip(".")
    temp_dir = tempfile.mkdtemp(prefix="aether_convert_")

    try:
        input_filename = os.path.basename(file.filename)
        input_path = os.path.join(temp_dir, input_filename)
        file.save(input_path)
        base_name = os.path.splitext(input_filename)[0]

        # Case 1: PDF to Word DOCX conversion with deep layout analysis
        if target_format == "docx":
            try:
                from pdf2docx import Converter
                output_docx = os.path.join(temp_dir, f"{base_name}.docx")
                cv = Converter(input_path)
                cv.convert(output_docx)
                cv.close()

                if os.path.exists(output_docx):
                    with open(output_docx, "rb") as f:
                        docx_bytes = f.read()
                    return send_file(
                        io.BytesIO(docx_bytes),
                        mimetype="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        as_attachment=True,
                        download_name=f"{base_name}.docx"
                    )
            except Exception as e:
                print(f"pdf2docx conversion error: {e}")
                # Fallback to LibreOffice if available
                soffice = find_soffice()
                if soffice:
                    cmd = [soffice, "--headless", "--invisible", "--convert-to", "docx", "--outdir", temp_dir, input_path]
                    subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=60)
                    output_docx = os.path.join(temp_dir, f"{base_name}.docx")
                    if os.path.exists(output_docx):
                        with open(output_docx, "rb") as f:
                            docx_bytes = f.read()
                        return send_file(
                            io.BytesIO(docx_bytes),
                            mimetype="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                            as_attachment=True,
                            download_name=f"{base_name}.docx"
                        )
                return jsonify({"error": f"DOCX extraction failed: {e}"}), 500

        # Case 2: PDF to Excel XLSX conversion with tabular coordinate recognition
        elif target_format == "xlsx":
            try:
                import fitz
                import openpyxl
                doc = fitz.open(input_path)
                wb = openpyxl.Workbook()
                ws = wb.active
                ws.title = "Extracted Data"

                found_tables = False
                for page in doc:
                    tabs = page.find_tables()
                    for tab in tabs:
                        found_tables = True
                        for row in tab.extract():
                            ws.append(row)

                if not found_tables:
                    for page in doc:
                        for line in page.get_text("text").splitlines():
                            if line.strip():
                                ws.append([line.strip()])

                output_xlsx = os.path.join(temp_dir, f"{base_name}.xlsx")
                wb.save(output_xlsx)

                with open(output_xlsx, "rb") as f:
                    xlsx_bytes = f.read()
                return send_file(
                    io.BytesIO(xlsx_bytes),
                    mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    as_attachment=True,
                    download_name=f"{base_name}.xlsx"
                )
            except Exception as e:
                print(f"XLSX extraction error: {e}")
                return jsonify({"error": f"XLSX extraction failed: {e}"}), 500

        # Case 3: Any document format to 1-on-1 Vector PDF (Word, Excel, PowerPoint, Text, RTF)
        else:
            soffice = find_soffice()
            if not soffice:
                return jsonify({"error": "LibreOffice conversion engine not found on host"}), 503

            cmd = [
                soffice,
                "--headless",
                "--invisible",
                "--nologo",
                "--nodefault",
                "--nofirststartwizard",
                "--convert-to",
                "pdf",
                "--outdir",
                temp_dir,
                input_path
            ]

            print(f"Executing high-fidelity conversion: {' '.join(cmd)}")
            result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=90)
            if result.returncode != 0:
                err_msg = result.stderr.decode("utf-8", errors="ignore")
                print(f"Conversion failed with code {result.returncode}: {err_msg}")
                return jsonify({"error": f"Engine conversion failed: {err_msg}"}), 500

            output_pdf = os.path.join(temp_dir, f"{base_name}.pdf")
            if not os.path.exists(output_pdf):
                pdfs = [f for f in os.listdir(temp_dir) if f.lower().endswith(".pdf")]
                if pdfs:
                    output_pdf = os.path.join(temp_dir, pdfs[0])
                else:
                    return jsonify({"error": "Engine completed but output PDF not found"}), 500

            with open(output_pdf, "rb") as f:
                pdf_bytes = f.read()

            return send_file(
                io.BytesIO(pdf_bytes),
                mimetype="application/pdf",
                as_attachment=True,
                download_name=f"{base_name}.pdf"
            )

    except Exception as e:
        print(f"Exception during conversion: {e}")
        return jsonify({"error": str(e)}), 500
    finally:
        shutil.rmtree(temp_dir, ignore_errors=True)

@app.route("/api/save-file", methods=["POST"])
def save_file():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    filename = request.form.get("filename") or file.filename or "document.pdf"
    custom_path = request.form.get("custom_path", "").strip()

    if custom_path:
        dest_path = os.path.abspath(custom_path)
        if os.path.isdir(dest_path):
            dest_path = os.path.join(dest_path, filename)
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        file.save(dest_path)
        return jsonify({"success": True, "path": dest_path, "filename": os.path.basename(dest_path)})

    ext = os.path.splitext(filename)[1].lower() or ".pdf"
    temp_dir = tempfile.mkdtemp(prefix="aether_save_")
    try:
        temp_input = os.path.join(temp_dir, filename)
        file.save(temp_input)

        # Launch Windows Explorer SaveFileDialog using PowerShell
        ps_script = f'''
Add-Type -AssemblyName System.Windows.Forms
$dialog = New-Object System.Windows.Forms.SaveFileDialog
$dialog.Title = "Choose Where to Save File"
$dialog.FileName = "{filename}"
$dialog.Filter = "{ext[1:].upper()} Document (*{ext})|*{ext}|All Files (*.*)|*.*"
$desktop = [Environment]::GetFolderPath("Desktop")
$dialog.InitialDirectory = $desktop
$form = New-Object System.Windows.Forms.Form
$form.TopMost = $true
$res = $dialog.ShowDialog($form)
if ($res -eq [System.Windows.Forms.DialogResult]::OK) {{
    [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
    Write-Output $dialog.FileName
}}
'''
        proc = subprocess.run(
            ["powershell", "-NoProfile", "-Command", ps_script],
            capture_output=True,
            text=True,
            timeout=120
        )
        chosen_path = proc.stdout.strip()
        if chosen_path:
            os.makedirs(os.path.dirname(chosen_path), exist_ok=True)
            shutil.copy2(temp_input, chosen_path)
            return jsonify({"success": True, "path": chosen_path, "filename": os.path.basename(chosen_path)})
        else:
            return jsonify({"cancelled": True})
    except Exception as e:
        print(f"Save dialog error: {e}")
        return jsonify({"error": str(e)}), 500
    finally:
        shutil.rmtree(temp_dir, ignore_errors=True)

@app.route("/<path:path>")
def static_proxy(path):
    return send_from_directory(".", path)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    print(f"Starting AetherPDF Unified Engine Server on port {port}...")
    soffice_path = find_soffice()
    if soffice_path:
        print(f"[OK] Found LibreOffice High-Fidelity Engine: {soffice_path}")
    else:
        print("[!] LibreOffice not yet detected; client-side fallback active.")
    app.run(host="0.0.0.0", port=port, debug=False)
