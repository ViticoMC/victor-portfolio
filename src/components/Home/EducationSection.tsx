"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card"
import { GraduationCap, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function EducationSection() {
    return (
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
                                <CardDescription className="text-purple-600 font-medium">Universidad Central de Las Villas</CardDescription>
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
    )
}
