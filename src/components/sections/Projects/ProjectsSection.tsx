"use client";

/**
 * ProjectsSection - Seção de projetos e experiência profissional.
 *
 * Composição:
 * - SectionHeader: título e descrição
 * - Projetos em destaque (ProjectCard)
 * - Timeline de experiência (ExperienceCard)
 *
 * Dados: src/data/projects.ts e src/data/experience.ts
 */

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { ExperienceCard } from "./ExperienceCard";

/** Apenas projetos marcados como featured */
const FEATURED_PROJECTS = projects.filter((p) => p.featured);

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border py-20 md:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          id="projects-heading"
          title="Projetos & Experiência"
          description="Sistemas que construí e trajetória profissional"
        />

        <div className="mt-14 space-y-12">
          {/* Projetos em destaque */}
          <div>
            <h3 className="mb-8 text-lg font-semibold text-primary">
              Projetos em Destaque
            </h3>
            <div className="space-y-8">
              {FEATURED_PROJECTS.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isReversed={index % 2 === 1}
                />
              ))}
            </div>
          </div>

          {/* Experiência profissional (timeline) */}
          <div>
            <h3 className="mb-8 text-lg font-semibold text-primary">
              Experiência Profissional
            </h3>
            <div className="relative border-l-2 border-primary/20 pl-6 md:pl-8">
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
