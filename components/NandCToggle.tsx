'use client'

import { Cross } from "./Cross"
import { Nought } from "./Noughts"
import {useState} from 'react'

export function NandCTougle () {

    const[NoughtOrCross, setNoughtOrCross] = useState("x")

    return(
        <div className='flex items-center justify-center  bg-darkNavy text-sliver w-full rounded-2xl p-2 my-4'>
          <button onClick={() => setNoughtOrCross("x")} className={`flex justify-center items-center w-full p-3 ${NoughtOrCross === "x"?"bg-sliver rounded-2xl":""}`}>
            <Cross isGray={true} noughtOrCross={NoughtOrCross} />
          </button>
          <button onClick={() => setNoughtOrCross("o")} className={`flex justify-center items-center w-full p-3 ${NoughtOrCross === "o"?"bg-sliver rounded-2xl":""}`}>
            <Nought isGray={true} noughtOrCross={NoughtOrCross}/>
          </button>
        </div>
    )
}