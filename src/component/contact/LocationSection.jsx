import React from "react";
import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section className="bg-white py-20 px-6 lg:px-32" id="localisation">
      <h2 className="text-3xl font-bold text-center mb-12">
        📍 Localisation & Horaires
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Carte Google Maps */}
        <motion.div
          className="w-full h-80 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            title="Carte EVV"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.9244694571963!2d15.266293614755302!3d-4.325014847650557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33b92cc19c3f%3A0xf9854ccbdc88caa4!2sKinshasa%2C%20RDC!5e0!3m2!1sfr!2s!4v1627631909240!5m2!1sfr!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Infos horaires + contacts */}
        <motion.div
          className="text-gray-700 text-lg flex flex-col justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Horaires des rencontres
            </h3>
            <ul className="space-y-4">
              <li>
                <strong>🕘 Dimanche :</strong> Culte de célébration – 09h00 à
                11h00
              </li>
              <li>
                <strong>🕓 Mercredi :</strong> Enseignement biblique – 18h00 à
                20h00
              </li>
              <li>
                <strong>🕙 Vendredi :</strong> Veillée de prière – 22h00 à 05h00
              </li>
              <li>
                <strong>📚 Samedi :</strong> Réunion des jeunes – 15h00 à 17h00
              </li>
            </ul>

            <div className="mt-6">
              <p className="font-semibold">📍 Adresse :</p>
              <p>Temple EVV, Av. Lumumba, Kinshasa, RDC</p>
            </div>
          </div>

          {/* Boutons contact et itinéraire */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Temple+EVV,+Av.+Lumumba,+Kinshasa,+RDC"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              🗺️ Itinéraire
            </a>
            <a
              href="tel:+243812345678"
              className="bg-green-600 text-white font-medium px-6 py-3 rounded-xl shadow hover:bg-green-700 transition"
            >
              📞 Appeler
            </a>
            <a
              href="https://wa.me/243812345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white font-medium px-6 py-3 rounded-xl shadow hover:bg-emerald-600 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
