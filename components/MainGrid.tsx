'use client'

import { useEffect, useState } from "react"
import Square from "./Square"
import checkWin from "../tools/checkWin"
import { useContext } from 'react'
import { GameContext, GameDispatchContext } from "@/app/layout"

export default function MainGrid() {
    const intialGrid = ["", "", "", "", "", "", "", "", ""]
    const [grid, setGrid] = useState<(string | undefined)[]>(intialGrid)
    const game = useContext(GameContext)
    const dispatch = useContext(GameDispatchContext)

    useEffect(() => {
        let x = checkWin(grid)
        if(x !== undefined){
            dispatch({winner: x})
        }
    }, [grid])

    useEffect(() => {
        if(game?.resetGrid){
            setGrid(intialGrid)
            dispatch({resetGrid: false})
        }
    }, [game?.resetGrid])
    return (
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 w-10/12">
            {
                grid.map((item, index) => (
                    <Square key={index} index={index} content={item} setGrid={setGrid} grid={grid} />
                ))
            }
            <div className="flex items-center justify-center flex-col bg-lightblue rounded-[10px] p-3">
                <div className="text-[14px] tracking-[0.88px] font-medium">X (YOU)</div>
                <div className="text-[20px] tracking-[1.25px] font-bold leading-none">{game?.x}</div>
            </div>
            <div className="flex items-center justify-center flex-col bg-sliver rounded-[10px] p-3">
                <div className="text-[14px] tracking-[0.88px] font-medium">TIES</div>
                <div className="text-[20px] tracking-[1.25px] font-bold leading-none">{game?.tie}</div>
            </div>
            <div className="flex items-center justify-center flex-col bg-orange rounded-[10px] p-3">
                <div className="text-[14px] tracking-[0.88px] font-medium">O (CPU)</div>
                <div className="text-[20px] tracking-[1.25px] font-bold leading-none">{game?.y}</div>
            </div>
        </div>
    )
}