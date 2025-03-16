"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Aquí iría la lógica real de envío del formulario
    console.log("Form submitted:", formData)

    // Resetear formulario
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <section id="contacto" className="py-20">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ponte en <span className="text-primary">Contacto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? Envíame un mensaje y te responderé lo antes posible.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation delay={0.1}>
          <Card className="rounded-xl overflow-hidden border-border/40">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">email@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Teléfono</h4>
                    <p className="text-muted-foreground">+1 (123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Ubicación</h4>
                    <p className="text-muted-foreground">Ciudad, País</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-3">Horario de Trabajo</h4>
                <p className="text-muted-foreground">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                <p className="text-muted-foreground">Sábado - Domingo: Cerrado</p>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <Card className="rounded-xl overflow-hidden border-border/40">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Envíame un Mensaje</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Asunto del mensaje"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Escribe tu mensaje aquí..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] rounded-lg"
                  />
                </div>

                <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Enviar Mensaje
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  )
}

