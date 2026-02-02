import { DownloadIcon } from "lucide-react";
import React from "react";

const aspectRatioClasses = {
  "16:9": "aspect-video",
  "1:1": "aspect-square",
  "9:16": "aspect-[9/16]",
};

const PreviewPanel = ({ thumbnail, loading, aspectRatio }) => {
  const handleDownload = () => {
    if (!thumbnail?.image_url) return;
    window.open(thumbnail.image_url, "_blank");
  };

  return (
    <div>
      {/* Aspect-ratio container */}
      <div
        className={`group relative w-full max-w-xl mx-auto rounded-2xl border border-dashed border-white/20 
        bg-white/5 p-5 overflow-hidden 
        ${aspectRatioClasses[aspectRatio] || "aspect-video"}
        flex items-center justify-center`}
      >
        {/* Loading */}
        {loading && (
          <div className="text-center text-white/70 animate-pulse">
            <div className="mb-3 text-4xl">✨</div>
            <p className="font-medium">Generating thumbnail…</p>
            <p className="text-sm">This may take a few seconds</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !thumbnail && (
          <div className="text-center text-white/60">
            <div className="mb-3 text-4xl">🖼️</div>
            <p className="font-medium">No thumbnail yet</p>
            <p className="text-sm">
              Select options and click Generate
            </p>
          </div>
        )}

        {/* Generated thumbnail */}
        {!loading && thumbnail && (
          <>
            <img
              src={thumbnail.image_url}
              alt={thumbnail.title}
              className="w-full h-full object-cover"
            />

            {/* Download overlay */}
            <div className="absolute inset-0 flex items-end justify-center bg-black/10
                            opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                onClick={handleDownload}
                className="mb-4 flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2
                           text-sm font-medium text-white backdrop-blur
                           border border-white/20 hover:bg-white/20 hover:border-white/40
                           transition-all duration-200 active:scale-95"
              >
                <DownloadIcon className="size-4" />
                Download Thumbnail
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PreviewPanel;
