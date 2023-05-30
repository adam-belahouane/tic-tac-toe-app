import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-darkNavy">
      <div className='flex items-center'>
        <div className='relative mr-4'>
          <div className='w-[10px] h-9 rounded-sm bg-lightblue rotate-45'></div>
          <div className='w-[10px] h-9 rounded-sm bg-lightblue -rotate-45 absolute top-0'></div>
        </div>

        <div className='relative'>
          <div className='w-[32px] h-[32px] rounded-full bg-orange'></div>
          <div className='w-[12px] h-[12px] rounded-full bg-darkNavy absolute top-[10px] left-[10px]'></div>

        </div>

      </div>


      <div className='bg-semidarknavy p-4 rounded-2xl w-11/12 flex flex-col items-center shadow-[0_8px_0_0_#10212A] my-6 '>
        <div className='text-sliver text-lg font-bold tracking-[1px]'>PICK PLAYER 1'S MARK</div>
        <div className='flex items-center justify-center  bg-darkNavy text-sliver w-full rounded-2xl p-2 my-4'>
          <button className='flex justify-center items-center w-full p-3'>
            <div className='relative mr-4'>
              <div className='w-[10px] h-9 rounded-sm bg-sliver rotate-45'></div>
              <div className='w-[10px] h-9 rounded-sm bg-sliver -rotate-45 absolute top-0'></div>
            </div>
          </button>
          <button className='flex justify-center items-center w-full p-3 bg-sliver rounded-2xl'>
            <div className='relative'>
              <div className='w-[32px] h-[32px] rounded-full bg-darkNavy'></div>
              <div className='w-[12px] h-[12px] rounded-full bg-sliver absolute top-[10px] left-[10px]'></div>

            </div>
          </button>
        </div>
        <div className='text-sliver opacity-50 text-md tracking-[0.88px]'>REMEMBER : X GOES FIRST</div>

      </div>

      <div className='w-11/12'>
        <button className='w-full rounded-2xl tracking-[1px] font-bold bg-orange shadow-[0_8px_0_0_#CC8B13] text-lg p-2 mb-5 hover:bg-lightorange'>
          NEW GAME (VS CPU)
        </button>
        <button className='w-full rounded-2xl tracking-[1px] font-bold bg-blue shadow-[0_8px_0_0_#118C87] text-lg p-2 hover:bg-lightblue'>
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </main>
  )
}
