import { Cross } from "./Cross";
import { Nought } from "./Noughts";

export default function Square({content}:{content: string}) {

    return(
        <div className="bg-semidarknavy aspect-square rounded-[10px] shadow-[0_8px_0_0_#10212A] flex justify-center items-center">
            {
                content === ""?<></>:content === "x"?<Cross isGray={false} noughtOrCross='' isSmall={false}/>:<Nought isGray={false} noughtOrCross='' isSmall={false} />
            }
        </div>
    )
}