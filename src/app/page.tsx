"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import VslVideo from "@/components/vsl-video";

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
  const [showButton, setShowButton] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const handleVideoTimeReached = (reached: boolean) => {
    console.log("Video time reached:", reached);
    setShowButton(reached);
  };

  const handleBuyClick = () => {
    window.open(
      "https://pay.hotmart.com/D102466966L?bid=1762361748801",
      "_blank"
    );
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4 mx-auto"></div>
          <p className="text-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Logo no canto superior esquerdo */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 z-10"
      >
        <img
          src="/logo.png"
          alt="AX Mercado Real Logo"
          className="h-12 md:h-16 lg:h-20 w-auto"
        />
      </motion.div>

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
            className="mb-4 text-2xl font-normal tracking-tight md:text-4xl lg:text-5xl text-foreground font-playfair"
          >
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block mb-2 underline decoration-white decoration-2 font-light underline-offset-4"
            >
              AX MERCADO REAL
            </motion.span>
          </motion.h1>

          {/* Headline */}
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-6 text-base md:text-xl lg:text-2xl font-normal font-tt text-white"
          >
            Assista o vídeo, aprenda a interpretar seus resultados e descubra como acelerar o caminho para a sua aposentadoria dos sonhos.
          </motion.h2>
        </motion.div>
        {/* VSL Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <VslVideo
            video="https://www.youtube.com/watch?v=WYeD4AD8nMc"
            playing={true}
            onTimeReached={handleVideoTimeReached}
            requiredTimeInSeconds={156}
            isVertical={true}
          />
        </motion.div>
        {/* Benefits Section */}
        <motion.section variants={itemVariants} className="my-12">
          <motion.h3
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center text-xl md:text-2xl font-bold text-primary"
          >
            Ao adquirir o simulador você receberá:
          </motion.h3>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Simulador  de Investimentos Patrimonial exclusivo e personalizado.",
                "Projeção real de valorização patrimonial.",
                "Planilha inteligente para construir os seus ativos patrimoniais",
                "45 minutos de consultoria gratuita para tirar suas dúvidas.",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0">
                    <span className="text-xl text-green-500">✅</span>
                  </div>
                  <p className="text-lg text-foreground">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* Buy Button Section - Aparece apenas após o tempo necessário */}
        {showButton ? (
          <motion.section
            variants={itemVariants}
            className="my-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mx-auto max-w-2xl text-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
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
                    onClick={handleBuyClick}
                    size="lg"
                    data-buy-button
                    className="cursor-pointer w-full py-6 text-base md:text-lg lg:text-2xl font-bold border-2 border-green-600 bg-green-500 text-white hover:bg-green-600 hover:scale-105 transition-all whitespace-normal break-words"
                    style={{
                      lineHeight: 1.2,
                      padding: "1.5rem 1rem",
                      wordBreak: "break-word",
                    }}
                  >
                    <span className="block md:inline text-lg md:text-xl lg:text-2xl leading-tight">
                      Garanta já o seu
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        ) : (
          // Placeholder quando o botão não está disponível
          <motion.section variants={itemVariants} className="my-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl"
            >
              <div className="p-8 rounded-lg border-2 border-dashed border-primary bg-card">
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-6xl">⏳</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    Botão de compra será liberado em breve
                  </h3>
                  <p className="text-foreground">
                    Continue assistindo o vídeo para ter acesso à oferta
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}
        {/* Final reinforcement - Aparece apenas quando o botão está disponível */}
        {showButton && (
          <motion.section variants={itemVariants} className="my-12 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-4xl"
            >
              <div className="p-8 rounded-lg border-2 border-primary bg-card shadow-2xl">
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  <strong className="text-primary">OFERTA EXCLUSIVA:</strong>{" "}
                  Além da calculadora completa, você receberá 45 minutos de
                  consultoria gratuita com nossos especialistas para entender
                  como aplicar as estratégias no seu caso específico.
                </p>
                <p className="text-base text-foreground">
                  Essa é a mesma ferramenta que usamos para orientar
                  investidores que já construíram patrimônio sólido. Garanta a
                  sua agora e comece a planejar seu crescimento financeiro com
                  suporte profissional.
                </p>
              </div>
            </motion.div>
          </motion.section>
        )}
      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-6 text-center border-t-2 border-primary bg-background text-foreground"
      >
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-2"
          >
            © {new Date().getFullYear()} Calculadora de Crescimento Patrimonial.
            Todos os direitos reservados.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}
