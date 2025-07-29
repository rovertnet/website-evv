import React, { useState } from "react";
import { motion } from "framer-motion";

const events = [
  {
    date: "Dimanche 28 Juillet",
    title: "Culte dominical",
    time: "09h00 - 11h00",
    location: "Temple Central EVV",
  },
  {
    date: "Vendredi 2 Août",
    title: "Veillée de prière",
    time: "22h00 - 05h00",
    location: "Salle de prière, EVV",
  },
  {
    date: "Samedi 10 Août",
    title: "Retraite des femmes",
    time: "08h00 - 18h00",
    location: "Centre biblique, Kinshasa",
  },
  {
    date: "Dimanche 18 Août",
    title: "Culte d'action de grâce",
    time: "09h00 - 12h00",
    location: "Temple Central EVV",
  },
  {
    date: "Mercredi 21 Août",
    title: "Enseignement biblique",
    time: "18h00 - 20h00",
    location: "Salle des jeunes",
  },
  {
    date: "Samedi 24 Août",
    title: "Conférence jeunesse",
    time: "14h00 - 17h00",
    location: "Maison de la foi",
  },
];

const EVENTS_PER_PAGE = 3;

export default function EventsSections() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const visibleEvents = events.slice(startIndex, startIndex + EVENTS_PER_PAGE);

  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-32" id="evenements">
      <h2 className="text-3xl font-bold text-center mb-12">
        🗓️ Prochains Rendez-vous
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleEvents.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="text-sm text-gray-500 mb-2">{event.date}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {event.title}
            </h3>
            <p className="text-gray-700 mb-1">🕘 {event.time}</p>
            <p className="text-gray-700">📍 {event.location}</p>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span className="self-center">
          Page {currentPage} sur {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
    </section>
  );
}
