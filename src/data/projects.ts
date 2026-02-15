/**
 * Dados dos projetos do portfólio.
 * Apenas projetos com featured: true são exibidos na seção principal.
 */

import type { Project } from "@/lib/types";

export const projects: Project[] = [
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
  {
    id: "3", 
    title: "E-commerce Automotivo Inteligente",
    description:
      "Plataforma de autopeças integrada dinamicamente à API do Mercado Livre para sincronização de estoque e preços.",
    problem: "Necessidade de gerenciar um catálogo vasto sem a complexidade de um banco de dados local redundante.",
    solution:
      "Arquitetura baseada em consumo de API REST, cache de dados para performance e mapeamento dinâmico de categorias e detalhes técnicos.",
    stack: ["React/Next.js", "TypeScript", "Mercado Livre API", "Tailwind CSS", "Node.js"],
    metrics: [
      { label: "Sincronização", value: "Real-time" },
      { label: "Itens Listados", value: "1000+" },
    ],
    featured: true,
},
  
];
