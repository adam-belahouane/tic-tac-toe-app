'use client'
import { GameContext, GameDispatchContext } from "@/app/layout"
import { useRouter } from "next/navigation"
import { useContext } from "react"

export default function Buttons() {
    const dispatch = useContext(GameDispatchContext)
    const game = useContext(GameContext)
    const router = useRouter()

    const handleClick = (str: string) => {
        if (str === "Computer") {
            dispatch({ gameMode: "Computer" })
        } else {
            dispatch({ gameMode: "player" })
        }
        router.push('/Game')

    }

    return (
        <div className='w-full'>
            <button onClick={() => handleClick("Computer")} className='w-full rounded-2xl tracking-[1px] font-bold bg-orange shadow-[0_8px_0_0_#CC8B13] text-lg p-2 mb-5 hover:bg-lightorange'>
                NEW GAME (VS CPU)
            </button>
            <button onClick={() => handleClick("Player")} className='w-full rounded-2xl tracking-[1px] font-bold bg-blue shadow-[0_8px_0_0_#118C87] text-lg p-2 hover:bg-lightblue'>
                NEW GAME (VS PLAYER)
            </button>
        </div>
    )
}