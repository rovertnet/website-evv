import React, { useState } from "react";
import { motion } from "framer-motion";

// Exemple de livres avec catégorie
const books = [
  {
    title: "Puissance de la prière",
    author: "Pasteur Jean K.",
    price: "12,99 €",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    category: "Prières",
  },
  {
    title: "La marche avec Dieu",
    author: "Évangéliste Grâce M.",
    price: "15,50 €",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
    category: "Foi",
  },
  {
    title: "Leadership chrétien",
    author: "Apôtre Rachel N.",
    price: "14,50 €",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80",
    category: "Leadership",
  },
  {
    title: "Jeunesse et sanctification",
    author: "Prophète Eli M.",
    price: "11,90 €",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80",
    category: "Jeunesse",
  },
  {
    title: "Foi & Espérance",
    author: "Sœur Mireille",
    price: "9,99 €",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80",
    category: "Foi",
  },
  {
    title: "L’art de diriger spirituellement",
    author: "Bishop David L.",
    price: "13,50 €",
    image:
      "https://images.unsplash.com/photo-1496317556649-f930d733eea2?auto=format&fit=crop&w=400&q=80",
    category: "Leadership",
  },
];

const ITEMS_PER_PAGE = 6;

export default function BooksForSaleSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  // Catégories dynamiques avec "Toutes"
  const categories = ["Toutes", ...new Set(books.map((b) => b.category))];

  // Filtrage combiné : par recherche ET par catégorie
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Toutes" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
  const currentBooks = filteredBooks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-32" id="books">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">📚 E-Book</h2>

        {/* Filtres de catégories */}
        <div className="flex justify-center flex-wrap gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === cat
                  ? "bg-orange-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recherche */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Rechercher par titre ou auteur..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Livres filtrés */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {currentBooks.map((book, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-1">par {book.author}</p>
                <p className="text-xs italic text-gray-500 mb-2">
                  {book.category}
                </p>
                <p className="text-primary font-bold">{book.price}</p>
                <div className="flex justify-between items-center mt-4 gap-2">
                  <button className="flex-1 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition">
                    Acheter
                  </button>
                  <button className="flex-1 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {filteredBooks.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center mt-10 gap-3 flex-wrap">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              disabled={currentPage === 1}
            >
              Précédent
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              disabled={currentPage === totalPages}
            >
              Suivant
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
