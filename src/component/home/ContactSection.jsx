// components/home/ContactSection.jsx
import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-[#f7f7f7] py-20 px-4 lg:px-32">
      <h2 className="text-3xl font-bold text-center mb-8">Contactez-nous</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="mb-4 text-gray-700">
          📍 Adresse : 123, Rue de la Foi, Kinshasa, RDC
        </p>
        <p className="mb-4 text-gray-700">📞 Téléphone : +243 812 345 678</p>
        <p className="mb-4 text-gray-700">✉️ Email : contact@eglise-evv.org</p>
        <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          Envoyer un message
        </button>
      </div>
    </section>
  );
}
