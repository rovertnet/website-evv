import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Ecole des Prédicateurs",
    content: (
      <p>
        Formation destinée aux prédicateurs souhaitant approfondir leurs
        connaissances bibliques.
      </p>
    ),
  },
  {
    id: 2,
    title: "Ecole des Epîtres",
    content: (
      <>
        <p>
          Une étude approfondie des lettres des apôtres aux différentes églises
          fondées, afin de mieux comprendre la doctrine du Christ.
        </p>
        <p className="mt-2 text-sm">
          👉 Avec lien d’inscription, groupe WhatsApp et syllabus à disposition.
        </p>
        <div className="flex gap-3 mt-3">
          <a
            href="#"
            className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 text-sm"
          >
            📝 Inscription
          </a>
          <a
            href="https://wa.me/243812345678"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
          >
            💬 WhatsApp
          </a>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Emission télévisée",
    content: (
      <p>
        Diffusion hebdomadaire d'émissions d'édification biblique sur plusieurs
        chaînes locales.
      </p>
    ),
  },
  {
    id: 4,
    title: "Conférences et séminaires bibliques",
    content: (
      <p>
        Rencontres annuelles ouvertes au public pour enseigner la parole avec
        des orateurs invités.
      </p>
    ),
  },
  {
    id: 5,
    title: "Formation en ligne et en présentiels",
    content: (
      <p>
        Sessions disponibles à distance ou dans nos locaux avec certification à
        la fin.
      </p>
    ),
  },
  {
    id: 6,
    title: "Vente de livres",
    content: (
      <p>
        Accédez à une collection d’ouvrages écrits par nos fondateurs et
        enseignants.
      </p>
    ),
  },
];

export default function EVVServices() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <SectionBanner
        title="🛠️ Nos Services"
        subtitle="Découvrez les différents services offerts par notre église pour vous accompagner spirituellement et socialement."
        image="https://cdn.pixabay.com/photo/2016/11/29/06/17/architecture-1867187_1280.jpg"
      />

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
            alt="EVV services"
            className="rounded shadow-lg object-cover"
          />
        </motion.div>

        {/* Accordéons */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Nos services</h2>
          <div className="divide-y">
            {services.map((service) => (
              <div key={service.id} className="py-2">
                <button
                  onClick={() => toggle(service.id)}
                  className="w-full text-left font-semibold text-green-800 flex justify-between items-center"
                >
                  <span>
                    {service.id}. {service.title}
                  </span>
                  <span>{activeId === service.id ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {activeId === service.id && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-2 text-sm text-gray-700"
                    >
                      {service.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
