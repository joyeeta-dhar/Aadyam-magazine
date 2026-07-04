import fitz

doc = fitz.open("Aadyam_2026.pdf")
print("Total pages:", len(doc))

corrupted_pages = []
successful_pages = []

for i in range(len(doc)):
    try:
        page = doc[i]
        pix = page.get_pixmap()
        # If it has only 1 unique color (blank), let's check
        import numpy as np
        from PIL import Image
        # Convert to numpy
        img_data = np.frombuffer(pix.samples, dtype=np.uint8)
        unique_colors = len(np.unique(img_data))
        if unique_colors <= 2:
            corrupted_pages.append((i, "blank/solid"))
        else:
            successful_pages.append(i)
    except Exception as e:
        corrupted_pages.append((i, str(e)))

print(f"Total successful pages: {len(successful_pages)}")
print(f"Total corrupted/blank pages: {len(corrupted_pages)}")
if len(successful_pages) > 0:
    print(f"Some successful pages: {successful_pages[:10]}")
if len(corrupted_pages) > 0:
    print("First 10 corrupted pages and errors:")
    for idx, err in corrupted_pages[:10]:
        print(f"  Page {idx}: {err}")
