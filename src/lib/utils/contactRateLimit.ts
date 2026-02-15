/**
 * Utilitários de rate limit para o formulário de contato.
 * Evita spam limitando envios por janela de tempo.
 */

import {
  RATE_LIMIT_STORAGE_KEY,
  RATE_LIMIT_MAX_SUBMISSIONS,
  RATE_LIMIT_WINDOW_MS,
} from "@/lib/constants/contact";

/**
 * Retorna os timestamps de envio ainda válidos (dentro da janela).
 */
export function getStoredSubmissions(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
    if (!raw) return [];
    const timestamps = JSON.parse(raw) as number[];
    const now = Date.now();
    return timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  } catch {
    return [];
  }
}

/**
 * Verifica se o usuário ainda pode enviar (não atingiu o limite).
 */
export function canSubmit(): boolean {
  return getStoredSubmissions().length < RATE_LIMIT_MAX_SUBMISSIONS;
}

/**
 * Registra um novo envio no localStorage.
 */
export function recordSubmission(): void {
  const timestamps = getStoredSubmissions();
  timestamps.push(Date.now());
  localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify(timestamps));
}
