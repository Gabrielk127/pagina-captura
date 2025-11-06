"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface YoutubeVideoProps {
  video: string;
  playing?: boolean;
  onTimeReached?: (reached: boolean) => void;
  requiredTimeInSeconds?: number;
}

const VslVideo = ({ 
  video, 
  playing = true, 
  onTimeReached,
  requiredTimeInSeconds = 60 
}: YoutubeVideoProps) => {
  const [isClient, setIsClient] = useState(false);
  const [timeLeft, setTimeLeft] = useState(requiredTimeInSeconds);
  const [formUnlocked, setFormUnlocked] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(playing);

  useEffect(() => {
    setIsClient(true);
    setTimerStarted(true);
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
      <div className="relative w-full max-w-[1000px]">
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <ReactPlayer
            url={video}
            playing={isPlaying}
            volume={1}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            style={{ borderRadius: "15px" }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            config={{
              youtube: {
                playerVars: {
                  rel: 0, // Desabilita vídeos relacionados
                  modestbranding: 1, // Remove logo do YouTube
                  showinfo: 0, // Remove informações do vídeo
                  iv_load_policy: 3, // Desabilita anotações
                }
              }
            }}
          />
          
          {/* Contador regressivo */}
          {!formUnlocked && (
            <div className="absolute top-4 right-4 bg-black bg-opacity-80 text-white px-4 py-2 rounded-full text-sm font-bold">
              ⏱️ {timeLeft}s {!isPlaying && "⏸️"}
            </div>
          )}
        </div>

        {/* Barra de progresso */}
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
              ⏱️ {isPlaying ? `Botão será liberado em ${timeLeft} segundos` : `⏸️ Vídeo pausado - ${timeLeft} segundos restantes`}
            </p>
          </div>
        )}

        {/* Mensagem de sucesso */}
        {formUnlocked && (
          <div className="mt-4 text-center">
            <div className="bg-green-500 text-white rounded-lg px-6 py-3 mx-auto inline-block">
              <p className="font-bold text-lg">
                🎉 Botão liberado! Role para baixo
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VslVideo;
