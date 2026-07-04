from pypdf import PdfReader, PdfWriter
import os
import time

def compress_pypdf(input_path, output_path):
    print(f"Opening {input_path} with pypdf...")
    start_time = time.time()
    
    input_size_mb = os.path.getsize(input_path) / (1024 * 1024)
    print(f"Original size: {input_size_mb:.2f} MB")
    
    try:
        reader = PdfReader(input_path)
        writer = PdfWriter()
        
        total_pages = len(reader.pages)
        print(f"Total pages: {total_pages}")
        
        for i in range(total_pages):
            try:
                page = reader.pages[i]
                writer.add_page(page)
            except Exception as pe:
                print(f"Error reading page {i}: {pe}")
            
            if (i + 1) % 10 == 0 or i == total_pages - 1:
                print(f"Processed {i + 1}/{total_pages} pages...")
                
        print("Writing optimized PDF...")
        with open(output_path, "wb") as f:
            writer.write(f)
            
        output_size_mb = os.path.getsize(output_path) / (1024 * 1024)
        duration = time.time() - start_time
        print("\n--- PYPDF OPTIMIZATION COMPLETE ---")
        print(f"Output saved to: {output_path}")
        print(f"Compressed size: {output_size_mb:.2f} MB")
        print(f"Total time taken: {duration:.1f} seconds")
        
    except Exception as e:
        print(f"Error during pypdf compression: {e}")

if __name__ == "__main__":
    compress_pypdf("Aadyam_2026.pdf", "Aadyam_2026_pypdf.pdf")
