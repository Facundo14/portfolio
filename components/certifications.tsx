"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import ScrollAnimation from "./scroll-animation"
import Link from "next/link"
import type { Certification } from "@/types"

// Datos de ejemplo para certificaciones
const certifications: Certification[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2023",
    image: "/placeholder.svg?height=200&width=300",
    url: "https://example.com",
  },
  {
    id: 2,
    title: "React Advanced Concepts",
    issuer: "Frontend Masters",
    date: "2022",
    image: "/placeholder.svg?height=200&width=300",
    url: "https://example.com",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    issuer: "Coursera",
    date: "2022",
    image: "/placeholder.svg?height=200&width=300",
    url: "https://example.com",
  },
  {
    id: 4,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2021",
    image: "/placeholder.svg?height=200&width=300",
    url: "https://example.com",
  },
]

export default function Certifications() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="certificaciones" className="py-20">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-primary">Certificaciones</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Formación continua y especialización en diferentes áreas del desarrollo web y diseño de interfaces.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <ScrollAnimation key={cert.id} delay={index * 0.1}>
            <Link href={cert.url} target="_blank" rel="noopener noreferrer">
              <Card
                className="overflow-hidden rounded-xl border-border/40 hover:border-primary/40 transition-all duration-300 h-full hover:shadow-md"
                onMouseEnter={() => setHoveredId(cert.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out"
                    style={{
                      transform: hoveredId === cert.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2 bg-secondary text-secondary-foreground">{cert.issuer}</Badge>
                  <h3 className="font-semibold mb-1 line-clamp-2">{cert.title}</h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{cert.date}</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}