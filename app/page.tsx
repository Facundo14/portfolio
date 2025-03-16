import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Certifications from "@/components/certifications"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}

