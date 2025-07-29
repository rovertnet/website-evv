import React, { useState } from "react";
import { motion } from "framer-motion";

export default function DonationBannerWithQR() {
  const [copied, setCopied] = useState("");

  const handleCopy = (label, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  return (
    <section className="bg-yellow-100 py-16 px-6 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Soutenez notre mission
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Vos dons nous permettent de continuer à servir notre communauté. Merci
          pour votre générosité !
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* QR Code */}
          <div className="flex justify-center">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=tel:+243899000000"
              alt="QR Code Mobile Money"
              className="w-40 h-40"
            />
          </div>

          {/* Infos de paiement */}
          <div className="text-left space-y-6 text-gray-700">
            {/* Bloc Mobile Money */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-1">Mobile Money</h4>
              <p>M-Pesa : +243 899 000 000</p>
              <p>Airtel Money : +243 822 000 000</p>
              <button
                onClick={() =>
                  handleCopy("mobile", "+243 899 000 000\n+243 822 000 000")
                }
                className="mt-2 text-sm text-blue-600 hover:underline"
              >
                {copied === "mobile" ? "✅ Copié !" : "📋 Copier les infos"}
              </button>
            </div>

            {/* Bloc Banque */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-1">
                Coordonnées bancaires
              </h4>
              <p>Banque : Banque Évangélique</p>
              <p>Compte : Église Vie Victorieuse</p>
              <p>IBAN : CG430001234567890123456</p>
              <p>BIC : BEVICGKI</p>
              <button
                onClick={() =>
                  handleCopy(
                    "banque",
                    "Banque Évangélique\nÉglise Vie Victorieuse\nIBAN: CG430001234567890123456\nBIC: BEVICGKI"
                  )
                }
                className="mt-2 text-sm text-blue-600 hover:underline"
              >
                {copied === "banque" ? "✅ Copié !" : "📋 Copier les infos"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
