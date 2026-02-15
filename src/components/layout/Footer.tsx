"use client";

/**
 * Footer - Rodapé do portfólio.
 *
 * Responsabilidades:
 * - Informações do site (nome, título, localização)
 * - Links para redes sociais (GitHub, LinkedIn)
 * - Link para e-mail
 * - Link para formulário de contato
 * - Copyright
 */

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants/site";

/** Links de redes sociais exibidos no footer */
const SOCIAL_LINKS = [
  { name: "GitHub", url: SITE.github, icon: Github },
  { name: "LinkedIn", url: SITE.linkedin, icon: Linkedin },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border/60 bg-card/30 py-12 backdrop-blur-sm"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Informações do site */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground">{SITE.name}</p>
            <p className="text-sm text-muted-foreground">{SITE.title}</p>
            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              <span>{SITE.location}</span>
            </div>
          </div>

          {/* Links sociais e contato */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  aria-label={name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
              <a
                href={`mailto:${SITE.email}`}
                className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <Link
              href="/#contact"
              className="text-sm text-muted-foreground underline decoration-primary/50 underline-offset-2 transition hover:text-primary"
            >
              Formulário de contato
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {SITE.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
