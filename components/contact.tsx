"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Send, Mail, Phone, MapPin, AlertCircle } from "lucide-react"
import ScrollAnimation from "./scroll-animation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { type ContactFormData, ContactFormSchema } from "@/types"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitSuccess(null)
    setErrorMessage(null)

    try {
      // Simulación de envío de formulario
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Aquí iría la lógica real de envío del formulario
      console.log("Form submitted:", data)

      // Resetear formulario
      reset()
      setSubmitSuccess(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrorMessage("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.")
      setSubmitSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
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

              {submitSuccess === true && (
                <Alert className="mb-6 bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-900">
                  <AlertDescription>¡Mensaje enviado con éxito! Te responderé lo antes posible.</AlertDescription>
                </Alert>
              )}

              {submitSuccess === false && errorMessage && (
                <Alert className="mb-6 bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-900">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className={errors.name ? "text-destructive" : ""}>
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Tu nombre"
                      className={`rounded-lg ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="tu@email.com"
                      className={`rounded-lg ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className={errors.subject ? "text-destructive" : ""}>
                    Asunto
                  </Label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    placeholder="Asunto del mensaje"
                    className={`rounded-lg ${errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className={errors.message ? "text-destructive" : ""}>
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Escribe tu mensaje aquí..."
                    className={`min-h-[120px] rounded-lg ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
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