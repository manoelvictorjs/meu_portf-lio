/**
 * Tipos globais do portfólio.
 * Interfaces para projetos, experiência, tech stack, etc.
 */

/** Projeto do portfólio */
export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  architecture?: string;
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  featured: boolean;
}

/** Experiência profissional */
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

/** Categoria da tech stack (ex: Linguagens, Frameworks) */
export interface TechCategory {
  name: string;
  items: string[];
}

/** Link de rede social */
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

/** Dados do formulário de contato */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
