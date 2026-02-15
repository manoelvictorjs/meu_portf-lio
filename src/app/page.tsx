/**
 * HomePage - Página principal do portfólio.
 *
 * Ordem das seções (de cima para baixo):
 * 1. Hero - Apresentação inicial (nome, foto, tagline, ações)
 * 2. About - Sobre mim, destaques e tech stack
 * 3. Projects - Projetos em destaque e experiência profissional
 * 4. Certificates - Certificados e cursos
 * 5. Contact - Formulário e informações de contato
 */

import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { AboutSection } from "@/components/sections/About/AboutSection";
import { ProjectsSection } from "@/components/sections/Projects/ProjectsSection";
import { CertificatesSection } from "@/components/sections/Certificates/CertificatesSection";
import { ContactSection } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </>
  );
}
