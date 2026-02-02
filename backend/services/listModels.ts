import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBGyIVqTZzRowylD1hRO-pxOyCTOrjPsiI",
});

async function listModels() {
  try {
    const models = await ai.models.list();

    models.models.forEach((model) => {
      console.log({
        name: model.name,
        displayName: model.displayName,
        supportedGenerationMethods: model.supportedGenerationMethods,
      });
    });
  } catch (error) {
    console.error("Failed to list models:", error);
  }
}

listModels();
