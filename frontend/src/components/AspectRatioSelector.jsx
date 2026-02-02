import React from "react";
import {
  RectangleHorizontal,
  RectangleVertical,
  Square,
} from "lucide-react";

const aspectRatios = [
  {
    ratio: "16:9",
    icon: RectangleHorizontal,
  },
  {
    ratio: "1:1",
    icon: Square,
  },
  {
    ratio: "9:16",
    icon: RectangleVertical,
  },
];

const AspectRatioSelector = ({ aspectRatio, setAspectRatio }) => {
  return (
    <div>
      <label className="text-sm font-medium">Aspect Ratio</label>

      <div className="grid grid-cols-3 gap-3 mt-2">
        {aspectRatios.map(({ ratio, icon: Icon }) => {
          const selected = aspectRatio === ratio;

          return (
            <button
              key={ratio}
              onClick={() => setAspectRatio(ratio)}
              className={`flex flex-col items-center justify-center gap-1 py-3 rounded-lg border transition
                ${
                  selected
                    ? "border-gray-500 bg-gray-500/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }
              `}
            >
              <Icon
                className={`h-5 w-5 ${
                  selected ? "text-gray-400" : "text-white/70"
                }`}
              />
              <span className="text-xs font-medium">{ratio}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AspectRatioSelector;
