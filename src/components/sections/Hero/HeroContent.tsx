"use client";

/**
 * HeroContent - Conteúdo textual do Hero (nome, tagline, descrição).
 *
 * Exibe o nome do desenvolvedor, tagline e breve descrição profissional.
 * Dados vêm de SITE em lib/constants/site.ts.
 */

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants/site";
import { ANIMATION_ITEM } from "@/lib/constants/animations";

export function HeroContent() {
  return (
    <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
      {/* Nome principal */}
      <motion.h1
        id="hero-heading"
        variants={ANIMATION_ITEM}
        className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl"
      >
        {SITE.name}
      </motion.h1>

      {/* Tagline (subtítulo) */}
      <motion.p
        variants={ANIMATION_ITEM}
        className="mt-2 font-mono text-lg text-primary md:text-xl lg:text-2xl"
      >
        {SITE.tagline}
      </motion.p>

      {/* Descrição profissional */}
      <motion.p
        variants={ANIMATION_ITEM}
        className="mt-5 max-w-xl text-base text-muted-foreground lg:max-w-2xl lg:text-lg"
      >
        Desenvolvedor Back-End focado em APIs escaláveis, microserviços e
        arquitetura de sistemas. Construindo soluções robustas com Node.js,
        TypeScript e Python.
      </motion.p>
    </div>
  );
}
