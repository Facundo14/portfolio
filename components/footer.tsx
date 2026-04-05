import Link from "next/link"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-bold text-xl text-primary">
              Portfolio
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Desarrollador web especializado en crear experiencias digitales atractivas y funcionales.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <Link
                href="https://github.com/Facundo14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FiGithub className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/facundotanovich/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FiLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:facundotanovich@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FiMail className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Portfolio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

