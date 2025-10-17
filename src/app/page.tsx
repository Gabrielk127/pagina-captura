"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import VSLSection from "@/components/vsl-section";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CountdownTimer from "@/components/countdown-timer";
import BenefitsList from "@/components/benefits-list";
import GuaranteeSection from "@/components/guarantee-section";
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
      ease: "easeOut",
    },
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#303030" }}>
      {/* Header with attention-grabbing headline */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-4 text-center"
        style={{ backgroundColor: "#986f31", color: "#303030" }}
      >
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-sm font-bold uppercase tracking-wider"
          >
            🔥 Exclusivo: Vagas Limitadas 🔥
          </motion.p>
        </div>
      </motion.header>

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
            className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: "#d4d3ce" }}
          >
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block mb-2"
            >
              Descubra o Sistema Comprovado que Transformou
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              style={{
                background: `linear-gradient(45deg, #986f31, #d4d3ce, #986f31)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mais de 3.427 Pessoas Comuns em Especialistas de Marketing Digital
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mx-auto mt-6 max-w-3xl text-xl"
            style={{ color: "#d4d3ce" }}
          >
            Mesmo que você esteja começando do zero, sem experiência técnica ou
            conhecimento prévio
          </motion.p>
        </motion.div>

        {/* VSL Section */}
        <motion.div variants={itemVariants}>
          <VSLSection />
        </motion.div>

        {/* Countdown Timer for Urgency */}
        <motion.div variants={itemVariants} className="my-8 text-center">
          <motion.p
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-lg font-semibold"
            style={{ color: "#986f31" }}
          >
            ⏰ Esta oferta especial expira em:
          </motion.p>
          <CountdownTimer hours={47} minutes={59} seconds={59} />
        </motion.div>

        {/* Primary CTA */}
        <motion.div variants={itemVariants} className="my-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(152, 111, 49, 0)",
                "0 0 0 10px rgba(152, 111, 49, 0.1)",
                "0 0 0 20px rgba(152, 111, 49, 0)",
              ],
            }}
            transition={{
              boxShadow: { repeat: Infinity, duration: 2 },
            }}
          >
            <Button
              size="lg"
              className="px-8 py-6 text-xl font-bold pulse-gold border-2"
              style={{
                backgroundColor: "#986f31",
                color: "#303030",
                borderColor: "#d4d3ce",
              }}
            >
              <Link href="/order">
                🚀 SIM! QUERO TRANSFORMAR MEU NEGÓCIO AGORA!
              </Link>
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-2 text-sm"
            style={{ color: "#d4d3ce" }}
          >
            *Garantia de 30 dias de satisfação ou seu dinheiro de volta
          </motion.p>
        </motion.div>

        {/* Benefits Section */}
        <motion.section variants={itemVariants} className="my-12">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center text-3xl font-bold"
            style={{ color: "#986f31" }}
          >
            💎 O Que Você Vai Aprender
          </motion.h2>
          <BenefitsList />
        </motion.section>

        {/* Social Proof / Testimonials */}
        <motion.section
          variants={itemVariants}
          className="my-12 rounded-lg p-6 shadow-xl border-2"
          style={{
            backgroundColor: "#273849",
            borderColor: "#986f31",
            boxShadow: "0 25px 50px -12px rgba(152, 111, 49, 0.25)",
          }}
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center text-3xl font-bold"
            style={{ color: "#986f31" }}
          >
            🗣️ O Que Nossos Alunos Estão Dizendo
          </motion.h2>
          <Testimonials />
        </motion.section>

        {/* Price Comparison */}
        <motion.section variants={itemVariants} className="my-12">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center text-3xl font-bold"
            style={{ color: "#986f31" }}
          >
            💰 Investimento
          </motion.h2>
          <div className="mx-auto max-w-2xl">
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className="overflow-hidden border-2 shadow-2xl"
                style={{
                  backgroundColor: "#273849",
                  borderColor: "#986f31",
                  boxShadow: "0 25px 50px -12px rgba(152, 111, 49, 0.4)",
                }}
              >
                <motion.div
                  initial={{ y: -50 }}
                  animate={{ y: 0 }}
                  className="p-3 text-center text-white"
                  style={{ backgroundColor: "#dc2626" }}
                >
                  <p className="text-lg font-bold">
                    🔥 OFERTA POR TEMPO LIMITADO 🔥
                  </p>
                </motion.div>
                <div className="p-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4"
                  >
                    <p className="text-lg" style={{ color: "#d4d3ce" }}>
                      Valor Normal:
                    </p>
                    <p
                      className="text-2xl font-medium line-through"
                      style={{ color: "#d4d3ce" }}
                    >
                      R$1.997
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mb-6"
                  >
                    <p className="text-lg" style={{ color: "#d4d3ce" }}>
                      Hoje Apenas:
                    </p>
                    <motion.p
                      animate={{
                        scale: [1, 1.1, 1],
                        color: ["#986f31", "#d4d3ce", "#986f31"],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl font-black"
                      style={{ color: "#986f31" }}
                    >
                      R$997
                    </motion.p>
                    <p className="mt-2" style={{ color: "#d4d3ce" }}>
                      ou 12x de R$97
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="w-full py-6 text-xl font-bold border-2"
                      style={{
                        backgroundColor: "#986f31",
                        color: "#303030",
                        borderColor: "#d4d3ce",
                      }}
                    >
                      <Link href="/order">💳 GARANTIR MINHA VAGA AGORA</Link>
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Guarantee Section */}
        <motion.div variants={itemVariants}>
          <GuaranteeSection />
        </motion.div>

        {/* FAQ Section */}
        <motion.section variants={itemVariants} className="my-12">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center text-3xl font-bold"
            style={{ color: "#986f31" }}
          >
            ❓ Perguntas Frequentes
          </motion.h2>
          <FAQ />
        </motion.section>

        {/* Final CTA */}
        <motion.div variants={itemVariants} className="my-12 text-center">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl font-bold"
            style={{ color: "#986f31" }}
          >
            🚀 Está Pronto Para Transformar Seu Negócio Digital?
          </motion.h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(152, 111, 49, 0)",
                "0 0 0 15px rgba(152, 111, 49, 0.1)",
                "0 0 0 30px rgba(152, 111, 49, 0)",
              ],
            }}
            transition={{
              boxShadow: { repeat: Infinity, duration: 2.5 },
            }}
          >
            <Button
              size="lg"
              className="px-8 py-6 text-2xl font-bold pulse-gold border-2"
              style={{
                backgroundColor: "#986f31",
                color: "#303030",
                borderColor: "#d4d3ce",
              }}
            >
              <Link href="/order">🎯 QUERO COMEÇAR AGORA!</Link>
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4"
            style={{ color: "#d4d3ce" }}
          >
            *Acesso imediato após a confirmação do pagamento
          </motion.p>
        </motion.div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-6 text-center border-t-2"
        style={{
          backgroundColor: "#273849",
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
            © {new Date().getFullYear()} Digital Marketing Mastery. Todos os
            direitos reservados.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center space-x-4"
          >
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
              style={{ color: "#986f31" }}
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
              style={{ color: "#986f31" }}
            >
              Política de Privacidade
            </Link>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
