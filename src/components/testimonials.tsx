"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empreendedor Digital",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Antes do curso, eu estava perdido tentando entender marketing digital. Agora, meu negócio gera R$30.000 por mês com as estratégias que aprendi!",
      result: "💰 Resultado: +R$30.000/mês",
    },
    {
      name: "Ana Oliveira",
      role: "Coach de Emagrecimento",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Consegui criar uma lista de e-mail com mais de 5.000 pessoas em apenas 3 meses usando as técnicas do curso. Minhas vendas triplicaram!",
      result: "📈 Resultado: Vendas triplicadas",
    },
    {
      name: "Marcos Santos",
      role: "Consultor Financeiro",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Investi R$997 no curso e recuperei o valor em menos de uma semana com minha primeira campanha de anúncios. Melhor investimento que já fiz!",
      result: "⚡ Resultado: ROI em menos de 7 dias",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
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
      className="grid gap-6 md:grid-cols-3"
    >
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            rotateY: 5,
            boxShadow: "0 20px 40px -10px rgba(152, 111, 49, 0.4)",
          }}
          transition={{ duration: 0.3 }}
        >
          <Card
            className="overflow-hidden border-2 h-full"
            style={{
              backgroundColor: "#303030",
              borderColor: "#986f31",
            }}
          >
            <CardContent className="p-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="mb-4 flex items-center gap-4"
              >
                <div
                  className="rounded-full p-1 border-2"
                  style={{ borderColor: "#986f31" }}
                >
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: "#d4d3ce" }}>
                    {testimonial.name}
                  </h3>
                  <p className="text-sm" style={{ color: "#986f31" }}>
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="mb-3 italic text-base leading-relaxed"
                style={{ color: "#d4d3ce" }}
              >
                "{testimonial.content}"
              </motion.p>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.7 }}
                className="font-bold text-lg p-2 rounded-lg border"
                style={{
                  color: "#303030",
                  backgroundColor: "#986f31",
                  borderColor: "#d4d3ce",
                }}
              >
                {testimonial.result}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
