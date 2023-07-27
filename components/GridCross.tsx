export function Gridcross() {

    return (
        <div className='w-8 flex justify-center items-center relative'>
            <div className={`w-[12px] h-[40px] rounded-sm  rotate-45 bg-blue sm:w-[18px] sm:h-[70px]`}></div>
            <div className={`w-[12px] h-[40px] rounded-sm -rotate-45 absolute top-0 bg-blue sm:w-[18px] sm:h-[70px]`}></div>
        </div>
    )
}