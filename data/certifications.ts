import type { Certification } from "@/types"

/**
 * 🏆 CÓMO AGREGAR UNA CERTIFICACIÓN:
 *
 * 1. Guardá la imagen del certificado en: public/certificados/nombre.png
 *    (puede ser screenshot del PDF, imagen del badge, etc.)
 * 2. Copiá uno de los objetos de abajo y modificá los datos
 * 3. Guardá el archivo — el sitio se actualiza automáticamente
 *
 * Campos:
 * - id:      Número único
 * - title:   Nombre del curso/certificado
 * - issuer:  Plataforma que lo emite (Udemy, Coursera, freeCodeCamp, etc.)
 * - date:    Año de obtención
 * - image:   Ruta en /public (ej: "/certificados/react-udemy.png")
 * - url:     Link de verificación del certificado (URL de Udemy, Credly, etc.)
 */

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Desarrollo Web Full Stack",
    issuer: "Udemy",
    date: "2024",
    image: "/certificados/fullstack-udemy.png",
    url: "https://udemy.com/certificate/...",
  },
  {
    id: 2,
    title: "React.js — De cero a experto",
    issuer: "Udemy",
    date: "2024",
    image: "/certificados/react-udemy.png",
    url: "https://udemy.com/certificate/...",
  },
  {
    id: 3,
    title: "Next.js 14 — App Router y Server Components",
    issuer: "Udemy",
    date: "2025",
    image: "/certificados/nextjs-udemy.png",
    url: "https://udemy.com/certificate/...",
  },
  {
    id: 4,
    title: "TypeScript — Completo desde cero",
    issuer: "Udemy",
    date: "2025",
    image: "/certificados/typescript-udemy.png",
    url: "https://udemy.com/certificate/...",
  },
]
