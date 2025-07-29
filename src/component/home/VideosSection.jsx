import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const videos = [
  {
    id: "kXYiU_JCYtU",
    title: "Culte du dimanche",
    description: "Revivez notre dernier culte.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Séminaire sur la foi",
    description: "Un message fort sur la foi.",
  },
  {
    id: "eVTXPUF4Oz4",
    title: "Rencontre jeunesse",
    description: "Événement spécial des jeunes.",
  },
  {
    id: "rYEDA3JcQqw",
    title: "Culte spécial",
    description: "Moments forts à ne pas manquer.",
  },
];

export default function VideosSection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef();

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Nos Vidéos</h2>
        <p className="text-gray-600">
          Séminaires, cultes et rencontres spéciales en replay.
        </p>
      </div>

      {/* Horizontal scroll */}
      <motion.div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-1 pb-4 scroll-smooth snap-x snap-mandatory"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {videos.map(({ id, title, description }, index) => (
          <div
            key={id}
            onClick={() => setActiveVideo(id)}
            className="min-w-[300px] max-w-[320px] bg-white shadow rounded-lg snap-start cursor-pointer hover:scale-105 transition duration-300"
          >
            <img
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              className="w-full object-cover aspect-video rounded-t"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Modal video */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Video player"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/50 rounded px-3 hover:bg-black"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
