/**
 * Dados da experiência profissional.
 * Ordenados do mais recente ao mais antigo.
 */

import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "1", 
    company: "Freelancer (Projeto Ecopeças)",
    role: "Desenvolvedor Full Stack",
    period: "2025 – Atual",
    description: [
      "Desenvolvimento de plataforma de e-commerce personalizada para o setor automotivo (Ecopeças).",
      "Integração bidirecional com a API do Mercado Livre para sincronização em tempo real de anúncios, preços e níveis de estoque.",
      "Arquitetura focada em performance, garantindo que o processamento de vendas utilize a infraestrutura robusta do ecossistema ML.",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Mercado Livre API", "Tailwind CSS"],
    achievements: [
      "Automação completa do fluxo de atualização de produtos, eliminando erros de estoque manual.",
      "Implementação de interface responsiva otimizada para conversão de vendas mobile e desktop.",
    ],
},
 
];
