/**
 * RootLayout - Layout raiz da aplicação Next.js.
 *
 * Responsabilidades:
 * - Fontes: DM Sans (texto), JetBrains Mono (código)
 * - Metadados e SEO (title, description, Open Graph)
 * - JSON-LD (Schema.org Person) para rich snippets
 * - Estrutura: ThemeProvider > SpaceBackground > Header > main > Footer
 *
 * SpaceBackground: fundo espacial fixo atrás de todo o conteúdo
 */

import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SpaceBackground } from "@/components/layout/SpaceBackground";
import { SITE } from "@/lib/constants/site";

/** Fonte principal (texto) */
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/** Fonte monoespaçada (código, badges) */
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

/** Metadados para SEO e redes sociais */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.title}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "desenvolvedor back-end",
    "Node.js",
    "TypeScript",
    "Python",
    "API REST",
    "microserviços",
    "Manoel Victor",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SITE.name,
    description: SITE.description,
  },
  robots: "index, follow",
};

/** Schema.org JSON-LD - ajuda buscadores a entender o conteúdo */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: "Desenvolvedor Back-End",
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  sameAs: [SITE.github, SITE.linkedin],
  knowsAbout: ["Node.js", "TypeScript", "Python", "API REST", "Microserviços"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${jetbrainsMono.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.add(t||(d?'dark':'light'));})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <SpaceBackground />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
