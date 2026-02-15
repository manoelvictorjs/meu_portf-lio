/**
 * Dados da seção "Sobre Mim".
 * Destaques de valores e abordagem no desenvolvimento.
 */

import type { LucideIcon } from "lucide-react";
import { Code2, Cpu, Target, MessageSquare } from "lucide-react";

export interface AboutHighlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    icon: Code2,
    title: "Código limpo",
    text: "Design patterns, testes e documentação. APIs bem modeladas e fáceis de evoluir.",
  },
  {
    icon: Cpu,
    title: "Performance",
    text: "Otimização de queries, cache, filas e arquitetura pensada para escala.",
  },
  {
    icon: Target,
    title: "Entrega de valor",
    text: "Alinhamento com negócio, métricas e entregas incrementais com impacto.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação",
    text: "Documentação clara, revisões de código e diálogo com times e stakeholders.",
  },
];
