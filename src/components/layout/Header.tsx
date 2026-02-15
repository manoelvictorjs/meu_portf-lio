"use client";

/**
 * Header - Barra de navegação principal do portfólio.
 *
 * Responsabilidades:
 * - Logo/nome (link para home)
 * - Links de navegação (âncoras para seções)
 * - Toggle de tema claro/escuro
 * - Menu mobile (hamburger) em telas pequenas
 *
 * Fixo no topo com backdrop-blur.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils/cn";
import { SITE } from "@/lib/constants/site";
import { NAV_LINKS } from "@/lib/constants/navigation";

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  /** Verifica se o link está ativo (home + âncora hero) */
  const isActiveLink = (href: string) =>
    pathname === "/" && href === "/#hero";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl"
      role="banner"
    >
      {/* Navegação principal */}
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6"
        aria-label="Principal"
      >
        {/* Logo / Nome do site */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-lg font-semibold text-foreground transition hover:text-primary"
          aria-label={`${SITE.name} - Página inicial`}
        >
          <Code2 className="h-5 w-5" aria-hidden />
          {SITE.name}
        </Link>

        {/* Links desktop (ocultos no mobile) */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition hover:text-foreground",
                  isActiveLink(href) && "text-primary"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Ações: tema + menu mobile */}
        <div className="flex items-center gap-4">
          {/* Botão toggle tema */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Botão menu mobile (hamburger) */}
          <button
            type="button"
            className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu mobile expandido (AnimatePresence para animação de saída) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border/50 bg-background/95 backdrop-blur md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
