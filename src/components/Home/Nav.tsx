"use client"

import Link from "next/link"
import { Code2, Gamepad2, BadgeInfo, SparkleIcon, OrigamiIcon, BookOpen, Contact } from "lucide-react"

export default function Nav() {
    return (
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
    )
}
