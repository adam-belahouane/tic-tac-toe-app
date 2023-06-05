'use client'
import { Cross } from "./Cross"
import { Nought } from "./Noughts"
import { useContext } from 'react'
import { GameContext, GameDispatchContext } from "@/app/layout"

export function NandCTougle () {
    const game = useContext(GameContext)
    const dispatch = useContext(GameDispatchContext)

    return(
        <div className='flex items-center justify-center  bg-darkNavy text-sliver w-full rounded-2xl p-2 my-4'>
          <button onClick={() => dispatch({player: "x"})} className={`flex justify-center items-center w-full p-3 ${game?.player === "x"?"bg-sliver rounded-2xl":""}`}>
            <Cross isGray={true} noughtOrCross={game?.player} />
          </button>
          <button onClick={() => dispatch({player: "o"})} className={`flex justify-center items-center w-full p-3 ${game?.player === "o"?"bg-sliver rounded-2xl":""}`}>
            <Nought isGray={true} noughtOrCross={game?.player}/>
          </button>
        </div>
    )
}