"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Linkedin, Github, ChevronDown } from "lucide-react"

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" id="about">
            <div className="max-w-6xl mx-auto">
                <div
                    className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <div className="text-center mb-12">
                        <div className="relative inline-block mb-8">

                            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-violet-600 p-1">
                                <div className="w-full h-full rounded-full bg-white  flex items-center justify-center">
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
                        <div className="flex text-xl md:text-2xl gap-2 justify-center">
                            <span className="text-purple-800">|</span >
                            {['Desarrollador Frontend', 'React.js', 'Next.js'].map((skill, index) => (
                                <>
                                    <p key={index} className=" text-gray-600 mb-6">
                                        {skill}
                                    </p>
                                    <span className="text-purple-800 ">|</span >
                                </>
                            ))}
                        </div>

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
                            <a href={"https://www.linkedin.com/in/victor-mc/"} target="_blank">
                                <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                                    <Linkedin className="w-4 h-4 mr-2" />
                                    LinkedIn
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
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-16">
                <ChevronDown className="w-6 h-6 text-purple-400 mx-auto animate-bounce" />
            </div>
        </section >
    )
}
