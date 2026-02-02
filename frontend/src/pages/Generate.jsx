import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AspectRatioSelector from "../components/AspectRatioSelector";
import StyleSelector from "../components/StyleSelector";
import ColorSchemeSelector from "../components/ColorSchemeSelector";
import PreviewPanel from "../components/PreviewPanel";
import { dummyThumbnails } from "../assets/assets";
import { setStyle } from "framer-motion";
import axiosInstance from "../config/api";










const Generate = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [thumbnailStyle, setThumbnailStyle] = useState("Photorealistic");
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("Vibrant");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
        const {id}=await axiosInstance.post('/api/thumbnail/generate',{
          title,
          prompt:additionalDetails,
          style:thumbnailStyle,
          aspectRatio,
          color_scheme:color,

        })
         
        setThumbnail(id);
    } catch (error) {
      console.log(error);
      
    }
  };

  const fetchThumbnail = async()=>{
    if(id){
        const thumbnail=dummyThumbnails.find((thumbnail)=>thumbnail._id=== id)
        setThumbnail(thumbnail);
        setAdditionalDetails(thumbnail.user_prompt);
        setTitle(thumbnail.title)
        setColor(thumbnail.color_scheme);
        setAspectRatio(thumbnail.aspect_ratio);
        setStyle(thumbnail.style);
        setLoading(false);
    }

  }

  useEffect(()=>{
    if(id){
        fetchThumbnail();
    }
  },[id])


  return (
    <div className="pt-20 px-6 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
        <div className="grid lg:grid-cols-[420px_1fr] gap-4">
          {/* LEFT PANEL */}
          <div className={`space-y-6 ${id && "pointer-events-none"} rounded-2xl border border-dashed border-white/20 bg-white/5 p-5 `}>
            <div>
              <h1 className="text-2xl font-semibold">
                Create Your Thumbnail
              </h1>
              <p className="text-sm text-white/70 mt-1">
                Describe your vision and let AI bring it to life
              </p>
            </div>

            {/* Title */}
            <div>
              <label className="text-sm font-medium">Title or Topic</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={100}
                placeholder="e.g. 10 Tips for Better Sleep"
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-500"
              />
              <p className="text-xs text-right text-white/50 mt-1">
                {title.length}/100
              </p>
            </div>

            {/* Aspect Ratio */}
            <div>
             <AspectRatioSelector aspectRatio={aspectRatio} setAspectRatio={setAspectRatio}/>
            </div>

            {/* Style */}
           
           <StyleSelector  open={open} setOpen={setOpen} thumbnailStyle={thumbnailStyle} setThumbnailStyle={setThumbnailStyle} />




            {/* Color Scheme */}
           <ColorSchemeSelector color={color} setColor={setColor} />

            {/* Additional Prompt */}
            <div>
              <label className="text-sm font-medium">
                Additional Prompts (optional)
              </label>
              <textarea
                rows={3}
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                placeholder="Bold text, expressive face, high contrast"
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none resize-none"
              />
            </div>

            {/* Generate Button */}
            {!id && (
                <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full cursor-pointer mt-2 py-3 rounded-xl bg-gray-600 hover:bg-gray-700 transition font-medium"
            >
              {loading ? "Generating..." : "Generate Thumbnail"}
            </button>
            )}
          </div>

          {/* RIGHT PANEL */}
          <PreviewPanel thumbnail={thumbnail} loading={loading} aspectRatio={aspectRatio}/>
        </div>
      </main>
    </div>
  );
};

export default Generate;
