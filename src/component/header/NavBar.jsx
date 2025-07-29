import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  // Détecte le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50  transition-all duration-300",
        isScrolled ? "bg-blue-900/95 shadow-md py-2" : " py-2 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Eglise evv</div>

        {/* Hamburger mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/" className="text-white hover:text-blue-300">
            Accueil
          </a>
          <a href="/evenement" className="text-white hover:text-blue-300">
            Evénements
          </a>
          <a href="/ebook" className="text-white hover:text-blue-300">
            Ebooks
          </a>
          <a href="/about" className="text-white hover:text-blue-300">
            A propos
          </a>
          <a href="/contact" className="text-white hover:text-blue-300">
            Contact
          </a>
          <Link
            onClick={handleLinkClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Faire un don
          </Link>
        </div>
      </div>

      {/* Menu mobile animé */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden mt-2 px-4 pb-4 space-y-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <a
              onClick={handleLinkClick}
              href="#"
              className="block text-white hover:text-blue-300"
            >
              Home
            </a>
            <a
              onClick={handleLinkClick}
              href="#"
              className="block text-white hover:text-blue-300"
            >
              About
            </a>
            <a
              onClick={handleLinkClick}
              href="#"
              className="block text-white hover:text-blue-300"
            >
              Contact
            </a>
            <button
              onClick={handleLinkClick}
              className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign In
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
