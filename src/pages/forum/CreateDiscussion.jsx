import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CreateDiscussion() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Questions spirituelles");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tu peux ici envoyer vers une API ou localStorage
    console.log({ title, author, category, content });

    setSuccess(true);
    setTitle("");
    setAuthor("");
    setCategory("Questions spirituelles");
    setContent("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-6 lg:px-0 py-10"
    >
      <h2 className="text-3xl font-bold text-orange-600 mb-6">
        Créer une discussion
      </h2>

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          ✅ Discussion créée avec succès !
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Nom de l'auteur"
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Titre de la discussion"
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
        >
          <option>Questions spirituelles</option>
          <option>Témoignages</option>
          <option>Demandes de prière</option>
          <option>Autres</option>
        </select>

        <textarea
          rows={6}
          placeholder="Contenu de votre message..."
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md shadow-md"
        >
          Publier la discussion
        </button>
      </form>
    </motion.div>
  );
}
