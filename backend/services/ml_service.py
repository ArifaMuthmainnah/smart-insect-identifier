import json
import numpy as np

from tensorflow.keras.models import load_model
from tensorflow.keras.applications.efficientnet import preprocess_input


class MLService:

    def __init__(self):

        self.model = load_model(
            "artifacts/final_model.keras"
        )

        with open(
            "artifacts/idx_to_class.json"
        ) as f:

            self.idx_to_class = json.load(f)

        with open(
            "artifacts/metadata.json"
        ) as f:

            self.metadata = json.load(f)

        self.img_size = self.metadata["img_size"]

    def preprocess(self, image):

        image = image.convert("RGB")

        image = image.resize(
            (self.img_size, self.img_size)
        )

        image = np.array(image)

        image = image.astype("float32")

        image = preprocess_input(
            image
        )

        image = np.expand_dims(
            image,
            axis=0
        )

        return image

    def predict(self, image):

        x = self.preprocess(image)

        pred = self.model.predict(
            x,
            verbose=0
        )

        idx = np.argmax(pred)

        confidence = float(
            np.max(pred)
        )

        insect = self.idx_to_class[
            str(idx)
        ]

        return insect, confidence