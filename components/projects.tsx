"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MdOpenInNew } from "react-icons/md"
import { FiGithub } from "react-icons/fi"
import ScrollAnimation from "./scroll-animation"
import Link from "next/link"
import { projects } from "@/data/projects"

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="proyectos" className="py-20">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis trabajos recientes en desarrollo web y aplicaciones. Cada proyecto representa un
            desafío único y una solución creativa.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ScrollAnimation key={project.id} delay={index * 0.1}>
            <Card
              className="overflow-hidden rounded-xl border-border/40 hover:border-primary/40 transition-all duration-300 h-full"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm" className="rounded-full">
                        <MdOpenInNew className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <FiGithub className="h-4 w-4 mr-2" />
                        Código
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        ))}
      </div>

      <ScrollAnimation delay={0.4}>
        <div className="text-center mt-12">
          <Link href="https://github.com/Facundo14" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
            >
              Ver más proyectos en GitHub
              <FiGithub className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </ScrollAnimation>
    </section>
  )
}
