"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function LanguagesSection() {
    return (
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
                                <Badge variant="outline" className="border-purple-200 text-purple-600">Básico (A2)</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
