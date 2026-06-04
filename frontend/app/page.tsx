"use client";

import axios from "axios";
import { Upload } from "lucide-react";
import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import LoadingState from "@/components/LoadingState";

type PredictionResult = {
  prediction: string;
  confidence: number;
  ai_info: string;
};

export default function Home() {
  const [file, setFile] =
    useState<File | null>(null);

  const [preview, setPreview] =
    useState<string | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<PredictionResult | null>(null);

  const handleUpload = async () => {
    if (!file) return;

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append(
        "file",
        file
      );

      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        formData
      );

      setResult(response.data);
    } catch (err) {
      console.error(err);

      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-6">

      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">

          <h1 className="mb-6 text-7xl font-black tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            
            Smart Insect Identifier
          
          </h1>

          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            EfficientNetB0 • Gemini AI • FastAPI • Next.js
          </div>

          <p className="mx-auto max-w-2xl text-zinc-400 text-lg leading-8">
            AI-Powered Insect Recognition using
            EfficientNetB0 and Gemini AI
            for taxonomy, habitat analysis,
            characteristics, and fascinating facts.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-xl">

            <label className="flex h-72 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-cyan-500/40 bg-zinc-900/40 hover:border-cyan-400 hover:bg-zinc-900/60 transition-all duration-300">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="h-full w-full rounded-2xl object-cover"
                />
              ) : (
                <>
                  <Upload size={48} />

                  <p className="mt-4">
                    Upload insect image
                  </p>
                </>
              )}

              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => {

                  const selected =
                    e.target.files?.[0];

                  if (!selected) return;

                  setFile(selected);

                  setPreview(
                    URL.createObjectURL(
                      selected
                    )
                  );
                }}
              />
            </label>

            <button
              onClick={handleUpload}
              disabled={!file || loading}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 p-4 font-semibold"
            >
              Analyze Image
            </button>

            <div className="mt-5 grid grid-cols-3 gap-3">

              <div className="rounded-xl bg-zinc-800/50 p-3 text-center">
                <p className="text-xs text-zinc-400">
                  Model
                </p>

                <p className="font-semibold">
                  EfficientNetB0
                </p>
              </div>

              <div className="rounded-xl bg-zinc-800/50 p-3 text-center">
                <p className="text-xs text-zinc-400">
                  AI
                </p>

                <p className="font-semibold">
                  Gemini
                </p>
              </div>

              <div className="rounded-xl bg-zinc-800/50 p-3 text-center">
                <p className="text-xs text-zinc-400">
                  Classes
                </p>

                <p className="font-semibold">
                  118
                </p>
              </div>

            </div>

          </div>

          <div>

            {loading && (
              <LoadingState />
            )}

            {!loading &&
              result && (
                <ResultCard
                  prediction={
                    result.prediction
                  }
                  confidence={
                    result.confidence
                  }
                  ai_info={
                    result.ai_info
                  }
                />
              )}

          </div>

        </div>

      </div>

    </main>
  );
}
