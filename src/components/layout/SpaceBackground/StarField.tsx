"use client";

/**
 * StarField - Campo de estrelas cintilantes no fundo.
 *
 * Usa animação CSS (star-twinkle) definida em globals.css.
 * Cada estrela tem posição, tamanho e timing próprios.
 */

import { STARS } from "./constants";

export function StarField() {
  return (
    <>
      {STARS.map((star, id) => (
        <div
          key={id}
          className="absolute rounded-full bg-white star-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </>
  );
}
