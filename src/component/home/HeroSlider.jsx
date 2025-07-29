import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://evv-rdc.com/assets/img/slides/camera/1442109526.jpg",
    title: "Bienvenue à l’Eglise EVV",
    description: "Une communauté de foi et d’amour à votre écoute.",
  },
  {
    image: "https://evv-rdc.com/assets/img/slides/camera/1257498362.jpg",
   
  },
  {
    image: "https://evv-rdc.com/assets/img/slides/camera/399177409.jpg",
    title: "Dieu est au centre",
    description: "Rejoignez-nous pour partager l’espérance en Christ.",
  },
];


export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden -mt-20">
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center w-full h-full flex items-center justify-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-black/50 p-6 rounded text-white text-center max-w-xl mx-auto">
            <h2 className="text-4xl font-bold mb-2">{slides[current].title}</h2>
            <p className="text-lg">{slides[current].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination cercles */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
