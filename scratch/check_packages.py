import sys

packages = ['fitz', 'pdf2image', 'pdfplumber', 'reportlab', 'pypdf', 'PIL', 'openpyxl', 'matplotlib']

for pkg in packages:
    try:
        __import__(pkg)
        print(f"  {pkg}: installed")
    except ImportError:
        print(f"  {pkg}: NOT installed")
