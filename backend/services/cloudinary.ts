import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  
  api_key: process.env.CLOUDINARY_API_KEY!,
});

export default cloudinary;
