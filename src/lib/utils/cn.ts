/**
 * Utilitário para merge de classes CSS com Tailwind.
 * Combina clsx (condicionais) + tailwind-merge (resolve conflitos).
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-primary", className)
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
