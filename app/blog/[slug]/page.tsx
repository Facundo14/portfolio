"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowLeft, Share2 } from "lucide-react"

// Datos de ejemplo para el blog
const posts = [
  {
    id: 1,
    title: "Cómo crear animaciones fluidas con Framer Motion",
    content: `
      # Cómo crear animaciones fluidas con Framer Motion

      Framer Motion es una biblioteca de animaciones para React que facilita la creación de animaciones fluidas y de alto rendimiento. En este artículo, aprenderemos a implementar animaciones atractivas en nuestras aplicaciones React utilizando Framer Motion.

      ## Instalación

      Para comenzar, necesitamos instalar Framer Motion en nuestro proyecto:

      \`\`\`bash
      npm install framer-motion
      \`\`\`

      ## Animaciones básicas

      Framer Motion proporciona un componente \`motion\` que podemos usar para animar cualquier elemento HTML o componente React. Aquí hay un ejemplo simple:

      \`\`\`jsx
      import { motion } from 'framer-motion';

      function AnimatedBox() {
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 bg-blue-500"
          />
        );
      }
      \`\`\`

      ## Animaciones en scroll

      Una de las características más útiles de Framer Motion es la capacidad de animar elementos cuando entran en la vista del usuario:

      \`\`\`jsx
      import { motion } from 'framer-motion';
      import { useInView } from 'react-intersection-observer';

      function ScrollAnimation() {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });

        return (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gray-100 rounded-lg"
          >
            <h2>Este elemento se anima cuando entra en la vista</h2>
          </motion.div>
        );
      }
      \`\`\`

      ## Conclusión

      Framer Motion es una herramienta poderosa para crear animaciones en aplicaciones React. Con su API intuitiva y su rendimiento optimizado, podemos mejorar significativamente la experiencia de usuario de nuestras aplicaciones.
    `,
    date: "15 Mar 2023",
    readTime: "5 min",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "Framer Motion", "Animaciones"],
    slug: "como-crear-animaciones-fluidas-con-framer-motion",
  },
  {
    id: 2,
    title: "Optimización de rendimiento en aplicaciones Next.js",
    content: `
      # Optimización de rendimiento en aplicaciones Next.js

      Next.js es un framework de React que facilita la creación de aplicaciones web rápidas y optimizadas. En este artículo, exploraremos estrategias para mejorar el rendimiento de nuestras aplicaciones Next.js.

      ## Imágenes optimizadas

      Next.js proporciona un componente \`Image\` que optimiza automáticamente las imágenes:

      \`\`\`jsx
      import Image from 'next/image';

      function OptimizedImage() {
        return (
          <Image
            src="/example.jpg"
            alt="Ejemplo"
            width={800}
            height={600}
            priority
          />
        );
      }
      \`\`\`

      ## Server Components

      Los Server Components de Next.js permiten renderizar componentes en el servidor, reduciendo el JavaScript enviado al cliente:

      \`\`\`jsx
      // app/page.js
      export default function Page() {
        return (
          <div>
            <h1>Este componente se renderiza en el servidor</h1>
          </div>
        );
      }
      \`\`\`

      ## Conclusión

      Optimizar el rendimiento de nuestras aplicaciones Next.js es esencial para proporcionar una buena experiencia de usuario. Utilizando las características incorporadas de Next.js y siguiendo las mejores prácticas, podemos crear aplicaciones rápidas y eficientes.
    `,
    date: "28 Feb 2023",
    readTime: "8 min",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Next.js", "Performance", "Web Vitals"],
    slug: "optimizacion-de-rendimiento-en-aplicaciones-nextjs",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

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
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <CalendarDays className="h-4 w-4 mr-1" />
          <span className="mr-4">{post.date}</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{post.readTime} lectura</span>
        </div>

        <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">{post.content}</div>

        <div className="mt-12 pt-6 border-t">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Compartir este artículo</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

