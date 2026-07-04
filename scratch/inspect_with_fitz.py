import fitz  # PyMuPDF
import os
from PIL import Image
import numpy as np

def check_with_fitz(path):
    print(f"=== Inspecting {path} ===")
    if not os.path.exists(path):
        print("File does not exist.")
        return
    
    try:
        doc = fitz.open(path)
        print(f"Successfully opened with fitz. Page count: {len(doc)}")
        print(f"Metadata: {doc.metadata}")
        
        # Check first page
        if len(doc) > 0:
            page = doc[0]
            print(f"Page 0 dimensions: {page.rect}")
            
            # Render page 0 to an image
            pix = page.get_pixmap()
            out_img = f"fitz_check_{os.path.basename(path)}_p0.png"
            pix.save(out_img)
            print(f"Saved page 0 rendering to: {out_img}")
            
            # Check unique colors in rendered image
            img = Image.open(out_img)
            data = np.array(img)
            unique_colors = np.unique(data.reshape(-1, data.shape[-1]), axis=0)
            print(f"Unique colors in rendered image: {len(unique_colors)}")
            
            # Let's inspect objects on page 0
            img_list = page.get_images()
            print(f"Images on page 0: {len(img_list)}")
            for idx, img_info in enumerate(img_list[:5]):
                xref = img_info[0]
                width = img_info[2]
                height = img_info[3]
                size = len(doc.extract_image(xref)["image"])
                print(f"  Image {idx}: xref={xref}, size={width}x{height}, data size={size} bytes")
                
    except Exception as e:
        print(f"Error: {e}")

check_with_fitz("Aadyam_2026.pdf")
check_with_fitz("Aadyam_2026_compressed.pdf")
check_with_fitz("Aadyam_2025.pdf")
