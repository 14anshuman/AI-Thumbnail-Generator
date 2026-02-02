import React from "react";

const colorSchemes = [
  { id: "vibrant", name: "Vibrant", colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"] },
  { id: "sunset", name: "Sunset", colors: ["#FF8C42", "#FF3C38", "#A23B72"] },
  { id: "ocean", name: "Ocean", colors: ["#0077B6", "#00B4D8", "#90E0EF"] },
  { id: "forest", name: "Forest", colors: ["#2D6A4F", "#40916C", "#95D5B2"] },
  { id: "purple", name: "Purple Dream", colors: ["#7B2CBF", "#9D4EDD", "#C77DFF"] },
  { id: "monochrome", name: "Monochrome", colors: ["#212529", "#495057", "#ADB5BD"] },
  { id: "neon", name: "Neon", colors: ["#FF00FF", "#00FFFF", "#FFFF00"] },
  { id: "pastel", name: "Pastel", colors: ["#FFB5A7", "#FCD5CE", "#F8EDEB"] },
];

const ColorSchemeSelector = ({ color, setColor }) => {
  return (
    <div>
      <label className="text-sm font-medium">Color Scheme</label>

      <div className="flex flex-wrap gap-3 mt-3">
        {colorSchemes.map((scheme) => {
          const selected = color === scheme.id;

          return (
            <button
              key={scheme.id}
              onClick={() => setColor(scheme.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full border transition
                ${
                  selected
                    ? "border-gray-500 bg-gray-500/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }
              `}
            >
              {/* Color preview */}
              <div className="flex gap-0.5">
                {scheme.colors.map((clr, i) => (
                  <span
                    key={i}
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: clr }}
                  />
                ))}
              </div>

              <span className="text-xs font-medium">{scheme.name}</span>
            </button>
          );
        })}
      </div>

      <p className="text-xs text-white/50 mt-2">
        Selected:{" "}
        {colorSchemes.find((c) => c.id === color)?.name}
      </p>
    </div>
  );
};

export default ColorSchemeSelector;
