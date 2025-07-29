import { motion } from "framer-motion";

export default function SectionBanner({ title, subtitle, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-orange-700 text-white py-28 px-6 mb-6 overflow-hidden -mt-14"
    >
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <p className="text-center mt-2 text-sm">{subtitle}</p>

      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
    </motion.div>
  );
}
