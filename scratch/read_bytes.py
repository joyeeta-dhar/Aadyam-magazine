def inspect_bytes(path):
    print(f"=== File: {path} ===")
    try:
        with open(path, "rb") as f:
            header = f.read(200)
            print("Header (Hex):", header.hex())
            print("Header (ASCII):", ''.join(chr(b) if 32 <= b <= 126 else '.' for b in header))
            
            f.seek(0, 2)
            file_size = f.tell()
            if file_size > 200:
                f.seek(file_size - 200)
                footer = f.read(200)
                print("Footer (Hex):", footer.hex())
                print("Footer (ASCII):", ''.join(chr(b) if 32 <= b <= 126 else '.' for b in footer))
            else:
                print("File too short for footer check")
    except Exception as e:
        print("Error:", e)

inspect_bytes("Aadyam_2026.pdf")
inspect_bytes("Aadyam_2025.pdf")
