import React from "react";
import { motion } from "framer-motion";
import HeroSlider from "../component/home/HeroSlider";
import SectionBanner from "../component/SectionBanner";

const pastors = [
  {
    name: "Apôtre Jean M.",
    title: "Fondateur principal",
    image:
      "https://cdn.pixabay.com/photo/2017/06/29/01/53/man-2456212_1280.jpg",
    bio: "Serviteur de Dieu depuis 1998, il a fondé l'église avec passion et vision spirituelle.",
    email: "jean@example.com",
    whatsapp: "+243810000000",
  },
  {
    name: "Pasteur Claire B.",
    title: "Pasteure associée",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/02/12/woman-1867093_1280.jpg",
    bio: "Responsable des ministères de louange et d'encadrement spirituel des jeunes.",
    email: "claire@example.com",
    whatsapp: "+243820000000",
  },
  {
    name: "Pasteur David K.",
    title: "Responsable enseignement",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/19/44/man-1281562_1280.jpg",
    bio: "Enseignant passionné, dédié à l’étude biblique et à l’édification de l’église.",
    email: "david@example.com",
    whatsapp: "+243890000000",
  },
];


export default function AboutPage() {
  return (
    <>
      <SectionBanner
        title="🙌 À propos de l’Église"
        subtitle="Découvrez notre mission, notre histoire et les serviteurs qui bâtissent cette œuvre."
        image="https://cdn.pixabay.com/photo/2017/03/12/13/41/cross-2136745_1280.jpg"
      />

      <section className="bg-white py-20 px-6 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6">À propos de notre Église</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Nous sommes une communauté chrétienne passionnée par la présence de
            Dieu, enracinée dans la Parole et animée par l’amour du prochain.
            Depuis notre fondation, nous avons pour mission d’apporter l’espoir,
            la restauration et la vérité dans les cœurs, en proclamant
            l’Évangile de Jésus-Christ.
          </p>
          <motion.img
            src="https://cdn.pixabay.com/photo/2017/08/02/00/24/architecture-2563034_1280.jpg"
            alt="Église"
            className="w-full rounded-lg shadow-xl mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h2 className="text-2xl font-semibold mb-4">Notre vision</h2>
          <p className="text-gray-700 mb-6">
            Élever une génération forte, affermie dans la foi et engagée dans la
            transformation de la société par l’amour et la vérité de Christ.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Nos valeurs</h2>
          <ul className="text-gray-700 list-disc list-inside mb-8 text-left max-w-2xl mx-auto">
            <li>📖 Intégrité dans la Parole de Dieu</li>
            <li>🤝 Amour du prochain et unité</li>
            <li>🙏 Vie de prière fervente</li>
            <li>🔥 Passion pour l’adoration et la mission</li>
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <h2 className="text-2xl font-semibold mb-2">Rejoignez-nous</h2>
            <p className="text-gray-700">
              Que vous soyez nouveau dans la foi ou à la recherche d’une
              communauté, notre Église est un lieu d’accueil, d’écoute et de
              croissance spirituelle.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Notre Équipe Pastorale
          </h2>

          <div className="flex space-x-6 overflow-x-auto snap-x px-4 lg:px-20 pb-6">
            {pastors.map((pastor, index) => (
              <motion.div
                key={index}
                className="min-w-[250px] max-w-[250px] snap-center bg-white shadow-xl rounded-2xl p-4 flex-shrink-0 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={pastor.image}
                  alt={pastor.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-orange-500"
                />
                <h3 className="text-lg font-semibold text-orange-600">
                  {pastor.name}
                </h3>
                <p className="text-sm font-medium text-gray-500">
                  {pastor.title}
                </p>
                <p className="mt-2 text-gray-600 text-sm">{pastor.bio}</p>

                <div className="mt-4 flex justify-center gap-3">
                  <a
                    href={`https://wa.me/${pastor.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${pastor.email}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Email
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-center mb-10">
            Notre Histoire
          </h2>
          <div className="relative border-l-4 border-orange-500 pl-6 space-y-8">
            <div>
              <div className="text-sm text-gray-500">2005</div>
              <h3 className="text-lg font-semibold text-orange-600">
                Fondation de l’Église
              </h3>
              <p className="text-gray-700">
                Naissance de notre communauté avec un petit groupe de croyants
                réunis dans une maison pour prier et adorer.
              </p>
            </div>

            <div>
              <div className="text-sm text-gray-500">2010</div>
              <h3 className="text-lg font-semibold text-orange-600">
                Premiers locaux officiels
              </h3>
              <p className="text-gray-700">
                Acquisition de notre premier bâtiment pour accueillir les
                cultes, formations et activités sociales.
              </p>
            </div>

            <div>
              <div className="text-sm text-gray-500">2016</div>
              <h3 className="text-lg font-semibold text-orange-600">
                Extension du ministère
              </h3>
              <p className="text-gray-700">
                Lancement de missions dans d’autres villes, création de groupes
                de maison et multiplication des cellules de prière.
              </p>
            </div>

            <div>
              <div className="text-sm text-gray-500">2023</div>
              <h3 className="text-lg font-semibold text-orange-600">
                Transformation numérique
              </h3>
              <p className="text-gray-700">
                Mise en ligne des cultes, lancement de notre site web et
                plateforme de dons en ligne pour toucher un public plus large.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
