"use client";

/**
 * ContactInfo - Informações de contato (e-mail e localização).
 *
 * Usado na seção de contato ao lado do formulário.
 * Dados vêm de SITE em lib/constants/site.ts.
 */

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants/site";
import { VIEWPORT_ONCE } from "@/lib/constants/animations";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT_ONCE}
      className="space-y-6"
    >
      {/* E-mail */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Mail className="h-6 w-6" aria-hidden />
        </div>
        <div>
          <p className="font-medium text-foreground">E-mail</p>
          <a
            href={`mailto:${SITE.email}`}
            className="text-muted-foreground hover:text-primary hover:underline"
          >
            {SITE.email}
          </a>
        </div>
      </div>

      {/* Localização */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <MapPin className="h-6 w-6" aria-hidden />
        </div>
        <div>
          <p className="font-medium text-foreground">Localização</p>
          <p className="text-muted-foreground">{SITE.location}</p>
        </div>
      </div>
    </motion.div>
  );
}
