'use client'

import { useState } from "react"
import Square from "./Square"

export default function MainGrid() {
    const[grid, setGrid] = useState<string[]>(["","x","o","","","","","",""])
    return(
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 w-10/12">
            {
                grid.map((item, index) => (
                    <Square key={index} content={item} />
                ))
            }
        </div>
    )
}