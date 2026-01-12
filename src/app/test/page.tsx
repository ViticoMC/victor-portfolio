"use client"
import Ballpit from "@/components/Ballpit";

export default function Test() {
    return (
        <div className="w-[100vw] h-screen relative">
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
