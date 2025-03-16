import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"
import { getAllPosts } from "@/lib/mdx"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Portfolio Personal",
  description: "Artículos, tutoriales y reflexiones sobre desarrollo web, diseño y tecnología.",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

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

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No hay posts disponibles actualmente.</p>
          <p className="text-sm mt-2">
            Añade archivos MDX en la carpeta <code>content/blog/</code> para comenzar.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden rounded-xl border-border/40 hover:border-primary/40 transition-all duration-300 h-full hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg?height=400&width=600"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags &&
                      post.tags.map((tag) => (
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
      )}
    </div>
  )
}