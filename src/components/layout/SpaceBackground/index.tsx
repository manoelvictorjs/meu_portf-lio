"use client";

/**
 * SpaceBackground - Fundo espacial animado do portfólio.
 *
 * Só aparece no modo escuro. No modo claro, fica oculto para evitar conflito visual.
 *
 * Composto por:
 * - Gradiente vertical (azul escuro → roxo → azul)
 * - Nebulosas sutis (radial gradients)
 * - StarField: estrelas cintilantes
 * - MeteorField: meteoros cruzando a tela
 *
 * Fixo atrás de todo o conteúdo (z-index -20).
 */

import { StarField } from "./StarField";
import { MeteorField } from "./MeteorField";
import { useTheme } from "../ThemeProvider";

export function SpaceBackground() {
  const { theme } = useTheme();

  if (theme !== "dark") {
    return null;
  }

  return (
    <div
      className="fixed inset-0 -z-20 overflow-hidden"
      aria-hidden
    >
      {/* Gradiente de fundo espacial */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background:
            "linear-gradient(180deg, #020617 0%, #0f172a 25%, #1e1b4b 50%, #0f172a 75%, #020617 100%)",
        }}
      />

      {/* Nebulosas sutis (roxo/índigo) */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 40%)",
        }}
      />

      {/* Estrelas cintilantes */}
      <StarField />

      {/* Meteoros */}
      <MeteorField />
    </div>
  );
}
