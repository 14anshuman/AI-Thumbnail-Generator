import React, { useState } from "react";
import {
  DownloadIcon,
  Trash2Icon,
  ArrowRightIcon,
  MoreVertical,
} from "lucide-react";
import { useNavigate,Link, Navigate } from "react-router-dom";

const ThumbnailCard = ({ thumbnail, onDelete }) => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const handleDownload = () => {
    if (!thumbnail?.image_url) return;
    window.open(thumbnail.image_url, "_blank");
    setOpenMenu(false);
  };

  const handleNavigate = () => {
    navigate(`/preview?thumbnail_url=${thumbnail.image_url}&title=${thumbnail.title}`)

    // setOpenMenu(false);
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
       
  <img 
    src={thumbnail.image_url} 
    alt={thumbnail.title} 
    className="h-full w-full object-cover" 
  />

       
        

        {/* Desktop hover overlay */}
        <div className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center gap-3">
          <ActionButtons
            onDownload={handleDownload}
            onNavigate={handleNavigate}
            onDelete={() => onDelete(thumbnail.id)}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 space-y-2">
        <Link to={`/generate/${thumbnail._id}`}>
         <p className="text-sm sm:text-base font-medium truncate">
          {thumbnail.title}
        </p>
        
        </Link>

        <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-white/70">
          <Chip label={thumbnail.style} />
          <Chip label={thumbnail.color_scheme} />
          <Chip label={thumbnail.aspect_ratio} />
        </div>
        

        {/* Mobile actions */}
        <div className="flex items-center justify-between md:hidden mt-2">
          <p className="text-xs text-white/40">
            {new Date(thumbnail.created_at).toLocaleDateString()}
          </p>

          <div className="relative">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              <MoreVertical className="h-4 w-4 text-white/70" />
            </button>

            {openMenu && (
                <>
              <div className="absolute right-0 bottom-10 z-20 w-40 rounded-xl bg-black/80 backdrop-blur border border-white/20 shadow-lg overflow-hidden">
               
                <MenuItem
                  icon={DownloadIcon}
                  label="Download"
                  onClick={handleDownload}
                />
                <Link target="_blank" to={`/preview?thumbnail_url=${thumbnail.image_url}&title=${thumbnail.title}`}>
                 <MenuItem
                  icon={ArrowRightIcon}
                  label="Open"
                />
                </Link>
                <MenuItem
                  icon={Trash2Icon}
                  label="Delete"
                  danger
                  onClick={() => onDelete(thumbnail.id)}
                />
              </div>
              </>
            )}
          </div>
        </div>

        {/* Desktop date */}
        <p className="hidden md:block text-xs text-white/40">
          {new Date(thumbnail.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

/* ---------- Helper Components ---------- */

const ActionButtons = ({ onDownload, onNavigate, onDelete }) => (
  <>
    <IconButton icon={DownloadIcon} onClick={onDownload} />
    <IconButton icon={ArrowRightIcon} onClick={onNavigate} />
    <IconButton
      icon={Trash2Icon}
      onClick={onDelete}
      danger
    />
  </>
);

const IconButton = ({ icon: Icon, onClick, danger }) => (
  <button
    onClick={onClick}
    className={`rounded-lg p-2 backdrop-blur border transition
      ${
        danger
          ? "bg-red-500/20 border-red-500/40 hover:bg-red-500/30"
          : "bg-white/10 border-white/20 hover:bg-white/20"
      }`}
  >
    <Icon className={`h-4 w-4 ${danger ? "text-red-300" : "text-white"}`} />
  </button>
);

const MenuItem = ({ icon: Icon, label, onClick, danger }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition
      ${
        danger
          ? "text-red-300 hover:bg-red-500/20"
          : "text-white hover:bg-white/10"
      }`}
  >
    <Icon className="h-4 w-4" />
    {label}
  </button>
);

const Chip = ({ label }) => (
  <span className="rounded-full bg-white/10 px-1.5 py-0.5">
    {label}
  </span>
);

export default ThumbnailCard;
