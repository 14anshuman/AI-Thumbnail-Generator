import React from 'react'






const thumbnailStyles = [
  {
    id: "Bold & Graphic",
    title: "Bold & Graphic",
    description: "High contrast, bold typography, striking visuals",
    icon: "✦",
  },
  {
    id: "Minimalist",
    title: "Minimalist",
    description: "Clean, simple, lots of white space",
    icon: "▢",
  },
  {
    id: "Photorealistic",
    title: "Photorealistic",
    description: "Photo-based, natural looking",
    icon: "🖼",
  },
  {
    id: "Illustrated",
    title: "Illustrated",
    description: "Hand-drawn, artistic, creative",
    icon: "✏",
  },
  {
    id: "Tech/Futuristic",
    title: "Tech / Futuristic",
    description: "Modern, sleek, tech-inspired",
    icon: "⌁",
  },
];

const StyleSelector = ({
    open,setOpen,thumbnailStyle,setThumbnailStyle
}) => {
  return (
       <div className="relative">
  <label className="text-sm font-medium">Thumbnail Style</label>

  {/* Selected value */}
  <button
    onClick={() => setOpen(!open)}
    className="mt-2 w-full flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-left hover:bg-white/10 transition"
  >
    <div>
        
      <p className="font-medium">{
        thumbnailStyles.find((s) => s.id === thumbnailStyle)
            ?.icon
      } {thumbnailStyle}</p>
      <p className="text-xs text-white/60">
      
        {
          thumbnailStyles.find((s) => s.id === thumbnailStyle)
            ?.description
        }
      </p>
    </div>

    <span className="text-white/60">▾</span>
  </button>

  {/* Dropdown menu */}
  {open && (
    <div className="absolute z-20 mt-2 w-full rounded-2xl bg-black/60 backdrop-blur border border-white/10 overflow-hidden">
      {thumbnailStyles.map((style, index) => (
        <button
          key={style.id}
          onClick={() => {
            setThumbnailStyle(style.id);
            setOpen(false);
          }}
          className={`w-full px-4 py-3 text-left transition
            ${index !== 0 ? "border-t border-white/10" : ""}
            ${
              thumbnailStyle === style.id
                ? "bg-gray-500/20"
                : "hover:bg-white/10"
            }
          `}
        >
          <p className="font-medium">{style.icon}     {style.title}</p>
          <p className="text-xs text-white/60">
            {style.description}
          </p>
        </button>
      ))}
    </div>
  )}
</div>
  )
}

export default StyleSelector