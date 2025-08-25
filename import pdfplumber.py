import math
import gc
from pathlib import Path
from PyPDF2 import PdfReader, PdfWriter
import pdfplumber
from pdf2image import convert_from_path
import pytesseract

pdf_path = Path(r"C:\Users\LENOVO\Downloads\Princípios De Neurociências - 5_ed_ -- Eric R_ Kandel; James H_ Schwartz; Thomas M_ Jessell; Steven -- 5_ ed_, 2014 -- AMGH Editora LTDA -- 9780071390118 -- 05107d558901831283cad35a23b88589 -- Anna’s Archive.pdf")
parts = 10

def split_pdf(src: Path, parts: int):
    reader = PdfReader(str(src))
    total = len(reader.pages)
    per = math.ceil(total / parts)
    chunks = []
    for i in range(parts):
        start = i * per
        if start >= total:
            break
        end = min(start + per, total)
        writer = PdfWriter()
        for p in range(start, end):
            writer.add_page(reader.pages[p])
        out = src.with_name(f"{src.stem}_parte{i+1}.pdf")
        with open(out, "wb") as f:
            writer.write(f)
        print(f"Creado {out.name} con páginas {start+1}–{end}")
        chunks.append(out)
        # free memory for this chunk
        del writer
        gc.collect()
    del reader
    gc.collect()
    return chunks

def extract_text_to_md(pdf_file: Path):
    md = pdf_file.with_suffix(".md")
    with pdfplumber.open(str(pdf_file)) as pdf, open(md, "w", encoding="utf-8") as out:
        for i, page in enumerate(pdf.pages, start=1):
            txt = page.extract_text() or ""
            out.write(txt + "\n\n")
            print(f"[{pdf_file.name}] Página {i}/{len(pdf.pages)}")
    print(f"Texto extraído a {md.name}")
    gc.collect()

def pdf_to_md(src: Path, dest_name: str):
    md_path = src.with_name(dest_name).with_suffix(".md")
    with pdfplumber.open(src) as pdf, open(md_path, "w", encoding="utf-8") as out:
        total = len(pdf.pages)
        for i, page in enumerate(pdf.pages, start=1):
            text = page.extract_text()
            if not text:
                # Fallback a OCR
                imgs = convert_from_path(str(src), first_page=i, last_page=i, dpi=300)
                text = "\n".join(pytesseract.image_to_string(img, lang="spa") for img in imgs)
            out.write(text + "\n\n")
            print(f"Procesando página {i}/{total}")
    print(f"Conversión completada. Archivo generado: {md_path}")

if __name__ == "__main__":
    # 1) Pedir la ruta del PDF a convertir
    ruta = input("Ruta del archivo PDF a convertir: ").strip()
    src = Path(ruta)
    if not src.is_file():
        print("Error: no existe el archivo especificado.")
    else:
        # 2) Pedir nombre del archivo de resultado (sin extensión)
        nombre = input("Nombre del archivo de resultado (sin extensión): ").strip()
        # 3) Convertir todo el PDF a Markdown
        pdf_to_md(src, nombre)