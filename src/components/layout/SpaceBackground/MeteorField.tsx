"use client";

/**
 * MeteorField - Meteoros animados cruzando a tela.
 *
 * Usa Framer Motion para animação fluida.
 * Meteoros surgem da direita e descem para a esquerda.
 * Configuração gerada no cliente (useEffect) para evitar hydration mismatch.
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { METEOR_COUNT, METEOR_SIZES } from "./constants";

type MeteorConfig = {
  size: number;
  delay: number;
  repeatDelay: number;
  duration: number;
  top: number;
};

export function MeteorField() {
  const [meteors, setMeteors] = useState<MeteorConfig[]>([]);

  // Gera config dos meteoros no cliente (evita mismatch SSR)
  useEffect(() => {
    setMeteors(
      Array.from({ length: METEOR_COUNT }, (_, i) => ({
        size: METEOR_SIZES[i % METEOR_SIZES.length],
        delay: (i / METEOR_COUNT) * 45 + Math.random() * 15,
        repeatDelay: 4 + Math.random() * 6,
        duration: 18 + Math.random() * 42,
        top: -5 + Math.random() * 25,
      }))
    );
  }, []);

  return (
    <>
      {meteors.map((meteor, i) => (
        <motion.div
          key={i}
          className="absolute z-[1] rounded-full"
          style={{
            top: `${meteor.top}%`,
            right: "-30px",
            width: `${meteor.size}px`,
            height: `${meteor.size}px`,
            background:
              "radial-gradient(circle at 35% 35%, #fff 0%, #e0f2fe 40%, #7dd3fc 100%)",
            boxShadow: `0 0 ${meteor.size * 1.5}px ${meteor.size / 2}px rgba(255,255,255,0.7), 0 0 ${meteor.size * 3}px ${meteor.size}px rgba(56,189,248,0.4)`,
          }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: "-180vw",
            y: "130vh",
            opacity: [1, 1, 0.8, 0],
          }}
          transition={{
            duration: meteor.duration,
            repeat: Infinity,
            repeatDelay: meteor.repeatDelay,
            delay: meteor.delay,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}
