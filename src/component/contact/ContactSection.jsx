import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);
    setSubmitted(true);

    // Réinitialise après 3 secondes
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-32" id="contact">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">📬 Nous contacter</h2>
        <p className="text-gray-600 mb-10">
          Une question ? Un besoin de prière ou de renseignement ? Écrivez-nous
          ici.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 text-left space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Jean Kabila"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre message ici..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            ✉️ Envoyer le message
          </button>

          {submitted && (
            <p className="text-green-600 text-sm font-medium mt-2">
              ✅ Merci ! Votre message a été envoyé.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
