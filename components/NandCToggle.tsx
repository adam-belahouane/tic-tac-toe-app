'use client'
import { Cross } from "./Cross"
import { Nought } from "./Noughts"
import { useContext } from 'react'
import { GameContext, GameDispatchContext } from "@/app/Sharedstateprovider"

export function NandCTougle () {
    const game = useContext(GameContext)
    const dispatch = useContext(GameDispatchContext)

    return(
        <div className='flex items-center justify-center  bg-darkNavy text-sliver w-full rounded-[10px] p-2 my-4'>
          <button onClick={() => dispatch({player: "x"})} className={`flex justify-center items-center w-full p-3  rounded-[10px] ${game?.player === "x"?"bg-sliver":"hover:bg-sliverhover/[0.05]"}`}>
            <Cross isGray={true} noughtOrCross={game?.player} isSmall={false}/>
          </button>
          <button onClick={() => dispatch({player: "o"})} className={`flex justify-center items-center w-full p-3 rounded-[10px] ${game?.player === "o"?"bg-sliver":"hover:bg-sliverhover/[0.05]"}`}>
            <Nought isGray={true} noughtOrCross={game?.player} isSmall={false}/>
          </button>
        </div>
    )
}