import { Request, Response } from "express";
import Thumbnail from "../models/Thumbnail.js";

export const getUserThumbnails = async (req: Request, res: Response) => {
  try {
    const { userId } = req.session;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const thumbnails = await Thumbnail.find({ userId })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      thumbnails,
    });
  } catch (error) {
    console.error("Get user thumbnails error:", error);
    return res.status(500).json({
      message: "Failed to fetch thumbnails",
    });
  }
};




import { Request, Response } from "express";
import Thumbnail from "../models/Thumbnail.js";

export const getThumbnailById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.session;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    if (!id) {
      return res.status(400).json({
        message: "Thumbnail id is required",
      });
    }

    const thumbnail = await Thumbnail.findOne({
      _id: id,
      userId,
    });

    if (!thumbnail) {
      return res.status(404).json({
        message: "Thumbnail not found",
      });
    }

    return res.status(200).json({
      thumbnail,
    });
  } catch (error) {
    console.error("Get thumbnail by id error:", error);
    return res.status(500).json({
      message: "Failed to fetch thumbnail",
    });
  }
};

