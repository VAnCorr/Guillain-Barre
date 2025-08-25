import math
from pathlib import Path
from PyPDF2 import PdfReader, PdfWriter

def split_pdf(src: Path, parts: int):
    reader = PdfReader(str(src))
    total = len(reader.pages)
    per = math.ceil(total / parts)
    out_paths = []
    for i in range(parts):
        start = i * per
        if start >= total:
            break
        end = min(start + per, total)
        writer = PdfWriter()
        for p in range(start, end):
            writer.add_page(reader.pages[p])
        out_path = src.with_name(f"{src.stem}_parte{i+1}.pdf")
        with open(out_path, "wb") as f:
            writer.write(f)
        out_paths.append(out_path)
        print(f"Creado {out_path.name} con páginas {start+1}-{end}")
    print("Tarea completada.")
    return out_paths

if __name__ == "__main__":
    ruta = input("Ruta del archivo PDF a dividir: ").strip().strip('"').strip("'")
    src = Path(ruta)
    if not src.is_file():
        print("Error: no existe el archivo especificado.")
    else:
        partes_input = input("¿En cuántas partes deseas dividirlo? ").strip()
        if not partes_input.isdigit() or int(partes_input) < 1:
            print("Error: introduce un número entero mayor que 0.")
        else:
            partes = int(partes_input)
            created = split_pdf(src, partes)
            print(f"Se crearon {len(created)} archivos.")