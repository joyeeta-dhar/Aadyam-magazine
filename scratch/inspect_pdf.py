import os
from pypdf import PdfReader

def check_pdf(filename):
    print(f"Checking {filename}...")
    if not os.path.exists(filename):
        print("  File does not exist.")
        return
    size = os.path.getsize(filename)
    print(f"  Size: {size} bytes ({size / (1024*1024):.2f} MB)")
    try:
        reader = PdfReader(filename)
        print(f"  Pages: {len(reader.pages)}")
        print(f"  Metadata: {reader.metadata}")
        # Try reading the first page text
        if len(reader.pages) > 0:
            first_page = reader.pages[0]
            text = first_page.extract_text()
            print(f"  First page text length: {len(text) if text else 0}")
    except Exception as e:
        print(f"  Error reading PDF: {e}")

if __name__ == "__main__":
    check_pdf("Aadyam_2026.pdf")
    check_pdf("Aadyam_2026_compressed.pdf")
    check_pdf("Aadyam_2026_pypdf.pdf")
    check_pdf("Aadyam_2025.pdf")
