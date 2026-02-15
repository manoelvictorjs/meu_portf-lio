/**
 * Validação do formulário de contato com Zod.
 * Define schema e tipo inferido para type-safety.
 */

import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido"),
  subject: z
    .string()
    .min(5, "Assunto deve ter pelo menos 5 caracteres")
    .max(200, "Assunto muito longo"),
  message: z
    .string()
    .min(20, "Mensagem deve ter pelo menos 20 caracteres")
    .max(2000, "Mensagem muito longa"),
});

export type ContactFormInput = z.infer<typeof contactSchema>;
