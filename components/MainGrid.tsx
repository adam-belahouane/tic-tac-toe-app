'use client'

import { useEffect, useState } from "react"
import Square from "./Square"
import checkWin from "../tools/checkWin"

export default function MainGrid() {
    const [grid, setGrid] = useState<(string | undefined)[]>(["", "", "", "", "", "", "", "", ""])

    useEffect(() => {
        console.log(checkWin(grid));
    }, [grid])
    return (
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 w-10/12">
            {
                grid.map((item, index) => (
                    <Square key={index} index={index} content={item} setGrid={setGrid} grid={grid} />
                ))
            }
            <div className="flex items-center justify-center flex-col bg-lightblue rounded-[10px] p-3">
                <div className="text-[14px] tracking-[0.88px] font-medium">X (YOU)</div>
                <div className="text-[20px] tracking-[1.25px] font-bold leading-none">0</div>
            </div>
            <div className="flex items-center justify-center flex-col bg-sliver rounded-[10px] p-3">
                <div className="text-[14px] tracking-[0.88px] font-medium">TIES</div>
                <div className="text-[20px] tracking-[1.25px] font-bold leading-none">0</div>
            </div>
            <div className="flex items-center justify-center flex-col bg-orange rounded-[10px] p-3">
                <div className="text-[14px] tracking-[0.88px] font-medium">O (CPU)</div>
                <div className="text-[20px] tracking-[1.25px] font-bold leading-none">0</div>
            </div>
        </div>
    )
}