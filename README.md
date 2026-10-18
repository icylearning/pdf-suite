# AetherPDF — Next-Generation Document & PDF Suite

A modern, high-fidelity PDF and Office document toolkit engineered with **Apple Design System** aesthetics, obsidian black minimalism, and a dual-layer engine architecture for 1-on-1 document conversion.

---

## ⚡ Highlights

- **1-on-1 Exact Document Conversion**:
  - **Word to PDF**: Converts `.docx`, `.doc`, `.rtf`, `.odt`, `.txt` preserving full page geometry, tables, margins, and fonts.
  - **Excel to PDF**: Converts `.xlsx`, `.xls`, `.xlsm`, `.csv`, `.tsv`, `.ods` into multi-page formatted vector tables without clipping columns or cells.
  - **PowerPoint to PDF**: Converts `.pptx`, `.ppt`, `.pps`, `.ppsx`, `.odp` into crisp widescreen 16:9 PDF slide decks.
  - **PDF to Word DOCX**: Deep layout reconstruction rebuilding editable paragraphs, typography, and tables.
  - **PDF to Excel XLSX**: Extracts structured tabular grids directly into spreadsheets.
- **Dual-Layer Architecture**:
  - **Primary**: Native headless vector engine (LibreOffice + `pdf2docx` + `PyMuPDF` + `openpyxl`) for industry-standard 100% 1-on-1 fidelity.
  - **Client-Side Fallback**: In-browser OpenXML parser (`docx-preview`, `SheetJS`, `JSZip`, and `html2canvas` at 2x Retina resolution).
- **Desktop-Grade Tab Management**:
  - Dynamic multi-tab bar right beside Home with `+` (and `Ctrl+T`) to run multiple workspaces concurrently.
  - Auto-titling tabs with active tool names and close button (`×`).
- **Apple Quick Look Page Lightbox**:
  - Full-resolution preview of every page in any PDF with zoom controls and page navigation.
- **Universal Save & Folder Picker**:
  - Direct integration with native Windows Explorer `SaveFileDialog` and File System Access API to choose destination folders and rename files on save.
- **Obsidian Black Aesthetic**:
  - Pure neutral dark palette (`#080808`, `#0a0a0a`, `#121212`) engineered for modern OLED and high-contrast displays.

---

## 🚀 Quick Start

### 1. Run the Unified Server
```bash
python server.py
```
Or double-click `start.bat`.

### 2. Open in Browser
Visit **[http://localhost:8080](http://localhost:8080)** in Chrome, Edge, Brave, or Firefox.

---

## 🛠️ Tech Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES2022)
- **Backend**: Python 3, Flask
- **Document Engines**: LibreOffice Headless CLI, PyMuPDF, pdf2docx, openpyxl, python-docx, python-pptx
- **Client Libraries**: PDF.js, PDF-lib, SheetJS, docx-preview, JSZip, Tesseract.js, html2canvas, PptxGenJS
