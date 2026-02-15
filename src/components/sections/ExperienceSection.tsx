"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border bg-muted/30 py-16 md:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 id="experience-heading" className="text-3xl font-bold text-foreground md:text-4xl">
            Experiência Profissional
          </h2>
          <p className="mt-2 text-muted-foreground">
            Trajetória e conquistas
          </p>
        </motion.div>

        <div className="mt-12">
          <div className="relative border-l-2 border-primary/30 pl-6 md:pl-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pb-12 last:pb-0"
              >
                <span
                  className="absolute -left-[29px] top-0 flex h-4 w-4 rounded-full border-2 border-primary bg-background md:-left-[33px]"
                  aria-hidden
                />
                <div className="rounded-xl border border-border bg-card/50 p-6 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" aria-hidden />
                    <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                  </div>
                  <p className="mt-1 font-medium text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>

                  <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {exp.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <>
                      <p className="mt-3 text-sm font-medium text-foreground">Conquistas</p>
                      <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-muted px-2 py-1 font-mono text-xs text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
