"use client";

/**
 * AboutSection - Seção "Sobre Mim" com destaques e tech stack.
 *
 * Composição:
 * - SectionHeader: título e descrição
 * - Cards de destaques (valores/abordagem)
 * - Grid de categorias da tech stack
 *
 * Dados: src/data/about.ts e src/data/techStack.ts
 */

import { motion } from "framer-motion";
import { techStack } from "@/data/techStack";
import { ABOUT_HIGHLIGHTS } from "@/data/about";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VIEWPORT_ONCE } from "@/lib/constants/animations";

/** Classes CSS para os cards */
const HIGHLIGHT_CARD_CLASS =
  "rounded-2xl border border-border/60 bg-card/80 p-6 text-center shadow-sm backdrop-blur transition hover:border-primary/20 hover:shadow-lg";
const TECH_CARD_CLASS =
  "rounded-xl border border-border/60 bg-card/50 p-5 shadow-sm transition hover:border-primary/20";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border bg-muted/20 py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          id="about-heading"
          title="Sobre Mim"
          description="Desenvolvedor back-end com foco em sistemas escaláveis e mantíveis. Trabalho desde a modelagem de dados até a implantação em produção, com atenção a performance, segurança e boas práticas."
        />

        {/* Cards de destaques (valores/abordagem) */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_HIGHLIGHTS.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ delay: index * 0.05 }}
              className={HIGHLIGHT_CARD_CLASS}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack (linguagens, frameworks, ferramentas) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          className="mt-16"
        >
          <h3 className="text-center text-xl font-semibold text-foreground">
            Tech Stack
          </h3>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            Linguagens, frameworks e ferramentas que utilizo
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((category) => (
              <div key={category.name} className={TECH_CARD_CLASS}>
                <h4 className="font-medium text-primary">{category.name}</h4>
                <ul className="mt-3 flex flex-wrap gap-2" role="list">
                  {category.items.map((tech) => (
                    <li key={tech}>
                      <span className="rounded-lg bg-muted/80 px-2.5 py-1 font-mono text-sm text-foreground">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
