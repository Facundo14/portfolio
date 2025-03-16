"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Hola, soy <span className="text-primary">Desarrollador Web</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Especializado en crear experiencias digitales atractivas y funcionales. Transformo ideas en soluciones web
              innovadoras.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/#contacto">
              <Button className="rounded-full px-6">Contáctame</Button>
            </Link>
            <Link href="/#proyectos">
              <Button
                variant="outline"
                className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Ver Proyectos
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 mt-2"
          >
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:email@example.com">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl z-10"></div>
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Hero Image"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

