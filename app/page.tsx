"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Code2,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  User,
  Briefcase,
  Star,
  ChevronDown,
  Linkedin,
  Gamepad2,
  Contact,
  BookOpen,
  SparkleIcon,
  BadgeInfo,
  OrigamiIcon
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"


export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = {
    frontend: ["React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript", "Astro"],
    backend: ["Node.js", "Express.js"],
    tools: ["Vite", "React Router", "React Hook Form", "Zod", "Zustand", "Tanstack", "NextAuth", "Axios"],
    database: ["PostgreSQL", "Supabase"],
    styling: ["TailwindCSS", "Shadcn UI", "Radix UI", "Material UI", "Bootstrap"],
    other: ["Git", "GitHub", "Vercel", "Linux", "IA"],
  }

  const experiences = [
    {
      title: "Líder de Desarrollo Frontend",
      company: "Parque Tecnológico de Santa Clara",
      location: "Santa Clara, Cuba",
      period: "Mayo 2025 - Actualidad",
      description:
        "Liderando el desarrollo frontend de un directorio digital para empresas de Santa Clara, centralizando y digitalizando información empresarial.",
      achievements: [
        "Diseño de interfaz moderna, accesible y totalmente responsiva",
        "Sistema de registro y panel administrativo para empresas",
        "Sistema de roles diferenciados y verificación de empresas",
        "Mejora de visibilidad para PyMEs locales",
      ],
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Shadcn UI"],
    },
    {
      title: "Desarrollador Frontend (Freelance)",
      company: "Blue Moon Studio",
      location: "Remoto",
      period: "Proyecto completado",
      description:
        "Desarrollé una plataforma web completa para un estudio de perforación corporal, logrando total satisfacción del cliente.",
      achievements: [
        "Frontend público con landing page optimizada para móviles",
        "Panel de administración con sistema de login JWT",
        "Backend con API Routes de Next.js y Supabase",
        "Integración con Cloudinary para gestión de imágenes",
        "Arquitectura replicada para segundo cliente",
      ],
      technologies: ["Next.js", "Supabase", "PostgreSQL", "Cloudinary", "JWT"],
      links: {
        github: "#",
        deploy: "#",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-purple-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">Victor Martínez</span>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a href="#about" className=" flex text-gray-600 hover:text-purple-600 transition-colors">
                Sobre mí
                <BadgeInfo className="w-4 h-4 ml-2 mt-1" />
              </a>
              <a href="#experience" className="flex text-gray-600 hover:text-purple-600 transition-colors">
                Experiencia
                <SparkleIcon className="w-4 h-4 ml-2 mt-1" />

              </a>
              <a href="#skills" className="flex text-gray-600 hover:text-purple-600 transition-colors">
                Habilidades
                <OrigamiIcon className="w-4 h-4 ml-2 mt-1" />

              </a>
              <a href="#education" className="flex text-gray-600 hover:text-purple-600 transition-colors">
                Educación
                <BookOpen className="w-4 h-4 ml-2 mt-1" />

              </a>
              <a href="#contact" className="flex text-gray-600 hover:text-purple-600 transition-colors">
                Contacto
                <Contact className="w-4 h-4 ml-2 mt-1" />

              </a>
              <Link href="/minijuegos" className="flex text-gray-600 hover:text-purple-600 transition-colors ">
                Minijuegos
                <Gamepad2 className="w-4 h-4 ml-2 mt-1" />
              </Link>
            </div>
            <Link href="/minijuegos" className=" lg:hidden flex text-gray-600 hover:text-purple-600 transition-colors ">
              Minijuegos
              <Gamepad2 className="w-4 h-4 ml-2 mt-1" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-12">
              <div className="relative inline-block mb-8">
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-violet-600 p-1">
                  <div className="w-full h-full rounded-full bg-white  flex items-center justify-center">
                    {/* <User className="w-16 h-16 text-purple-600" /> */}
                    <Image
                      src={'/portada.jpg'}
                      alt="foto de perfil"
                      fill
                      className="rounded-full object-cover object-top border-2 border-purple-400"
                    />

                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Victor Manuel
                </span>
                <br />
                Martínez Campo
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-6">Desarrollador Frontend</p>

              <div className="flex items-center justify-center space-x-2 text-gray-500 mb-8">
                <MapPin className="w-5 h-5" />
                <span>Santa Clara, Cuba</span>
              </div>

              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                Desarrollador Frontend apasionado por construir experiencias digitales que conectan con las personas,
                combinando diseño moderno con código limpio y eficiente. Me especializo en la transformación de ideas en
                interfaces intuitivas y atractivas.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href={"https://wa.me/+5356643955"}>
                  <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Contactar
                  </Button>

                </a>
                <a href={"https://github.com/ViticoMC"}>
                  <Button
                    variant="outline"
                    className="border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>

                </a>
                {/* <Button
                  variant="outline"
                  className="border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Portafolio
                </Button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <ChevronDown className="w-6 h-6 text-purple-400 mx-auto animate-bounce" />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experiencia <span className="text-purple-600">Laboral</span>
            </h2>
            <p className="text-lg text-gray-600">Proyectos que han marcado mi trayectoria profesional</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-purple-100 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">{exp.title}</CardTitle>
                      <CardDescription className="text-purple-600 font-medium text-base">
                        {exp.company} | {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-purple-200 text-purple-600 mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Logros principales:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-purple-100 text-purple-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {exp.links && (
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 bg-transparent">
                        <Github className="w-4 h-4 mr-2" />
                        Repositorio
                      </Button>
                      <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Deploy
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Habilidades <span className="text-purple-600">Técnicas</span>
            </h2>
            <p className="text-lg text-gray-600">Tecnologías y herramientas que domino</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Code2 className="w-5 h-5 mr-2" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, i) => (
                    <Badge key={i} className="bg-gradient-to-r from-purple-600 to-violet-600 text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, i) => (
                    <Badge key={i} className="bg-gradient-to-r from-purple-600 to-violet-600 text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Herramientas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, i) => (
                    <Badge key={i} variant="outline" className="border-purple-200 text-purple-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Base de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill, i) => (
                    <Badge key={i} variant="outline" className="border-purple-200 text-purple-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Estilos & UI/UX
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.styling.map((skill, i) => (
                    <Badge key={i} variant="outline" className="border-purple-200 text-purple-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Github className="w-5 h-5 mr-2" />
                  Otras
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((skill, i) => (
                    <Badge key={i} variant="outline" className="border-purple-200 text-purple-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-purple-600">Educación</span>
            </h2>
          </div>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow duration-300 max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">Licenciatura en Ciencias de la Computación</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    Universidad Central de Las Villas
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Santa Clara, Cuba</span>
                </div>
                <Badge className="bg-gradient-to-r from-purple-600 to-violet-600 text-white">Cursando 2º año</Badge>
              </div>
              <Separator className="my-4" />
              <p className="text-gray-600">
                <strong>Período:</strong> Septiembre 2024 – Actualidad
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-purple-600">Idiomas</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Español</h3>
                  <Badge className="bg-gradient-to-r from-purple-600 to-violet-600 text-white">Nativo</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Inglés</h3>
                  <Badge variant="outline" className="border-purple-200 text-purple-600">
                    Básico (A2)
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para trabajar juntos?</h2>
          <p className="text-xl text-purple-100 mb-8">Estoy disponible para nuevos proyectos y oportunidades</p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href={"mailto:victormanuelmartinezcampo178@gmail.com"}>
              <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                <Mail className="w-4 h-4 mr-2" />
                victormanuelmartinezcampo178@gmail.com
              </Button>
            </a>
            <a href={"https://wa.me/+5356643955"}>
              <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
            <a href={"https://www.linkedin.com/in/victor-mc/"}>
              <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Victor Manuel Martínez Campo</p>
        </div>
      </footer>
    </div>
  )
}
