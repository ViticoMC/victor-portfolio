"use client"

import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Linkedin } from "lucide-react"

export default function ContactSection() {
    return (
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
    )
}
