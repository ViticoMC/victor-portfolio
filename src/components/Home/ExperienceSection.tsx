"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

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

export default function ExperienceSection() {
    return (
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
                                        <a href="#">
                                            <Badge className="border-purple-200 text-purple-600">Repositorio</Badge>
                                        </a>
                                        <a href="#">
                                            <Badge className="border-purple-200 text-purple-600">Deploy</Badge>
                                        </a>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
