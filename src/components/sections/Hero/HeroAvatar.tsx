"use client";

/**
 * HeroAvatar - Avatar/foto de perfil do Hero com badges de tecnologias.
 *
 * Exibe a foto do usuário em um círculo com borda e sombra.
 * Se minhafoto.png ou minhafoto.jpg não existir em public/, usa placeholder SVG.
 * object-top garante que o rosto fique visível (evita cortar a cabeça).
 */

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ANIMATION_ITEM } from "@/lib/constants/animations";

/** Placeholder SVG em data URL - funciona sem depender de arquivos externos */
const PLACEHOLDER_SVG =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#4f46e5"/></linearGradient></defs><rect width="200" height="200" rx="100" fill="url(#g)"/><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" fill="white" font-family="system-ui" font-size="72" font-weight="600">MV</text></svg>'
  );

export function HeroAvatar() {
  const [imgSrc, setImgSrc] = useState(PLACEHOLDER_SVG);

  // Tenta carregar minhafoto.png, depois minhafoto.jpg; mantém placeholder se falhar
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImgSrc("/minhafoto.png");
    img.onerror = () => {
      const img2 = new Image();
      img2.onload = () => setImgSrc("/minhafoto.jpg");
      img2.onerror = () => {}; // mantém placeholder
      img2.src = "/minhafoto.jpg";
    };
    img.src = "/minhafoto.png";
  }, []);

  return (
    <motion.div variants={ANIMATION_ITEM} className="relative shrink-0">
      {/* Container circular da foto */}
      <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-primary/30 shadow-2xl ring-4 ring-primary/10 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
        <img
          src={imgSrc}
          alt="Foto de perfil de Manoel Victor"
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Badges de tecnologias */}
      <div className="absolute -bottom-1 -right-1 flex gap-2 rounded-full bg-card p-2 shadow-lg">
        <span className="font-mono text-xs font-medium text-primary">Node.js</span>
        <span className="font-mono text-xs font-medium text-accent">Python</span>
      </div>
    </motion.div>
  );
}
