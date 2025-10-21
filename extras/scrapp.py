import csv
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from bs4 import BeautifulSoup
import pandas as pd

# === CONFIGURACIÓN ===
INPUT_CSV = rf"C:\Users\pe_du\Desktop\PEDRO D\virtual_gallery\extras\Estado de Contenido de VG - Artistas pendientes.csv"      # Archivo local con columna 'artista'
OUTPUT_CSV = "resultados_artistas.csv"

# === CONFIGURACIÓN DEL NAVEGADOR ===
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--disable-gpu")

driver = webdriver.Chrome(options=chrome_options)


def buscar_wikipedia(artista):
    """Busca en Wikipedia la biografía, influencias y curiosidades."""
    url = f"https://es.wikipedia.org/wiki/{artista.replace(' ', '_')}"
    driver.get(url)
    time.sleep(1)

    bio, influencias, curiosidades = "", "", ""

    try:
        # Biografía (primer párrafo)
        paragraphs = driver.find_elements(By.CSS_SELECTOR, "p")
        if paragraphs:
            bio = paragraphs[0].text.strip()
    except NoSuchElementException:
        bio = "No encontrada"

    # Buscar secciones específicas
    html = driver.page_source
    soup = BeautifulSoup(html, "html.parser")
    headers = soup.find_all(["h2", "h3"])

    for h in headers:
        titulo = h.get_text().lower()
        if "influenc" in titulo:
            influencias = h.find_next("p").get_text(strip=True) if h.find_next("p") else ""
        if "curios" in titulo or "anécdot" in titulo:
            curiosidades = h.find_next("p").get_text(strip=True) if h.find_next("p") else ""

    return bio, influencias, curiosidades


def buscar_obras(artista):
    """Busca 5 cuadros famosos del artista en Google Imágenes (solo títulos)."""
    query = f"{artista} cuadros famosos"
    driver.get(f"https://www.google.com/search?q={query}&tbm=isch")
    time.sleep(2)

    obras = []
    images = driver.find_elements(By.CSS_SELECTOR, "img")
    for img in images[:10]:  # Tomamos las primeras 10 imágenes
        alt_text = img.get_attribute("alt")
        if alt_text and alt_text not in obras:
            obras.append(alt_text)
        if len(obras) >= 5:
            break

    return obras


# === PROCESAMIENTO PRINCIPAL ===
resultados = []

with open(INPUT_CSV, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        artista = row.get("Artistas por hacer") or row.get("nombre") or list(row.values())[0]
        print(f"🔎 Buscando información sobre: {artista}")

        bio, influencias, curiosidades = buscar_wikipedia(artista)
        obras = buscar_obras(artista)

        resultados.append({
            "artista": artista,
            "biografia": bio,
            "influencias": influencias,
            "curiosidades": curiosidades,
            "obras_famosas": "; ".join(obras)
        })

        print(f"✅ Completado: {artista}")
        time.sleep(1)

# === GUARDAR RESULTADOS ===
df = pd.DataFrame(resultados)
df.to_csv(OUTPUT_CSV, index=False, encoding="utf-8-sig")

driver.quit()
print(f"\n📁 Resultados guardados en: {OUTPUT_CSV}")
