export function Cross({isGray, noughtOrCross}: {isGray: boolean, noughtOrCross: string|undefined}) {

    return(
        <div className='relative mr-4'>
          <div className={`w-[10px] h-9 rounded-sm  rotate-45 ${isGray?noughtOrCross === "x"?'bg-darkNavy':'bg-sliver':'bg-lightblue'} `}></div>
          <div className={`w-[10px] h-9 rounded-sm -rotate-45 absolute top-0 ${isGray?noughtOrCross === "x"?'bg-darkNavy':'bg-sliver':'bg-lightblue'}`}></div>
        </div>
    )
}