import type { Project } from "@/types"

/**
 * 📁 CÓMO AGREGAR UN PROYECTO:
 *
 * 1. Agregá la imagen en: public/proyectos/nombre-del-proyecto.png
 * 2. Copiá uno de los objetos de abajo y modificá los datos
 * 3. Guardá el archivo — el sitio se actualiza automáticamente
 *
 * Campos:
 * - id:          Número único (incrementar por cada proyecto)
 * - title:       Nombre del proyecto
 * - description: Descripción corta (2-3 líneas)
 * - image:       Ruta a la imagen en /public (ej: "/proyectos/mi-app.png")
 * - tags:        Array de tecnologías usadas
 * - demoUrl:     URL de la demo en producción (o "" si no hay)
 * - githubUrl:   URL del repositorio en GitHub (o "" si es privado)
 * - featured:    true = aparece primero destacado
 */

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Personal",
    description:
      "Sitio web de portfolio con Next.js 15, soporte MDX para blog, modo oscuro, animaciones con Framer Motion y diseño completamente responsivo.",
    image: "/proyectos/portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX"],
    demoUrl: "https://tu-portfolio.vercel.app",
    githubUrl: "https://github.com/Facundo14/portfolio",
    featured: true,
  },
  {
    id: 2,
    title: "QRify — Generador de QR",
    description:
      "App mobile-first para generar códigos QR en tiempo real. Incluye endpoint API serverless para generar QR programáticamente.",
    image: "/proyectos/qrify.png",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "API REST"],
    demoUrl: "https://qrify.vercel.app",
    githubUrl: "https://github.com/Facundo14/qrify",
    featured: true,
  },
  {
    id: 3,
    title: "App Cotillón",
    description:
      "Sistema de gestión y catálogo online para negocio de cotillón. Carrito de compras, páginas de producto individuales y panel de administración.",
    image: "/proyectos/cotillon.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "",
    githubUrl: "https://github.com/Facundo14/app-cotillon",
    featured: false,
  },
  {
    id: 4,
    title: "Sistema de Inventario",
    description:
      "Aplicación Laravel con Filament para gestión de inventario. Soporte para categorías, productos, precios y stocks. Panel completamente en español.",
    image: "/proyectos/inventario.png",
    tags: ["Laravel", "Filament", "PHP", "MySQL"],
    demoUrl: "",
    githubUrl: "https://github.com/Facundo14/simple-inventory",
    featured: false,
  },
]
