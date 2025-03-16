"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Proyectos", path: "/#proyectos" },
  { name: "Certificaciones", path: "/#certificaciones" },
  { name: "Blog", path: "/blog" },
  { name: "Contacto", path: "/#contacto" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-2xl text-primary">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              Portfolio
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-foreground hover:text-primary transition-colors duration-300 ${
                  pathname === item.path ? "text-primary font-medium" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Descargar CV
              </Button>
            </Link>
            <ModeToggle />
          </div>

          <div className="flex md:hidden items-center gap-4">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-foreground hover:text-primary transition-colors duration-300 ${
                    pathname === item.path ? "text-primary font-medium" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Descargar CV
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

