/**
 * Configurações de animação para Framer Motion.
 *
 * Reutilizáveis em todo o portfólio para consistência visual.
 * Evita repetição de objetos de configuração.
 */

/** Container com filhos animados em sequência (stagger) */
export const ANIMATION_CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const;

/** Item individual: fade + slide up */
export const ANIMATION_ITEM = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
} as const;

/** Animação de entrada suave (fade + slide) */
export const ANIMATION_FADE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
} as const;

/** Viewport para animações on-scroll - dispara apenas uma vez */
export const VIEWPORT_ONCE = { once: true } as const;
