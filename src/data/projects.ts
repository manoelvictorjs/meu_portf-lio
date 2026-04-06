/**
 * Dados dos projetos do portfólio.
 * Apenas projetos com featured: true são exibidos na seção principal.
 */

import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "rm-ecopecas",
    title: "RM Ecopeças – Plataforma de E-commerce Integrada",
    description:
      "E-commerce de autopeças com catálogo sincronizado à API do Mercado Livre, back-end em Node.js/Express e front-end em Next.js, empacotado com Docker e boas práticas de segurança.",
    problem:
      "Centralizar vendas e estoque com integração confiável ao Mercado Livre, sem redundância desnecessária de dados e com desempenho estável em produção.",
    solution:
      "Arquitetura em camadas com API REST, autenticação JWT, upload com Multer, logging com Winston, cache de produtos e persistência em JSON no filesystem. Front-end com Next.js 16 (App Router), React 18 e Tailwind CSS 3. Infraestrutura com Docker multi-stage, Compose, imagens Alpine, proxy reverso (trust proxy), CSP, HSTS e rate limiting. Integração OAuth 2.0 com a API do Mercado Livre. Qualidade com Vitest, ESLint e Prettier.",
    stack: [
      "TypeScript",
      "JavaScript (ESM)",
      "Shell Script (POSIX)",
      "PowerShell",
      "Next.js 16 (App Router)",
      "React 18",
      "Tailwind CSS 3",
      "Lucide React",
      "PostCSS",
      "Node.js 22",
      "Express 5",
      "JWT (jsonwebtoken)",
      "Bcrypt",
      "Multer",
      "Winston",
      "Docker",
      "Docker Compose",
      "Alpine Linux",
      "Proxy reverso + Trust Proxy",
      "CSP · HSTS · Rate limit",
      "API REST Mercado Livre (OAuth 2.0)",
      "JSON (filesystem) + cache",
      "Vitest",
      "ESLint",
      "Prettier",
      "Git · npm",
      "ts-node-dev",
    ],
    architecture:
      "Multi-stage Docker; Compose com serviços Alpine; API REST + OAuth Mercado Livre; camadas separando rotas, serviços e persistência em JSON; cache de produtos para leitura rápida.",
    metrics: [
      { label: "Integração", value: "Mercado Livre OAuth 2.0" },
      { label: "Deploy", value: "Docker + proxy reverso" },
    ],
    demoUrl: "https://www.rmecopeças.com.br",
    featured: true,
  },
  {
    id: "1",
    title: "Integração de Dados com API Mercado Livre (Open Platform)",
    description:
      "Desenvolvimento de uma aplicação para consumo e análise de dados de produtos utilizando a API pública do Mercado Livre.",
    problem: "Necessidade de integrar e analisar dados de produtos do Mercado Livre de forma eficiente.",
    solution:  "Implementação de um serviço que consome a API do Mercado Livre, processa e armazena os dados em um banco PostgreSQL, com cache Redis para melhor performance.",
    stack: ["Node.js", "NestJS", "TypeScript" ],
    architecture: "Layered (Controller → Service → Repository), event-driven para notificações",
    githubUrl: "https://github.com/manoelvictorjs/consumo_api_ml",
    featured: true,
  },
  {
    id: "2",
    title: "Relógio Pomodoro",
    description:
      "Aplicação web para gerenciamento de tempo com técnicas Pomodoro.",
    problem: "Necessidade de uma ferramenta simples e eficaz para gerenciar o tempo com técnicas Pomodoro.",
    solution:
      "Desenvolvimento de uma aplicação web com timer, ciclos de trabalho e descanso, e estatísticas de produtividade, utilizando React para o frontend e Node.js para o backend.",
    stack: ["Node.js", "TypeScript", "JavaScript",],
    architecture: "",
    githubUrl: "https://github.com/manoelvictorjs/Relogio-pomodoro",
    featured: true,
  },
];
