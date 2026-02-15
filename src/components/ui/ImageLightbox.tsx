"use client";

/**
 * ImageLightbox - Modal em tela inteira para ampliar imagem ou PDF ao clicar.
 * Renderizado via Portal no body para cobrir o site inteiro (fora do bloco do card).
 * Fecha com ESC, clique fora ou botão X.
 */

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  title: string;
  isPdf?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({
  src,
  title,
  isPdf = false,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const content = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Visualizar ${title}`}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Fechar"
      >
        <X className="h-6 w-6" />
      </button>

      <div
        className="h-full w-full overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {isPdf ? (
          <object
            data={src}
            type="application/pdf"
            className="h-full w-full min-h-screen"
            aria-label={title}
          >
            <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black p-8 text-white">
              <p>PDF não suportado neste navegador</p>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
              >
                Abrir PDF em nova aba
              </a>
            </div>
          </object>
        ) : (
          <img
            src={src}
            alt={title}
            className="h-full w-full object-contain"
          />
        )}
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
