"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import VSLSection from "@/components/vsl-section";
import { motion } from "framer-motion";

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

export default function PatrimonialGrowthCalculator() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log("Dados do formulário:", formData);
    alert("Calculadora enviada para seu e-mail!");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#303030" }}>
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-8 md:px-6 lg:py-12"
      >
        {/* Main headline */}
        <motion.div
          variants={itemVariants}
          className="mb-8 text-center md:mb-12"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl"
            style={{ color: "#d4d3ce" }}
          >
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block mb-2"
            >
              Calculadora de Crescimento Patrimonial
            </motion.span>
          </motion.h1>

          {/* Headline */}
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{
              background: `linear-gradient(45deg, #986f31, #d4d3ce, #986f31)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Descubra quanto seu patrimônio pode crescer com a estratégia inteligente de consórcio
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mx-auto mt-6 max-w-3xl text-xl"
            style={{ color: "#d4d3ce" }}
          >
            Baixe gratuitamente a Calculadora de Crescimento Patrimonial e veja, em poucos cliques, o potencial de ganhos que você pode alcançar.
          </motion.p>
        </motion.div>

        {/* VSL Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <VSLSection />
        </motion.div>

        {/* Benefits Section */}
        <motion.section variants={itemVariants} className="my-12">
          <motion.h3
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center text-2xl font-bold"
            style={{ color: "#986f31" }}
          >
            Ao preencher o formulário, você receberá:
          </motion.h3>
          
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Uma planilha inteligente para simular seus ganhos mês a mês.",
                "Projeção real de valorização patrimonial com o uso do consórcio.",
                "Comparativo entre diferentes cenários (prazo, valores, crédito).",
                "Uma visão clara de como transformar pequenas parcelas em grandes resultados."
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0">
                    <span className="text-xl" style={{ color: "#22c55e" }}>✅</span>
                  </div>
                  <p className="text-lg" style={{ color: "#d4d3ce" }}>
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section variants={itemVariants} className="my-12 text-center">
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-xl font-semibold"
            style={{ color: "#986f31" }}
          >
            "Preencha seus dados abaixo e receba imediatamente a sua calculadora gratuita no e-mail."
          </motion.p>
        </motion.section>

        {/* Form Section */}
        <motion.section variants={itemVariants} className="my-12">
          <div className="mx-auto max-w-2xl">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className="overflow-hidden border-2 shadow-2xl"
                style={{
                  backgroundColor: "#303030",
                  borderColor: "#986f31",
                  boxShadow: "0 25px 50px -12px rgba(152, 111, 49, 0.4)",
                }}
              >
                <div className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nome completo */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                    >
                      <label htmlFor="name" className="block text-lg font-medium mb-2" style={{ color: "#d4d3ce" }}>
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 bg-transparent text-white focus:outline-none focus:border-yellow-500 transition-colors"
                        style={{ borderColor: "#986f31", color: "#d4d3ce" }}
                        placeholder="Digite seu nome completo"
                      />
                    </motion.div>

                    {/* E-mail */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <label htmlFor="email" className="block text-lg font-medium mb-2" style={{ color: "#d4d3ce" }}>
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 bg-transparent text-white focus:outline-none focus:border-yellow-500 transition-colors"
                        style={{ borderColor: "#986f31", color: "#d4d3ce" }}
                        placeholder="Digite seu melhor e-mail"
                      />
                    </motion.div>

                    {/* WhatsApp */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <label htmlFor="whatsapp" className="block text-lg font-medium mb-2" style={{ color: "#d4d3ce" }}>
                        WhatsApp (opcional)
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border-2 bg-transparent text-white focus:outline-none focus:border-yellow-500 transition-colors"
                        style={{ borderColor: "#986f31", color: "#d4d3ce" }}
                        placeholder="(11) 99999-9999"
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="pt-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(34, 197, 94, 0)",
                            "0 0 0 10px rgba(34, 197, 94, 0.1)",
                            "0 0 0 20px rgba(34, 197, 94, 0)",
                          ],
                        }}
                        transition={{
                          boxShadow: { repeat: Infinity, duration: 2 },
                        }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full py-6 text-xl font-bold border-2 hover:scale-105 transition-all"
                          style={{
                            backgroundColor: "#22c55e",
                            color: "#ffffff",
                            borderColor: "#16a34a",
                          }}
                        >
                          QUERO MINHA CALCULADORA GRATUITA
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Final reinforcement */}
        <motion.section variants={itemVariants} className="my-12 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            <div
              className="p-8 rounded-lg border-2"
              style={{
                backgroundColor: "#303030",
                borderColor: "#986f31",
                boxShadow: "0 25px 50px -12px rgba(152, 111, 49, 0.25)",
              }}
            >
              <p className="text-lg leading-relaxed" style={{ color: "#d4d3ce" }}>
                "Essa ferramenta é a mesma que usamos para orientar investidores que já construíram patrimônio sólido com o consórcio. Garante a sua agora e comece a planejar seu crescimento financeiro."
              </p>
            </div>
          </motion.div>
        </motion.section>
      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-6 text-center border-t-2"
        style={{
          backgroundColor: "#303030",
          color: "#d4d3ce",
          borderColor: "#986f31",
        }}
      >
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-2"
          >
            © {new Date().getFullYear()} Calculadora de Crescimento Patrimonial. Todos os direitos reservados.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}
