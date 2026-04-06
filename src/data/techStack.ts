/**
 * Dados da tech stack.
 * Categorias e itens exibidos na seção "Sobre".
 */

import type { TechCategory } from "@/lib/types";

export const techStack: TechCategory[] = [
  {
    name: "Linguagens & Scripts",
    items: [
      "TypeScript",
      "JavaScript (ESM)",
      "Shell Script (POSIX)",
      "PowerShell",
      "Python",
      "Java",
    ],
  },
  {
    name: "Front-end",
    items: [
      "Next.js (App Router)",
      "React 18",
      "Tailwind CSS 3",
      "Lucide React",
      "PostCSS",
    ],
  },
  {
    name: "Back-end & APIs",
    items: [
      "Node.js 22",
      "Express 5",
      "JWT (jsonwebtoken)",
      "Bcrypt",
      "Multer",
      "Winston",
      "API REST Mercado Livre (OAuth 2.0)",
    ],
  },
  {
    name: "DevOps & Infraestrutura",
    items: [
      "Docker (multi-stage)",
      "Docker Compose",
      "Alpine Linux",
      "Proxy reverso + Trust Proxy",
      "CSP · HSTS · Rate limit",
    ],
  },
  {
    name: "Dados & Integrações",
    items: ["PostgreSQL", "MySQL", "JSON (filesystem)", "Cache de produtos"],
  },
  {
    name: "Qualidade & Ferramentas",
    items: [
      "Vitest",
      "Jest",
      "Pytest",
      "Supertest",
      "ESLint",
      "Prettier",
      "Git",
      "npm",
      "ts-node-dev",
    ],
  },
  { name: "Message Queues & Streams", items: ["RabbitMQ", "Apache Kafka"] },
];
