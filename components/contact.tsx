"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import ScrollAnimation from "./scroll-animation"

export default function Contact() {
  return (
    <section id="contacto" className="py-20">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ponte en <span className="text-primary">Contacto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? Escríbeme y te responderé lo antes posible.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <ScrollAnimation delay={0.1}>
          <a href="mailto:facundotanovich@gmail.com" className="block h-full group outline-none">
            <Card className="rounded-2xl overflow-hidden border-border/40 hover:border-primary/50 transition-all duration-300 h-full bg-card hover:bg-muted/30 hover:shadow-lg dark:hover:shadow-primary/5">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-5 h-full justify-center">
                <div className="bg-primary/10 p-5 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <FiMail className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">Correo Electrónico</h4>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">facundotanovich@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </a>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <a href="https://wa.me/5493754454958" target="_blank" rel="noopener noreferrer" className="block h-full group outline-none">
            <Card className="rounded-2xl overflow-hidden border-border/40 hover:border-primary/50 transition-all duration-300 h-full bg-card hover:bg-muted/30 hover:shadow-lg dark:hover:shadow-primary/5">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-5 h-full justify-center">
                <div className="bg-primary/10 p-5 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <FiPhone className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">Teléfono / WhatsApp</h4>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">+54 (3754) 454958</p>
                </div>
              </CardContent>
            </Card>
          </a>
        </ScrollAnimation>

        <ScrollAnimation delay={0.3}>
          <a href="https://maps.google.com/?q=Posadas,+Misiones,+Argentina" target="_blank" rel="noopener noreferrer" className="block h-full group outline-none">
            <Card className="rounded-2xl overflow-hidden border-border/40 hover:border-primary/50 transition-all duration-300 h-full bg-card hover:bg-muted/30 hover:shadow-lg dark:hover:shadow-primary/5">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-5 h-full justify-center">
                <div className="bg-primary/10 p-5 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <FiMapPin className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">Ubicación</h4>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">Posadas - Misiones, Argentina</p>
                </div>
              </CardContent>
            </Card>
          </a>
        </ScrollAnimation>
      </div>
    </section>
  )
}