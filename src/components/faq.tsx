"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "Quanto tempo tenho acesso ao curso?",
      answer:
        "Você terá acesso vitalício ao curso e a todas as atualizações futuras. Uma vez que você compra, é seu para sempre.",
    },
    {
      question: "Preciso ter experiência prévia em marketing digital?",
      answer:
        "Não! O curso foi desenhado para iniciantes e também contém estratégias avançadas para quem já tem experiência. Começamos do zero e avançamos gradualmente.",
    },
    {
      question: "Como funciona a garantia de devolução do dinheiro?",
      answer:
        "Oferecemos uma garantia incondicional de 30 dias. Se você não estiver satisfeito por qualquer motivo, basta nos enviar um e-mail e devolveremos 100% do seu investimento, sem perguntas.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Muitos alunos começam a ver resultados nas primeiras semanas, mas isso varia dependendo do seu nicho, dedicação e aplicação das estratégias. Temos alunos que recuperaram o investimento em menos de 7 dias.",
    },
    {
      question: "Existe suporte para tirar dúvidas?",
      answer:
        "Sim! Você terá acesso a um grupo exclusivo onde nossa equipe responde dúvidas em até 24 horas. Também realizamos sessões de mentoria em grupo mensalmente.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl divide-y rounded-lg border-2 shadow-xl"
      style={{
        backgroundColor: "#273849",
        borderColor: "#986f31",
      }}
    >
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="p-6"
          style={{ borderColor: "#986f31" }}
        >
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="flex w-full items-center justify-between text-left text-lg font-medium"
            onClick={() => toggleFAQ(index)}
            style={{ color: "#d4d3ce" }}
          >
            <span className="pr-4">❓ {faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openIndex === index ? (
                <ChevronUp
                  className="h-5 w-5 flex-shrink-0"
                  style={{ color: "#986f31" }}
                />
              ) : (
                <ChevronDown
                  className="h-5 w-5 flex-shrink-0"
                  style={{ color: "#986f31" }}
                />
              )}
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-3 p-3 rounded-lg border"
                  style={{
                    color: "#d4d3ce",
                    backgroundColor: "#303030",
                    borderColor: "#986f31",
                  }}
                >
                  <p>💡 {faq.answer}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}
