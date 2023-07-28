'use client'
import { GameContext } from "@/app/Sharedstateprovider"
import { useContext } from 'react'
import { Nought } from "./Noughts"
import { Cross } from "./Cross"

export default function Turn() {
    const game = useContext(GameContext)
    return(
        <div className="bg-semidarknavy h-full text-sliver font-bold text-sm tracking-[0.88px] rounded-md shadow-[0_4px_0_0_#10212A] px-5 py-2  flex items-center justify-center">
            {
                game?.Turn !== "x"?
                <Nought isGray={true} noughtOrCross='' isSmall/>:
                <Cross isGray={true} noughtOrCross='' isSmall/>
            }

            TURN
        </div>
    )
}