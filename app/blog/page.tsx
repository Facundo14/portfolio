import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"

// Datos de ejemplo para el blog
const posts = [
  {
    id: 1,
    title: "Cómo crear animaciones fluidas con Framer Motion",
    excerpt:
      "Aprende a implementar animaciones atractivas y de alto rendimiento en tus aplicaciones React utilizando Framer Motion.",
    date: "15 Mar 2023",
    readTime: "5 min",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Framer Motion", "Animaciones"],
    slug: "como-crear-animaciones-fluidas-con-framer-motion",
  },
  {
    id: 2,
    title: "Optimización de rendimiento en aplicaciones Next.js",
    excerpt:
      "Estrategias y técnicas para mejorar el rendimiento de tus aplicaciones Next.js y ofrecer una mejor experiencia de usuario.",
    date: "28 Feb 2023",
    readTime: "8 min",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Performance", "Web Vitals"],
    slug: "optimizacion-de-rendimiento-en-aplicaciones-nextjs",
  },
  {
    id: 3,
    title: "Diseño de interfaces con Tailwind CSS",
    excerpt:
      "Guía completa para crear interfaces modernas y responsivas utilizando el framework de utilidades Tailwind CSS.",
    date: "10 Feb 2023",
    readTime: "6 min",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Tailwind CSS", "UI/UX", "Responsive Design"],
    slug: "diseno-de-interfaces-con-tailwind-css",
  },
  {
    id: 4,
    title: "Implementación de modo oscuro en aplicaciones web",
    excerpt: "Aprende a implementar un modo oscuro efectivo en tus aplicaciones web utilizando CSS variables y React.",
    date: "25 Jan 2023",
    readTime: "7 min",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Dark Mode", "CSS", "React"],
    slug: "implementacion-de-modo-oscuro-en-aplicaciones-web",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Mi <span className="text-primary">Blog</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Artículos, tutoriales y reflexiones sobre desarrollo web, diseño y tecnología.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="overflow-hidden rounded-xl border-border/40 hover:border-primary/40 transition-all duration-300 h-full hover:shadow-md">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime} lectura</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

