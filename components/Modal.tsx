'use client'
import { Cross } from "./Cross";
import { Nought } from "./Noughts";
import { useContext, Dispatch } from "react";
import { GameContext, GameDispatchContext, initialState } from "@/app/Sharedstateprovider";
import { useRouter } from "next/navigation"

export default function Modal({ winner, isReset, setIsReset }: { winner: string, isReset: boolean, setIsReset: Dispatch<boolean> }) {
    const dispatch = useContext(GameDispatchContext)
    const game = useContext(GameContext)
    const router = useRouter()
    function handleQuit() {
        dispatch(initialState)
        router.push("/")
    }

    function handleNextRound() {
        if (winner == "tie") {
            dispatch({ tie: game!.tie + 1 })
        } else if (winner == "x") {
            dispatch({ x: game!.x + 1 })
        } else {
            dispatch({ y: game!.y + 1 })
        }
        dispatch({ resetGrid: true, winner: "", Turn: "x" })
    }

    function handleTitle() {
        if (game?.gameMode === "player") {
            if (winner === game.player) {
                return "PLAYER 1 WINS!"
            } else {
                return "PLAYER 2 WINS!"
            }
        } else {
            if (winner === game?.player) {
                return "YOU WON!"
            } else {
                return "OH NO, YOU LOST..."
            }
        }
    }
    return (
        <div className="fixed z-50 left-0 top-0 w-full h-full bg-[#00000066]  flex items-center justify-center">
            <div className="w-full bg-semidarknavy h-2/6 flex items-center justify-center flex-col py-6">
                {isReset ?
                    <>
                        <div className="text-sliver font-bold tracking-[1.5px] text-2xl mb-5">RESTART GAME?</div>
                        <div>
                            <button onClick={() => setIsReset(false)} className="font-bold tracking-[1px] text-[16px] rounded-[10px] bg-sliver p-3 shadow-[0_4px_0_0_#6B8997] hover:bg-sliverhover">NO, CANCEL</button>
                            <button onClick={() => handleQuit()} className="font-bold tracking-[1px] ml-4 text-[16px] rounded-[10px] bg-orange p-3 shadow-[0_4px_0_0_#CC8B13] hover:bg-lightorange">YES, RESTART</button>
                        </div>
                    </> : <>
                        {
                            winner === "tie" ?
                                <div className="text-sliver font-bold tracking-[1.5px] text-2xl mb-5">ROUND TIED</div>
                                :
                                <>
                                    <div className="font-bold text-sm tracking-[0.88px] text-sliver">{handleTitle()}</div>
                                    <div className="flex justify-center items-center py-4">
                                        {
                                            winner === "x" ?
                                                <Cross isGray={false} noughtOrCross='' isSmall={false} />
                                                :
                                                <Nought isGray={false} noughtOrCross='' isSmall={false} />
                                        }
                                        <div className={`font-bold text-2xl tracking-[1.5px] ml-2 ${winner === "x" ? "text-lightblue" : "text-orange"}`}>TAKES THE ROUND</div>
                                    </div>
                                </>}
                        <div>
                            <button onClick={() => handleQuit()} className="font-bold tracking-[1px] text-[16px] rounded-[10px] bg-sliver p-3 shadow-[0_4px_0_0_#6B8997] hover:bg-sliverhover">QUIT</button>
                            <button onClick={handleNextRound} className="font-bold tracking-[1px] ml-4 text-[16px] rounded-[10px] bg-orange p-3 shadow-[0_4px_0_0_#CC8B13] hover:bg-lightorange">NEXT ROUND</button>
                        </div>
                    </>}
            </div>
        </div>
    )
}