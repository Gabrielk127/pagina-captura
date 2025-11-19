"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface YoutubeVideoProps {
  video: string;
  playing?: boolean;
  onTimeReached?: (reached: boolean) => void;
  requiredTimeInSeconds?: number;
  isVertical?: boolean;
}

const VslVideo = ({
  video,
  onTimeReached,
  requiredTimeInSeconds = 60,
  isVertical = false,
}: YoutubeVideoProps) => {
  const [isClient, setIsClient] = useState(false);
  const [timeLeft, setTimeLeft] = useState(requiredTimeInSeconds);
  const [formUnlocked, setFormUnlocked] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Timer para liberar o formulário - só conta quando o vídeo está tocando
  useEffect(() => {
    if (!timerStarted || timeLeft <= 0 || !isPlaying) {
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
  }, [timeLeft, onTimeReached, timerStarted, isPlaying]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex justify-center items-center overflow-hidden rounded-2xl p-4">
      <div
        className={`relative w-full ${
          isVertical ? "max-w-[400px]" : "max-w-[1000px]"
        }`}
      >
        <div
          className={`relative rounded-xl overflow-hidden ${
            isVertical ? "aspect-[9/16]" : "aspect-video"
          }`}
        >
          <ReactPlayer
            url={video}
            playing={isPlaying}
            volume={1}
            muted={false}
            controls={false}
            width="100%"
            height="100%"
            style={{ borderRadius: "15px" }}
            onPlay={() => {
              setIsPlaying(true);
              setVideoEnded(false);
              if (!timerStarted) {
                setTimerStarted(true);
              }
            }}
            onPause={() => setIsPlaying(false)}
            onEnded={() => {
              setVideoEnded(true);
              setIsPlaying(false);
            }}
            config={{
              youtube: {
                playerVars: {
                  rel: 0,
                  modestbranding: 1,
                  showinfo: 0,
                  iv_load_policy: 3,
                  controls: 0,
                  disablekb: 1,
                  fs: 0,
                  playsinline: 1,
                },
              },
            }}
          />

          {/* Contador regressivo */}
          {!formUnlocked && timerStarted && (
            <div className="absolute top-4 right-4 bg-black bg-opacity-80 text-white px-4 py-2 rounded-full text-sm font-bold">
              ⏱️ {timeLeft}s {!isPlaying && "⏸️"}
            </div>
          )}

          {/* Overlay quando o vídeo termina */}
          {videoEnded && (
            <div className="absolute inset-0 bg-[#273849] flex items-center justify-center">
              <div className="text-center px-4">
                <div className="mb-4">
                  <span className="text-6xl">✅</span>
                </div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#986f31" }}
                >
                  Vídeo Finalizado
                </h3>
                <p className="text-white text-lg">
                  Role para baixo e garanta sua oferta!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Barra de progresso */}
        {!formUnlocked && timerStarted && (
          <div className="mt-4">
            <div className="bg-gray-700 rounded-full h-4 mb-3">
              <div
                className="h-4 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all duration-300"
                style={{
                  backgroundColor: "#22c55e",
                  width: `${
                    ((requiredTimeInSeconds - timeLeft) /
                      requiredTimeInSeconds) *
                    100
                  }%`,
                }}
              >
                {((requiredTimeInSeconds - timeLeft) / requiredTimeInSeconds) *
                  100 >
                  15 &&
                  `${Math.round(
                    ((requiredTimeInSeconds - timeLeft) /
                      requiredTimeInSeconds) *
                      100
                  )}%`}
              </div>
            </div>
            <p
              className="text-center text-lg font-semibold"
              style={{ color: "#986f31" }}
            >
              ⏱️{" "}
              {isPlaying
                ? `Botão será liberado em ${timeLeft} segundos`
                : `⏸️ Vídeo pausado - ${timeLeft} segundos restantes`}
            </p>
          </div>
        )}

        {/* CTA Section - Sempre visível */}
        <div className="my-6 text-center">
          <p className="text-xl font-semibold" style={{ color: "#986f31" }}>
            Lote promocional, estou liberando apenas <strong>25</strong>{" "}
            simuladores de investimento por apenas R$47,50
          </p>
        </div>

        {/* Mensagem para iniciar o vídeo */}
        {!timerStarted && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold" style={{ color: "#986f31" }}>
              ▶️ Clique em play para começar
            </p>
          </div>
        )}

        {/* Mensagem de sucesso */}
        {formUnlocked && (
          <div className="mt-4 text-center">
            <button
              onClick={() => {
                const buyButton = document.querySelector("[data-buy-button]");
                if (buyButton) {
                  buyButton.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
              }}
              className="bg-green-600 text-white rounded-lg px-6 py-3 mx-auto inline-block hover:bg-green-700  cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <p className="font-bold text-lg">
                Garanta Já o Simulador de Investimentos
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VslVideo;
