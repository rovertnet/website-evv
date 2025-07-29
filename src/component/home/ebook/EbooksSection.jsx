import React, { useState } from "react";
import { motion } from "framer-motion";
import PDFReaderModal from "./PDFReaderModal";

const allEbooks = [
  {
    id: 1,
    title: "La foi victorieuse",
    theme: "Foi",
    cover: "https://picsum.photos/id/1011/200/280",
    pdfUrl: "https://bible.org/assets/pdf/The_Path_of_a_Disciple_French.pdf",
  },
  {
    id: 2,
    title: "La prière puissante",
    theme: "Prière",
    cover: "https://picsum.photos/id/1015/200/280",
    pdfUrl: "https://bible.org/assets/pdf/The_Path_of_a_Disciple_French.pdf",
  },
  {
    id: 3,
    title: "Marcher avec Dieu",
    theme: "Spiritualité",
    cover: "https://picsum.photos/id/1016/200/280",
    pdfUrl: "https://bible.org/assets/pdf/The_Path_of_a_Disciple_French.pdf",
  },
  {
    id: 4,
    title: "L'amour inconditionnel",
    theme: "Amour",
    cover: "https://picsum.photos/id/1018/200/280",
    pdfUrl: "https://bible.org/assets/pdf/The_Path_of_a_Disciple_French.pdf",
  },
  {
    id: 5,
    title: "La sagesse divine",
    theme: "Sagesse",
    cover: "https://picsum.photos/id/1020/200/280",
    pdfUrl: "https://bible.org/assets/pdf/The_Path_of_a_Disciple_French.pdf",
  },
  {
    id: 6,
    title: "La guérison spirituelle",
    theme: "Guérison",
    cover: "https://picsum.photos/id/1021/200/280",
    pdfUrl: "https://bible.org/assets/pdf/The_Path_of_a_Disciple_French.pdf",
  },
  {
    id: 7,
    title: "La paix intérieure",
    theme: "Paix",
    cover: "https://picsum.photos/id/1022/200/280",
    pdfUrl: "https://bible.org/assets/pdf/The_Path_of_a_Disciple_French.pdf",
  },
  {
    id: 8,
    title: "La joie du Seigneur",
    theme: "Joie",
    cover: "https://picsum.photos/id/1023/200/280",
    pdfUrl: "https://bible.org/assets/pdf/The_Path_of_a_Disciple_French.pdf",
  },
];


export default function EbooksSection() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [filter, setFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const themes = ["Tous", ...new Set(allEbooks.map((book) => book.theme))];

  const filteredBooks = allEbooks.filter((book) => {
    const matchesTheme = filter === "Tous" || book.theme === filter;
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTheme && matchesSearch;
  });

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900">Nos E-books</h2>
        <p className="text-gray-600 mt-2">
          Découvrez nos enseignements disponibles en lecture directe.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {themes.map((t) => (
          <button
            key={t}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === t
                ? "bg-blue-700 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Rechercher un e-book..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex overflow-x-auto gap-6 pb-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <motion.div
              key={book.id}
              className="min-w-[200px] bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-[280px] object-cover rounded"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {book.title}
              </h3>
              <button
                onClick={() => setSelectedPdf(book.pdfUrl)}
                className="mt-3 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm"
              >
                Lire
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600 text-center w-full">
            Aucun e-book trouvé.
          </p>
        )}
      </div>

      {selectedPdf && (
        <PDFReaderModal
          pdfUrl={selectedPdf}
          isOpen={!!selectedPdf}
          onRequestClose={() => setSelectedPdf(null)}
        />
      )}
    </section>
  );
}
