"use client"
import Silk from "@/components/Silk";
import Ballpit from "@/components/Ballpit";
import TicTacToe from "./tic-tac-toe";


export default function Page() {
    return (
        <div className="w-[100vw] h-auto relative">
            <BG />
            <TicTacToe />
        </div>
    )
}

export const BG = () => {
    return (
        <div className="w-[100vw] h-screen -z-10 fixed">
            {/* <Silk
                speed={5}
                scale={1}
                color="#7B7481"
                noiseIntensity={1.5}
                rotation={0}
            /> */}
            <Ballpit
                count={100}
                gravity={0.5}
                friction={0.9975}
                wallBounce={0.95}
                followCursor
                colors={["#5227FF", "#7cff67", "#ff6b6b"]}
            />
        </div>
    )
}
