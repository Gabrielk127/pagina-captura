"use client";

import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function GuaranteeSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="my-12 rounded-lg border-2 p-8 shadow-2xl"
      style={{
        backgroundColor: "#303030",
        borderColor: "#986f31",
        boxShadow: "0 25px 50px -12px rgba(152, 111, 49, 0.4)",
      }}
    >
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
          className="flex-shrink-0"
          style={{ color: "#986f31" }}
        >
          <Shield className="h-24 w-24 md:h-32 md:w-32" />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-2 text-2xl font-bold"
            style={{ color: "#986f31" }}
          >
            🛡️ Garantia Incondicional de 30 Dias
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-4 text-lg leading-relaxed"
            style={{ color: "#d4d3ce" }}
          >
            Estamos tão confiantes que este programa vai transformar seu negócio
            digital que oferecemos uma garantia de satisfação total de 30 dias.
            Se por qualquer motivo você não ficar satisfeito, basta nos enviar
            um e-mail e devolveremos 100% do seu dinheiro, sem perguntas.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-bold text-lg p-3 rounded-lg border"
            style={{
              color: "#303030",
              backgroundColor: "#986f31",
              borderColor: "#d4d3ce",
            }}
          >
            🎯 Você não tem nada a perder e tudo a ganhar. O risco é todo nosso!
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
