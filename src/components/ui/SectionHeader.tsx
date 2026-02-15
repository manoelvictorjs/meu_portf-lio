"use client";

/**
 * SectionHeader - Cabeçalho reutilizável para seções.
 *
 * Inclui:
 * - Título (h2) com id para acessibilidade (aria-labelledby)
 * - Descrição opcional
 * - Animação de entrada (fade + slide) ao entrar na viewport
 */

import { motion } from "framer-motion";
import { VIEWPORT_ONCE } from "@/lib/constants/animations";

interface SectionHeaderProps {
  /** ID do heading para acessibilidade (aria-labelledby) */
  id: string;
  /** Título da seção */
  title: string;
  /** Descrição opcional abaixo do título */
  description?: string;
  /** Classes CSS adicionais para o container */
  className?: string;
}

export function SectionHeader({
  id,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      className={`text-center ${className}`}
    >
      <h2
        id={id}
        className="text-3xl font-bold text-foreground md:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
