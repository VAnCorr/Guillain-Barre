import pypandoc
from pathlib import Path

def ensure_pandoc():
    try:
        # Comprueba si pandoc está en PATH
        _ = pypandoc.get_pandoc_version()
    except OSError:
        print("Pandoc no encontrado en el sistema. Descargando una copia local…")
        pypandoc.download_pandoc()

def epub_to_md(src: Path, dest: Path):
    try:
        pypandoc.convert_file(str(src), 'markdown', outputfile=str(dest))
        print(f"Conversión completada. Archivo generado: {dest}")
    except Exception as e:
        print("Error al convertir el EPUB:", e)

if __name__ == "__main__":
    ensure_pandoc()
    ruta = input("Ruta del archivo EPUB a convertir: ").strip().strip('"').strip("'")
    src = Path(ruta)
    if not src.is_file():
        print("Error: no existe el archivo especificado.")
    else:
        nombre = input("Nombre del archivo de salida (sin extensión): ").strip()
        dest = src.with_name(nombre).with_suffix(".md")
        epub_to_md(src, dest)