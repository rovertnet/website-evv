// BookDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const books = [
  /* le même tableau que dans BooksForSaleSection */
  {
    id: "1",
    title: "Puissance de la prière",
    author: "Pasteur Jean K.",
    price: "12,99 €",
    image: "...",
    category: "Prières",
    description:
      "Ce livre explore les dimensions de la prière fervente et efficace pour tous les croyants.",
  },
];

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return <div className="p-10 text-center">Livre non trouvé.</div>;
  }

  return (
    <section className="py-20 px-6 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
          <p className="text-gray-600 mb-1">Auteur : {book.author}</p>
          <p className="text-sm text-gray-500 italic mb-4">
            Catégorie : {book.category}
          </p>
          <p className="mb-4">{book.description}</p>
          <p className="text-xl text-orange-600 font-bold mb-6">{book.price}</p>

          <div className="flex gap-4">
            <button className="bg-orange-600 text-white px-5 py-2 rounded hover:bg-orange-700">
              Acheter maintenant
            </button>
            <Link to="/#books" className="text-orange-600 hover:underline">
              ← Retour à la liste
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
