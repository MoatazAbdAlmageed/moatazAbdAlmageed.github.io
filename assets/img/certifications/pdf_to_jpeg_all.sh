#!/bin/bash
# =============================================================
#  pdf_to_jpeg_all.sh  –  Convert ALL PDFs in PWD to JPEG
#  Usage:  bash pdf_to_jpeg_all.sh [dpi]
#  Example: bash pdf_to_jpeg_all.sh 200
# =============================================================

set -e

# ---------- helpers ----------
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; CYAN='\033[0;36m'; NC='\033[0m'
info()    { echo -e "${GREEN}[INFO]${NC}  $*"; }
warn()    { echo -e "${YELLOW}[WARN]${NC}  $*"; }
error()   { echo -e "${RED}[ERROR]${NC} $*"; exit 1; }
section() { echo -e "\n${CYAN}==============================${NC}"; echo -e "${CYAN} $*${NC}"; echo -e "${CYAN}==============================${NC}"; }

# ---------- args ----------
DPI="${1:-150}"

# ---------- find all PDFs ----------
PDF_FILES=(*.pdf)

if [[ "${PDF_FILES[0]}" == "*.pdf" ]]; then
  error "No PDF files found in current directory: $(pwd)"
fi

TOTAL_PDFS=${#PDF_FILES[@]}
section "Found $TOTAL_PDFS PDF file(s) in $(pwd)"
for f in "${PDF_FILES[@]}"; do echo "   • $f"; done
echo ""
info "DPI: $DPI"

# ---------- check Python ----------
if ! command -v python &>/dev/null && ! command -v python3 &>/dev/null; then
  error "Python is not installed or not on PATH."
fi
PY=$(command -v python3 || command -v python)
info "Python: $PY"

# ---------- install pdf2image if missing ----------
if ! "$PY" -c "import pdf2image" 2>/dev/null; then
  warn "pdf2image not found – installing..."
  "$PY" -m pip install pdf2image --quiet
fi

# ---------- check poppler ----------
if ! command -v pdftoppm &>/dev/null; then
  echo ""
  warn "poppler not found on PATH."
  echo "  Install poppler for Windows and add its bin/ folder to PATH:"
  echo "  https://github.com/oschwartz10612/poppler-windows/releases"
  echo ""
  echo "  Quick steps:"
  echo "    1. Download the latest release zip from the link above."
  echo "    2. Extract it (e.g. C:\\poppler)."
  echo "    3. Add C:\\poppler\\Library\\bin to your Windows PATH."
  echo "    4. Restart Git Bash and run this script again."
  error "Cannot continue without poppler."
fi

# ---------- convert all PDFs ----------
CONVERTED=0
FAILED=0

for PDF_FILE in "${PDF_FILES[@]}"; do
  BASENAME=$(basename "$PDF_FILE" .pdf)
  OUT_DIR="${BASENAME}_jpegs"

  section "Converting: $PDF_FILE"
  mkdir -p "$OUT_DIR"

  "$PY" - <<PYEOF
from pdf2image import convert_from_path
import os, sys

pdf_path = r"${PDF_FILE}"
out_dir  = r"${OUT_DIR}"
dpi      = int("${DPI}")
basename = r"${BASENAME}"

try:
    print(f"  Reading {pdf_path} ...")
    pages = convert_from_path(pdf_path, dpi=dpi)
    total = len(pages)
    print(f"  Found {total} page(s).")

    for i, page in enumerate(pages, start=1):
        out_name = os.path.join(out_dir, f"{basename}_page_{i:03d}.jpg")
        page.save(out_name, "JPEG", quality=90)
        print(f"  [{i}/{total}] Saved → {out_name}")

    print(f"  ✔ Done: {total} JPEG(s) → '{out_dir}/'")
    sys.exit(0)

except Exception as e:
    print(f"  ✘ Failed: {e}", file=sys.stderr)
    sys.exit(1)
PYEOF

  if [[ $? -eq 0 ]]; then
    ((CONVERTED++))
  else
    warn "Failed to convert: $PDF_FILE"
    ((FAILED++))
  fi
done

# ---------- summary ----------
section "Summary"
echo -e "  Total PDFs   : $TOTAL_PDFS"
echo -e "  ${GREEN}Converted    : $CONVERTED${NC}"
[[ $FAILED -gt 0 ]] && echo -e "  ${RED}Failed       : $FAILED${NC}"
echo ""
info "All output folders are in: $(pwd)"
