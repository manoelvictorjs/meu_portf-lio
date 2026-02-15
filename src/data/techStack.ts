/**
 * Dados da tech stack.
 * Categorias e itens exibidos na seção "Sobre".
 */

import type { TechCategory } from "@/lib/types";

export const techStack: TechCategory[] = [
  { name: "Linguagens", items: ["TypeScript", "JavaScript", "Python", "Java"] },
  {
    name: "Frameworks & Runtime",
    items: ["Node.js", "Express", "NestJS", "FastAPI", "Django"],
  },
  { name: "Databases", items: ["PostgreSQL", "MySQL"] },
  {
    name: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
  },
  { name: "Message Queues & Streams", items: ["RabbitMQ", "Apache Kafka"] },
  { name: "Testing", items: ["Jest", "Pytest", "Supertest", "Vitest"] },
];
