'use client'

import { useEffect, useState } from "react"
import Square from "./Square"
import checkWin from "../tools/checkWin"
import { useContext } from 'react'
import { GameContext, GameDispatchContext } from "@/app/layout"
import TrackingWins from "./TrackingWins"
import computerMoves from "../tools/ComputerMoves"

export default function MainGrid() {
    const intialGrid = ["", "", "", "", "", "", "", "", ""]
    const [grid, setGrid] = useState<(string)[]>(intialGrid)
    const game = useContext(GameContext)
    const dispatch = useContext(GameDispatchContext)

    let handleComputerMoves = () => {
        if (game!.gameMode !== "player") {
            if (game?.player !== game?.Turn) {
                let array: (string)[] = computerMoves(grid, game!.Turn)

                if (game?.Turn == "x") {
                    dispatch({ Turn: "o" })
                } else {
                    dispatch({ Turn: "x" })
                }
                setGrid(array)
            }
        }

    }

    useEffect(() => {
        let x = checkWin(grid)
        if (x !== "") {
            dispatch({ winner: x })
        } else {
            setTimeout(() => handleComputerMoves(), 500)
        }

    }, [grid])

    useEffect(() => {
        if (game?.resetGrid) {
            setGrid(intialGrid)
            dispatch({ resetGrid: false })
        }
    }, [game?.resetGrid])
    return (
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 w-[328px] sm:w-[460px]">
            {
                grid.map((item, index) => (
                    <Square key={index} index={index} content={item} setGrid={setGrid} grid={grid} />
                ))
            }
            <TrackingWins />
        </div>
    )
}