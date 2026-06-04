from io import BytesIO

from PIL import Image

from fastapi import (
    FastAPI,
    UploadFile,
    File
)

from fastapi.middleware.cors import CORSMiddleware

from services.ml_service import MLService
from services.gemini_service import GeminiService


app = FastAPI(
    title="Smart Insect Identifier"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

ml_service = MLService()
gemini_service = GeminiService()


@app.get("/")
def root():

    return {
        "message": "Backend Running"
    }


@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):

    image_bytes = await file.read()

    image = Image.open(
        BytesIO(image_bytes)
    )

    insect, confidence = (
        ml_service.predict(image)
    )

    ai_info = (
        gemini_service.generate_insect_info(
            insect,
            image
        )
    )

    return {
        "prediction": insect,
        "confidence": round(
            confidence * 100,
            2
        ),
        "ai_info": ai_info
    }