"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Home, Gamepad2 } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="text-center space-y-8 p-8 max-w-md">
                {/* Icon */}
                <div className="flex justify-center">
                    <div className="relative">
                        <Gamepad2 className="w-24 h-24 text-purple-400 animate-pulse" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-black">🚧</span>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold text-white mb-4">
                    ¡Próximamente!
                </h1>

                {/* Message */}
                <p className="text-lg text-gray-300 leading-relaxed">
                    Los videojuegos están en desarrollo y llegarán muy pronto.
                    .
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Button
                        variant="outline"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver Atrás
                    </Button>

                    <Link href="/">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-colors">
                            <Home className="w-4 h-4 mr-2" />
                            Ir al Inicio
                        </Button>
                    </Link>
                </div>

                {/* Additional info */}
                <div className="pt-8">
                    <p className="text-sm text-gray-500">
                        Mientras tanto, puedes explorar otras secciones del portfolio
                    </p>
                </div>
            </div>
        </div>
    )
}
