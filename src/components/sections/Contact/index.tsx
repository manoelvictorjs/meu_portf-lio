"use client";

/**
 * ContactSection - Seção de contato do portfólio.
 *
 * Composição:
 * - SectionHeader: título e descrição
 * - ContactInfo: e-mail e localização (coluna esquerda)
 * - ContactForm: formulário com validação (coluna direita)
 *
 * Layout: grid 2 colunas em lg+, empilhado em mobile.
 */

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border bg-muted/20 py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          id="contact-heading"
          title="Contato"
          description="Entre em contato para projetos ou oportunidades"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
