export function Cross({ isGray, noughtOrCross, isSmall }: { isGray: boolean, noughtOrCross: String | undefined, isSmall: boolean }) {

  return (
    <div className='w-8 flex justify-center items-center relative'>
      {
        isSmall ? <><div className={`w-[5px] h-5  rotate-45 ${isGray ? noughtOrCross === "x" ? 'bg-darkNavy' : 'bg-sliver' : 'bg-lightblue'} `}></div>
          <div className={`w-[5px] h-5 -rotate-45 absolute top-0 ${isGray ? noughtOrCross === "x" ? 'bg-darkNavy' : 'bg-sliver' : 'bg-lightblue'}`}></div></> :

          <>
            <div className={`w-[10px] h-9 rounded-sm  rotate-45 ${isGray ? noughtOrCross === "x" ? 'bg-darkNavy' : 'bg-sliver' : 'bg-lightblue'} `}></div>
            <div className={`w-[10px] h-9 rounded-sm -rotate-45 absolute top-0 ${isGray ? noughtOrCross === "x" ? 'bg-darkNavy' : 'bg-sliver' : 'bg-lightblue'}`}></div></>}
    </div>
  )
}