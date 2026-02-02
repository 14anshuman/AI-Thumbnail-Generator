import Thumbnail from "../models/Thumbnail.js";
import { generateImage } from "./generateImage.js";

export const generateThumbnailWithAI = async (thumbnailId: string) => {
  try {
    const thumbnail = await Thumbnail.findById(thumbnailId);
    if (!thumbnail) return;

    // 🔧 Build AI prompt
    const prompt = `
YouTube thumbnail:
Title: ${thumbnail.title}
Style: ${thumbnail.style}
Aspect ratio: ${thumbnail.aspect_ratio}
Color scheme: ${thumbnail.color_scheme}
Text overlay: ${thumbnail.text_overlay}
User prompt: ${thumbnail.user_prompt}
`;

    const imageUrl = await generateImage({
      prompt,
      aspect_ratio: thumbnail.aspect_ratio,
    });

    await Thumbnail.findByIdAndUpdate(thumbnailId, {
      image_url: imageUrl,
      prompt_used: prompt,
      isGenerating: false,
    });
  } catch (err) {
    console.error("AI generation failed:", err);

    await Thumbnail.findByIdAndUpdate(thumbnailId, {
      isGenerating: false,
    });
  }
};
