"use client";

/**
 * ExperienceCard - Card de uma experiência profissional na timeline.
 *
 * Exibe cargo, empresa, período, descrição e tecnologias utilizadas.
 * Usado na seção de Projetos & Experiência.
 */

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { VIEWPORT_ONCE } from "@/lib/constants/animations";
import type { Experience } from "@/lib/types";

const CARD_CLASS =
  "rounded-xl border border-border/60 bg-card/50 p-5 shadow-sm transition hover:border-primary/20";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT_ONCE}
      className="relative pb-10 last:pb-0"
    >
      {/* Marcador da timeline */}
      <span
        className="absolute -left-[29px] top-0 flex h-4 w-4 rounded-full border-2 border-primary bg-background md:-left-[33px]"
        aria-hidden
      />

      <div className={CARD_CLASS}>
        {/* Cargo e empresa */}
        <div className="flex flex-wrap items-center gap-2">
          <Briefcase className="h-5 w-5 text-primary" aria-hidden />
          <h4 className="text-lg font-bold text-foreground">
            {experience.role}
          </h4>
        </div>
        <p className="mt-1 font-medium text-primary">{experience.company}</p>
        <p className="text-sm text-muted-foreground">{experience.period}</p>

        {/* Descrição (lista) */}
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          {experience.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Tecnologias */}
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-muted/80 px-2.5 py-1 font-mono text-xs text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
