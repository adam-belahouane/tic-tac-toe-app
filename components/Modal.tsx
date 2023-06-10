'use client'
import { Cross } from "./Cross";
import { Nought } from "./Noughts";
import { useContext } from "react";
import { GameDispatchContext } from "@/app/layout";
import { useRouter } from "next/navigation"

export default function Modal({ winner }: { winner: string }) {
    const dispatch = useContext(GameDispatchContext)
    const router = useRouter()
    function handleQuit() {
        dispatch({
            player: "x",
            gameMode: "player",
            Turn: "x",
            x: 0,
            y: 0,
            tie: 0,
            winner: "",
            resetGrid: false
        })
        router.push("/")
    }

    function handleNextRound() {
        dispatch({resetGrid: true, winner: ""})
    }
    return (
        <div className="fixed z-1 left-0 top-0 w-full h-full bg-[#00000066]  flex items-center justify-center">
            <div className="w-full bg-semidarknavy flex items-center justify-center flex-col py-6">
                <div className="font-bold text-sm tracking-[0.88px] text-sliver">OH NO, YOU LOST...</div>
                <div className="flex justify-center items-center py-4">
                    {winner === "x" ? <Cross isGray={false} noughtOrCross='' isSmall={false} /> : <Nought isGray={false} noughtOrCross='' isSmall={false} />}
                    <div className={`font-bold text-2xl tracking-[1.5px] ml-2 ${winner === "x" ? "text-lightblue" : "text-orange"}`}>TAKES THE ROUND</div>
                </div>
                <div>
                    <button onClick={() => handleQuit()} className="font-bold tracking-[1px] text-[16px] rounded-[10px] bg-sliver p-3 shadow-[0_4px_0_0_#6B8997] hover:bg-sliverhover">QUIT</button>
                    <button onClick={handleNextRound} className="font-bold tracking-[1px] ml-2 text-[16px] rounded-[10px] bg-orange p-3 shadow-[0_4px_0_0_#CC8B13] hover:bg-lightorange">NEXT ROUND</button>
                </div>
            </div>
        </div>
    )
}