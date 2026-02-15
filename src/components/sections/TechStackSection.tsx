"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/techStack";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export function TechStackSection() {
  return (
    <section
      id="tech"
      className="scroll-mt-24 border-t border-border bg-muted/30 py-16 md:py-24"
      aria-labelledby="tech-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 id="tech-heading" className="text-3xl font-bold text-foreground md:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-2 text-muted-foreground">
            Linguagens, frameworks e ferramentas com as quais trabalho
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {techStack.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              className="rounded-xl border border-border bg-card/50 p-6 shadow-sm backdrop-blur transition hover:border-primary/30 hover:shadow-md"
            >
              <h3 className="font-semibold text-primary">{category.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2" role="list">
                {category.items.map((tech) => (
                  <li key={tech}>
                    <span className="rounded-md bg-muted px-3 py-1 font-mono text-sm text-foreground">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
