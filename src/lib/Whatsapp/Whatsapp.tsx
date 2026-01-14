"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const phoneNumber = "554391807520";
  const message = "Olá! Gostaria de saber mais sobre o Mercado Real.";

  const handleWhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={handleWhatsappClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </button>
    </motion.div>
  );
};

export default Whatsapp;
