import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Ecole des Prédicateurs",
    content: null,
  },
  {
    id: 2,
    title: "Ecole des Epîtres",
    content: (
      <>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          Ecole des Epîtres
        </h3>
        <p className="text-sm text-gray-700 mb-4">
          Une plate-forme mise à la disposition des chrétiens afin de faire une
          étude approfondie sur les lettres des apôtres aux différentes églises
          fondées ; étant la base de la doctrine du Christ. Une compréhension
          erronée peut amener à des mauvaises interprétations qui rongent le
          milieu chrétien aujourd’hui.
        </p>

        <p className="text-sm text-gray-700 mb-3">
          👉 Avec lien d’inscription, groupe WhatsApp et syllabus à disposition.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://example.com/inscription"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm text-center"
          >
            📝 Lien d’inscription
          </a>
          <a
            href="https://wa.me/243812345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm text-center"
          >
            💬 Rejoindre WhatsApp
          </a>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Emission télévisé",
    content: null,
  },
  {
    id: 4,
    title: "Conférences et séminaires bibliques",
    content: null,
  },
  {
    id: 5,
    title: "Formation en ligne et en présentiels",
    content: null,
  },
  {
    id: 6,
    title: "Vente de livres",
    content: null,
  },
];

export default function EVVServices() {
  const [activeId, setActiveId] = useState(2);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-10 p-6 lg:p-16 bg-white">
      {/* Image avec animation */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://evv-rdc.com/assets/img/bckg/IMG_8878.jpg"
          alt="EVV service"
          className="rounded shadow-lg object-cover"
        />
      </motion.div>

      {/* Services */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">EVV services</h2>

        <div className="flex flex-col">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveId(service.id)}
              className={`text-left font-semibold px-4 py-2 border border-white ${
                activeId === service.id
                  ? "bg-green-600 text-white"
                  : "bg-lime-400 text-black hover:bg-lime-500"
              }`}
            >
              {service.id}. {service.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {services.find((s) => s.id === activeId)?.content && (
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-4 bg-white p-4 border rounded shadow"
            >
              {services.find((s) => s.id === activeId)?.content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
