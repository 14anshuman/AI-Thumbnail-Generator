import { Request, Response } from "express";
import Thumbnail from "../models/Thumbnail.js";
import { generateThumbnailWithAI } from "../services/generateThumbnail.js";

export const generateThumbnail = async (req: Request, res: Response) => {
  try {
    const { userId } = req.session;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const {
      title,
      prompt: user_prompt,
      style,
      aspect_ratio,
      color_scheme,
      text_overlay,
    } = req.body;

    if (!title || !style || !user_prompt) {
      return res.status(400).json({
        message: "title, prompt, and style are required",
      });
    }

    const thumbnail = await Thumbnail.create({
      userId,
      title,
      user_prompt,
      style,
      aspect_ratio,
      color_scheme,
      text_overlay,
      isGenerating: true,
    });

    // 🔥 Trigger AI generation asynchronously
    generateThumbnailWithAI(thumbnail._id.toString());

    return res.status(202).json({
      message: "Thumbnail Generated Successfully",
      thumbnailId: thumbnail._id,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};



export const deleteThumbnail = async (req: Request, res: Response) => {
  try {
    const { userId } = req.session;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const thumbnail = await Thumbnail.findOneAndDelete({
      _id: id,
      userId,
    });

    if (!thumbnail) {
      return res.status(404).json({
        message: "Thumbnail not found",
      });
    }

    return res.status(200).json({
      message: "Thumbnail deleted successfully",
    });
  } catch (error) {
    console.error("Delete thumbnail error:", error);
    return res.status(500).json({
      message: "Failed to delete thumbnail",
    });
  }
};