"use client";

/**
 * CertificatesSection - Seção de certificados e cursos.
 *
 * Exibe grid de certificados com imagem, título, emissor e link.
 * Se não houver certificados, mostra mensagem para adicionar em src/data/certificates.ts.
 *
 * Imagens: public/certificados/
 * Dados: src/data/certificates.ts
 */

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificates } from "@/data/certificates";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CertificateCard } from "./CertificateCard";
import { VIEWPORT_ONCE } from "@/lib/constants/animations";

const CARD_CLASS =
  "group rounded-2xl border border-border/60 bg-card/80 overflow-hidden shadow-sm backdrop-blur transition hover:border-primary/20 hover:shadow-lg";

export function CertificatesSection() {
  // Estado vazio: instruções para adicionar certificados
  if (certificates.length === 0) {
    return (
      <section
        id="certificates"
        className="scroll-mt-24 border-t border-border bg-muted/20 py-20 md:py-28"
        aria-labelledby="certificates-heading"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            id="certificates-heading"
            title="Certificados"
            description="Adicione seus certificados e cursos em src/data/certificates.ts e as imagens em public/certificados/"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            className="mt-14 rounded-2xl border-2 border-dashed border-border/60 bg-muted/10 p-12 text-center"
          >
            <Award className="mx-auto h-16 w-16 text-muted-foreground/50" />
            <p className="mt-4 font-medium text-muted-foreground">
              Nenhum certificado adicionado ainda
            </p>
            <p className="mt-2 text-sm text-muted-foreground/80">
              Edite o arquivo{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                src/data/certificates.ts
              </code>{" "}
              para adicionar seus certificados
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  // Grid de certificados
  return (
    <section
      id="certificates"
      className="scroll-mt-24 border-t border-border bg-muted/20 py-20 md:py-28"
      aria-labelledby="certificates-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          id="certificates-heading"
          title="Certificados"
          description="Cursos e certificações que concluí"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${cert.issuer}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ delay: index * 0.05 }}
              className={CARD_CLASS}
            >
              <CertificateCard cert={cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
