'use client'
import { Cross } from '@/components/Cross'
import { NandCTougle } from '@/components/NandCToggle'
import { Nought } from '@/components/Noughts'



export default function Home() {
  
  const handleClick = (arg: string) => {

    

  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-darkNavy">
      <div className='flex items-center'>
        <Cross isGray={false} noughtOrCross='' />
        <Nought isGray={false} noughtOrCross=''/>
      </div>


      <div className='bg-semidarknavy p-4 rounded-2xl w-11/12 flex flex-col items-center shadow-[0_8px_0_0_#10212A] my-6 '>
        <div className='text-sliver text-lg font-bold tracking-[1px]'>PICK PLAYER 1'S MARK</div>
        <NandCTougle />
        <div className='text-sliver opacity-50 text-md tracking-[0.88px]'>REMEMBER : X GOES FIRST</div>

      </div>

      <div className='w-11/12'>
        <button onClick={() => handleClick("Computer")} className='w-full rounded-2xl tracking-[1px] font-bold bg-orange shadow-[0_8px_0_0_#CC8B13] text-lg p-2 mb-5 hover:bg-lightorange'>
          NEW GAME (VS CPU)
        </button>
        <button className='w-full rounded-2xl tracking-[1px] font-bold bg-blue shadow-[0_8px_0_0_#118C87] text-lg p-2 hover:bg-lightblue'>
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  )
}
