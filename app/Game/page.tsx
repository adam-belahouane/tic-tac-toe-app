'use client'

import { Cross } from "@/components/Cross"
import MainGrid from "@/components/MainGrid"
import { Nought } from "@/components/Noughts"
import Turn from "@/components/Turn"
import { useContext, useState } from 'react'
import { GameContext, GameDispatchContext } from "@/app/Sharedstateprovider"
import Modal from "@/components/Modal"

export default function Game() {
    const game = useContext(GameContext)
    const [isReset, setIsReset] = useState<boolean>(false)

    return (
        <>
            <div className="min-h-screen flex flex-col items-center bg-darkNavy sm:justify-center">
                <div className="grid grid-cols-3 gap-x-4 gap-y-6 mt-6 mb-[64px] w-[328px] sm:w-[460px]">
                    <div className='flex items-center justify-between w-[76px]'>
                        <Cross isGray={false} noughtOrCross='' isSmall={false} />
                        <Nought isGray={false} noughtOrCross='' isSmall={false} />
                    </div>

                    <Turn />
                    <div className="flex justify-end items-end">
                        <button onClick={() => setIsReset(true)} className="bg-sliver p-[10px] rounded-md shadow-[0_4px_0_0_#6B8997]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{ fill: "#1f3641" }}><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" /></svg>
                        </button>
                    </div>
                    {
                        isReset ? <Modal winner={game!.winner} isReset={isReset} setIsReset={setIsReset} /> : <></>
                    }


                </div>
                <MainGrid />
            </div>
            {
                game!.winner !== "" ? <Modal winner={game!.winner} isReset={isReset} setIsReset={setIsReset} /> : <></>
            }
        </>
    )
}