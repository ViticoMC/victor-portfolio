"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Briefcase, Globe, Star, User, Github } from "lucide-react"

const skills = {
    frontend: ["React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript", "Astro"],
    backend: ["Node.js", "Express.js"],
    tools: ["Vite", "React Router", "React Hook Form", "Zod", "Zustand", "Tanstack", "NextAuth", "Axios"],
    database: ["PostgreSQL", "Supabase"],
    styling: ["TailwindCSS", "Shadcn UI", "Radix UI", "Material UI", "Bootstrap"],
    other: ["Git", "GitHub", "Vercel", "Linux", "IA"],
}

export default function SkillsSection() {
    return (
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
                                    <Badge key={i} className="bg-gradient-to-r from-purple-600 to-violet-600 text-white">{skill}</Badge>
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
                                    <Badge key={i} className="bg-gradient-to-r from-purple-600 to-violet-600 text-white">{skill}</Badge>
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
                                    <Badge key={i} variant="outline" className="border-purple-200 text-purple-600">{skill}</Badge>
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
                                    <Badge key={i} variant="outline" className="border-purple-200 text-purple-600">{skill}</Badge>
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
                                    <Badge key={i} variant="outline" className="border-purple-200 text-purple-600">{skill}</Badge>
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
                                    <Badge key={i} variant="outline" className="border-purple-200 text-purple-600">{skill}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
