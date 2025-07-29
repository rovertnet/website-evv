// components/layout/Footer.jsx
import React from "react";
import {
  LucideFacebook,
  LucideInstagram,
  LucideYoutube,
  LucideMail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">Église EVV</h3>
          <p>123 Rue de la Foi, Kinshasa, RDC</p>
          <p>Téléphone : +243 812 345 678</p>
          <p>Email : contact@eglise-evv.org</p>
        </div>

        <div className="flex space-x-6 text-white text-2xl">
          <a
            href="https://facebook.com/egliseevv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-400 transition"
          >
            <LucideFacebook />
          </a>
          <a
            href="https://instagram.com/egliseevv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <LucideInstagram />
          </a>
          <a
            href="https://youtube.com/egliseevv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-600 transition"
          >
            <LucideYoutube />
          </a>
          <a
            href="mailto:contact@eglise-evv.org"
            aria-label="Email"
            className="hover:text-yellow-400 transition"
          >
            <LucideMail />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Église EVV. Tous droits réservés.
      </div>
    </footer>
  );
}
