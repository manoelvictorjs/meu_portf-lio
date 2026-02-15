"use client";

/**
 * CertificateCard - Card de um certificado ou curso.
 *
 * Exibe imagem (se houver), título, emissor, data e link "Ver certificado".
 * Clique na imagem para abrir em tela inteira.
 * O link só funciona no texto "Ver certificado".
 */

import { useState } from "react";
import { Award, ExternalLink, FileText } from "lucide-react";
import type { Certificate } from "@/data/certificates";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

interface CertificateCardProps {
  cert: Certificate;
}

function isPdf(path: string): boolean {
  return path.toLowerCase().endsWith(".pdf");
}

export function CertificateCard({ cert }: CertificateCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const isPdfFile = cert.image && isPdf(cert.image);
  const pdfOrImageUrl = cert.image ?? null;

  return (
    <div className="p-4">
      {/* Imagem clicável - abre em tela inteira */}
      {pdfOrImageUrl ? (
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="block w-full cursor-pointer overflow-hidden rounded-xl bg-muted/30 transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={`Ampliar ${cert.title}`}
        >
          <div className="relative aspect-video overflow-hidden rounded-xl">
            {isPdfFile ? (
              <object
                data={pdfOrImageUrl}
                type="application/pdf"
                className="h-full w-full"
                aria-label={cert.title}
              >
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-muted/50 p-4">
                  <FileText className="h-12 w-12 text-primary/50" />
                  <span className="text-sm font-medium text-primary">Visualizar PDF</span>
                </div>
              </object>
            ) : (
              <img
                src={pdfOrImageUrl}
                alt={cert.title}
                className="h-full w-full object-contain"
              />
            )}
          </div>
        </button>
      ) : (
        <div className="flex aspect-video items-center justify-center rounded-xl bg-primary/10">
          <Award className="h-12 w-12 text-primary/50" />
        </div>
      )}

      {/* Informações */}
      <div className="mt-4">
        <h3 className="font-semibold text-foreground">{cert.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
        <p className="mt-0.5 text-xs text-muted-foreground/80">{cert.date}</p>
        {cert.url && (
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline"
          >
            <ExternalLink className="h-3 w-3" />
            Ver certificado
          </a>
        )}
      </div>

      {pdfOrImageUrl && (
        <ImageLightbox
          src={pdfOrImageUrl}
          title={cert.title}
          isPdf={!!isPdfFile}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
