"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function BenefitsList() {
  const benefits = [
    "Como criar campanhas de anúncios altamente lucrativas no Facebook e Instagram",
    "Estratégias avançadas de SEO para dominar os resultados de busca do Google",
    "Como construir uma lista de e-mail responsiva que gera vendas automáticas",
    "Técnicas de copywriting que convertem visitantes em compradores",
    "Como criar funis de vendas que funcionam 24 horas por dia, 7 dias por semana",
    "Estratégias de marketing de conteúdo para se posicionar como autoridade",
    "Como escalar seu negócio digital de 5 para 6 ou 7 dígitos",
    "Sistemas automatizados para gerar leads qualificados diariamente",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-4 md:grid-cols-2"
    >
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(152, 111, 49, 0.3)",
          }}
          className="flex items-start gap-3 rounded-lg border-2 p-4 shadow-lg"
          style={{
            backgroundColor: "#273849",
            borderColor: "#986f31",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
            className="mt-0.5 rounded-full p-2"
            style={{
              backgroundColor: "#986f31",
              color: "#303030",
            }}
          >
            <Check className="h-5 w-5" />
          </motion.div>
          <p className="text-lg font-medium" style={{ color: "#d4d3ce" }}>
            ✨ {benefit}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
