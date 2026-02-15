"use client";

/**
 * HeroSection - Seção inicial do portfólio (above the fold).
 *
 * Primeira seção visível ao carregar o site.
 * Composição:
 * - HeroAvatar: foto de perfil com badges (Node.js, Python)
 * - HeroContent: nome, tagline, descrição
 * - HeroActions: botões CV/Contato e links sociais
 *
 * Foto: coloque minhafoto.png ou minhafoto.jpg em public/
 */

import { motion } from "framer-motion";
import { ANIMATION_CONTAINER } from "@/lib/constants/animations";
import { HeroAvatar } from "./HeroAvatar";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Gradiente de fundo sutil */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          variants={ANIMATION_CONTAINER}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20 xl:gap-24"
        >
          <HeroAvatar />
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <HeroContent />
            <HeroActions />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
