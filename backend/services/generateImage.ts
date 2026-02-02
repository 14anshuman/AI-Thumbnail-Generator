import { GoogleGenAI } from "@google/genai";
import cloudinary from "./cloudinary.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const generateImage = async ({
  prompt,
  aspect_ratio,
}: {
  prompt: string;
  aspect_ratio?: string;
}) => {
  const sizeMap: Record<string, { width: number; height: number }> = {
    "16:9": { width: 1280, height: 720 },
    "1:1": { width: 1024, height: 1024 },
    "9:16": { width: 720, height: 1280 },
  };

  const size = sizeMap[aspect_ratio ?? "16:9"];

  // ✅ THIS IS THE CORRECT API
  const result = await ai.models.generateImages({
    model: "gemini-1.5-flash",
    prompt,
    imageParameters: {
      width: size.width,
      height: size.height,
      mimeType: "image/png",
    },
  });

  const base64Image =
    result.generatedImages?.[0]?.image?.imageBytes;

  if (!base64Image) {
    throw new Error("Gemini image generation failed");
  }

  // 🔥 Upload to Cloudinary
  const upload = await cloudinary.uploader.upload(
    `data:image/png;base64,${base64Image}`,
    {
      folder: "ai-thumbnails",
      resource_type: "image",
    }
  );

  return upload.secure_url;
};
