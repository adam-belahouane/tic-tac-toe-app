import { Cross } from "./Cross";
import { Gridcross } from "./GridCross";
import { Nought } from "./Noughts";
import { GameContext, GameDispatchContext } from "@/app/layout";
import { useContext, Dispatch } from "react";

export default function Square({content, grid, setGrid, index}:{content: string | undefined, grid: (string|undefined)[], setGrid: Dispatch<(string|undefined)[]>, index:number }) {

    const game = useContext(GameContext)
    const dispatch = useContext(GameDispatchContext)
    function handleClick(){
        let array: (string | undefined)[] = []
        for(let i = 0; i < grid.length; i++){
            if(i == index){
                array.push(game?.Turn)
            }else{
                array.push(grid[i])
            }
        }
        
        if(game?.Turn == "x"){
            dispatch({Turn: "o"})
        }else{
            dispatch({Turn: "x"})
        }
        
        setGrid(array)
    }
    return(
        <button onClick={content === ""?handleClick: () => (<></>)} className={`bg-semidarknavy aspect-square rounded-[10px] shadow-[0_8px_0_0_#10212A] flex justify-center items-center `}>
            {
                content === ""?<></>:content === "x"?<Gridcross/>:<Nought isGray={false} noughtOrCross='' isSmall={false} />
            }
        </button>
    )
}