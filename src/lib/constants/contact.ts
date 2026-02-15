/**
 * Constantes do formulário de contato.
 * Rate limit para evitar spam e abuso.
 */

/** Chave no localStorage para armazenar timestamps de envio */
export const RATE_LIMIT_STORAGE_KEY = "contact-form-submissions";

/** Número máximo de envios permitidos por janela */
export const RATE_LIMIT_MAX_SUBMISSIONS = 3;

/** Janela de tempo em ms (1 hora) */
export const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
