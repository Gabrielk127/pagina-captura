"use client";
import React, { useEffect, useState, useRef } from "react";

interface VideoProps {
  video: string;
  description?: string;
  onTimeReached?: (reached: boolean) => void;
  requiredTimeInSeconds?: number;
}

const VslVideo = ({
  video,
  description = "Aprenda como maximizar seu patrimônio com estratégias inteligentes de consórcio",
  onTimeReached,
  requiredTimeInSeconds = 60,
}: VideoProps) => {
  const [timeLeft, setTimeLeft] = useState(requiredTimeInSeconds);
  const [formUnlocked, setFormUnlocked] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Função para extrair o ID do YouTube da URL
  const getYouTubeId = (url: string) => {
    const regex =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(video);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Detectar interação do usuário no mobile
  useEffect(() => {
    if (!isMobile || userInteracted || timerStarted) return;

    const handleUserInteraction = () => {
      console.log("User interacted with video area - starting timer");
      setUserInteracted(true);
      setTimerStarted(true);
    };

    const container = containerRef.current;
    if (container) {
      // Detectar qualquer clique na área do vídeo
      container.addEventListener("click", handleUserInteraction, true);
      container.addEventListener("touchstart", handleUserInteraction, true);

      return () => {
        container.removeEventListener("click", handleUserInteraction, true);
        container.removeEventListener(
          "touchstart",
          handleUserInteraction,
          true
        );
      };
    }
  }, [isMobile, userInteracted, timerStarted]);

  // Timer que só inicia quando timerStarted é true (mobile) ou imediatamente (desktop)
  useEffect(() => {
    // No desktop: inicia automaticamente
    // No mobile: só inicia quando o usuário clicar (timerStarted = true)
    const shouldStartTimer = !isMobile || timerStarted;

    if (!shouldStartTimer || timeLeft <= 0) {
      if (timeLeft <= 0) {
        setFormUnlocked(true);
        onTimeReached?.(true);
      }
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeReached, isMobile, timerStarted]);

  // Iniciar timer automaticamente no desktop
  useEffect(() => {
    if (!isMobile && !timerStarted) {
      setTimerStarted(true);
    }
  }, [isMobile, timerStarted]);

  if (!videoId) {
    return (
      <div className="mx-auto max-w-4xl">
        <div
          className="flex items-center justify-center rounded-lg p-8 border-2"
          style={{
            backgroundColor: "#303030",
            borderColor: "#986f31",
            boxShadow: "0 25px 50px -12px rgba(152, 111, 49, 0.4)",
          }}
        >
          <p style={{ color: "#d4d3ce" }}>URL de vídeo inválida</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div
        ref={containerRef}
        className="relative aspect-video overflow-hidden rounded-lg shadow-2xl border-2"
        style={{
          backgroundColor: "#303030",
          borderColor: "#986f31",
          boxShadow: "0 25px 50px -12px rgba(152, 111, 49, 0.4)",
        }}
      >
        {/* YouTube iframe */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?${
            isMobile ? "autoplay=0" : "autoplay=1"
          }&rel=0&showinfo=0&modestbranding=1&controls=1&fs=1&playsinline=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />

        {/* Contador regressivo */}
        {!formUnlocked && (
          <div className="absolute top-4 right-4 bg-black bg-opacity-80 text-white px-4 py-2 rounded-full text-sm font-bold">
            ⏱️ {timeLeft}s
          </div>
        )}
      </div>

      {/* Barra de progresso - Fora do vídeo */}
      {!formUnlocked && (
        <div className="mt-4">
          <div className="bg-gray-700 rounded-full h-4 mb-3">
            <div
              className="h-4 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all duration-300"
              style={{
                backgroundColor: "#22c55e",
                width: `${
                  ((requiredTimeInSeconds - timeLeft) / requiredTimeInSeconds) *
                  100
                }%`,
              }}
            >
              {((requiredTimeInSeconds - timeLeft) / requiredTimeInSeconds) *
                100 >
                15 &&
                `${Math.round(
                  ((requiredTimeInSeconds - timeLeft) / requiredTimeInSeconds) *
                    100
                )}%`}
            </div>
          </div>
          <p
            className="text-center text-lg font-semibold"
            style={{ color: "#986f31" }}
          >
            {isMobile && !timerStarted ? (
              <>📱 Toque no vídeo para começar a contagem</>
            ) : timerStarted ? (
              <>
                ⏱️ Contagem iniciada! Formulário será liberado em {timeLeft}{" "}
                segundos
              </>
            ) : (
              <>⏱️ Formulário será liberado em {timeLeft} segundos</>
            )}
          </p>
        </div>
      )}

      {/* Mensagem de sucesso - Fora do vídeo */}
      {formUnlocked && (
        <div className="mt-4 text-center">
          <div className="bg-green-500 text-white rounded-lg px-6 py-3 mx-auto inline-block">
            <p className="font-bold text-lg">
              🎉 Formulário liberado! Role para baixo
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 text-center text-sm" style={{ color: "#d4d3ce" }}>
        <p>🔊 {description}</p>
      </div>
    </div>
  );
};

export default VslVideo;
