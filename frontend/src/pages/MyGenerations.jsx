import React, { useEffect, useState } from "react";
import { dummyThumbnails } from "../assets/assets";
import ThumbnailCard from "../components/ThumbnailCard";
import Tilt from "react-parallax-tilt"

const MyGenerations = () => {
  const [thumbnails, setThumbnails] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchThumbnails = async () => {
    setLoading(true);

    // simulate API delay
    setTimeout(() => {
      setThumbnails(dummyThumbnails);
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    fetchThumbnails();
  }, []);

  const handleDelete = async (id) => {
    // optimistic UI update
    console.log(id);
    
  };

  return (
    <div className="mt-14 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-200">
          My Generations
        </h1>
        <p className="text-sm text-zinc-300 mt-1">
          View and manage all your AI-generated thumbnails
        </p>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-64 rounded-2xl bg-white/5 border border-white/10 animate-pulse"
            />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && thumbnails.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center text-white/60 mt-32">
          <div className="text-5xl mb-4">🖼️</div>
          <p className="font-medium">No thumbnails yet</p>
          <p className="text-sm mt-1">
            Generate your first thumbnail to see it here
          </p>
        </div>
      )}

      {/* Thumbnails grid */}
      {!loading && thumbnails.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {thumbnails.map((thumbnail) => (
            <Tilt
  tiltMaxAngleX={8}
  tiltMaxAngleY={8}
  scale={1.02}
  transitionSpeed={800}
  glareEnable={true}
  glareMaxOpacity={0.12}
  glareColor="#ffffff"
  glarePosition="all"
>
            <ThumbnailCard
              key={thumbnail.id}
              thumbnail={thumbnail}
              onDelete={handleDelete}
            />
            </Tilt>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGenerations;
