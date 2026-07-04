from pypdf import PdfReader
import os

reader = PdfReader("Aadyam_2026.pdf")
print("Total pages:", len(reader.pages))

# Inspect page 0 images
page = reader.pages[0]
print("Images on page 0:", len(page.images))
for i, img in enumerate(page.images):
    print(f"Image {i}: name={img.name}, data length={len(img.data)} bytes")

# Let's find the total size of all images in the PDF to see where the 1.16 GB is coming from
total_image_bytes = 0
image_count = 0
for p_idx, page in enumerate(reader.pages):
    for img in page.images:
        total_image_bytes += len(img.data)
        image_count += 1
    if p_idx < 5:
        print(f"Page {p_idx} done. Cumulative image bytes: {total_image_bytes}")

print(f"Total images found: {image_count}")
print(f"Total image bytes: {total_image_bytes} bytes ({total_image_bytes / (1024*1024):.2f} MB)")
