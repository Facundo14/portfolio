import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"
import { getPostBySlug, getPostSlugs } from "@/lib/mdx"
import type { Metadata } from "next"

// Generar rutas estáticas para todos los posts
export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generar metadatos dinámicos
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post no encontrado",
      description: "El post que buscas no existe",
    }
  }

  return {
    title: `${post.frontmatter.title} | Blog`,
    description: post.frontmatter.excerpt,
    metadataBase: new URL("https://tu-portfolio.vercel.app"),
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      images: [post.frontmatter.image || "/placeholder.svg"],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { content, frontmatter } = post

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Button>
        </Link>

        <div className="flex flex-wrap gap-2 mb-4">
          {frontmatter.tags &&
            frontmatter.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full">
                {tag}
              </Badge>
            ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{frontmatter.title}</h1>

        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <CalendarDays className="h-4 w-4 mr-1" />
          <span className="mr-4">{frontmatter.date}</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{frontmatter.readTime} de lectura</span>
        </div>

        {frontmatter.image && (
          <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-xl overflow-hidden">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Renderizado MDX real — soporta componentes React, código con syntax highlight, etc. */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {content}
        </article>

        <div className="mt-12 pt-6 border-t">
          <Link href="/blog">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ver todos los artículos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}