'use client'
import Buttons from '@/components/Buttons'
import { Cross } from '@/components/Cross'
import { NandCTougle } from '@/components/NandCToggle'
import { Nought } from '@/components/Noughts'



export default function Home() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-darkNavy">
      <div className='flex items-center justify-between w-[76px]'>
        <Cross isGray={false} noughtOrCross='' isSmall={false} />
        <Nought isGray={false} noughtOrCross='' isSmall={false} />
      </div>


      <div className='bg-semidarknavy p-4 rounded-2xl w-11/12 flex flex-col items-center shadow-[0_8px_0_0_#10212A] my-6 '>
        <div className='text-sliver text-lg font-bold tracking-[1px]'>PICK PLAYER 1'S MARK</div>
        <NandCTougle />
        <div className='text-sliver opacity-50 text-md tracking-[0.88px]'>REMEMBER : X GOES FIRST</div>

      </div>

      <Buttons />

    </div>
  )
}
