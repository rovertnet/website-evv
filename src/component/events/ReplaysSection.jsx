import React from "react";
import { motion } from "framer-motion";

const videoData = [
  {
    title: "La foi qui déplace les montagnes",
    speaker: "Pasteur Jean K.",
    url: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    title: "Marcher dans la lumière de Christ",
    speaker: "Apôtre Grâce M.",
    url: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    title: "Le pouvoir de la prière",
    speaker: "Évangéliste Rachel N.",
    url: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
  // Ajoute d'autres sermons ici
];

export default function ReplaysSection() {
  return (
    <section className="bg-white py-20 px-6 lg:px-32" id="replays">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          🎥 Messages & Replays
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {videoData.map((video, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-64"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
                <p className="text-sm text-gray-600">par {video.speaker}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
