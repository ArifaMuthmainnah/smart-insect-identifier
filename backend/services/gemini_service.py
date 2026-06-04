import os

from dotenv import load_dotenv

from google import genai
from google.genai import types

load_dotenv()


class GeminiService:

    def __init__(self):

        self.client = genai.Client(
            api_key=os.getenv(
                "GEMINI_API_KEY"
            )
        )

    def generate_insect_info(
        self,
        insect_name,
        image
    ):

        prompt = f"""
Anda adalah ahli entomologi profesional.

Model klasifikasi AI mendeteksi:

{insect_name}

Analisis gambar serangga yang diberikan.

PENTING:

- Gunakan GAMBAR sebagai sumber utama.
- Gunakan hasil model hanya sebagai petunjuk.
- Jika gambar dan label model tidak sesuai, prioritaskan gambar.
- Jangan mengarang informasi yang tidak diketahui.
- Fokus menjelaskan serangga pada gambar.

Gunakan format markdown berikut:

# Identifikasi Serangga

## Nama Umum

Tuliskan nama umum yang dikenal masyarakat.

## Nama Ilmiah

Tuliskan nama ilmiah jika dapat diidentifikasi.

## Deskripsi Singkat

Jelaskan serangga tersebut secara ringkas.

## Habitat

Jelaskan habitat dan persebarannya.

## Karakteristik

Jelaskan:

- Bentuk tubuh:
- Warna:
- Ukuran:
- Perilaku khas:
- Cara hidup:

## Peran Ekologis

Jelaskan manfaat atau perannya dalam ekosistem.

## Fakta Menarik

Berikan 3-5 fakta menarik dalam bentuk bullet list.

Gunakan Bahasa Indonesia.
"""

        try:

            response = self.client.models.generate_content(
                model="gemini-2.5-flash",
                contents=[
                    prompt,
                    image
                ],
                config=types.GenerateContentConfig(
                    thinking_config=types.ThinkingConfig(
                        thinking_budget=0
                    )
                )
            )

            return response.text

        except Exception as e:

            print(e)

            return """
# Informasi Tidak Tersedia

Analisis AI gagal dilakukan.

Silakan coba lagi.
"""