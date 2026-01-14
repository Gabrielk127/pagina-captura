"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Whatsapp from "@/lib/Whatsapp/Whatsapp";

export default function LandingPage() {
  const [isMuted, setIsMuted] = useState(true);

  const handleUnmute = () => {
    setIsMuted(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.02, 1],
  };

  const pulseTransition = {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut" as const,
  };

  return (
    <div className="min-h-screen bg-[#101418]">
      <Whatsapp />
      <header className="container mx-auto px-4 py-4 md:py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/axlogo.png"
            alt="AX Logo"
            width={60}
            height={60}
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
          />
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-6xl mx-auto text-center space-y-6"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance leading-tight text-white"
          >
            Tenha <span className="text-[#7CEB63]">clareza</span> sobre seus
            números e conquiste sua{" "}
            <span className="text-[#7CEB63]">liberdade</span> financeira e
            patrimonial.
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white"
          >
            O <span className="text-[#7CEB63]">próximo nível</span> da sua vida
            financeira.
          </motion.h2>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-6 md:py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black border-2 border-gray-700 group">
            <iframe
              key={isMuted ? "muted" : "unmuted"}
              id="youtube-player"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/8cKwjJqB5p0?autoplay=1${
                isMuted ? "&mute=1" : ""
              }&enablejsapi=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>

            {isMuted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={handleUnmute}
                className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer hover:bg-black/30 transition-colors rounded-lg"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg px-6 md:px-10 py-4 md:py-6 text-center shadow-lg"
                >
                  <p className="text-gray-800 font-semibold text-sm md:text-base">
                    🔇 Vídeo está mutado
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm mt-2">
                    Clique aqui para desmutar
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <motion.button
              animate={pulseAnimation}
              transition={pulseTransition}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#7CEB63] hover:bg-[#6ad854] text-[#101418] font-bold text-base md:text-lg lg:text-xl px-8 md:px-12 py-4 md:py-5 rounded-lg shadow-lg shadow-[#7CEB63]/30 transition-colors cursor-pointer"
            >
              QUERO COMEÇAR AGORA
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Professor Section - Removed companies section, made image rectangular and larger */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center mb-8 md:mb-12"
          >
            Conheça Quem Vai Te Guiar
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Photo - Made rectangular and larger */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="shrink-0"
            >
              <div className="relative">
                <div className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-112 rounded-xl overflow-hidden border-4 border-[#7CEB63] shadow-xl shadow-[#7CEB63]/20">
                  <Image
                    src="/images/Alexandre.jpg"
                    alt="Dr. Frederico Porto"
                    width={320}
                    height={448}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                Alexandre Lourenço
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-4">
                Estrategista Patrimonial
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                Sei que investir vai muito além de buscar rentabilidade:
                trata-se de planejar o futuro com inteligência. Minha missão é
                transformar recursos em{" "}
                <span className="text-[#7CEB63] font-semibold">
                  patrimônio real
                </span>
                , gerando tranquilidade financeira por meio de decisões
                consistentes.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                Com atuação voltada à construção de valor financeiro de longo
                prazo, uno estratégia, segurança e previsibilidade.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Ao longo de seus mais de{" "}
                <span className="text-[#7CEB63] font-semibold">
                  12 anos de carreira
                </span>
                , tenho compartilhando conhecimento e expertise em estratégia
                Patrimonial. Movido pelo propósito de{" "}
                <span className="text-[#7CEB63] font-semibold">
                  gerar prosperidade sustentável
                </span>
                , ajudando investidores e empresários a evoluírem
                financeiramente.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 md:mt-12 text-center"
          >
            <motion.button
              animate={pulseAnimation}
              transition={pulseTransition}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#7CEB63] hover:bg-[#6ad854] text-[#101418] font-bold text-base md:text-lg lg:text-xl px-8 md:px-12 py-4 md:py-5 rounded-lg shadow-lg shadow-[#7CEB63]/30 transition-colors cursor-pointer"
            >
              GARANTIR MINHA VAGA
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Final Text Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Sob minha orientação, você encontrará uma abordagem estratégica e
            completa para potencializar seu patrimônio, com foco no equilíbrio
            entre rentabilidade, segurança e prosperidade sustentável.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 md:py-12 border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6"
        >
          <div className="flex items-center">
            <Image
              src="/images/axlogo.png"
              alt="AX Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 opacity-70"
            />
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-xs md:text-sm">
              © 2026 Calculadora de Crescimento Patrimonial. Todos os direitos
              reservados.
            </p>
            {/* <p className="text-gray-500 text-xs md:text-sm mt-1">
              Integração Humana e Treinamento Eirelli
            </p>
            <p className="text-gray-500 text-xs mt-1">
              CNPJ 07.251.906/0001-28
            </p> */}
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
