/**
 * Constantes do fundo espacial (estrelas e meteoros).
 *
 * Posições fixas para estrelas evitam hydration mismatch no Next.js
 * (valores pseudo-aleatórios em vez de Math.random() no render).
 */

/** Configuração de cada estrela: posição, tamanho e animação */
export type StarConfig = {
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
};

/** Estrelas fixas (20 primeiras) + geradas (60) para cobertura do fundo */
export const STARS: StarConfig[] = [
  { left: "5%", top: "10%", size: 1, delay: 0, duration: 3 },
  { left: "15%", top: "25%", size: 1.5, delay: 0.5, duration: 4 },
  { left: "25%", top: "5%", size: 0.8, delay: 1, duration: 2.5 },
  { left: "35%", top: "40%", size: 1.2, delay: 1.5, duration: 3.5 },
  { left: "45%", top: "15%", size: 2, delay: 0.2, duration: 4.5 },
  { left: "55%", top: "55%", size: 0.6, delay: 2, duration: 2 },
  { left: "65%", top: "30%", size: 1.8, delay: 0.8, duration: 3 },
  { left: "75%", top: "8%", size: 1, delay: 1.2, duration: 4 },
  { left: "85%", top: "45%", size: 1.4, delay: 2.5, duration: 2.8 },
  { left: "92%", top: "70%", size: 0.9, delay: 0.3, duration: 3.2 },
  { left: "8%", top: "60%", size: 1.6, delay: 1.8, duration: 4 },
  { left: "22%", top: "75%", size: 1.1, delay: 0.6, duration: 2.2 },
  { left: "40%", top: "85%", size: 1.3, delay: 2.2, duration: 3.8 },
  { left: "58%", top: "18%", size: 0.7, delay: 1.4, duration: 2.6 },
  { left: "70%", top: "65%", size: 1.9, delay: 0.4, duration: 4.2 },
  { left: "88%", top: "35%", size: 1.2, delay: 2.8, duration: 3.4 },
  { left: "12%", top: "90%", size: 0.8, delay: 1.6, duration: 2.4 },
  { left: "50%", top: "50%", size: 1.5, delay: 0.1, duration: 5 },
  { left: "30%", top: "20%", size: 1, delay: 2.3, duration: 3.6 },
  { left: "78%", top: "82%", size: 1.7, delay: 1.1, duration: 2.9 },
  // Estrelas geradas para preencher o fundo
  ...Array.from({ length: 60 }, (_, i) => ({
    left: `${(i * 7 + 3) % 97}%`,
    top: `${(i * 11 + 2) % 95}%`,
    size: 0.5 + ((i * 13) % 15) / 10,
    delay: (i % 4) * 0.5,
    duration: 2 + (i % 4),
  })),
];

/** Quantidade de meteoros exibidos */
export const METEOR_COUNT = 4;

/** Tamanhos possíveis dos meteoros (em px) */
export const METEOR_SIZES = [4, 5, 6, 7, 8, 10, 12, 14];
