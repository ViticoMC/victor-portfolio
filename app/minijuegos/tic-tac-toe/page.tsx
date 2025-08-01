"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Settings, Info, Users, Bot, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type Marcador = string
export default function TicTacToe() {
    const [jugador, setJugador] = useState<Marcador>('X')
    const [showDialog, setShowDialog] = useState(false)
    const [ganador, setGanador] = useState<Marcador>('')
    const [modoBot, setModoBot] = useState(false)
    const router = useRouter()


    const ganar = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    const [marcador, setMarcador] = useState<string[]>([
        '', '', '',
        '', '', '',
        '', '', '',
    ])




    useEffect(() => {
        const ganadorActual = verificarGanador()
        if (ganadorActual) {
            setGanador(jugador)
            setShowDialog(true)
        }
        if (marcador.every(marc => marc !== '')) setShowDialog(true)

        if (modoBot && jugador === 'O' && !ganadorActual) {
            setTimeout(() => {
                movimientoBot()
            }, 500)
        }
    }, [marcador, jugador])

    function movimientoBot() {
        const ganarBloqueados = []
        const inmediateGanarBot = []

        for (const combinacion of ganar) {
            const [a, b, c] = combinacion
            if (marcador[a] === 'O' || marcador[b] === 'O' || marcador[c] === 'O') {
                ganarBloqueados.push([a, b, c])
            }
            if (
                marcador[a] === 'O'
                && marcador[b] === 'O'
                && marcador[c] === ''
            ) {
                inmediateGanarBot.push(c)
            } else if (
                marcador[a] === 'O'
                && marcador[c] === 'O'
                && marcador[b] === ''
            ) {
                inmediateGanarBot.push(b)
            } else if (
                marcador[b] === 'O'
                && marcador[c] === 'O'
                && marcador[a] === ''
            ) {
                inmediateGanarBot.push(a)
            }
        }


        const posiblesGanar = []
        const inmediateGanar = []
        for (const combinacion of ganar) {
            const [a, b, c] = combinacion
            let bloqueoEncontrado = false
            for (const bloqueo of ganarBloqueados) {
                if (bloqueo.includes(a) && bloqueo.includes(b) && bloqueo.includes(c)) {
                    bloqueoEncontrado = true
                    break
                }
            }
            if (
                (marcador[a] === 'X'
                    || marcador[b] === 'X'
                    || marcador[c] === 'X')
                && !bloqueoEncontrado
            ) {
                posiblesGanar.push([a, b, c])
            }
            if (
                (marcador[a] === 'X'
                    && marcador[b] === 'X'
                    && marcador[c] === ''
                )
                && !bloqueoEncontrado
            ) {
                inmediateGanar.push(c)
            } else if (
                (marcador[a] === 'X'
                    && marcador[c] === 'X'
                    && marcador[b] === ''
                )
                && !bloqueoEncontrado
            ) {
                inmediateGanar.push(b)
            } else if (
                (marcador[b] === 'X'
                    && marcador[c] === 'X'
                    && marcador[a] === ''
                )
                && !bloqueoEncontrado
            ) {
                inmediateGanar.push(a)
            }

        }

        const casillasVacias = []
        const casillasRival = []
        for (let i = 0; i < marcador.length; i++) {
            if (marcador[i] === '') {
                casillasVacias.push(i)
            }
            if (marcador[i] === 'X') {
                casillasRival.push(i)
            }
        }

        if (casillasVacias.includes(4)) {
            updateMarcador(4, jugador)
            setJugador('X')
            return
        }

        if (inmediateGanarBot.length > 0 && casillasVacias.includes(inmediateGanarBot[0])) {
            console.log("inmediateGanarBot")
            updateMarcador(inmediateGanarBot[0], jugador)
            setJugador('X')
            return
        }

        if (inmediateGanar.length > 0 && casillasVacias.includes(inmediateGanar[0])) {
            console.log("inmediateGanar")
            updateMarcador(inmediateGanar[0], jugador)
            setJugador('X')
            return
        }
        if (
            casillasRival.includes(0) || casillasRival.includes(2) || casillasRival.includes(6) || casillasRival.includes(8)
        ) {
            console.log("casillasRival")
            if (casillasRival[0] === 0 && casillasVacias.includes(1)) {
                console.log("1")
                updateMarcador(1, jugador)
                setJugador('X')
                return
            } else if (casillasRival[0] === 2 && casillasVacias.includes(5)) {
                console.log("5")

                updateMarcador(5, jugador)
                setJugador('X')
                return
            } else if (casillasRival[6] === 0 && casillasVacias.includes(3)) {
                console.log("3")
                updateMarcador(3, jugador)
                setJugador('X')
                return
            } else if (casillasRival[8] === 2 && casillasVacias.includes(7)) {
                console.log("7")

                updateMarcador(7, jugador)
                setJugador('X')
                return
            }
        }

        for (const casilla of casillasVacias) {

            for (const combinacion of posiblesGanar) {
                const [a, b, c] = combinacion
                if (casilla === a) {
                    updateMarcador(a, jugador)
                    setJugador('X')
                    return
                } else if (casilla === b) {
                    updateMarcador(b, jugador)
                    setJugador('X')
                    return
                } else if (casilla === c) {
                    updateMarcador(c, jugador)
                    setJugador('X')
                    return
                }
            }
        }
    }

    function updateMarcador(index: number, valor: string) {
        setMarcador(prevMarcador => {
            const newMarcador = [...prevMarcador]
            newMarcador[index] = valor
            return newMarcador
        })
    }

    function verificarGanador() {
        for (const combinacion of ganar) {
            const [a, b, c] = combinacion
            if (marcador[a] && marcador[a] === marcador[b] && marcador[a] === marcador[c]) {
                return true
            }
        }
        return false
    }

    function reiniciarJuego() {
        setMarcador([
            '', '', '',
            '', '', '',
            '', '', '',
        ])
        setJugador('X')
        setGanador('')
        setShowDialog(false)
    }



    return (
        <section className="min-h-screen h-auto bg-gradient-to-t from-purple-500 to-violet-500  pt-4 flex flex-col items-center gap-2 ">
            <div className="flex items-center justify-center w-full max-w-4xl px-4 mb-5 md:mb-2 mt-10 md:mt-0">
                <h1 className="md:-translate-x-6 text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-white via-gray-200 to-slate-200 bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(255,255,122,0.9)]">
                    TIC TAC TOE
                </h1>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="bg-white/20 border-white/30 text-white hover:bg-white/30 fixed md:top-6 md:right-6 top-2 right-2">
                            <Settings className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="bg-gradient-to-br from-purple-400 via-violet-500 to-purple-700 border-0 text-white">
                        <SheetHeader>
                            <SheetTitle className="text-2xl font-bold text-white flex items-center gap-2">
                                <Settings className="h-6 w-6" />
                                Configuración
                            </SheetTitle>
                        </SheetHeader>

                        <div className="mt-6 space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    {modoBot ? <Bot className="h-5 w-5" /> : <Users className="h-5 w-5" />}
                                    Modo de Juego
                                </h3>
                                <div className="flex items-center space-x-2">
                                    <Switch
                                        id="modo-bot"
                                        checked={modoBot}
                                        onCheckedChange={(checked) => {
                                            setModoBot(checked)
                                            reiniciarJuego()
                                        }}
                                    />
                                    <Label htmlFor="modo-bot" className="text-white">
                                        {modoBot ? "Jugar contra Bot" : "Multijugador"}
                                    </Label>
                                </div>
                                {/* <Badge variant="secondary" className="bg-white/20 text-white">
                                    {modoBot ? "El bot jugará automáticamente" : "Dos jugadores humanos"}
                                </Badge> */}
                            </div>



                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Info className="h-5 w-5" />
                                    Información
                                </h3>
                                {/* <div className="space-y-3 text-sm">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <h4 className="font-semibold mb-2">Tecnologías Utilizadas:</h4>
                                        <ul className="space-y-1 text-white/90">
                                            <li>• Next.js 14 con App Router</li>
                                            <li>• TypeScript para tipado estático</li>
                                            <li>• Tailwind CSS para estilos</li>
                                            <li>• Shadcn/ui para componentes</li>
                                            <li>• React Hooks para estado</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <h4 className="font-semibold mb-2">Características:</h4>
                                        <ul className="space-y-1 text-white/90">
                                            <li>• Modo multijugador local</li>
                                            <li>• Modo contra bot inteligente</li>
                                            <li>• Marcadores personalizables</li>
                                            <li>• Nombres de jugadores editables</li>
                                            <li>• Diseño responsive</li>
                                            <li>• Animaciones y efectos visuales</li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
                <Button
                    variant="outline" size="icon" className="bg-white/20 border-white/30 text-white hover:bg-white/30 fixed md:top-6 md:left-6 top-2 left-2"
                    onClick={() => router.back()}
                >
                    <ArrowLeft className="h-5 w-5" />
                </Button>
            </div>

            <div className=" flex flex-col md:flex-row items-center justify-center gap-4 h-[360px]">
                {/* Reacuadro del juego */}
                <div className="bg-white rounded-lg p-2 h-[360px] w-[360px] grid gap-[6px] "
                    style={{
                        gridTemplateColumns:
                            "repeat(3, minmax(min(100%, 110px), 1fr))",
                    }}>
                    {
                        marcador.map((marcador, index) => {
                            const disabled = (ganador ? true : false) || (marcador ? true : false) || (modoBot && jugador === 'O')
                            return (
                                <button key={index}
                                    disabled={disabled}
                                    className={`bg-white rounded-sm border-2 border-gray-300 h-[110px] w-[110px] flex items-center justify-center hover:bg-gray-50 transition-colors ${disabled ? "cursor-not-allowed" : ""}`}
                                    onClick={() => {
                                        updateMarcador(index, jugador)
                                        setJugador(prevJugador => prevJugador === 'X' ? 'O' : 'X')
                                    }}
                                >
                                    <h1 className={`text-5xl font-bold ${marcador === 'X' ? 'text-blue-500' : 'text-red-500'}`}>
                                        {marcador}
                                    </h1>
                                </button>
                            )
                        })
                    }
                </div>
                <div className="flex md:flex-col  h-[240px] justify-center gap-4">
                    <div className={`${jugador === 'X' ? "shadow-[0_0_8px_rgba(255,255,122,0.9)]" : ""} bg-red-100 p-1 h-[40px] rounded-sm w-[40px] flex justify-center items-center`}>
                        <span className="text-2xl text-red-500">X</span>
                    </div>
                    <div className={`${jugador === 'O' ? "shadow-[0_0_8px_rgba(255,255,122,0.9)]" : ""} bg-blue-100 p-1 h-[40px] rounded-sm w-[40px] flex justify-center items-center`}>
                        <span className="text-2xl text-blue-500">O</span>
                    </div>
                </div>
            </div>

            <Button className="mt-10 h-10 w-36 hover:bg-purple-800 md:-translate-x-6"
                onClick={reiniciarJuego}
            >
                Reiniciar
            </Button>

            <Dialog open={showDialog} onOpenChange={setShowDialog} >
                <DialogContent className="bg-gradient-to-br from-purple-400 via-violet-500 to-purple-700 border-0 text-white">
                    <div className="relative">

                        <DialogHeader className="relative z-10">
                            <DialogTitle className="text-3xl font-bold text-center text-white drop-shadow-lg">
                                {
                                    ganador ? "🎉 ¡ VICTORIA! 🎉"
                                        : "🎉 ¡ EMPATE! 🎉"
                                }
                            </DialogTitle>
                            <div className="text-center mt-4">
                                {
                                    ganador ?
                                        <h2 className="text-2xl font-semibold mb-4">
                                            ¡Jugador
                                            <span className={`${jugador === 'X' ? 'text-red-400' : 'text-blue-400'}`}>
                                                {jugador === 'X' ? ' O ' : ' X '}
                                            </span>
                                            ha ganado!
                                        </h2>
                                        :
                                        <h2 className="text-2xl font-semibold mb-4">
                                            ¡Ningún jugador ha ganado!
                                        </h2>
                                }
                                <Button
                                    onClick={reiniciarJuego}
                                    className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-8 py-3"
                                >
                                    Jugar de nuevo
                                </Button>
                            </div>
                        </DialogHeader>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    )
}
