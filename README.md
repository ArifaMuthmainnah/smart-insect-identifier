# Smart Insect Identifier

## Deskripsi Proyek

Smart Insect Identifier merupakan aplikasi berbasis Artificial Intelligence (AI) yang dirancang untuk mengidentifikasi jenis serangga dari gambar yang diunggah oleh pengguna. Sistem ini memanfaatkan model Deep Learning EfficientNetB0 untuk melakukan klasifikasi serangga, kemudian menggunakan Gemini AI untuk menghasilkan informasi biologis yang lebih lengkap mengenai serangga yang terdeteksi.

Aplikasi ini dikembangkan sebagai proyek pembelajaran Machine Learning dan pengembangan aplikasi web modern dengan mengintegrasikan teknologi Computer Vision, Large Language Model (LLM), serta arsitektur frontend dan backend yang terpisah.

---

## Tujuan Pengembangan

Tujuan utama dari aplikasi ini adalah:

- Mengidentifikasi jenis serangga secara otomatis dari gambar.
- Menampilkan tingkat kepercayaan (confidence score) hasil prediksi model.
- Memberikan informasi tambahan mengenai serangga yang terdeteksi.
- Mengintegrasikan model Machine Learning dengan aplikasi web yang interaktif.
- Menunjukkan implementasi nyata pemanfaatan Deep Learning dan Generative AI dalam bidang biologi dan identifikasi spesies.

---

## Fitur Utama

### 1. Upload Gambar Serangga

Pengguna dapat mengunggah gambar serangga melalui antarmuka web yang sederhana dan mudah digunakan.

### 2. Identifikasi Otomatis

Model EfficientNetB0 akan melakukan klasifikasi terhadap gambar yang diunggah dan menentukan jenis serangga yang paling sesuai.

### 3. Confidence Score

Sistem menampilkan tingkat keyakinan model terhadap hasil prediksi dalam bentuk persentase.

### 4. Analisis Menggunakan Gemini AI

Setelah proses klasifikasi selesai, Gemini AI akan menghasilkan informasi tambahan berupa:

- Nama umum
- Nama ilmiah
- Habitat
- Karakteristik
- Peran ekologis
- Fakta menarik

### 5. Antarmuka Modern

Frontend dibangun menggunakan Next.js dan Tailwind CSS sehingga memiliki tampilan modern, responsif, dan nyaman digunakan.

---

## Teknologi yang Digunakan

### Backend

- FastAPI
- TensorFlow / Keras
- EfficientNetB0
- Pillow (PIL)
- Google Gemini API
- Python

### Frontend

- Next.js
- React
- Tailwind CSS
- Axios
- React Markdown

---

## Arsitektur Sistem

```text
Pengguna
    │
    ▼
Frontend (Next.js)
    │
    ▼
FastAPI Backend
    │
    ├── EfficientNetB0
    │       │
    │       ▼
    │   Prediksi Serangga
    │
    └── Gemini AI
            │
            ▼
    Informasi Biologis
            │
            ▼
Frontend
```

---

## Struktur Folder

```text
smart-insect-identifier/
│
├── backend/
│   │
│   ├── app.py
│   ├── services/
│   │   ├── ml_service.py
│   │   └── gemini_service.py
│   │
│   ├── models/
│   ├── uploads/
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   │
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   └── next.config.ts
│
└── README.md
```

---

## Instalasi dan Menjalankan Proyek

### 1. Clone Repository

```bash
git clone https://github.com/username/smart-insect-identifier.git
cd smart-insect-identifier
```

---

## Menjalankan Backend

Masuk ke folder backend:

```bash
cd backend
```

Buat virtual environment:

```bash
python -m venv venv
```

Aktifkan virtual environment:

### Windows

```bash
venv\Scripts\activate
```

### Linux/MacOS

```bash
source venv/bin/activate
```

Install seluruh dependency:

```bash
pip install -r requirements.txt
```

Buat file `.env`

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Jalankan backend:

```bash
uvicorn app:app --reload
```

Backend akan berjalan pada:

```text
http://127.0.0.1:8000
```

---

## Menjalankan Frontend

Masuk ke folder frontend:

```bash
cd frontend
```

Install dependency:

```bash
npm install
```

Jalankan aplikasi:

```bash
npm run dev
```

Frontend akan berjalan pada:

```text
http://localhost:3000
```

---

## Cara Menggunakan Aplikasi

1. Buka aplikasi melalui browser.
2. Klik area upload gambar.
3. Pilih gambar serangga yang ingin diidentifikasi.
4. Klik tombol **Analyze Image**.
5. Tunggu proses analisis selesai.
6. Sistem akan menampilkan:
   - Nama serangga hasil prediksi.
   - Persentase confidence.
   - Informasi biologis hasil analisis AI.

---

## API Endpoint

### Prediksi Serangga

**Endpoint**

```http
POST /predict
```

**Request**

Form Data:

```text
file : image
```

**Response**

```json
{
  "prediction": "ladybug",
  "confidence": 97.91,
  "ai_info": "Informasi serangga hasil analisis Gemini AI"
}
```

---

## Hasil yang Diharapkan

Dengan mengunggah gambar serangga, pengguna dapat memperoleh:

- Identifikasi spesies secara otomatis.
- Tingkat keyakinan model terhadap hasil prediksi.
- Informasi biologis yang lebih mudah dipahami.
- Pengetahuan tambahan mengenai habitat, karakteristik, dan peran serangga dalam ekosistem.

---

## Pengembang

Proyek ini dikembangkan sebagai bagian dari tugas dan pembelajaran pada mata kuliah Machine Learning.

Universitas Syiah Kuala