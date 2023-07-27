export function Cross({ isGray, noughtOrCross, isSmall }: { isGray: boolean, noughtOrCross: String | undefined, isSmall: boolean }) {

  return (
    <div className='w-8 flex justify-center items-center relative'>
      {
        isSmall ? <div className='mr-[7px] w-4 flex justify-center items-center relative'><div className={`w-[5px] h-5  rotate-45 ${isGray ? noughtOrCross === "x" ? 'bg-darkNavy' : 'bg-sliver' : 'bg-blue'} `}></div>
          <div className={`w-[5px] h-5 -rotate-45 absolute top-0 ${isGray ? noughtOrCross === "x" ? 'bg-darkNavy' : 'bg-sliver' : 'bg-blue'}`}></div></div> :

          <>
            <div className={`w-[12px] h-10 rounded-sm  rotate-45 ${isGray ? noughtOrCross === "x" ? 'bg-darkNavy' : 'bg-sliver' : 'bg-blue'} `}></div>
            <div className={`w-[12px] h-10 rounded-sm -rotate-45 absolute top-0 ${isGray ? noughtOrCross === "x" ? 'bg-darkNavy' : 'bg-sliver' : 'bg-blue'}`}></div></>}
    </div>
  )
}