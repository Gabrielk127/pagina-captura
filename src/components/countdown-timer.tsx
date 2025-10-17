"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({
  hours,
  minutes,
  seconds,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1;
        const newMinutes =
          newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours;

        return {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
    >
      <div className="flex space-x-2 text-center">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 0 rgba(152, 111, 49, 0.7)",
              "0 0 0 5px rgba(152, 111, 49, 0.4)",
              "0 0 0 10px rgba(152, 111, 49, 0)",
            ],
          }}
          transition={{
            scale: { duration: 1, repeat: Infinity },
            boxShadow: { duration: 2, repeat: Infinity },
          }}
          className="flex h-16 w-16 flex-col items-center justify-center rounded-lg border-2 md:h-20 md:w-20"
          style={{
            backgroundColor: "#986f31",
            color: "#303030",
            borderColor: "#d4d3ce",
          }}
        >
          <span className="text-2xl font-bold md:text-3xl">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="text-xs font-semibold">Horas</span>
        </motion.div>

        <div
          className="flex items-center justify-center text-2xl font-bold"
          style={{ color: "#986f31" }}
        >
          :
        </div>

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 0 rgba(152, 111, 49, 0.7)",
              "0 0 0 5px rgba(152, 111, 49, 0.4)",
              "0 0 0 10px rgba(152, 111, 49, 0)",
            ],
          }}
          transition={{
            scale: { duration: 1, repeat: Infinity, delay: 0.2 },
            boxShadow: { duration: 2, repeat: Infinity, delay: 0.2 },
          }}
          className="flex h-16 w-16 flex-col items-center justify-center rounded-lg border-2 md:h-20 md:w-20"
          style={{
            backgroundColor: "#986f31",
            color: "#303030",
            borderColor: "#d4d3ce",
          }}
        >
          <span className="text-2xl font-bold md:text-3xl">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="text-xs font-semibold">Minutos</span>
        </motion.div>

        <div
          className="flex items-center justify-center text-2xl font-bold"
          style={{ color: "#986f31" }}
        >
          :
        </div>

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 0 rgba(152, 111, 49, 0.7)",
              "0 0 0 5px rgba(152, 111, 49, 0.4)",
              "0 0 0 10px rgba(152, 111, 49, 0)",
            ],
          }}
          transition={{
            scale: { duration: 1, repeat: Infinity, delay: 0.4 },
            boxShadow: { duration: 2, repeat: Infinity, delay: 0.4 },
          }}
          className="flex h-16 w-16 flex-col items-center justify-center rounded-lg border-2 md:h-20 md:w-20"
          style={{
            backgroundColor: "#dc2626",
            color: "#d4d3ce",
            borderColor: "#d4d3ce",
          }}
        >
          <span className="text-2xl font-bold md:text-3xl">
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="text-xs font-semibold">Segundos</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
