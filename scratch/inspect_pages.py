import os
from pypdf import PdfReader

def check_file(path):
    print(f"--- Checking {path} ---")
    try:
        reader = PdfReader(path)
        print(f"Successfully opened {path}. Pages: {len(reader.pages)}")
        
        # Test a few pages or all
        for i in range(min(5, len(reader.pages))):
            try:
                page = reader.pages[i]
                images = len(page.images)
                text = len(page.extract_text() or "")
                print(f"  Page {i}: Images = {images}, Text len = {text}")
            except Exception as pe:
                print(f"  Error on page {i}: {pe}")
    except Exception as e:
        print(f"Failed to open {path}: {e}")

check_file("Aadyam_2026.pdf")
check_file("Aadyam_2026_compressed.pdf")
check_file("Aadyam_2025.pdf")
