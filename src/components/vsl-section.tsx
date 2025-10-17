"use client";

import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function VSLSection() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto max-w-4xl"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative aspect-video overflow-hidden rounded-lg shadow-2xl border-2"
        style={{
          backgroundColor: "#303030",
          borderColor: "#986f31",
          boxShadow: "0 25px 50px -12px rgba(152, 111, 49, 0.4)",
        }}
      >
        {/* This would be replaced with an actual video player in production */}
        <div
          className="flex h-full w-full items-center justify-center"
          style={{ backgroundColor: "#273849" }}
        >
          <div className="text-center text-white">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(152, 111, 49, 0.7)",
                  "0 0 0 10px rgba(152, 111, 49, 0.4)",
                  "0 0 0 20px rgba(152, 111, 49, 0)",
                ],
              }}
              transition={{
                boxShadow: { repeat: Infinity, duration: 2 },
              }}
            >
              <Button
                variant="outline"
                size="icon"
                className="h-20 w-20 rounded-full border-2 text-white hover:scale-110 transition-transform"
                style={{
                  backgroundColor: "#986f31",
                  borderColor: "#d4d3ce",
                  color: "#303030",
                }}
              >
                <Play className="h-10 w-10" />
                <span className="sr-only">Play video</span>
              </Button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-xl font-medium"
              style={{ color: "#d4d3ce" }}
            >
              🎬 Clique para assistir o vídeo
            </motion.p>
          </div>
        </div>

        {/* Video overlay with headline */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-0 left-0 right-0 p-4"
          style={{
            background:
              "linear-gradient(to top, rgba(48, 48, 48, 0.9), transparent)",
          }}
        >
          <h2
            className="text-xl font-bold md:text-2xl"
            style={{ color: "#d4d3ce" }}
          >
            🎯 Como Eu Construí Um Negócio Digital Lucrativo Partindo do Zero
          </h2>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 text-center text-sm"
        style={{ color: "#d4d3ce" }}
      >
        <p>
          🔊 Por favor, verifique se o som está ligado. Duração do vídeo: 37
          minutos
        </p>
      </motion.div>
    </motion.div>
  );
}
