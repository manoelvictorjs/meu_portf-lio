"use client";

/**
 * ProjectCard - Card de um projeto em destaque.
 *
 * Exibe título, descrição, solução, métricas, stack e links (GitHub/Demo).
 * Layout alternado (reversed) em telas médias para variedade visual.
 */

import { motion } from "framer-motion";
import { Github, ExternalLink, BarChart3 } from "lucide-react";
import { VIEWPORT_ONCE } from "@/lib/constants/animations";
import { cn } from "@/lib/utils/cn";
import type { Project } from "@/lib/types";

const CARD_CLASS =
  "rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur md:p-8 transition hover:border-primary/20 hover:shadow-lg";

interface ProjectCardProps {
  project: Project;
  isReversed?: boolean;
}

export function ProjectCard({ project, isReversed = false }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      className={CARD_CLASS}
    >
      <div className={cn("md:flex", isReversed && "md:flex-row-reverse")}>
        <div className="flex-1">
          {/* Título e descrição */}
          <h4 className="text-xl font-bold text-foreground md:text-2xl">
            {project.title}
          </h4>
          <p className="mt-2 text-muted-foreground">{project.description}</p>

          {/* Solução */}
          <div className="mt-4 space-y-2">
            <p className="text-sm">
              <span className="font-medium text-foreground">Solução: </span>
              <span className="text-muted-foreground">{project.solution}</span>
            </p>
          </div>

          {/* Métricas (se houver) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center gap-2 rounded-lg bg-muted/80 px-3 py-2"
                >
                  <BarChart3 className="h-4 w-4 text-primary" aria-hidden />
                  <span className="text-sm">
                    <span className="text-muted-foreground">
                      {metric.label}:
                    </span>{" "}
                    <span className="font-medium text-foreground">
                      {metric.value}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Stack tecnológica */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border/60 bg-background/80 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links: Código e Demo */}
          <div className="mt-5 flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Github className="h-4 w-4" />
                Código
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
