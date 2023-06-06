export function Nought({ isGray, noughtOrCross, isSmall }: { isGray: boolean, noughtOrCross: String | undefined, isSmall: boolean }) {

    return (
        <div className='flex justify-center items-center'>
            {
                !isSmall?<div className={`w-[32px] h-[32px] border-[10px]  rounded-full ${isGray ? noughtOrCross !== 'o' ? 'border-sliver' : 'border-darkNavy' : 'border-orange'}`}></div>:
                <div className={`w-[16px] h-[16px] border-[5px] mr-[7px]  rounded-full ${isGray ? noughtOrCross !== 'o' ? 'border-sliver' : 'border-darkNavy' : 'border-orange'}`}></div>
            }
            
        </div>
    )

}