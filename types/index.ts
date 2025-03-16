import { z } from "zod"

// Schema de validación para el frontmatter de los posts
export const PostSchema = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  excerpt: z.string().min(1, "La descripción es obligatoria"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Formato de fecha inválido (YYYY-MM-DD)"),
  readTime: z.string().min(1, "El tiempo de lectura es obligatorio"),
  image: z.string().optional(),
  tags: z.array(z.string()).default([]),
  slug: z.string().min(1, "El slug es obligatorio"),
})

// Tipo derivado del schema
export type Post = z.infer<typeof PostSchema>

// Schema para el formulario de contacto
export const ContactFormSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, "El asunto es obligatorio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>

// Interfaces para proyectos
export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
}

// Interfaces para certificaciones
export interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  image: string
  url: string
}