from PIL import Image
import numpy as np

def check_image(path):
    print(f"Checking image: {path}")
    try:
        img = Image.open(path)
        print(f"  Format: {img.format}, Size: {img.size}, Mode: {img.mode}")
        # Convert to numpy and check if it's all one color
        data = np.array(img)
        unique_colors = np.unique(data.reshape(-1, data.shape[-1]), axis=0)
        print(f"  Number of unique colors: {len(unique_colors)}")
        if len(unique_colors) <= 2:
            print("  Warning: Image seems to be blank or solid color.")
    except Exception as e:
        print(f"  Error reading image: {e}")

check_image("check_compressed_page0.png")
check_image("check_compressed_page4.png")
check_image("check_pypdf_page0.png")
