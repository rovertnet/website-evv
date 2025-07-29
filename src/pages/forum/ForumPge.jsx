import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const discussions = [
  {
    id: 1,
    title: "Comment approfondir sa vie de prière ?",
    author: "Marie K.",
    date: "2025-07-29",
    category: "Questions spirituelles",
    content: "J’aimerais avoir vos conseils pour prier avec plus de ferveur...",
  },
  {
    id: 2,
    title: "Témoignage : Dieu m’a guéri !",
    author: "Joseph M.",
    date: "2025-07-28",
    category: "Témoignages",
    content:
      "Il y a 2 mois, j’étais malade… Aujourd’hui, je suis guéri. Gloire à Dieu !",
  },
];

export default function ForumPage() {
  const [search, setSearch] = useState("");

  const filtered = discussions.filter(
    (d) =>
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
       <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-orange-700 text-white py-28 px-6  mb-6 overflow-hidden -mt-14"
            >
              <h1 className="text-3xl font-bold text-center">
                💬 Forum de Discussion
              </h1>
              <p className="text-center mt-2 text-sm">
                Partagez, posez vos questions, et échangez librement avec les membres
                de la communauté.
              </p>
      
              <div
                className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage:
                    "url('https://cdn.pixabay.com/photo/2016/03/26/13/09/chat-1280x720.jpg')",
                }}
              ></div>
            </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 lg:px-24 py-10"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-orange-600">
            Forum Communautaire
          </h2>
          <Link
            to="/forum/creer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg text-sm"
          >
            + Créer une discussion
          </Link>
        </div>

        <input
          type="text"
          placeholder="Rechercher une discussion..."
          className="w-full mb-6 border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:border-orange-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="space-y-6">
          {filtered.length > 0 ? (
            filtered.map((d) => (
              <div
                key={d.id}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-orange-700">
                  {d.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {d.author} · {new Date(d.date).toLocaleDateString()} ·{" "}
                  {d.category}
                </p>
                <p className="text-gray-700">{d.content.slice(0, 100)}...</p>
                <button className="mt-2 text-sm text-blue-600 hover:underline">
                  Voir la discussion →
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Aucune discussion trouvée.</p>
          )}
        </div>
      </motion.div>
    </>
  );
}
