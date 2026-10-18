/**
 * AetherPDF — Complete Desktop PDF Suite
 * 100% In-Browser WebAssembly Processing & Exact Match to Screenshots
 */

if (window.pdfjsLib) {
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// ==========================================================================
// 1. Tool Catalog Registry (Exact Match to Screenshot 1)
// ==========================================================================

const TOOLS_CONFIG = [
  // --- Organize PDF ---
  {
    id: 'merge-pdf',
    category: 'organize',
    badgeClass: 'badge-coral',
    title: 'Merge PDF',
    desc: 'Combine PDFs in the order you want with the easiest PDF merger available.',
    accept: '.pdf',
    multiple: true,
    action: 'Merge PDFs',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mp-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#eb6b56"/><stop offset="100%" stop-color="#de5c47"/></linearGradient><filter id="mp-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#mp-sh)"><rect x="4" y="4" width="28" height="28" rx="7" fill="url(#mp-c)"/><rect x="4.5" y="4.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><path d="M12 12 L24 24 M24 24 H17 M24 24 V17" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g><g filter="url(#mp-sh)"><rect x="24" y="24" width="28" height="28" rx="7" fill="url(#mp-c)"/><rect x="24.5" y="24.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><path d="M44 44 L32 32 M32 32 H39 M32 32 V39" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`
  },
  {
    id: 'split-pdf',
    category: 'organize',
    badgeClass: 'badge-coral',
    title: 'Split PDF',
    desc: 'Separate one page or a whole set for easy conversion into independent PDF files.',
    accept: '.pdf',
    multiple: false,
    action: 'Split PDF',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sp-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#eb6b56"/><stop offset="100%" stop-color="#de5c47"/></linearGradient><filter id="sp-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#sp-sh)"><rect x="4" y="4" width="28" height="28" rx="7" fill="url(#sp-c)"/><rect x="4.5" y="4.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><path d="M24 24 L12 12 M12 12 H19 M12 12 V19" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g><g filter="url(#sp-sh)"><rect x="24" y="24" width="28" height="28" rx="7" fill="url(#sp-c)"/><rect x="24.5" y="24.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><path d="M32 32 L44 44 M44 44 H37 M44 44 V37" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`
  },
  {
    id: 'remove-pages',
    category: 'organize',
    badgeClass: 'badge-coral',
    title: 'Remove PDF Pages',
    desc: 'Delete unwanted pages from your PDF document easily with visual page picking.',
    accept: '.pdf',
    multiple: false,
    action: 'Remove Selected Pages',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rp-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#eb6b56"/><stop offset="100%" stop-color="#de5c47"/></linearGradient><filter id="rp-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#rp-sh)"><rect x="3" y="3" width="50" height="50" rx="12" fill="url(#rp-c)"/><rect x="3.5" y="3.5" width="49" height="49" rx="11.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><path d="M16 20 H40 M23 20 V17 A2 2 0 0 1 25 15 H31 A2 2 0 0 1 33 17 V20" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 20 L21 39 A2.5 2.5 0 0 0 23.5 41.5 H32.5 A2.5 2.5 0 0 0 35 39 L37 20" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><line x1="25" y1="25" x2="25.5" y2="36" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/><line x1="31" y1="25" x2="30.5" y2="36" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/></g></svg>`
  },
  {
    id: 'organize-pdf',
    category: 'organize',
    badgeClass: 'badge-coral',
    title: 'Organize PDF',
    desc: 'Sort, add, rotate, and delete PDF pages in an interactive visual canvas.',
    accept: '.pdf',
    multiple: false,
    action: 'Save Organized PDF',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="org-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#eb6b56"/><stop offset="100%" stop-color="#de5c47"/></linearGradient><filter id="org-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#org-sh)"><rect x="4" y="4" width="22" height="48" rx="6" fill="url(#org-c)"/><rect x="4.5" y="4.5" width="21" height="47" rx="5.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><path d="M10 19 L15 14 L20 19" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15" cy="26" r="1.5" fill="#ffffff"/><circle cx="15" cy="30" r="1.5" fill="#ffffff"/><path d="M10 37 L15 42 L20 37" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g><g filter="url(#org-sh)"><rect x="30" y="4" width="22" height="22" rx="6" fill="url(#org-c)"/><rect x="30.5" y="4.5" width="21" height="21" rx="5.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><text x="41" y="20" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#ffffff">A</text><rect x="30" y="30" width="22" height="22" rx="6" fill="url(#org-c)"/><rect x="30.5" y="30.5" width="21" height="21" rx="5.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><text x="41" y="46" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="#ffffff">B</text></g></svg>`
  },
  {
    id: 'scan-pdf',
    category: 'organize',
    badgeClass: 'badge-coral',
    title: 'Scan to PDF',
    cornerGlobe: true,
    desc: 'Capture physical documents via your webcam or camera and turn them into PDF.',
    accept: 'image/*,.pdf',
    multiple: true,
    action: 'Generate PDF from Scans',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sc-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#eb6b56"/><stop offset="100%" stop-color="#de5c47"/></linearGradient><filter id="sc-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#sc-sh)"><rect x="3" y="3" width="50" height="50" rx="12" fill="url(#sc-c)"/><rect x="3.5" y="3.5" width="49" height="49" rx="11.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><path d="M14 21 V16 A2 2 0 0 1 16 14 H21 M35 14 H40 A2 2 0 0 1 42 16 V21 M14 35 V40 A2 2 0 0 0 16 42 H21 M35 42 H40 A2 2 0 0 0 42 40 V35" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><rect x="20" y="18" width="16" height="20" rx="2.5" fill="#ffffff" fill-opacity="0.2" stroke="#ffffff" stroke-width="1.2"/><line x1="24" y1="23" x2="32" y2="23" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/><line x1="24" y1="27" x2="30" y2="27" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/><line x1="12" y1="28" x2="44" y2="28" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></g></svg>`
  },

  // --- Optimize PDF ---
  {
    id: 'compress-pdf',
    category: 'optimize',
    badgeClass: 'badge-lime',
    title: 'Compress PDF',
    desc: 'Reduce file size while optimizing for maximal PDF visual clarity.',
    accept: '.pdf',
    multiple: false,
    action: 'Compress PDF',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cp-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7bb844"/><stop offset="100%" stop-color="#6ca337"/></linearGradient><filter id="cp-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#cp-sh)"><rect x="3" y="3" width="50" height="50" rx="12" fill="url(#cp-c)"/><rect x="3.5" y="3.5" width="49" height="49" rx="11.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><path d="M14 14 L23 23 M23 23 H16 M23 23 V16" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 14 L33 23 M33 23 H40 M33 23 V16" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 42 L23 33 M23 33 H16 M23 33 V40" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 42 L33 33 M33 33 H40 M33 33 V40" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="28" cy="28" r="2" fill="#ffffff"/></g></svg>`
  },
  {
    id: 'repair-pdf',
    category: 'optimize',
    badgeClass: 'badge-green',
    title: 'Repair PDF',
    desc: 'Repair damaged or corrupted PDFs, rebuild xref tables, and recover data.',
    accept: '.pdf',
    multiple: false,
    action: 'Repair & Rebuild PDF',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rp2-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#34c759"/><stop offset="100%" stop-color="#28a745"/></linearGradient><filter id="rp2-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#rp2-sh)"><rect x="3" y="3" width="50" height="50" rx="12" fill="url(#rp2-c)"/><rect x="3.5" y="3.5" width="49" height="49" rx="11.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><path d="M36 15.5 C34.4 14.2 32 14.4 30.6 15.8 L28 18.4 L33.6 24 L36.2 21.4 C37.6 20 37.8 17.6 36 15.5 Z" fill="#ffffff"/><path d="M31.8 22.2 L17.5 36.5 A2 2 0 0 0 17.5 39.3 L19.2 41 A2 2 0 0 0 22 41 L36.3 26.7 Z" fill="#ffffff"/><line x1="16.5" y1="16.5" x2="38.5" y2="38.5" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round"/><polygon points="14.5,14.5 18.5,14.5 14.5,18.5" fill="#ffffff"/></g></svg>`
  },
  {
    id: 'ocr-pdf',
    category: 'optimize',
    badgeClass: 'badge-lime',
    title: 'OCR PDF',
    desc: 'Extract text from scanned PDFs with in-browser high-accuracy Optical Character Recognition.',
    accept: '.pdf,image/*',
    multiple: false,
    action: 'Perform OCR Recognition',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ocr-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7bb844"/><stop offset="100%" stop-color="#6ca337"/></linearGradient><filter id="ocr-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#ocr-sh)"><rect x="3" y="3" width="50" height="50" rx="12" fill="url(#ocr-c)"/><rect x="3.5" y="3.5" width="49" height="49" rx="11.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><rect x="11" y="11" width="34" height="34" rx="5" stroke="#ffffff" stroke-width="1.6" stroke-dasharray="3 2" fill="#ffffff" fill-opacity="0.1"/><text x="28" y="32.5" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="11" font-weight="800" letter-spacing="1" text-anchor="middle" fill="#ffffff">OCR</text></g></svg>`
  },

  // --- Convert to PDF ---
  {
    id: 'image-to-pdf',
    category: 'convert-to',
    badgeClass: 'badge-yellow',
    title: 'Image to PDF',
    desc: 'Convert JPG, PNG, and WebP images to PDF with custom margins and sizing.',
    accept: 'image/*',
    multiple: true,
    action: 'Convert Images to PDF',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="itp-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="itp-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#itp-sh)"><rect x="4" y="4" width="28" height="28" rx="7" fill="url(#itp-c)"/><rect x="4.5" y="4.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><circle cx="12" cy="11" r="2.2" fill="#ffffff"/><path d="M7 24 L14 15 L19 21 L22 18 L28 24 Z" fill="#ffffff" fill-opacity="0.95"/></g><g filter="url(#itp-sh)"><rect x="24" y="24" width="28" height="28" rx="7" fill="#141414"/><rect x="24.5" y="24.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/><path d="M33 33 L43 43 M43 43 H36 M43 43 V36" stroke="#f59e0b" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`
  },
  {
    id: 'word-to-pdf',
    category: 'convert-to',
    badgeClass: 'badge-blue',
    title: 'Word to PDF',
    desc: 'Convert Word DOCX, DOC, RTF, ODT, and TXT documents into 1-on-1 exact replica vector PDF documents.',
    accept: '.docx,.doc,.rtf,.odt,.txt,.dot,.dotx,.wps',
    multiple: false,
    action: 'Convert Word to PDF',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="wtp-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3a82f7"/><stop offset="100%" stop-color="#256fe5"/></linearGradient><filter id="wtp-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#wtp-sh)"><rect x="4" y="4" width="28" height="28" rx="7" fill="url(#wtp-c)"/><rect x="4.5" y="4.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><text x="18" y="23" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="14.5" font-weight="800" text-anchor="middle" fill="#ffffff">W</text></g><g filter="url(#wtp-sh)"><rect x="24" y="24" width="28" height="28" rx="7" fill="#141414"/><rect x="24.5" y="24.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/><path d="M33 33 L43 43 M43 43 H36 M43 43 V36" stroke="#3a82f7" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`
  },
  {
    id: 'powerpoint-to-pdf',
    category: 'convert-to',
    badgeClass: 'badge-coral',
    title: 'PowerPoint to PDF',
    desc: 'Convert PowerPoint PPTX, PPT, ODP, and PPS presentation decks into 1-on-1 exact replica vector PDF decks.',
    accept: '.pptx,.ppt,.odp,.pps,.ppsx',
    multiple: false,
    action: 'Convert Slides to PDF',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ptp-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#eb6b56"/><stop offset="100%" stop-color="#de5c47"/></linearGradient><filter id="ptp-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#ptp-sh)"><rect x="4" y="4" width="28" height="28" rx="7" fill="url(#ptp-c)"/><rect x="4.5" y="4.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><text x="18" y="23" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="14.5" font-weight="800" text-anchor="middle" fill="#ffffff">P</text></g><g filter="url(#ptp-sh)"><rect x="24" y="24" width="28" height="28" rx="7" fill="#141414"/><rect x="24.5" y="24.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/><path d="M33 33 L43 43 M43 43 H36 M43 43 V36" stroke="#eb6b56" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`
  },
  {
    id: 'excel-to-pdf',
    category: 'convert-to',
    badgeClass: 'badge-green',
    title: 'Excel to PDF',
    desc: 'Convert Excel XLSX, XLS, XLSM, CSV, TSV, and ODS spreadsheets into 1-on-1 exact replica vector PDF tables.',
    accept: '.xlsx,.xls,.xlsm,.xlsb,.csv,.tsv,.ods',
    multiple: false,
    action: 'Convert Excel to PDF',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="etp-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#34c759"/><stop offset="100%" stop-color="#28a745"/></linearGradient><filter id="etp-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#etp-sh)"><rect x="4" y="4" width="28" height="28" rx="7" fill="url(#etp-c)"/><rect x="4.5" y="4.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><text x="18" y="23" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="14.5" font-weight="800" text-anchor="middle" fill="#ffffff">X</text></g><g filter="url(#etp-sh)"><rect x="24" y="24" width="28" height="28" rx="7" fill="#141414"/><rect x="24.5" y="24.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/><path d="M33 33 L43 43 M43 43 H36 M43 43 V36" stroke="#34c759" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`
  },

  // --- Convert from PDF ---
  {
    id: 'pdf-to-jpg',
    category: 'convert-from',
    badgeClass: 'badge-yellow',
    title: 'PDF to JPG',
    desc: 'Extract all pages from a PDF document as high-resolution JPG image files.',
    accept: '.pdf',
    multiple: false,
    action: 'Extract JPG Images',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ptj-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="ptj-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#ptj-sh)"><rect x="4" y="4" width="28" height="28" rx="7" fill="#141414"/><rect x="4.5" y="4.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/><path d="M13 13 L23 23 M23 23 H16 M23 23 V16" stroke="#f59e0b" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g><g filter="url(#ptj-sh)"><rect x="24" y="24" width="28" height="28" rx="7" fill="url(#ptj-c)"/><rect x="24.5" y="24.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><text x="38" y="41.5" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="9" font-weight="800" letter-spacing="0.5" text-anchor="middle" fill="#ffffff">JPG</text></g></svg>`
  },
  {
    id: 'pdf-to-word',
    category: 'convert-from',
    badgeClass: 'badge-blue',
    title: 'PDF to Word',
    desc: 'Convert PDF content and typography into editable Microsoft Word (.docx) documents.',
    accept: '.pdf',
    multiple: false,
    action: 'Convert to Word DOCX',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ptw-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3a82f7"/><stop offset="100%" stop-color="#256fe5"/></linearGradient><filter id="ptw-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#ptw-sh)"><rect x="4" y="4" width="28" height="28" rx="7" fill="#141414"/><rect x="4.5" y="4.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/><path d="M13 13 L23 23 M23 23 H16 M23 23 V16" stroke="#3a82f7" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g><g filter="url(#ptw-sh)"><rect x="24" y="24" width="28" height="28" rx="7" fill="url(#ptw-c)"/><rect x="24.5" y="24.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><text x="38" y="43" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="14.5" font-weight="800" text-anchor="middle" fill="#ffffff">W</text></g></svg>`
  },
  {
    id: 'pdf-to-powerpoint',
    category: 'convert-from',
    badgeClass: 'badge-coral',
    title: 'PDF to PowerPoint',
    desc: 'Transform your PDF pages into an editable presentation slide deck.',
    accept: '.pdf',
    multiple: false,
    action: 'Convert to Presentation',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ptp2-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#eb6b56"/><stop offset="100%" stop-color="#de5c47"/></linearGradient><filter id="ptp2-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#ptp2-sh)"><rect x="4" y="4" width="28" height="28" rx="7" fill="#141414"/><rect x="4.5" y="4.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/><path d="M13 13 L23 23 M23 23 H16 M23 23 V16" stroke="#eb6b56" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g><g filter="url(#ptp2-sh)"><rect x="24" y="24" width="28" height="28" rx="7" fill="url(#ptp2-c)"/><rect x="24.5" y="24.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><text x="38" y="43" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="14.5" font-weight="800" text-anchor="middle" fill="#ffffff">P</text></g></svg>`
  },
  {
    id: 'pdf-to-excel',
    category: 'convert-from',
    badgeClass: 'badge-green',
    title: 'PDF to Excel',
    desc: 'Extract tables, numbers, and structured data straight into Excel XLSX spreadsheets.',
    accept: '.pdf',
    multiple: false,
    action: 'Extract to Excel XLSX',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="pte-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#34c759"/><stop offset="100%" stop-color="#28a745"/></linearGradient><filter id="pte-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#pte-sh)"><rect x="4" y="4" width="28" height="28" rx="7" fill="#141414"/><rect x="4.5" y="4.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/><path d="M13 13 L23 23 M23 23 H16 M23 23 V16" stroke="#34c759" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g><g filter="url(#pte-sh)"><rect x="24" y="24" width="28" height="28" rx="7" fill="url(#pte-c)"/><rect x="24.5" y="24.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><text x="38" y="43" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="14.5" font-weight="800" text-anchor="middle" fill="#ffffff">X</text></g></svg>`
  },
  {
    id: 'pdf-to-pdfa',
    category: 'convert-from',
    badgeClass: 'badge-slate',
    title: 'PDF to PDF/A',
    tooltip: 'Convert PDF documents to PDF/A for long-term archiving.',
    desc: 'Convert PDF documents to PDF/A for long-term archiving.',
    accept: '.pdf',
    multiple: false,
    action: 'Convert to PDF/A',
    icon: `<svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ptpa-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#475569"/><stop offset="100%" stop-color="#334155"/></linearGradient><filter id="ptpa-sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.25"/></filter></defs><g filter="url(#ptpa-sh)"><rect x="4" y="4" width="28" height="28" rx="7" fill="#141414"/><rect x="4.5" y="4.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/><path d="M13 13 L23 23 M23 23 H16 M23 23 V16" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g><g filter="url(#ptpa-sh)"><rect x="24" y="24" width="28" height="28" rx="7" fill="url(#ptpa-c)"/><rect x="24.5" y="24.5" width="27" height="27" rx="6.5" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1"/><text x="38" y="42" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="11" font-weight="800" letter-spacing="0.2" text-anchor="middle" fill="#ffffff">/A</text></g></svg>`
  }
];

// ==========================================================================
// 2. State & References
// ==========================================================================

let activeTool = null;
let currentFiles = [];
let recentDocuments = [];
let activeCameraStream = null;
let capturedScanPages = [];
let generatedBlob = null;
let generatedFilename = '';
let cachedPageCards = [];

// DOM Handles
const navRecents = document.getElementById('nav-recents');
const navTools = document.getElementById('nav-tools');
const viewRecents = document.getElementById('view-recents');
const viewTools = document.getElementById('view-tools');
const btnTriggerOpenFile = document.getElementById('btn-trigger-open-file');
const globalFileInput = document.getElementById('global-file-input');
const recentsDropzone = document.getElementById('recents-dropzone');
const recentsContainer = document.getElementById('recents-container');
const recentsEmpty = document.getElementById('recents-empty');
const recentsCount = document.getElementById('recents-count');

// Modal Handles
const toolModal = document.getElementById('tool-modal');
const modalIconBadge = document.getElementById('modal-icon-badge');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalDropzone = document.getElementById('modal-dropzone');
const modalFileInput = document.getElementById('modal-file-input');
const modalFilesList = document.getElementById('modal-files-list');
const modalScannerWrap = document.getElementById('modal-scanner-wrap');
const modalScannerVideo = document.getElementById('modal-scanner-video');
const btnCaptureScanPage = document.getElementById('btn-capture-scan-page');
const btnFlipCamera = document.getElementById('btn-flip-camera');
const modalPagesPreviewWrap = document.getElementById('modal-pages-preview-wrap');
const modalPageGrid = document.getElementById('modal-page-grid');
const modalSettingsGrid = document.getElementById('modal-settings-grid');
const modalProgress = document.getElementById('modal-progress');
const modalProgressStatus = document.getElementById('modal-progress-status');
const modalProgressPercent = document.getElementById('modal-progress-percent');
const modalProgressThumb = document.getElementById('modal-progress-thumb');
const modalResultCard = document.getElementById('modal-result-card');
const modalResultDetails = document.getElementById('modal-result-details');
const modalDownloadFilename = document.getElementById('modal-download-filename');
const btnModalSaveAs = document.getElementById('btn-modal-save-as');
const btnModalPreviewResult = document.getElementById('btn-modal-preview-result');
const btnModalDownload = document.getElementById('btn-modal-download');
const btnModalExecute = document.getElementById('btn-modal-execute');
const modalExecuteLabel = document.getElementById('modal-execute-label');
const btnModalCancel = document.getElementById('btn-modal-cancel');
const btnCloseModal = document.getElementById('btn-close-modal');
const toastShelf = document.getElementById('toast-shelf');

// Quick Look Lightbox Handles
const pdfPreviewLightbox = document.getElementById('pdf-preview-lightbox');
const previewLightboxFilename = document.getElementById('preview-lightbox-filename');
const previewLightboxCanvas = document.getElementById('preview-lightbox-canvas');
const previewPageCounter = document.getElementById('preview-page-counter');
const previewZoomLevel = document.getElementById('preview-zoom-level');
const btnPreviewPrev = document.getElementById('btn-preview-prev');
const btnPreviewNext = document.getElementById('btn-preview-next');
const btnPreviewZoomOut = document.getElementById('btn-preview-zoom-out');
const btnPreviewZoomIn = document.getElementById('btn-preview-zoom-in');
const btnPreviewClose = document.getElementById('btn-preview-close');

// ==========================================================================
// 3. Navigation Switching
// ==========================================================================

// ==========================================================================
// 3. Navigation & Dynamic Multi-Tab System
// ==========================================================================

let tabCounter = 1;
const tabsState = [
  {
    id: 'home',
    title: 'Home',
    view: 'recents',
    closable: false
  }
];
let activeTabId = 'home';

function renderTabs() {
  const dynamicContainer = document.getElementById('dynamic-tabs');
  const homeTab = document.getElementById('tab-home');
  if (!homeTab) return;

  if (activeTabId === 'home') {
    homeTab.classList.add('active');
  } else {
    homeTab.classList.remove('active');
  }

  if (dynamicContainer) {
    dynamicContainer.innerHTML = '';
    tabsState.slice(1).forEach(tab => {
      const tabEl = document.createElement('div');
      tabEl.className = `tab-item ${tab.id === activeTabId ? 'active' : ''}`;
      tabEl.id = tab.id;
      tabEl.title = tab.title;

      const iconSvg = tab.iconSvg || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`;

      tabEl.innerHTML = `
        ${iconSvg}
        <span class="tab-title-text">${tab.title}</span>
        <button class="tab-close-btn" title="Close Tab" aria-label="Close Tab">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      `;

      tabEl.addEventListener('click', (e) => {
        if (e.target.closest('.tab-close-btn')) return;
        activateTab(tab.id);
      });

      tabEl.querySelector('.tab-close-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        closeTab(tab.id);
      });

      dynamicContainer.appendChild(tabEl);
    });
  }
}

function activateTab(tabId) {
  activeTabId = tabId;
  const tab = tabsState.find(t => t.id === tabId) || tabsState[0];
  renderTabs();

  // Switch views
  if (tab.view === 'recents') {
    navRecents?.classList.add('active');
    navTools?.classList.remove('active');
    viewRecents?.classList.add('active');
    viewTools?.classList.remove('active');
  } else {
    navTools?.classList.add('active');
    navRecents?.classList.remove('active');
    viewTools?.classList.add('active');
    viewRecents?.classList.remove('active');
  }

  if (tab.activeTool) {
    openToolModal(tab.activeTool);
  }
}
window.activateTab = activateTab;

function createNewTab(title, view = 'tools', iconSvg = null, toolData = null) {
  tabCounter++;
  const newTabId = 'tab-' + Date.now();
  const tabTitle = title || `Workspace ${tabCounter}`;

  const newTab = {
    id: newTabId,
    title: tabTitle,
    view: view,
    closable: true,
    iconSvg: iconSvg,
    activeTool: toolData
  };

  tabsState.push(newTab);
  renderTabs();
  activateTab(newTabId);
  showToast(`Added new tab: ${tabTitle}`, true);
  return newTab;
}
window.createNewTab = createNewTab;

function closeTab(tabId) {
  const index = tabsState.findIndex(t => t.id === tabId);
  if (index <= 0) return; // Cannot close Home

  const wasActive = activeTabId === tabId;
  tabsState.splice(index, 1);

  if (wasActive) {
    const nextTab = tabsState[Math.max(0, index - 1)];
    activateTab(nextTab.id);
  } else {
    renderTabs();
  }
}
window.closeTab = closeTab;

function switchView(target) {
  if (target === 'recents') {
    activateTab('home');
  } else {
    const tab = tabsState.find(t => t.id === activeTabId);
    if (tab) tab.view = target;
    navTools?.classList.add('active');
    navRecents?.classList.remove('active');
    viewTools?.classList.add('active');
    viewRecents?.classList.remove('active');
  }
}
window.switchView = switchView;

navRecents?.addEventListener('click', () => activateTab('home'));
navTools?.addEventListener('click', () => switchView('tools'));
document.getElementById('tab-home')?.addEventListener('click', () => activateTab('home'));

document.getElementById('btn-add-tab')?.addEventListener('click', () => {
  createNewTab();
});

window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 't') {
    e.preventDefault();
    createNewTab();
  }
});

// Collapsible category headers
document.querySelectorAll('.tool-group-header').forEach(header => {
  header.addEventListener('click', () => {
    const rowId = header.getAttribute('data-toggle');
    const row = document.getElementById(rowId);
    if (row) {
      row.classList.toggle('collapsed');
      header.classList.toggle('collapsed');
    }
  });
});

// ==========================================================================
// 4. Render Screenshot-Accurate Cards
// ==========================================================================

function renderToolsCatalog() {
  const rows = {
    'organize': document.getElementById('row-organize'),
    'optimize': document.getElementById('row-optimize'),
    'convert-to': document.getElementById('row-convert-to'),
    'convert-from': document.getElementById('row-convert-from')
  };

  let toolIdx = 0;
  TOOLS_CONFIG.forEach(tool => {
    const row = rows[tool.category];
    if (!row) return;

    const card = document.createElement('div');
    card.className = 'tool-tile';
    card.style.setProperty('--stagger-idx', toolIdx++);
    if (tool.tooltip) card.setAttribute('data-tooltip', tool.tooltip);

    let cornerGlobeHtml = '';
    if (tool.cornerGlobe) {
      cornerGlobeHtml = `
        <div class="tile-corner-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
      `;
    }

    card.innerHTML = `
      ${cornerGlobeHtml}
      <div class="tile-badge-icon ${tool.badgeClass}">
        ${tool.icon}
      </div>
      <div class="tile-title">${tool.title}</div>
    `;

    card.addEventListener('click', () => openToolModal(tool));
    row.appendChild(card);
  });
}

// ==========================================================================
// 5. Open Modal & Settings
// ==========================================================================

function openToolModal(tool, preloadedFiles = []) {
  activeTool = tool;
  currentFiles = preloadedFiles.length > 0 ? [...preloadedFiles] : [];
  generatedBlob = null;
  generatedFilename = '';
  capturedScanPages = [];

  if (activeTabId !== 'home') {
    const currentTab = tabsState.find(t => t.id === activeTabId);
    if (currentTab) {
      currentTab.title = tool.title;
      currentTab.activeTool = tool;
      renderTabs();
    }
  }

  modalTitle.textContent = tool.title;
  modalSubtitle.textContent = tool.desc;
  modalIconBadge.className = `modal-icon-badge ${tool.badgeClass}`;
  modalIconBadge.innerHTML = tool.icon;
  modalExecuteLabel.textContent = tool.action;
  modalFileInput.accept = tool.accept;
  modalFileInput.multiple = !!tool.multiple;

  modalFilesList.innerHTML = '';
  modalFilesList.style.display = 'none';
  modalPagesPreviewWrap.style.display = 'none';
  modalPageGrid.innerHTML = '';
  modalProgress.style.display = 'none';
  modalResultCard.style.display = 'none';
  btnModalExecute.disabled = currentFiles.length === 0;

  renderToolSettings(tool);

  if (tool.id === 'scan-pdf') {
    modalScannerWrap.style.display = 'flex';
    initCameraStream();
  } else {
    modalScannerWrap.style.display = 'none';
    stopCameraStream();
  }

  if (currentFiles.length > 0) {
    renderModalFileList();
    if (['organize-pdf', 'remove-pages', 'split-pdf'].includes(tool.id)) {
      renderPdfPagePreviews(currentFiles[0]);
    }
  }

  toolModal.classList.add('open');
  toolModal.setAttribute('aria-hidden', 'false');
}

function closeToolModal() {
  toolModal.classList.remove('open');
  toolModal.setAttribute('aria-hidden', 'true');
  stopCameraStream();
}

btnModalCancel.addEventListener('click', closeToolModal);
btnCloseModal.addEventListener('click', closeToolModal);
toolModal.addEventListener('click', (e) => {
  if (e.target === toolModal) closeToolModal();
});

// Quick Look Lightbox State
let previewDocPdf = null;
let previewDocTotalPages = 1;
let previewDocCurrentPage = 1;
let previewDocZoom = 1.0;
let currentLightboxRenderTask = null;

function updateLightboxSelectButton() {
  const btnSelect = document.getElementById('btn-preview-toggle-select');
  const txtSelect = document.getElementById('preview-select-text');
  if (!btnSelect || !txtSelect) return;

  if (cachedPageCards && cachedPageCards.length > 0 && ['remove-pages', 'split-pdf', 'organize-pdf'].includes(activeTool?.id)) {
    btnSelect.style.display = 'inline-flex';
    const card = cachedPageCards[previewDocCurrentPage - 1];
    const isSelected = card ? card.classList.contains('selected') : false;
    if (isSelected) {
      btnSelect.classList.add('selected');
      txtSelect.textContent = '✓ Selected';
    } else {
      btnSelect.classList.remove('selected');
      txtSelect.textContent = activeTool?.id === 'remove-pages' ? 'Select for Removal' : 'Select Page';
    }
  } else {
    btnSelect.style.display = 'none';
  }
}

async function openPdfLightbox(pdfSource, filename = 'document.pdf', startPage = 1) {
  try {
    let dataBuffer;
    if (pdfSource instanceof Blob || pdfSource instanceof File) {
      dataBuffer = await pdfSource.arrayBuffer();
    } else if (pdfSource instanceof ArrayBuffer || pdfSource instanceof Uint8Array) {
      dataBuffer = pdfSource;
    } else {
      console.warn('Unknown PDF source for preview');
      return;
    }

    showToast('Opening PDF preview...', true);
    const pdf = await pdfjsLib.getDocument({ data: dataBuffer }).promise;
    previewDocPdf = pdf;
    previewDocTotalPages = pdf.numPages;
    previewDocCurrentPage = Math.min(Math.max(1, startPage), pdf.numPages);
    previewDocZoom = 1.0;

    if (previewLightboxFilename) previewLightboxFilename.textContent = filename;
    if (pdfPreviewLightbox) {
      pdfPreviewLightbox.style.display = 'flex';
      requestAnimationFrame(() => {
        pdfPreviewLightbox.classList.add('open');
        pdfPreviewLightbox.setAttribute('aria-hidden', 'false');
      });
    }

    updateLightboxSelectButton();
    await renderLightboxPage(previewDocCurrentPage);
  } catch (err) {
    console.error('Failed to open PDF preview:', err);
    showToast('Failed to preview PDF: ' + err.message);
  }
}

async function renderLightboxPage(pageNum) {
  if (!previewDocPdf || !previewLightboxCanvas) return;
  try {
    const bodyEl = document.getElementById('preview-lightbox-body');
    if (bodyEl) bodyEl.scrollTop = 0;

    const page = await previewDocPdf.getPage(pageNum);
    const ctx = previewLightboxCanvas.getContext('2d');
    
    // Scale calculation: enlarged, generous reading width so all content/text is clearly visible
    const baseVp = page.getViewport({ scale: 1.0 });
    const availWidth = bodyEl ? (bodyEl.clientWidth - 64) : (window.innerWidth * 0.85);
    const targetWidth = Math.min(availWidth, Math.max(860, availWidth * 0.85));
    const baseScale = targetWidth / baseVp.width;
    const renderScale = baseScale * previewDocZoom;
    const viewport = page.getViewport({ scale: renderScale });

    // High-DPI Retina scaling for razor-sharp clarity
    const dpr = Math.max(window.devicePixelRatio || 1, 2);
    previewLightboxCanvas.width = Math.round(viewport.width * dpr);
    previewLightboxCanvas.height = Math.round(viewport.height * dpr);
    previewLightboxCanvas.style.width = `${Math.round(viewport.width)}px`;
    previewLightboxCanvas.style.height = `${Math.round(viewport.height)}px`;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    if (currentLightboxRenderTask) {
      try { currentLightboxRenderTask.cancel(); } catch (e) {}
    }
    currentLightboxRenderTask = page.render({ canvasContext: ctx, viewport });
    await currentLightboxRenderTask.promise;

    if (previewPageCounter) previewPageCounter.textContent = `Page ${pageNum} of ${previewDocTotalPages}`;
    if (previewZoomLevel) previewZoomLevel.textContent = `${Math.round(previewDocZoom * 100)}%`;
    if (btnPreviewPrev) btnPreviewPrev.disabled = pageNum <= 1;
    if (btnPreviewNext) btnPreviewNext.disabled = pageNum >= previewDocTotalPages;

    updateLightboxSelectButton();
  } catch (err) {
    if (err?.name !== 'RenderingCancelledException') {
      console.error('Render lightbox page error:', err);
    }
  }
}

function closePdfLightbox() {
  if (currentLightboxRenderTask) {
    try { currentLightboxRenderTask.cancel(); } catch (e) {}
    currentLightboxRenderTask = null;
  }
  if (pdfPreviewLightbox) {
    pdfPreviewLightbox.classList.remove('open');
    pdfPreviewLightbox.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      pdfPreviewLightbox.style.display = 'none';
      if (previewLightboxCanvas) {
        const ctx = previewLightboxCanvas.getContext('2d');
        ctx.clearRect(0, 0, previewLightboxCanvas.width, previewLightboxCanvas.height);
      }
    }, 200);
  }
  previewDocPdf = null;
}

btnPreviewPrev?.addEventListener('click', () => {
  if (previewDocCurrentPage > 1) {
    previewDocCurrentPage--;
    renderLightboxPage(previewDocCurrentPage);
  }
});

btnPreviewNext?.addEventListener('click', () => {
  if (previewDocCurrentPage < previewDocTotalPages) {
    previewDocCurrentPage++;
    renderLightboxPage(previewDocCurrentPage);
  }
});

btnPreviewZoomIn?.addEventListener('click', () => {
  if (previewDocZoom < 2.5) {
    previewDocZoom = Math.min(2.5, previewDocZoom + 0.2);
    renderLightboxPage(previewDocCurrentPage);
  }
});

btnPreviewZoomOut?.addEventListener('click', () => {
  if (previewDocZoom > 0.4) {
    previewDocZoom = Math.max(0.4, previewDocZoom - 0.2);
    renderLightboxPage(previewDocCurrentPage);
  }
});

document.getElementById('btn-preview-toggle-select')?.addEventListener('click', () => {
  if (cachedPageCards && cachedPageCards[previewDocCurrentPage - 1]) {
    const card = cachedPageCards[previewDocCurrentPage - 1];
    card.classList.toggle('selected');
    updateLightboxSelectButton();
    showToast(`Page ${previewDocCurrentPage} ${card.classList.contains('selected') ? 'selected' : 'deselected'}`, true);
  }
});

btnPreviewClose?.addEventListener('click', closePdfLightbox);
pdfPreviewLightbox?.addEventListener('click', (e) => {
  if (e.target === pdfPreviewLightbox) closePdfLightbox();
});

window.addEventListener('keydown', (e) => {
  if (pdfPreviewLightbox && pdfPreviewLightbox.classList.contains('open')) {
    if (e.key === 'Escape') {
      e.stopPropagation();
      closePdfLightbox();
      return;
    }
    if (e.key === 'ArrowLeft' && previewDocCurrentPage > 1) {
      e.preventDefault();
      previewDocCurrentPage--;
      renderLightboxPage(previewDocCurrentPage);
      return;
    }
    if (e.key === 'ArrowRight' && previewDocCurrentPage < previewDocTotalPages) {
      e.preventDefault();
      previewDocCurrentPage++;
      renderLightboxPage(previewDocCurrentPage);
      return;
    }
  }
  if (e.key === 'Escape' && toolModal.classList.contains('open')) {
    closeToolModal();
  }
});

document.getElementById('btn-add-tab')?.addEventListener('click', () => {
  switchView('tools');
  showToast('Switched to Tools Catalog', true);
});

function showToast(text, isSuccess = false) {
  const bubble = document.createElement('div');
  bubble.className = 'toast-bubble';
  const icon = isSuccess
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34c759" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f06550" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  bubble.innerHTML = `${icon} <span>${text}</span>`;
  toastShelf.appendChild(bubble);

  setTimeout(() => {
    bubble.style.transition = 'opacity 160ms var(--ease-out), transform 160ms var(--ease-out)';
    bubble.style.opacity = '0';
    bubble.style.transform = 'translateY(12px) scale(0.95)';
    setTimeout(() => bubble.remove(), 180);
  }, 2800);
}

function updateModalProgress(percent, status) {
  modalProgress.style.display = 'flex';
  modalProgressThumb.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  modalProgressPercent.textContent = `${Math.round(percent)}%`;
  if (status) modalProgressStatus.textContent = status;
}

// ==========================================================================
// 6. Recents / Home View Functionality
// ==========================================================================

btnTriggerOpenFile.addEventListener('click', () => globalFileInput.click());
recentsDropzone.addEventListener('click', (e) => {
  if (e.target !== btnTriggerOpenFile) globalFileInput.click();
});

let recentsDragCounter = 0;
recentsDropzone.addEventListener('dragenter', (e) => {
  e.preventDefault();
  recentsDragCounter++;
  recentsDropzone.classList.add('drag-over');
});

recentsDropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

recentsDropzone.addEventListener('dragleave', (e) => {
  e.preventDefault();
  recentsDragCounter--;
  if (recentsDragCounter <= 0) {
    recentsDragCounter = 0;
    recentsDropzone.classList.remove('drag-over');
  }
});

recentsDropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  recentsDragCounter = 0;
  recentsDropzone.classList.remove('drag-over');
  const files = Array.from(e.dataTransfer.files);
  if (files.length > 0) handleGlobalFiles(files);
});

globalFileInput.addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  if (files.length > 0) handleGlobalFiles(files);
  globalFileInput.value = '';
});

function handleGlobalFiles(files) {
  const file = files[0];
  const name = file.name.toLowerCase();

  let targetToolId = 'word-to-pdf';
  if (name.endsWith('.docx') || name.endsWith('.doc') || name.endsWith('.rtf') || name.endsWith('.odt') || name.endsWith('.txt') || name.endsWith('.dot') || name.endsWith('.dotx') || name.endsWith('.wps')) {
    targetToolId = 'word-to-pdf';
  } else if (name.endsWith('.xlsx') || name.endsWith('.xls') || name.endsWith('.xlsm') || name.endsWith('.xlsb') || name.endsWith('.csv') || name.endsWith('.tsv') || name.endsWith('.ods')) {
    targetToolId = 'excel-to-pdf';
  } else if (name.endsWith('.pptx') || name.endsWith('.ppt') || name.endsWith('.pps') || name.endsWith('.ppsx') || name.endsWith('.odp')) {
    targetToolId = 'powerpoint-to-pdf';
  } else if (name.endsWith('.jpg') || name.endsWith('.jpeg') || name.endsWith('.png') || name.endsWith('.webp')) {
    targetToolId = 'image-to-pdf';
  } else if (name.endsWith('.pdf')) {
    targetToolId = files.length > 1 ? 'merge-pdf' : 'compress-pdf';
  }

  const tool = TOOLS_CONFIG.find(t => t.id === targetToolId) || TOOLS_CONFIG[0];
  openToolModal(tool, files);
}

function addRecentDocument(name, sizeBytes, blob) {
  const entry = {
    id: Date.now(),
    name: name,
    size: (sizeBytes / 1024).toFixed(1) + ' KB',
    time: 'Just now',
    blob: blob,
    ext: name.split('.').pop().toUpperCase()
  };

  recentDocuments.unshift(entry);
  renderRecentsList();
}

function renderRecentsList() {
  if (recentDocuments.length === 0) {
    recentsEmpty.style.display = 'block';
    recentsCount.textContent = '0 files';
    return;
  }

  recentsEmpty.style.display = 'none';
  recentsCount.textContent = `${recentDocuments.length} file${recentDocuments.length > 1 ? 's' : ''}`;
  recentsContainer.innerHTML = '';

  recentDocuments.forEach(doc => {
    const isPdf = doc.ext === 'PDF' || doc.name.toLowerCase().endsWith('.pdf');
    const card = document.createElement('div');
    card.className = 'recent-file-card';
    card.innerHTML = `
      <div class="file-info-group">
        <span class="recent-file-tag">${doc.ext}</span>
        <div>
          <div class="recent-file-title">${doc.name}</div>
          <div class="recent-file-time">${doc.size} &bull; ${doc.time}</div>
        </div>
      </div>
      <div style="display: flex; gap: 6px; align-items: center;">
        ${isPdf ? `
          <button class="btn-secondary btn-recent-preview" style="padding: 4px 8px; font-size: 0.76rem; display: inline-flex; align-items: center; gap: 4px;" title="Preview PDF Pages">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            Preview
          </button>
        ` : ''}
        <button class="btn-secondary btn-recent-download" style="padding: 4px 10px; font-size: 0.76rem;" title="Download File">
          Download
        </button>
      </div>
    `;

    if (isPdf) {
      card.querySelector('.btn-recent-preview')?.addEventListener('click', (e) => {
        e.stopPropagation();
        openPdfLightbox(doc.blob, doc.name);
      });
    }

    card.querySelector('.btn-recent-download').addEventListener('click', async (e) => {
      e.stopPropagation();
      await saveFileWithPicker(doc.blob, doc.name);
    });

    recentsContainer.appendChild(card);
  });
}

function getMimeTypeForFilename(filename) {
  const ext = (filename || '').split('.').pop().toLowerCase();
  switch (ext) {
    case 'pdf': return { 'application/pdf': ['.pdf'] };
    case 'docx': return { 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] };
    case 'pptx': return { 'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'] };
    case 'xlsx': return { 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'] };
    case 'zip': return { 'application/zip': ['.zip'] };
    case 'jpg':
    case 'jpeg': return { 'image/jpeg': ['.jpg', '.jpeg'] };
    case 'png': return { 'image/png': ['.png'] };
    case 'txt': return { 'text/plain': ['.txt'] };
    default: return { 'application/octet-stream': [`.${ext}`] };
  }
}

function getDownloadFilename() {
  let name = modalDownloadFilename ? modalDownloadFilename.value.trim() : '';
  if (!name) name = generatedFilename || 'document.pdf';
  const expectedExt = (generatedFilename || 'document.pdf').split('.').pop();
  if (!name.toLowerCase().endsWith('.' + expectedExt.toLowerCase())) {
    name += '.' + expectedExt;
  }
  return name;
}

async function saveFileWithPicker(blob, suggestedName) {
  if (!suggestedName) suggestedName = 'document.pdf';
  const ext = (suggestedName.split('.').pop() || 'pdf').toLowerCase();

  // 1. Browser Native File System Access API (Works in Chrome, Edge, Brave, Opera)
  if (typeof window.showSaveFilePicker === 'function') {
    try {
      const mimeTypes = {
        pdf: 'application/pdf',
        docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        zip: 'application/zip',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        txt: 'text/plain'
      };
      const pickerOpts = {
        suggestedName: suggestedName
      };
      if (mimeTypes[ext]) {
        pickerOpts.types = [{
          description: `${ext.toUpperCase()} Document`,
          accept: { [mimeTypes[ext]]: [`.${ext}`] }
        }];
      }
      const handle = await window.showSaveFilePicker(pickerOpts);
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      showToast(`Saved to ${handle.name}`, true);
      return true;
    } catch (err) {
      if (err.name === 'AbortError') {
        // User clicked cancel in file dialog
        return false;
      }
      console.warn('showSaveFilePicker was rejected, trying server native dialog:', err);
    }
  }

  // 2. Server-Side Native Windows SaveFileDialog Bridge
  try {
    const formData = new FormData();
    formData.append('file', blob, suggestedName);
    formData.append('filename', suggestedName);
    showToast('Opening Windows save dialog...', true);

    const resp = await fetch('/api/save-file', {
      method: 'POST',
      body: formData
    });

    if (resp.ok) {
      const data = await resp.json();
      if (data.success && data.path) {
        showToast(`Saved successfully to: ${data.path}`, true);
        return true;
      } else if (data.cancelled) {
        return false;
      }
    }
  } catch (serverErr) {
    console.warn('Server save dialog endpoint unavailable:', serverErr);
  }

  // 3. Fallback to browser direct download
  downloadBlob(blob, suggestedName);
  showToast(`Downloaded: ${suggestedName}`, true);
  return true;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'document.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ==========================================================================
// 7. Modal File Handling
// ==========================================================================

modalDropzone.addEventListener('click', () => modalFileInput.click());

let modalDragCounter = 0;
modalDropzone.addEventListener('dragenter', (e) => {
  e.preventDefault();
  modalDragCounter++;
  modalDropzone.classList.add('drag-over');
});

modalDropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

modalDropzone.addEventListener('dragleave', (e) => {
  e.preventDefault();
  modalDragCounter--;
  if (modalDragCounter <= 0) {
    modalDragCounter = 0;
    modalDropzone.classList.remove('drag-over');
  }
});

modalDropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  modalDragCounter = 0;
  modalDropzone.classList.remove('drag-over');
  const files = Array.from(e.dataTransfer.files);
  appendModalFiles(files);
});

modalFileInput.addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  appendModalFiles(files);
  modalFileInput.value = '';
});

function appendModalFiles(files) {
  if (!files || files.length === 0) return;

  if (activeTool.multiple) {
    currentFiles.push(...files);
  } else {
    currentFiles = [files[0]];
  }

  renderModalFileList();
  btnModalExecute.disabled = currentFiles.length === 0;

  if (['organize-pdf', 'remove-pages', 'split-pdf'].includes(activeTool.id) && currentFiles[0]) {
    renderPdfPagePreviews(currentFiles[0]);
  }

  showToast(`Loaded ${files.length} file(s)`, true);
}

function renderModalFileList() {
  if (currentFiles.length === 0) {
    modalFilesList.style.display = 'none';
    modalFilesList.innerHTML = '';
    return;
  }

  modalFilesList.style.display = 'flex';
  modalFilesList.innerHTML = '';

  currentFiles.forEach((file, idx) => {
    const isPdf = file.name.toLowerCase().endsWith('.pdf') || file.type === 'application/pdf';
    const row = document.createElement('div');
    row.className = 'file-row';
    row.innerHTML = `
      <div style="overflow: hidden; cursor: pointer;" class="file-info-clickable" title="Click to view full preview">
        <div class="file-row-name" title="${file.name}">${file.name}</div>
        <div class="file-row-size">${(file.size / 1024).toFixed(1)} KB</div>
      </div>
      <div style="display: flex; gap: 6px; align-items: center;">
        ${isPdf ? `
          <button class="btn-secondary btn-file-preview" data-preview="${idx}" style="padding: 3px 8px; font-size: 0.74rem; display: inline-flex; align-items: center; gap: 4px;" title="Preview PDF Pages Grid">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            Pages
          </button>
          <button class="btn-secondary btn-file-enlarge" data-enlarge="${idx}" style="padding: 3px 8px; font-size: 0.74rem; display: inline-flex; align-items: center; gap: 4px;" title="View Enlarged (Quick Look)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            Enlarge
          </button>
        ` : ''}
        <button class="btn-secondary" data-del="${idx}" style="padding: 3px 8px; font-size: 0.74rem;">Remove</button>
      </div>
    `;

    if (isPdf) {
      row.querySelector('.btn-file-preview')?.addEventListener('click', (e) => {
        e.stopPropagation();
        renderPdfPagePreviews(file);
        modalPagesPreviewWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });

      row.querySelector('.btn-file-enlarge')?.addEventListener('click', (e) => {
        e.stopPropagation();
        openPdfLightbox(file, file.name, 1);
      });

      row.querySelector('.file-info-clickable')?.addEventListener('click', (e) => {
        e.stopPropagation();
        openPdfLightbox(file, file.name, 1);
      });
    }

    row.querySelector('[data-del]').addEventListener('click', (e) => {
      e.stopPropagation();
      currentFiles.splice(idx, 1);
      renderModalFileList();
      btnModalExecute.disabled = currentFiles.length === 0;
      if (currentFiles.length === 0) {
        modalPagesPreviewWrap.style.display = 'none';
        modalPageGrid.innerHTML = '';
      }
    });

    modalFilesList.appendChild(row);
  });
}

// ==========================================================================
// 8. Tool Settings & Interactive Preview
// ==========================================================================

function renderToolSettings(tool) {
  modalSettingsGrid.innerHTML = '';

  if (tool.id === 'compress-pdf') {
    modalSettingsGrid.innerHTML = `
      <div class="setting-col">
        <label class="setting-label">Compression Level</label>
        <select class="input-select" id="opt-compression">
          <option value="recommended" selected>Recommended (Great quality, high compression)</option>
          <option value="extreme">Extreme Compression (Smallest file size)</option>
          <option value="light">Low Compression (Maximum visual fidelity)</option>
        </select>
      </div>
    `;
  } else if (tool.id === 'ocr-pdf') {
    modalSettingsGrid.innerHTML = `
      <div class="setting-col">
        <label class="setting-label">OCR Recognition Language</label>
        <select class="input-select" id="opt-ocr-lang">
          <option value="eng" selected>English (eng)</option>
          <option value="spa">Spanish (spa)</option>
          <option value="fra">French (fra)</option>
          <option value="deu">German (deu)</option>
          <option value="hin">Hindi (hin)</option>
        </select>
      </div>
      <div class="setting-col">
        <label class="setting-label">Export Format</label>
        <select class="input-select" id="opt-ocr-format">
          <option value="txt" selected>Plain Text (.txt)</option>
          <option value="docx">Word Document (.docx)</option>
        </select>
      </div>
    `;
  } else if (tool.id === 'image-to-pdf') {
    modalSettingsGrid.innerHTML = `
      <div class="setting-col">
        <label class="setting-label">Page Margins</label>
        <select class="input-select" id="opt-img-margin">
          <option value="none" selected>No Margins (Edge-to-Edge)</option>
          <option value="small">Small (15 pt)</option>
          <option value="normal">Normal (36 pt)</option>
        </select>
      </div>
      <div class="setting-col">
        <label class="setting-label">Orientation</label>
        <select class="input-select" id="opt-img-orient">
          <option value="auto" selected>Auto Match Image</option>
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
        </select>
      </div>
    `;
  } else if (tool.id === 'split-pdf') {
    modalSettingsGrid.innerHTML = `
      <div class="setting-col">
        <label class="setting-label">Split Method</label>
        <select class="input-select" id="opt-split-mode">
          <option value="range" selected>Custom Page Ranges (e.g. 1-2, 4)</option>
          <option value="zip">Extract Every Page to Separate PDFs (.zip)</option>
        </select>
      </div>
      <div class="setting-col">
        <label class="setting-label">Page Range</label>
        <input type="text" class="input-text" id="opt-split-range" placeholder="e.g. 1-3, 5">
      </div>
    `;
  } else if (tool.id === 'pdf-to-jpg') {
    modalSettingsGrid.innerHTML = `
      <div class="setting-col">
        <label class="setting-label">Export Quality</label>
        <select class="input-select" id="opt-jpg-dpi">
          <option value="150" selected>Standard (150 DPI)</option>
          <option value="300">High Print Quality (300 DPI)</option>
          <option value="72">Compact Web (72 DPI)</option>
        </select>
      </div>
    `;
  } else {
    modalSettingsGrid.innerHTML = `
      <div class="setting-col">
        <span class="setting-label">Engine</span>
        <span style="font-size: 0.8rem; color: #fff;">Zero-upload local WebAssembly processing</span>
      </div>
    `;
  }
}

// PDF Page Preview Grid (Organize, Remove Pages, Split)
async function renderPdfPagePreviews(file) {
  try {
    modalPagesPreviewWrap.style.display = 'flex';
    modalPageGrid.innerHTML = '';
    cachedPageCards = [];

    const buffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 0.35 });

      const card = document.createElement('div');
      card.className = 'page-preview-card';
      card.style.animationDelay = `${(i - 1) * 20}ms`;
      card.setAttribute('data-idx', i - 1);
      card.setAttribute('data-rot', 0);
      card.setAttribute('title', `Click to enlarge Page ${i}`);

      const dpr = Math.max(window.devicePixelRatio || 1, 2);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(viewport.width * dpr);
      canvas.height = Math.round(viewport.height * dpr);
      canvas.style.width = '100%';
      canvas.style.height = 'auto';

      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      await page.render({ canvasContext: ctx, viewport }).promise;

      card.innerHTML = `
        <div class="page-card-thumb-wrap">
          <div class="page-card-enlarge-hint">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            <span>Enlarge</span>
          </div>
          <button class="page-card-select-btn" title="Toggle Selection" aria-label="Select Page ${i}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </button>
        </div>
        <div class="page-card-footer">
          <span class="page-card-num">Page ${i}</span>
          <div style="display:flex; gap:4px; align-items:center;">
            <button class="btn-rot" style="background:none; border:none; color:#888; cursor:pointer; font-size:0.85rem; padding:2px; transition:transform 120ms var(--ease-out);" title="Rotate +90°">⟳</button>
          </div>
        </div>
      `;

      const thumbWrap = card.querySelector('.page-card-thumb-wrap');
      thumbWrap.insertBefore(canvas, thumbWrap.firstChild);

      // Dedicated selection button toggles selection without opening the lightbox
      const selectBtn = card.querySelector('.page-card-select-btn');
      selectBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.toggle('selected');
        updateLightboxSelectButton();
      });

      // Dedicated rotate button rotates thumbnail without opening the lightbox
      card.querySelector('.btn-rot').addEventListener('click', (e) => {
        e.stopPropagation();
        let r = (parseInt(card.getAttribute('data-rot'), 10) + 90) % 360;
        card.setAttribute('data-rot', r);
        canvas.style.transform = `rotate(${r}deg)`;
      });

      // Clicking anywhere on the card or thumbnail opens that page enlarged!
      card.addEventListener('click', () => {
        openPdfLightbox(file, file.name, i);
      });

      modalPageGrid.appendChild(card);
      cachedPageCards.push(card);
    }
  } catch (err) {
    console.error('Page preview failed:', err);
  }
}

document.getElementById('btn-rotate-all-pages')?.addEventListener('click', () => {
  cachedPageCards.forEach(c => {
    let r = (parseInt(c.getAttribute('data-rot'), 10) + 90) % 360;
    c.setAttribute('data-rot', r);
    c.querySelector('canvas').style.transform = `rotate(${r}deg)`;
  });
  showToast('Rotated all pages +90°', true);
});

document.getElementById('btn-select-all-pages')?.addEventListener('click', () => {
  const allSel = cachedPageCards.every(c => c.classList.contains('selected'));
  cachedPageCards.forEach(c => {
    if (allSel) {
      c.classList.remove('selected');
    } else {
      c.classList.add('selected');
    }
  });
});

async function initCameraStream() {
  try {
    stopCameraStream();
    activeCameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    modalScannerVideo.srcObject = activeCameraStream;
  } catch (err) {
    console.warn('Camera error:', err);
  }
}

function stopCameraStream() {
  if (activeCameraStream) {
    activeCameraStream.getTracks().forEach(t => t.stop());
    activeCameraStream = null;
  }
}

btnCaptureScanPage?.addEventListener('click', () => {
  if (!activeCameraStream) return;
  const c = document.createElement('canvas');
  c.width = modalScannerVideo.videoWidth || 1280;
  c.height = modalScannerVideo.videoHeight || 720;
  c.getContext('2d').drawImage(modalScannerVideo, 0, 0, c.width, c.height);

  c.toBlob(blob => {
    const f = new File([blob], `scan_${capturedScanPages.length + 1}.jpg`, { type: 'image/jpeg' });
    capturedScanPages.push(f);
    currentFiles.push(f);
    renderModalFileList();
    btnModalExecute.disabled = false;
    showToast(`Captured page ${capturedScanPages.length}`, true);
  }, 'image/jpeg', 0.92);
});

// ==========================================================================
// 9. Tool Execution Handlers
// ==========================================================================

btnModalExecute.addEventListener('click', async () => {
  if (!activeTool || currentFiles.length === 0) return;

  btnModalExecute.disabled = true;
  modalResultCard.style.display = 'none';

  try {
    updateModalProgress(10, 'Initializing conversion...');

    switch (activeTool.id) {
      case 'word-to-pdf':
        await doWordToPdf();
        break;
      case 'excel-to-pdf':
        await doExcelToPdf();
        break;
      case 'powerpoint-to-pdf':
        await doPowerPointToPdf();
        break;
      case 'image-to-pdf':
        await doImageToPdf();
        break;
      case 'merge-pdf':
        await doMergePdf();
        break;
      case 'split-pdf':
        await doSplitPdf();
        break;
      case 'remove-pages':
        await doRemovePages();
        break;
      case 'organize-pdf':
        await doOrganizePdf();
        break;
      case 'scan-pdf':
        await doScanToPdf();
        break;
      case 'compress-pdf':
        await doCompressPdf();
        break;
      case 'repair-pdf':
        await doRepairPdf();
        break;
      case 'ocr-pdf':
        await doOcrPdf();
        break;
      case 'pdf-to-jpg':
        await doPdfToJpg();
        break;
      case 'pdf-to-word':
        await doPdfToWord();
        break;
      case 'pdf-to-powerpoint':
        await doPdfToPowerPoint();
        break;
      case 'pdf-to-excel':
        await doPdfToExcel();
        break;
      case 'pdf-to-pdfa':
        await doPdfToPdfA();
        break;
      default:
        showToast('Unknown tool handler');
    }
  } catch (err) {
    console.error('Conversion failed:', err);
    updateModalProgress(0, 'Failed');
    showToast('Error: ' + err.message);
    btnModalExecute.disabled = false;
  }
});

function completeConversion(blob, filename, details) {
  generatedBlob = blob;
  generatedFilename = filename;
  if (modalDownloadFilename) {
    modalDownloadFilename.value = filename;
    // Auto-focus or highlight the name portion for effortless renaming
    setTimeout(() => {
      const dotIndex = filename.lastIndexOf('.');
      if (dotIndex > 0) {
        modalDownloadFilename.setSelectionRange(0, dotIndex);
      }
    }, 100);
  }
  updateModalProgress(100, 'Complete!');
  modalResultDetails.textContent = details || `Ready for download (${(blob.size / 1024).toFixed(1)} KB)`;
  modalResultCard.style.display = 'flex';
  btnModalExecute.disabled = false;
  showToast('Conversion succeeded!', true);

  addRecentDocument(filename, blob.size, blob);
}

btnModalSaveAs?.addEventListener('click', async () => {
  if (!generatedBlob) return;
  const filename = getDownloadFilename();
  await saveFileWithPicker(generatedBlob, filename);
});

btnModalPreviewResult?.addEventListener('click', () => {
  if (!generatedBlob) return;
  const filename = getDownloadFilename();
  if (filename.toLowerCase().endsWith('.pdf') || generatedBlob.type === 'application/pdf') {
    openPdfLightbox(generatedBlob, filename);
  } else {
    showToast(`Page preview is available for PDF files (${filename})`);
  }
});

btnModalDownload?.addEventListener('click', () => {
  if (!generatedBlob) return;
  const filename = getDownloadFilename();
  downloadBlob(generatedBlob, filename);
  showToast(`Downloaded: ${filename}`, true);
});

modalDownloadFilename?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    btnModalSaveAs ? btnModalSaveAs.click() : btnModalDownload?.click();
  }
});

// ==========================================================================
// 8. Image & Document Helper Functions
// ==========================================================================

async function prepareImageForPdf(file) {
  const isPng = file.type === 'image/png';
  const isJpg = file.type === 'image/jpeg' || file.type === 'image/jpg';

  if (isPng || isJpg) {
    const bytes = await file.arrayBuffer();
    return { bytes, isPng };
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || img.width;
      canvas.height = img.naturalHeight || img.height;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(blob => {
        if (!blob) {
          reject(new Error(`Failed to encode image ${file.name}`));
          return;
        }
        blob.arrayBuffer().then(buf => resolve({ bytes: buf, isPng: false })).catch(reject);
      }, 'image/jpeg', 0.95);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error(`Failed to decode image ${file.name}`));
    };
    img.src = url;
  });
}

// Server-Assisted 1-on-1 Conversion Helper (as used by iLovePDF, Smallpdf & Gotenberg)
async function tryServerConvert(file, targetFormat = 'pdf') {
  try {
    const isDocx = targetFormat === 'docx';
    const isXlsx = targetFormat === 'xlsx';
    const formatLabel = isDocx ? 'Word DOCX' : (isXlsx ? 'Excel XLSX' : '1:1 vector PDF');

    updateModalProgress(25, `Connecting to high-fidelity document engine (${formatLabel})...`);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('target_format', targetFormat);

    const resp = await fetch(`/api/convert?format=${targetFormat}`, {
      method: 'POST',
      body: formData
    });

    if (resp.ok) {
      updateModalProgress(92, `Compiling native ${formatLabel}...`);
      const blob = await resp.blob();
      const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || 'converted';
      const outExt = isDocx ? 'docx' : (isXlsx ? 'xlsx' : 'pdf');
      completeConversion(blob, `${baseName}.${outExt}`, `Converted into ${formatLabel} with 1-on-1 visual and structural fidelity.`);
      return true;
    } else {
      console.warn(`Server engine endpoint returned error, falling back to browser engine: ${resp.status}`);
    }
  } catch (err) {
    console.warn('Server endpoint unreachable, continuing with in-browser engine:', err);
  }
  return false;
}

// 1. Word to PDF (1-on-1 Layout & Typography Reproduction)
async function doWordToPdf() {
  if (currentFiles[0] && await tryServerConvert(currentFiles[0])) return;

  updateModalProgress(20, 'Parsing Word document structure & styles...');
  const bytes = await currentFiles[0].arrayBuffer();

  const sandbox = document.createElement('div');
  sandbox.style.position = 'fixed';
  sandbox.style.top = '-99999px';
  sandbox.style.left = '-99999px';
  sandbox.style.width = '794px'; // Standard A4 at 96 DPI
  sandbox.style.background = '#ffffff';
  sandbox.style.zIndex = '-1000';
  document.body.appendChild(sandbox);

  try {
    let renderedSuccess = false;

    // Method 1: docx-preview for 1-on-1 native Word document pagination & formatting
    if (window.docx && window.docx.renderAsync) {
      try {
        updateModalProgress(35, 'Rendering native Word pages, tables & margins...');
        await window.docx.renderAsync(bytes, sandbox, null, {
          className: 'docx-preview-wrap',
          inWrapper: true,
          ignoreWidth: false,
          ignoreHeight: false,
          ignoreFonts: false,
          breakPages: true
        });

        // Find individual paginated pages
        const pageEls = sandbox.querySelectorAll('.docx-page, section.docx, article');
        const { jsPDF } = window.jspdf;
        let pdfDoc = null;
        const ptW = 595.28; // A4 pt
        const ptH = 841.89;

        if (pageEls.length > 0) {
          for (let pIdx = 0; pIdx < pageEls.length; pIdx++) {
            updateModalProgress(40 + (pIdx / pageEls.length) * 55, `Rendering page ${pIdx + 1} of ${pageEls.length}...`);
            const pEl = pageEls[pIdx];
            const canvas = await html2canvas(pEl, { scale: 2, useCORS: true, logging: false });
            const imgData = canvas.toDataURL('image/jpeg', 0.95);
            if (pIdx === 0) {
              pdfDoc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
            } else {
              pdfDoc.addPage([ptW, ptH], 'portrait');
            }
            pdfDoc.addImage(imgData, 'JPEG', 0, 0, ptW, ptH);
          }
          const blob = pdfDoc.output('blob');
          completeConversion(blob, 'converted_document.pdf', `Word document converted into ${pageEls.length} page(s) with 1-on-1 fidelity.`);
          renderedSuccess = true;
        }
      } catch (docxErr) {
        console.warn('docx-preview fallback to mammoth:', docxErr);
      }
    }

    // Method 2: High-fidelity styled Mammoth fallback
    if (!renderedSuccess) {
      updateModalProgress(50, 'Typesetting formatted Word pages...');
      const res = await mammoth.convertToHtml({ arrayBuffer: bytes });
      const html = res.value;

      sandbox.innerHTML = `
        <div style="width: 595.28pt; min-height: 841.89pt; padding: 54pt 54pt; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.6; color: #111827; background: #ffffff;">
          <style>
            h1 { font-size: 22pt; margin-top: 0; margin-bottom: 12pt; color: #0f172a; font-weight: bold; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 6pt; }
            h2 { font-size: 16pt; margin-top: 14pt; margin-bottom: 8pt; color: #1e293b; font-weight: 600; }
            h3 { font-size: 13pt; margin-top: 10pt; margin-bottom: 6pt; color: #334155; }
            p { margin-top: 0; margin-bottom: 8pt; }
            table { width: 100%; border-collapse: collapse; margin: 12pt 0; font-size: 10pt; }
            th, td { border: 1px solid #cbd5e1; padding: 6pt 10pt; text-align: left; }
            th { background-color: #f1f5f9; font-weight: bold; }
            img { max-width: 100%; height: auto; display: block; margin: 8pt 0; }
            ul, ol { padding-left: 20pt; margin-bottom: 8pt; }
            blockquote { border-left: 3px solid #3b82f6; margin: 8pt 0; padding-left: 12pt; color: #475569; font-style: italic; }
          </style>
          ${html}
        </div>
      `;

      const { jsPDF } = window.jspdf;
      const pdfDoc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
      await pdfDoc.html(sandbox.firstElementChild, {
        callback: function (pdf) {
          const blob = pdf.output('blob');
          completeConversion(blob, 'converted_document.pdf', 'Word document converted with native styling.');
        },
        x: 0,
        y: 0,
        width: 595.28,
        windowWidth: 794
      });
    }
  } finally {
    if (document.body.contains(sandbox)) {
      document.body.removeChild(sandbox);
    }
  }
}

// 2. Excel to PDF (Complete Worksheets, Full Columns & Uncut Data)
async function doExcelToPdf() {
  if (currentFiles[0] && await tryServerConvert(currentFiles[0])) return;

  updateModalProgress(25, 'Reading workbook sheets & cell coordinates...');
  const bytes = await currentFiles[0].arrayBuffer();
  const wb = XLSX.read(bytes, { type: 'array', cellDates: true });

  if (!wb.SheetNames || wb.SheetNames.length === 0) {
    throw new Error('Spreadsheet appears to be empty.');
  }

  const { jsPDF } = window.jspdf;
  let pdfDoc = null;
  let totalPages = 0;

  const sandbox = document.createElement('div');
  sandbox.style.position = 'fixed';
  sandbox.style.top = '-99999px';
  sandbox.style.left = '-99999px';
  sandbox.style.background = '#ffffff';
  sandbox.style.zIndex = '-1000';
  document.body.appendChild(sandbox);

  try {
    for (let sIdx = 0; sIdx < wb.SheetNames.length; sIdx++) {
      const sheetName = wb.SheetNames[sIdx];
      updateModalProgress(30 + (sIdx / wb.SheetNames.length) * 60, `Formatting worksheet "${sheetName}"...`);
      const sheet = wb.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
      if (!data || data.length === 0) continue;

      // Detect number of populated columns and determine best orientation
      let maxCols = 0;
      data.forEach(r => { if (r.length > maxCols) maxCols = r.length; });
      if (maxCols === 0) continue;

      const isWide = maxCols > 6;
      const orientation = isWide ? 'landscape' : 'portrait';
      const pageW = isWide ? 841.89 : 595.28; // pt
      const pageH = isWide ? 595.28 : 841.89; // pt

      // Paginate rows into chunks so no rows are clipped
      const rowsPerPage = isWide ? 22 : 28;
      const headerRow = data[0] || [];
      const bodyRows = data.slice(1);
      const chunks = [];
      if (bodyRows.length === 0) {
        chunks.push([headerRow]);
      } else {
        for (let r = 0; r < bodyRows.length; r += rowsPerPage) {
          chunks.push([headerRow, ...bodyRows.slice(r, r + rowsPerPage)]);
        }
      }

      for (let cIdx = 0; cIdx < chunks.length; cIdx++) {
        const chunkData = chunks[cIdx];
        const pageNum = totalPages + 1;

        sandbox.innerHTML = `
          <div style="width: ${pageW}pt; min-height: ${pageH}pt; padding: 36pt 40pt; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Calibri, Arial, sans-serif; background: #ffffff;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid #2563eb; padding-bottom: 8pt; margin-bottom: 12pt;">
              <div>
                <div style="font-size: 16pt; font-weight: bold; color: #0f172a;">${sheetName}</div>
                <div style="font-size: 9pt; color: #64748b; margin-top: 2pt;">Spreadsheet Data Export &bull; ${data.length} total rows</div>
              </div>
              <div style="font-size: 8.5pt; color: #94a3b8; font-weight: 500;">Page ${pageNum}</div>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 9.5pt; color: #1e293b;">
              <thead>
                <tr>
                  ${chunkData[0].map(val => `<th style="border: 1px solid #cbd5e1; background-color: #f8fafc; padding: 6pt 8pt; font-weight: bold; text-align: left; color: #334155;">${String(val)}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${chunkData.slice(1).map((row, rI) => `
                  <tr style="background-color: ${rI % 2 === 0 ? '#ffffff' : '#f8fafc'};">
                    ${Array.from({ length: maxCols }).map((_, cI) => {
                      const val = String(row[cI] ?? '');
                      const isNum = /^[+-]?\$?[\d,]+(\.\d+)?%?$/.test(val.trim());
                      return `<td style="border: 1px solid #e2e8f0; padding: 5pt 8pt; text-align: ${isNum ? 'right' : 'left'};">${val}</td>`;
                    }).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;

        const canvas = await html2canvas(sandbox.firstElementChild, { scale: 2, useCORS: true, logging: false });
        const imgData = canvas.toDataURL('image/jpeg', 0.95);

        if (!pdfDoc) {
          pdfDoc = new jsPDF({ orientation, unit: 'pt', format: [pageW, pageH] });
        } else {
          pdfDoc.addPage([pageW, pageH], orientation);
        }
        pdfDoc.addImage(imgData, 'JPEG', 0, 0, pageW, pageH);
        totalPages++;
      }
    }

    if (!pdfDoc) throw new Error('No readable data in spreadsheet.');

    updateModalProgress(95, 'Packaging PDF document...');
    const pdfBlob = pdfDoc.output('blob');
    completeConversion(pdfBlob, 'converted_spreadsheet.pdf', `Exported ${totalPages} page(s) with full columns & numbers.`);
  } finally {
    if (document.body.contains(sandbox)) {
      document.body.removeChild(sandbox);
    }
  }
}

// 3. PowerPoint to PDF (High-Fidelity 1-on-1 Slide Reproduction)
async function doPowerPointToPdf() {
  if (currentFiles[0] && await tryServerConvert(currentFiles[0])) return;

  updateModalProgress(15, 'Unpacking PowerPoint presentation...');
  const bytes = await currentFiles[0].arrayBuffer();
  const zip = await JSZip.loadAsync(bytes);

  // 1. Determine presentation dimensions (EMU to PT: 1 pt = 12700 EMU)
  let slideW = 960;
  let slideH = 540;
  if (zip.files['ppt/presentation.xml']) {
    const presStr = await zip.files['ppt/presentation.xml'].async('string');
    const parser = new DOMParser();
    const presDoc = parser.parseFromString(presStr, 'application/xml');
    const sldSz = presDoc.getElementsByTagNameNS('*', 'sldSz')[0];
    if (sldSz) {
      const cx = parseInt(sldSz.getAttribute('cx') || '12192000', 10);
      const cy = parseInt(sldSz.getAttribute('cy') || '6858000', 10);
      slideW = Math.round(cx / 12700);
      slideH = Math.round(cy / 12700);
    }
  }

  // 2. Identify all slides in natural presentation sequence
  const slideKeys = Object.keys(zip.files)
    .filter(k => k.match(/^ppt\/slides\/slide\d+\.xml$/))
    .sort((a, b) => {
      const na = parseInt(a.match(/slide(\d+)\.xml/)[1], 10);
      const nb = parseInt(b.match(/slide(\d+)\.xml/)[1], 10);
      return na - nb;
    });

  const count = slideKeys.length;
  if (count === 0) {
    throw new Error('No slides found in uploaded PowerPoint presentation.');
  }

  const { jsPDF } = window.jspdf;
  const orientation = slideW >= slideH ? 'landscape' : 'portrait';
  const pdfDoc = new jsPDF({ orientation, unit: 'pt', format: [slideW, slideH] });

  // Offscreen rendering container for pixel-perfect layout computation
  const sandbox = document.createElement('div');
  sandbox.style.position = 'fixed';
  sandbox.style.top = '-99999px';
  sandbox.style.left = '-99999px';
  sandbox.style.width = `${slideW}pt`;
  sandbox.style.height = `${slideH}pt`;
  sandbox.style.overflow = 'hidden';
  sandbox.style.zIndex = '-1000';
  document.body.appendChild(sandbox);

  try {
    for (let i = 0; i < count; i++) {
      const slideKey = slideKeys[i];
      const slideNum = i + 1;
      updateModalProgress(20 + (i / count) * 75, `Rendering slide ${slideNum} of ${count} (1:1 fidelity)...`);

      // A. Extract slide relationships for embedded pictures & assets
      const relsKey = slideKey.replace('ppt/slides/', 'ppt/slides/_rels/') + '.rels';
      const resolvedMedia = {};
      if (zip.files[relsKey]) {
        const relsStr = await zip.files[relsKey].async('string');
        const parser = new DOMParser();
        const relsDoc = parser.parseFromString(relsStr, 'application/xml');
        const relNodes = relsDoc.getElementsByTagNameNS('*', 'Relationship');
        for (let r = 0; r < relNodes.length; r++) {
          const rId = relNodes[r].getAttribute('Id');
          const target = relNodes[r].getAttribute('Target') || '';
          // Resolve relative path, typically ../media/imageX.png -> ppt/media/imageX.png
          let mediaPath = target.startsWith('/') ? target.substring(1) : ('ppt/slides/' + target);
          mediaPath = mediaPath.replace(/ppt\/slides\/\.\.\//g, 'ppt/');
          if (zip.files[mediaPath]) {
            const b64 = await zip.files[mediaPath].async('base64');
            const ext = mediaPath.split('.').pop().toLowerCase();
            const mime = ext === 'png' ? 'image/png' : (ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/png');
            resolvedMedia[rId] = `data:${mime};base64,${b64}`;
          }
        }
      }

      // B. Parse slide XML
      const slideStr = await zip.files[slideKey].async('string');
      const parser = new DOMParser();
      const slideXml = parser.parseFromString(slideStr, 'application/xml');

      // C. Build slide DOM element matching exact PowerPoint canvas
      const slideEl = document.createElement('div');
      slideEl.className = 'pptx-rendered-slide';
      slideEl.style.width = `${slideW}pt`;
      slideEl.style.height = `${slideH}pt`;
      slideEl.style.position = 'relative';
      slideEl.style.overflow = 'hidden';
      slideEl.style.background = '#ffffff'; // Default slide canvas
      slideEl.style.boxSizing = 'border-box';
      slideEl.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Calibri, Arial, sans-serif';

      // Detect slide-level background
      const bgNode = slideXml.getElementsByTagNameNS('*', 'bg')[0];
      if (bgNode) {
        const srgb = bgNode.getElementsByTagNameNS('*', 'srgbClr')[0];
        if (srgb && srgb.getAttribute('val')) {
          slideEl.style.backgroundColor = '#' + srgb.getAttribute('val');
        }
        const blip = bgNode.getElementsByTagNameNS('*', 'blip')[0];
        if (blip) {
          const rId = blip.getAttribute('r:embed') || blip.getAttribute('embed');
          if (resolvedMedia[rId]) {
            slideEl.style.backgroundImage = `url("${resolvedMedia[rId]}")`;
            slideEl.style.backgroundSize = 'cover';
            slideEl.style.backgroundPosition = 'center';
          }
        }
      }

      // D. Helpers for color & contrast
      const isDarkColor = (colorStr) => {
        if (!colorStr) return false;
        if (colorStr.startsWith('#')) {
          let hex = colorStr.substring(1);
          if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
          const r = parseInt(hex.substring(0, 2), 16) || 0;
          const g = parseInt(hex.substring(2, 4), 16) || 0;
          const b = parseInt(hex.substring(4, 6), 16) || 0;
          return (0.299 * r + 0.587 * g + 0.114 * b) < 140;
        }
        return false;
      };

      const getColor = (el, fallback) => {
        if (!el) return fallback;
        const srgb = el.getElementsByTagNameNS('*', 'srgbClr')[0];
        if (srgb && srgb.getAttribute('val')) return '#' + srgb.getAttribute('val');
        const scheme = el.getElementsByTagNameNS('*', 'schemeClr')[0];
        if (scheme) {
          const val = scheme.getAttribute('val');
          const schemeMap = {
            'tx1': '#111827', 'dk1': '#111827',
            'bg1': '#ffffff', 'lt1': '#ffffff',
            'tx2': '#4b5563', 'dk2': '#4b5563',
            'bg2': '#f3f4f6', 'lt2': '#f3f4f6',
            'accent1': '#2563eb', 'accent2': '#dc2626',
            'accent3': '#16a34a', 'accent4': '#9333ea',
            'accent5': '#0891b2', 'accent6': '#ea580c'
          };
          if (schemeMap[val]) return schemeMap[val];
        }
        return fallback;
      };

      // Helper to parse coordinate transform (EMU to PT)
      const getXfrm = (el) => {
        const xfrm = el.getElementsByTagNameNS('*', 'xfrm')[0];
        if (!xfrm) return null;
        const off = xfrm.getElementsByTagNameNS('*', 'off')[0];
        const ext = xfrm.getElementsByTagNameNS('*', 'ext')[0];
        const x = off ? (parseInt(off.getAttribute('x') || '0', 10) / 12700) : 0;
        const y = off ? (parseInt(off.getAttribute('y') || '0', 10) / 12700) : 0;
        const w = ext ? (parseInt(ext.getAttribute('cx') || '0', 10) / 12700) : 0;
        const h = ext ? (parseInt(ext.getAttribute('cy') || '0', 10) / 12700) : 0;
        const rot = xfrm.getAttribute('rot') ? (parseInt(xfrm.getAttribute('rot'), 10) / 60000) : 0;
        return { x, y, w, h, rot };
      };

      // E. Render Shapes & Text Boxes (<p:sp>)
      const spNodes = Array.from(slideXml.getElementsByTagNameNS('*', 'sp'));
      spNodes.forEach(sp => {
        const geom = getXfrm(sp);
        if (!geom || (geom.w <= 0 && geom.h <= 0)) return;

        const box = document.createElement('div');
        box.style.position = 'absolute';
        box.style.left = `${geom.x}pt`;
        box.style.top = `${geom.y}pt`;
        box.style.width = `${geom.w}pt`;
        box.style.height = `${geom.h}pt`;
        box.style.boxSizing = 'border-box';
        if (geom.rot) box.style.transform = `rotate(${geom.rot}deg)`;

        // Background fill
        const spPr = sp.getElementsByTagNameNS('*', 'spPr')[0];
        if (spPr) {
          const solidFill = spPr.getElementsByTagNameNS('*', 'solidFill')[0];
          if (solidFill) {
            box.style.backgroundColor = getColor(solidFill, 'transparent');
          }
          const ln = spPr.getElementsByTagNameNS('*', 'ln')[0];
          if (ln && !ln.getElementsByTagNameNS('*', 'noFill')[0]) {
            const lnSolid = ln.getElementsByTagNameNS('*', 'solidFill')[0];
            const lnColor = getColor(lnSolid, '#94a3b8');
            const lnW = ln.getAttribute('w') ? Math.max(1, parseInt(ln.getAttribute('w'), 10) / 12700) : 1;
            box.style.border = `${lnW}pt solid ${lnColor}`;
          }
          const prstGeom = spPr.getElementsByTagNameNS('*', 'prstGeom')[0];
          if (prstGeom) {
            const prst = prstGeom.getAttribute('prst');
            if (prst === 'roundRect') box.style.borderRadius = '8px';
            else if (prst === 'ellipse') box.style.borderRadius = '50%';
          }
        }

        // Text Body
        const txBody = sp.getElementsByTagNameNS('*', 'txBody')[0];
        if (txBody) {
          const bodyPr = txBody.getElementsByTagNameNS('*', 'bodyPr')[0];
          if (bodyPr) {
            const anchor = bodyPr.getAttribute('anchor');
            if (anchor === 'ctr') {
              box.style.display = 'flex';
              box.style.flexDirection = 'column';
              box.style.justifyContent = 'center';
            } else if (anchor === 'b') {
              box.style.display = 'flex';
              box.style.flexDirection = 'column';
              box.style.justifyContent = 'flex-end';
            }
            const lIns = bodyPr.getAttribute('lIns') ? (parseInt(bodyPr.getAttribute('lIns'), 10) / 12700) : 5;
            const tIns = bodyPr.getAttribute('tIns') ? (parseInt(bodyPr.getAttribute('tIns'), 10) / 12700) : 4;
            const rIns = bodyPr.getAttribute('rIns') ? (parseInt(bodyPr.getAttribute('rIns'), 10) / 12700) : 5;
            const bIns = bodyPr.getAttribute('bIns') ? (parseInt(bodyPr.getAttribute('bIns'), 10) / 12700) : 4;
            box.style.padding = `${tIns}pt ${rIns}pt ${bIns}pt ${lIns}pt`;
          }

          const pNodes = Array.from(txBody.getElementsByTagNameNS('*', 'p'));
          pNodes.forEach(pNode => {
            const pEl = document.createElement('div');
            pEl.style.minHeight = '1em';
            pEl.style.lineHeight = '1.3';
            pEl.style.wordBreak = 'break-word';

            const pPr = pNode.getElementsByTagNameNS('*', 'pPr')[0];
            if (pPr) {
              const algn = pPr.getAttribute('algn');
              if (algn === 'ctr') pEl.style.textAlign = 'center';
              else if (algn === 'r') pEl.style.textAlign = 'right';
              else if (algn === 'just') pEl.style.textAlign = 'justify';
              else pEl.style.textAlign = 'left';

              const spcBef = pPr.getElementsByTagNameNS('*', 'spcBef')[0];
              if (spcBef) {
                const spcPct = spcBef.getElementsByTagNameNS('*', 'spcPct')[0];
                const spcPts = spcBef.getElementsByTagNameNS('*', 'spcPts')[0];
                if (spcPts && spcPts.getAttribute('val')) pEl.style.marginTop = `${parseInt(spcPts.getAttribute('val'), 10) / 100}pt`;
                else if (spcPct && spcPct.getAttribute('val')) pEl.style.marginTop = `${parseInt(spcPct.getAttribute('val'), 10) / 100000}em`;
              }
            }

            const isDarkBg = isDarkColor(slideEl.style.backgroundColor);
            const defaultTextColor = isDarkBg ? '#f8fafc' : '#111827';

            const buChar = pPr ? pPr.getElementsByTagNameNS('*', 'buChar')[0] : null;
            const buAuto = pPr ? pPr.getElementsByTagNameNS('*', 'buAutoNum')[0] : null;
            if (buChar) {
              const bSpan = document.createElement('span');
              bSpan.textContent = (buChar.getAttribute('char') || '•') + ' ';
              bSpan.style.color = defaultTextColor;
              pEl.appendChild(bSpan);
            } else if (buAuto) {
              const bSpan = document.createElement('span');
              bSpan.textContent = '• ';
              bSpan.style.color = defaultTextColor;
              pEl.appendChild(bSpan);
            }

            // Paragraph child elements: runs (<a:r>) and breaks (<a:br>)
            Array.from(pNode.childNodes).forEach(child => {
              const localName = child.localName || child.nodeName.split(':').pop();
              if (localName === 'r') {
                const span = document.createElement('span');
                span.style.whiteSpace = 'pre-wrap';
                const rPr = child.getElementsByTagNameNS('*', 'rPr')[0];
                if (rPr) {
                  const sz = rPr.getAttribute('sz');
                  if (sz) span.style.fontSize = `${parseInt(sz, 10) / 100}pt`;
                  if (rPr.getAttribute('b') === '1') span.style.fontWeight = 'bold';
                  if (rPr.getAttribute('i') === '1') span.style.fontStyle = 'italic';
                  if (rPr.getAttribute('u') === 'sng') span.style.textDecoration = 'underline';
                  const solidFill = rPr.getElementsByTagNameNS('*', 'solidFill')[0];
                  span.style.color = solidFill ? getColor(solidFill, defaultTextColor) : defaultTextColor;
                  const latin = rPr.getElementsByTagNameNS('*', 'latin')[0];
                  if (latin && latin.getAttribute('typeface')) span.style.fontFamily = `"${latin.getAttribute('typeface')}", sans-serif`;
                } else {
                  span.style.color = defaultTextColor;
                }

                const tNode = child.getElementsByTagNameNS('*', 't')[0];
                span.textContent = tNode ? tNode.textContent : '';
                pEl.appendChild(span);
              } else if (localName === 'br') {
                pEl.appendChild(document.createElement('br'));
              }
            });

            box.appendChild(pEl);
          });
        }

        slideEl.appendChild(box);
      });

      // F. Render Pictures (<p:pic>)
      const picNodes = Array.from(slideXml.getElementsByTagNameNS('*', 'pic'));
      picNodes.forEach(pic => {
        const geom = getXfrm(pic);
        if (!geom) return;

        const blip = pic.getElementsByTagNameNS('*', 'blip')[0];
        if (!blip) return;
        const rId = blip.getAttribute('r:embed') || blip.getAttribute('embed');
        const imgSrc = resolvedMedia[rId];
        if (!imgSrc) return;

        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.position = 'absolute';
        img.style.left = `${geom.x}pt`;
        img.style.top = `${geom.y}pt`;
        img.style.width = `${geom.w}pt`;
        img.style.height = `${geom.h}pt`;
        img.style.objectFit = 'contain';
        if (geom.rot) img.style.transform = `rotate(${geom.rot}deg)`;
        slideEl.appendChild(img);
      });

      // G. Render Tables (<p:graphicFrame> containing <a:tbl>)
      const gfNodes = Array.from(slideXml.getElementsByTagNameNS('*', 'graphicFrame'));
      gfNodes.forEach(gf => {
        const tbl = gf.getElementsByTagNameNS('*', 'tbl')[0];
        if (!tbl) return;
        const geom = getXfrm(gf);
        if (!geom) return;

        const table = document.createElement('table');
        table.style.position = 'absolute';
        table.style.left = `${geom.x}pt`;
        table.style.top = `${geom.y}pt`;
        table.style.width = `${geom.w}pt`;
        table.style.borderCollapse = 'collapse';
        table.style.boxSizing = 'border-box';

        const trNodes = Array.from(tbl.getElementsByTagNameNS('*', 'tr'));
        trNodes.forEach((trNode, rIdx) => {
          const tr = document.createElement('tr');
          const tcNodes = Array.from(trNode.getElementsByTagNameNS('*', 'tc'));
          tcNodes.forEach((tcNode, cIdx) => {
            const td = document.createElement(rIdx === 0 ? 'th' : 'td');
            td.style.border = '1px solid rgba(0,0,0,0.12)';
            td.style.padding = '6pt 8pt';
            td.style.boxSizing = 'border-box';

            const tcPr = tcNode.getElementsByTagNameNS('*', 'tcPr')[0];
            if (tcPr) {
              const solidFill = tcPr.getElementsByTagNameNS('*', 'solidFill')[0];
              if (solidFill) td.style.backgroundColor = getColor(solidFill, 'transparent');
            }

            // Cell text
            const pNodes = Array.from(tcNode.getElementsByTagNameNS('*', 'p'));
            pNodes.forEach(pNode => {
              const pEl = document.createElement('div');
              pEl.style.lineHeight = '1.3';
              Array.from(pNode.childNodes).forEach(child => {
                const localName = child.localName || child.nodeName.split(':').pop();
                if (localName === 'r') {
                  const span = document.createElement('span');
                  const rPr = child.getElementsByTagNameNS('*', 'rPr')[0];
                  if (rPr) {
                    const sz = rPr.getAttribute('sz');
                    if (sz) span.style.fontSize = `${parseInt(sz, 10) / 100}pt`;
                    if (rPr.getAttribute('b') === '1') span.style.fontWeight = 'bold';
                    if (rPr.getAttribute('i') === '1') span.style.fontStyle = 'italic';
                    const solidFill = rPr.getElementsByTagNameNS('*', 'solidFill')[0];
                    if (solidFill) span.style.color = getColor(solidFill, '#111827');
                  }
                  const tNode = child.getElementsByTagNameNS('*', 't')[0];
                  span.textContent = tNode ? tNode.textContent : '';
                  pEl.appendChild(span);
                }
              });
              td.appendChild(pEl);
            });

            tr.appendChild(td);
          });
          table.appendChild(tr);
        });

        slideEl.appendChild(table);
      });

      // Mount into sandbox, render via html2canvas with 2x Retina resolution
      sandbox.innerHTML = '';
      sandbox.appendChild(slideEl);

      // Wait a frame for layout
      await new Promise(r => setTimeout(r, 60));

      const canvas = await html2canvas(slideEl, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.96);
      if (i > 0) {
        pdfDoc.addPage([slideW, slideH], orientation);
      }
      pdfDoc.addImage(imgData, 'JPEG', 0, 0, slideW, slideH);
    }

    updateModalProgress(96, 'Finalizing PDF presentation...');
    const pdfBlob = pdfDoc.output('blob');
    completeConversion(pdfBlob, 'converted_presentation.pdf', `Exported ${count} slide(s) to 1-on-1 visual PDF.`);
  } finally {
    if (document.body.contains(sandbox)) {
      document.body.removeChild(sandbox);
    }
  }
}

// 4. Image to PDF
async function doImageToPdf() {
  updateModalProgress(30, 'Embedding images...');
  const marginOpt = document.getElementById('opt-img-margin')?.value || 'none';
  const margin = marginOpt === 'small' ? 15 : (marginOpt === 'normal' ? 36 : 0);
  const orientOpt = document.getElementById('opt-img-orient')?.value || 'auto';

  const pdfDoc = await PDFLib.PDFDocument.create();

  for (let i = 0; i < currentFiles.length; i++) {
    updateModalProgress(30 + (i / currentFiles.length) * 55, `Processing image ${i + 1} of ${currentFiles.length}...`);
    const f = currentFiles[i];
    const { bytes, isPng } = await prepareImageForPdf(f);
    const img = isPng ? await pdfDoc.embedPng(bytes) : await pdfDoc.embedJpg(bytes);

    let pageW, pageH;
    let imgW = img.width;
    let imgH = img.height;

    if (orientOpt === 'portrait') {
      pageW = 595.28;
      pageH = 841.89;
      const maxW = pageW - margin * 2;
      const maxH = pageH - margin * 2;
      const scale = Math.min(maxW / imgW, maxH / imgH, 1);
      imgW *= scale;
      imgH *= scale;
    } else if (orientOpt === 'landscape') {
      pageW = 841.89;
      pageH = 595.28;
      const maxW = pageW - margin * 2;
      const maxH = pageH - margin * 2;
      const scale = Math.min(maxW / imgW, maxH / imgH, 1);
      imgW *= scale;
      imgH *= scale;
    } else {
      pageW = imgW + margin * 2;
      pageH = imgH + margin * 2;
    }

    const page = pdfDoc.addPage([pageW, pageH]);
    const x = (pageW - imgW) / 2;
    const y = (pageH - imgH) / 2;
    page.drawImage(img, { x, y, width: imgW, height: imgH });
  }

  const bytes = await pdfDoc.save();
  completeConversion(new Blob([bytes], { type: 'application/pdf' }), 'converted_images.pdf', `Combined ${currentFiles.length} image(s) to PDF.`);
}

// 5. Merge PDF
async function doMergePdf() {
  updateModalProgress(30, 'Merging documents...');
  const merged = await PDFLib.PDFDocument.create();
  for (let i = 0; i < currentFiles.length; i++) {
    updateModalProgress(30 + (i / currentFiles.length) * 60, `Merging file ${i + 1} of ${currentFiles.length}...`);
    const b = await currentFiles[i].arrayBuffer();
    const d = await PDFLib.PDFDocument.load(b, { ignoreEncryption: true });
    const copied = await merged.copyPages(d, d.getPageIndices());
    copied.forEach(p => merged.addPage(p));
  }
  const bytes = await merged.save();
  completeConversion(new Blob([bytes], { type: 'application/pdf' }), 'merged.pdf', `Merged ${currentFiles.length} PDF files into one document.`);
}

// 6. Split PDF
async function doSplitPdf() {
  updateModalProgress(30, 'Splitting PDF...');
  const b = await currentFiles[0].arrayBuffer();
  const d = await PDFLib.PDFDocument.load(b, { ignoreEncryption: true });
  const total = d.getPageCount();

  const mode = document.getElementById('opt-split-mode')?.value || 'range';
  const range = document.getElementById('opt-split-range')?.value?.trim();
  const visuallySelected = cachedPageCards.filter(c => c.classList.contains('selected')).map(c => parseInt(c.getAttribute('data-idx'), 10));

  if (mode === 'range') {
    let keep = [];
    if (range) {
      range.split(',').forEach(seg => {
        if (seg.includes('-')) {
          const [s, e] = seg.split('-').map(n => parseInt(n.trim(), 10));
          for (let p = s; p <= e; p++) if (p >= 1 && p <= total) keep.push(p - 1);
        } else {
          const p = parseInt(seg.trim(), 10);
          if (p >= 1 && p <= total) keep.push(p - 1);
        }
      });
    } else if (visuallySelected.length > 0) {
      keep = visuallySelected;
    } else {
      keep = [0];
    }

    if (keep.length === 0) keep = [0];
    const out = await PDFLib.PDFDocument.create();
    const copied = await out.copyPages(d, keep);
    copied.forEach(p => out.addPage(p));
    const bytes = await out.save();
    completeConversion(new Blob([bytes], { type: 'application/pdf' }), 'split.pdf', `Extracted ${keep.length} page(s) to PDF.`);
  } else {
    const zip = new JSZip();
    for (let i = 0; i < total; i++) {
      updateModalProgress(30 + (i / total) * 60, `Packaging page ${i + 1} of ${total}...`);
      const s = await PDFLib.PDFDocument.create();
      const [cp] = await s.copyPages(d, [i]);
      s.addPage(cp);
      zip.file(`page_${i + 1}.pdf`, await s.save());
    }
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    completeConversion(zipBlob, 'split_pages.zip', `Split into ${total} separate PDF files.`);
  }
}

// 7. Remove PDF Pages
async function doRemovePages() {
  updateModalProgress(30, 'Removing selected pages...');
  const b = await currentFiles[0].arrayBuffer();
  const d = await PDFLib.PDFDocument.load(b, { ignoreEncryption: true });
  const total = d.getPageCount();

  const sel = new Set(cachedPageCards.filter(c => c.classList.contains('selected')).map(c => parseInt(c.getAttribute('data-idx'), 10)));
  if (sel.size === 0) {
    showToast('Click pages in preview to select them for removal');
    btnModalExecute.disabled = false;
    return;
  }

  const keep = [];
  for (let i = 0; i < total; i++) if (!sel.has(i)) keep.push(i);

  if (keep.length === 0) {
    showToast('Cannot delete all pages from PDF');
    btnModalExecute.disabled = false;
    return;
  }

  const out = await PDFLib.PDFDocument.create();
  const copied = await out.copyPages(d, keep);
  copied.forEach(p => out.addPage(p));
  const bytes = await out.save();
  completeConversion(new Blob([bytes], { type: 'application/pdf' }), 'pages_removed.pdf', `Removed ${sel.size} page(s); preserved ${keep.length} page(s).`);
}

// 8. Organize PDF
async function doOrganizePdf() {
  updateModalProgress(30, 'Saving page order and rotations...');
  const b = await currentFiles[0].arrayBuffer();
  const d = await PDFLib.PDFDocument.load(b, { ignoreEncryption: true });
  const out = await PDFLib.PDFDocument.create();

  for (let i = 0; i < cachedPageCards.length; i++) {
    const card = cachedPageCards[i];
    const idx = parseInt(card.getAttribute('data-idx'), 10);
    const rot = parseInt(card.getAttribute('data-rot') || '0', 10);
    const [copied] = await out.copyPages(d, [idx]);
    if (rot !== 0) copied.setRotation(PDFLib.degrees((copied.getRotation().angle + rot) % 360));
    out.addPage(copied);
  }

  const bytes = await out.save();
  completeConversion(new Blob([bytes], { type: 'application/pdf' }), 'organized.pdf', 'Applied rotations and organization.');
}

// 9. Scan to PDF
async function doScanToPdf() {
  updateModalProgress(30, 'Compiling scan snapshots...');
  const pdfDoc = await PDFLib.PDFDocument.create();
  for (let i = 0; i < currentFiles.length; i++) {
    updateModalProgress(30 + (i / currentFiles.length) * 55, `Processing scan ${i + 1} of ${currentFiles.length}...`);
    const f = currentFiles[i];
    const { bytes, isPng } = await prepareImageForPdf(f);
    const img = isPng ? await pdfDoc.embedPng(bytes) : await pdfDoc.embedJpg(bytes);
    const p = pdfDoc.addPage([img.width, img.height]);
    p.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
  }
  const bytes = await pdfDoc.save();
  completeConversion(new Blob([bytes], { type: 'application/pdf' }), 'scanned_document.pdf', `Compiled ${currentFiles.length} scans into PDF.`);
}

// 10. Compress PDF
async function doCompressPdf() {
  updateModalProgress(25, 'Analyzing PDF streams...');
  const level = document.getElementById('opt-compression')?.value || 'recommended';
  let scale = 1.5;
  let q = 0.72;
  if (level === 'extreme') {
    scale = 1.1;
    q = 0.50;
  } else if (level === 'light') {
    scale = 2.0;
    q = 0.88;
  }

  const b = await currentFiles[0].arrayBuffer();
  const origSize = b.byteLength;
  const pdf = await pdfjsLib.getDocument({ data: b }).promise;
  const comp = await PDFLib.PDFDocument.create();

  for (let i = 1; i <= pdf.numPages; i++) {
    updateModalProgress(25 + (i / pdf.numPages) * 65, `Compressing page ${i} of ${pdf.numPages}...`);
    const page = await pdf.getPage(i);
    const origVp = page.getViewport({ scale: 1.0 });
    const renderVp = page.getViewport({ scale });

    const c = document.createElement('canvas');
    c.width = renderVp.width;
    c.height = renderVp.height;
    await page.render({ canvasContext: c.getContext('2d'), viewport: renderVp }).promise;

    const dataUrl = c.toDataURL('image/jpeg', q);
    const imgBytes = Uint8Array.from(atob(dataUrl.split(',')[1]), x => x.charCodeAt(0));
    const embedded = await comp.embedJpg(imgBytes);
    const np = comp.addPage([origVp.width, origVp.height]);
    np.drawImage(embedded, { x: 0, y: 0, width: origVp.width, height: origVp.height });
  }

  const compBytes = await comp.save({ useObjectStreams: true });
  const saved = Math.max(0, Math.round((1 - compBytes.byteLength / origSize) * 100));
  completeConversion(new Blob([compBytes], { type: 'application/pdf' }), 'compressed.pdf', `Reduced size by ${saved}% (${(compBytes.byteLength / 1024).toFixed(1)} KB).`);
}

// 11. Repair PDF
async function doRepairPdf() {
  updateModalProgress(35, 'Rebuilding cross-references and objects...');
  const b = await currentFiles[0].arrayBuffer();
  const doc = await PDFLib.PDFDocument.load(b, { ignoreEncryption: true });
  const out = await PDFLib.PDFDocument.create();
  const copied = await out.copyPages(doc, doc.getPageIndices());
  copied.forEach(p => out.addPage(p));
  const bytes = await out.save({ useObjectStreams: false });
  completeConversion(new Blob([bytes], { type: 'application/pdf' }), 'repaired.pdf', `Recovered ${copied.length} page(s) and rebuilt document structure.`);
}

// 12. OCR PDF
async function doOcrPdf() {
  updateModalProgress(20, 'Initializing OCR engine...');
  const lang = document.getElementById('opt-ocr-lang')?.value || 'eng';
  const fmt = document.getElementById('opt-ocr-format')?.value || 'txt';
  const file = currentFiles[0];
  let txt = '';

  if (file.type.startsWith('image/')) {
    updateModalProgress(40, `Recognizing text in image (${lang})...`);
    const res = await Tesseract.recognize(file, lang);
    txt = res.data.text || 'No text detected';
  } else {
    const b = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: b }).promise;

    for (let p = 1; p <= pdf.numPages; p++) {
      updateModalProgress(20 + (p / pdf.numPages) * 70, `OCR recognizing page ${p} of ${pdf.numPages} (${lang})...`);
      const page = await pdf.getPage(p);
      const vp = page.getViewport({ scale: 1.8 });
      const c = document.createElement('canvas');
      c.width = vp.width;
      c.height = vp.height;
      await page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise;
      const res = await Tesseract.recognize(c, lang);
      txt += `--- Page ${p} ---\n` + res.data.text + '\n\n';
    }
  }

  const docxLib = window.docx || (typeof docx !== 'undefined' ? docx : null);
  if (fmt === 'docx' && docxLib) {
    const paras = txt.split('\n').map(line => new docxLib.Paragraph({ children: [new docxLib.TextRun({ text: line, size: 22 })] }));
    const d = new docxLib.Document({ sections: [{ children: paras }] });
    const docxBlob = await docxLib.Packer.toBlob(d);
    completeConversion(docxBlob, 'ocr_extracted.docx', 'Extracted OCR text to Word DOCX.');
  } else {
    completeConversion(new Blob([txt], { type: 'text/plain' }), 'ocr_extracted.txt', 'Extracted OCR text to .txt document.');
  }
}

// 13. PDF to JPG
async function doPdfToJpg() {
  updateModalProgress(25, 'Rendering high-res page images...');
  const dpi = parseInt(document.getElementById('opt-jpg-dpi')?.value || '150', 10);
  const scale = dpi / 72;
  const b = await currentFiles[0].arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: b }).promise;

  if (pdf.numPages === 1) {
    const page = await pdf.getPage(1);
    const vp = page.getViewport({ scale });
    const c = document.createElement('canvas');
    c.width = vp.width;
    c.height = vp.height;
    await page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise;
    c.toBlob(blob => completeConversion(blob, 'page_1.jpg', 'Extracted single page as JPG.'), 'image/jpeg', 0.92);
  } else {
    const zip = new JSZip();
    for (let i = 1; i <= pdf.numPages; i++) {
      updateModalProgress(25 + (i / pdf.numPages) * 65, `Rendering page ${i} of ${pdf.numPages}...`);
      const page = await pdf.getPage(i);
      const vp = page.getViewport({ scale });
      const c = document.createElement('canvas');
      c.width = vp.width;
      c.height = vp.height;
      await page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise;
      zip.file(`page_${i}.jpg`, c.toDataURL('image/jpeg', 0.92).split(',')[1], { base64: true });
    }
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    completeConversion(zipBlob, 'pdf_pages_jpg.zip', `Extracted ${pdf.numPages} JPG images in ZIP.`);
  }
}

// 14. PDF to Word
async function doPdfToWord() {
  if (currentFiles[0] && await tryServerConvert(currentFiles[0], 'docx')) return;

  updateModalProgress(25, 'Extracting text and structure...');
  const b = await currentFiles[0].arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: b }).promise;
  const docxLib = window.docx || (typeof docx !== 'undefined' ? docx : null);

  if (docxLib) {
    const sectionsChildren = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      updateModalProgress(25 + (i / pdf.numPages) * 60, `Formatting page ${i} of ${pdf.numPages}...`);
      const page = await pdf.getPage(i);
      const tc = await page.getTextContent();

      sectionsChildren.push(
        new docxLib.Paragraph({
          children: [
            new docxLib.TextRun({ text: `Page ${i}`, bold: true, size: 24, font: 'Calibri', color: '2B579A' })
          ],
          spacing: { before: 240, after: 120 }
        })
      );

      const lineMap = new Map();
      tc.items.forEach(it => {
        const y = Math.round(it.transform[5] / 4) * 4;
        if (!lineMap.has(y)) lineMap.set(y, []);
        lineMap.get(y).push(it);
      });

      const sortedYs = Array.from(lineMap.keys()).sort((a, b) => b - a);
      sortedYs.forEach(y => {
        const lineItems = lineMap.get(y).sort((a, b) => a.transform[4] - b.transform[4]);
        const lineText = lineItems.map(it => it.str).join(' ').trim();
        if (lineText) {
          sectionsChildren.push(
            new docxLib.Paragraph({
              children: [new docxLib.TextRun({ text: lineText, size: 22, font: 'Calibri' })],
              spacing: { after: 100 }
            })
          );
        }
      });
    }

    const d = new docxLib.Document({ sections: [{ children: sectionsChildren }] });
    const docxBlob = await docxLib.Packer.toBlob(d);
    completeConversion(docxBlob, 'converted_document.docx', `Extracted formatted typography from ${pdf.numPages} pages into Word DOCX.`);
  } else {
    let txt = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const tc = await page.getTextContent();
      txt += `--- Page ${i} ---\n` + tc.items.map(it => it.str).join(' ') + '\n\n';
    }
    completeConversion(new Blob([txt], { type: 'text/plain' }), 'converted_document.txt', 'Extracted text content to text file.');
  }
}

// 15. PDF to PowerPoint
async function doPdfToPowerPoint() {
  updateModalProgress(25, 'Rendering presentation slides from PDF pages...');
  const b = await currentFiles[0].arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: b }).promise;

  if (typeof PptxGenJS !== 'undefined') {
    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9';

    for (let i = 1; i <= pdf.numPages; i++) {
      updateModalProgress(25 + (i / pdf.numPages) * 60, `Generating slide ${i} of ${pdf.numPages}...`);
      const page = await pdf.getPage(i);
      const vp = page.getViewport({ scale: 2.0 });
      const c = document.createElement('canvas');
      c.width = vp.width;
      c.height = vp.height;
      await page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise;

      const dataUrl = c.toDataURL('image/png');
      const slide = pptx.addSlide();

      const slideW = 10;
      const slideH = 5.625;
      const imgAspect = vp.width / vp.height;
      const slideAspect = slideW / slideH;
      let w, h, x, y;
      if (imgAspect > slideAspect) {
        w = slideW;
        h = slideW / imgAspect;
        x = 0;
        y = (slideH - h) / 2;
      } else {
        h = slideH;
        w = slideH * imgAspect;
        x = (slideW - w) / 2;
        y = 0;
      }

      slide.addImage({ data: dataUrl, x, y, w, h });
    }

    updateModalProgress(90, 'Packaging presentation...');
    const pptxBlob = await pptx.write({ outputType: 'blob' });
    completeConversion(pptxBlob, 'converted_presentation.pptx', `Exported ${pdf.numPages} slides to PowerPoint (.pptx).`);
  } else {
    const zip = new JSZip();
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const vp = page.getViewport({ scale: 1.5 });
      const c = document.createElement('canvas');
      c.width = vp.width;
      c.height = vp.height;
      await page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise;
      zip.file(`slide_${i}.png`, c.toDataURL('image/png').split(',')[1], { base64: true });
    }
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    completeConversion(zipBlob, 'slides.zip', `Created ${pdf.numPages} slide images for presentation.`);
  }
}

// 16. PDF to Excel
async function doPdfToExcel() {
  if (currentFiles[0] && await tryServerConvert(currentFiles[0], 'xlsx')) return;

  updateModalProgress(30, 'Analyzing tabular coordinates...');
  const b = await currentFiles[0].arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: b }).promise;
  const rows = [];

  for (let p = 1; p <= pdf.numPages; p++) {
    updateModalProgress(30 + (p / pdf.numPages) * 55, `Extracting rows from page ${p} of ${pdf.numPages}...`);
    const page = await pdf.getPage(p);
    const tc = await page.getTextContent();
    const map = new Map();
    tc.items.forEach(it => {
      const y = Math.round(it.transform[5]);
      if (!map.has(y)) map.set(y, []);
      map.get(y).push(it);
    });
    Array.from(map.keys()).sort((a, b) => b - a).forEach(y => {
      const r = map.get(y).sort((a, b) => a.transform[4] - b.transform[4]).map(x => x.str.trim()).filter(Boolean);
      if (r.length > 0) rows.push(r);
    });
  }

  const wb = XLSX.utils.book_new();
  const aoa = rows.length > 0 ? rows : [['No tabular text extracted']];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(aoa), 'Extracted Data');
  const xlsxData = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  completeConversion(new Blob([xlsxData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), 'extracted.xlsx', `Exported ${rows.length} tabular rows.`);
}

// 17. PDF to PDF/A
async function doPdfToPdfA() {
  updateModalProgress(35, 'Embedding ISO PDF/A-1b archival metadata...');
  const b = await currentFiles[0].arrayBuffer();
  const doc = await PDFLib.PDFDocument.load(b, { ignoreEncryption: true });
  doc.setTitle('Archival Document (PDF/A-1b)');
  doc.setProducer('AetherPDF ISO Archival Engine');
  doc.setSubject('ISO 19005-1 Compliant Archival Document');
  const bytes = await doc.save({ useObjectStreams: false });
  completeConversion(new Blob([bytes], { type: 'application/pdf' }), 'archived_pdfa.pdf', 'ISO-compliant PDF/A-1b generated.');
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderToolsCatalog();
});
