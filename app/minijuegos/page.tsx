import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Minijuegos() {
    return (
        <section className="h-[200vh] bg-gradient-to-t from-purple-500 to-violet-500 flex flex-col items-center justify-start gap-2">
            <div className="h-40 w-full flex items-center justify-center relative mt-20 md:mt-0">
                <h1 className="text-5xl md:text-6xl mb-10 font-extrabold text-center bg-gradient-to-r from-white via-gray-200 to-slate-200 bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(255,255,122,0.9)]">
                    ¡Bienvenido a Mis Minijuegos!
                </h1>
                <Button
                    variant="outline" size="icon" className="bg-white/20 border-white/30 text-white hover:bg-white/30 fixed md:top-11 md:left-10 top-2 left-2"
                >
                    <Link href="/">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                </Button>
            </div>
            <div className="grid gap-4 w-full px-5 max-w-4xl mx-auto"
                style={
                    {
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gridTemplateRows: "repeat(3, 1fr)"
                    }
                }>
                <Link href="/minijuegos/tic-tac-toe" className="bg-white rounded-lg p-4 h-[250px] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <h2 className="text-xl font-semibold">Tic Tac Toe</h2>
                </Link>
                <Link href="/minijuegos/snake" className="bg-white rounded-lg p-4 h-[250px] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <h2 className="text-xl font-semibold">Snake</h2>
                </Link>
                <Link href="/minijuegos/tetris" className="bg-white rounded-lg p-4 h-[250px] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <h2 className="text-xl font-semibold">Tetris</h2>
                </Link>
                <Link href="/minijuegos/pong" className="bg-white rounded-lg p-4 h-[250px] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <h2 className="text-xl font-semibold">Pong</h2>
                </Link>
                <Link href="/minijuegos/memory" className="bg-white rounded-lg p-4 h-[250px] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <h2 className="text-xl font-semibold">Memory</h2>
                </Link>
                <Link href="/minijuegos/puzzle" className="bg-white rounded-lg p-4 h-[250px] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <h2 className="text-xl font-semibold">Puzzle</h2>
                </Link>
                <Link href="/minijuegos/breakout" className="bg-white rounded-lg p-4 h-[250px] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <h2 className="text-xl font-semibold">Breakout</h2>
                </Link>
                <Link href="/minijuegos/pacman" className="bg-white rounded-lg p-4 h-[250px] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <h2 className="text-xl font-semibold">Pac-Man</h2>
                </Link>
                <Link href="/minijuegos/sudoku" className="bg-white rounded-lg p-4 h-[250px] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <h2 className="text-xl font-semibold">Sudoku</h2>
                </Link>
            </div>
        </section>
    )
}