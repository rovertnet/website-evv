import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1605792657660-596af9009e62?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1536520002442-39764a41eaa1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1509027573957-1e1e25360a1b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550367084-03f8c1c9a708?auto=format&fit=crop&w=800&q=80",
];


export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-white py-20 px-6 lg:px-32">
      <h2 className="text-3xl font-bold text-center mb-12">Galerie</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Galerie ${index + 1}`}
              className="w-full h-64 object-cover transition duration-300 ease-in-out"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Image en grand"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
