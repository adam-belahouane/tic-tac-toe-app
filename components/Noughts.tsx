export function Nought({isGray, noughtOrCross}: {isGray: boolean, noughtOrCross: String|undefined}) {

    return (
        <div className='relative'>
            <div className={`w-[32px] h-[32px] rounded-full ${isGray?noughtOrCross !== 'o'?'bg-sliver':'bg-darkNavy':'bg-orange'}`}></div>
            <div className={`w-[12px] h-[12px] rounded-full ${isGray?noughtOrCross !== 'o'?'bg-darkNavy':'bg-sliver':'bg-darkNavy'} absolute top-[10px] left-[10px]`}></div>

        </div>
    )

}