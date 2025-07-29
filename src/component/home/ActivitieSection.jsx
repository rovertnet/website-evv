import React from "react";
import { motion } from "framer-motion";
import { Book, BookOpenCheck, HeartHandshake } from "lucide-react";

const activities = [
  {
    title: "Culte du Dimanche",
    description:
      "Rejoignez-nous chaque dimanche pour un culte inspirant et rassembleur.",
    icon: <BookOpenCheck className="mx-auto mb-6 text-blue-600" size={64} />,
  },
  {
    title: "Etudes Bibliques",
    description:
      "Approfondissez votre foi avec nos études bibliques hebdomadaires.",
    icon: <Book className="mx-auto mb-6 text-blue-600" size={64} />,
  },
  {
    title: "Actions Sociales",
    description:
      "Participez à nos actions de solidarité et d’aide aux plus démunis.",
    icon: <HeartHandshake className="mx-auto mb-6 text-blue-600" size={64} />,
  },
];

export default function ActivitiesSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Nos Activités</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez comment nous vivons notre foi à travers diverses actions et
          rencontres.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {activities.map(({ title, description, icon }, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            {icon}
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-700 mb-6 flex-grow">{description}</p>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow-md transition-colors"
            >
              En savoir plus
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
