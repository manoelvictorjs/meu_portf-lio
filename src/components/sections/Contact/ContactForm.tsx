"use client";

/**
 * ContactForm - Formulário de contato com validação e rate limit.
 *
 * Campos: nome, e-mail, assunto, mensagem
 * Validação via Zod (lib/validations/contact.ts)
 * Envio via Resend (API /api/contact)
 * Rate limit para evitar spam (lib/utils/contactRateLimit.ts)
 *
 * Estados: idle | sending | success | error | rate-limited
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormInput } from "@/lib/validations/contact";
import { SITE } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";
import {
  canSubmit,
  recordSubmission,
} from "@/lib/utils/contactRateLimit";
import { VIEWPORT_ONCE } from "@/lib/constants/animations";

type FormStatus = "idle" | "sending" | "success" | "error" | "rate-limited";

/** Classes base para inputs */
const INPUT_BASE_CLASS =
  "mt-1 w-full rounded-lg border bg-background px-4 py-2 text-foreground transition focus:outline-none focus:ring-2 focus:ring-primary";
const INPUT_ERROR_CLASS = "border-red-500";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormInput) => {
    if (!canSubmit()) {
      setStatus("rate-limited");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(json.error ?? "Erro ao enviar");
      }

      recordSubmission();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT_ONCE}
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur transition hover:border-primary/20"
    >
      <div className="space-y-4">
        {/* Campo: Nome */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-foreground"
          >
            Nome
          </label>
          <input
            id="contact-name"
            type="text"
            {...register("name")}
            className={cn(INPUT_BASE_CLASS, errors.name && INPUT_ERROR_CLASS)}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Campo: E-mail */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-foreground"
          >
            E-mail
          </label>
          <input
            id="contact-email"
            type="email"
            {...register("email")}
            className={cn(INPUT_BASE_CLASS, errors.email && INPUT_ERROR_CLASS)}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 text-sm text-red-500"
              role="alert"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Campo: Assunto */}
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-sm font-medium text-foreground"
          >
            Assunto
          </label>
          <input
            id="contact-subject"
            type="text"
            {...register("subject")}
            className={cn(
              INPUT_BASE_CLASS,
              errors.subject && INPUT_ERROR_CLASS
            )}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <p
              id="subject-error"
              className="mt-1 text-sm text-red-500"
              role="alert"
            >
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Campo: Mensagem */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-foreground"
          >
            Mensagem
          </label>
          <textarea
            id="contact-message"
            rows={5}
            {...register("message")}
            className={cn(
              INPUT_BASE_CLASS,
              "resize-y",
              errors.message && INPUT_ERROR_CLASS
            )}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1 text-sm text-red-500"
              role="alert"
            >
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      {/* Mensagens de status */}
      {status === "success" && (
        <p
          className="mt-4 text-sm text-green-600 dark:text-green-400"
          role="status"
        >
          Mensagem enviada. Obrigado!
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-500" role="alert">
          Erro ao enviar. Tente novamente ou use o e-mail direto.
        </p>
      )}
      {status === "rate-limited" && (
        <p
          className="mt-4 text-sm text-amber-600 dark:text-amber-400"
          role="alert"
        >
          Muitos envios. Aguarde um pouco ou envie diretamente para {SITE.email}.
        </p>
      )}

      {/* Botão de envio */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            Enviar mensagem
          </>
        )}
      </button>
    </motion.form>
  );
}
