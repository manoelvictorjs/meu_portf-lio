"use client";

/**
 * HeroActions - Botões de ação e links sociais do Hero.
 *
 * Inclui:
 * - Botão "Baixar CV" (link para arquivo em public/cv/)
 * - Botão "Contato" (mailto)
 * - Links para GitHub e LinkedIn
 */

import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import { SITE } from "@/lib/constants/site";
import { ANIMATION_ITEM } from "@/lib/constants/animations";

/** Classes CSS para os botões e links */
const BTN_PRIMARY_CLASS =
  "inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition hover:opacity-90 hover:shadow-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary lg:text-base";
const BTN_SECONDARY_CLASS =
  "inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-6 py-3.5 font-medium text-foreground backdrop-blur transition hover:bg-muted hover:border-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary lg:text-base";
const SOCIAL_LINK_CLASS =
  "rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary";

export function HeroActions() {
  return (
    <>
      {/* Botões principais: CV e Contato */}
      <motion.div
        variants={ANIMATION_ITEM}
        className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
      >
        <a href={SITE.cvUrl} download className={BTN_PRIMARY_CLASS}>
          <Download className="h-4 w-4" aria-hidden />
          Baixar CV
        </a>
        <a href={`mailto:${SITE.email}`} className={BTN_SECONDARY_CLASS}>
          <Mail className="h-4 w-4" aria-hidden />
          Contato
        </a>
      </motion.div>

      {/* Links para redes sociais */}
      <motion.div
        variants={ANIMATION_ITEM}
        className="mt-6 flex gap-4"
      >
        <a
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer"
          className={SOCIAL_LINK_CLASS}
          aria-label="GitHub"
        >
          <Github className="h-6 w-6 lg:h-7 lg:w-7" />
        </a>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={SOCIAL_LINK_CLASS}
          aria-label="LinkedIn"
        >
          <Linkedin className="h-6 w-6 lg:h-7 lg:w-7" />
        </a>
      </motion.div>
    </>
  );
}
