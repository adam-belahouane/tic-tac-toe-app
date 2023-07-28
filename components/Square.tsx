import { Cross } from "./Cross";
import { Gridcross } from "./GridCross";
import { Gridnought } from "./GridNought";
import { Nought } from "./Noughts";
import { GameContext, GameDispatchContext } from "@/app/Sharedstateprovider";
import { useContext, Dispatch } from "react";

export default function Square({ content, grid, setGrid, index }: { content: string | undefined, grid: (string )[], setGrid: Dispatch<(string)[]>, index: number }) {

    const game = useContext(GameContext)
    const dispatch = useContext(GameDispatchContext)
    function handleClick() {
        let array: (string)[] = []
        for (let i = 0; i < grid.length; i++) {
            if (i == index) {
                array.push(game!.Turn)
            } else {
                array.push(grid[i])
            }
        }

        if (game?.Turn == "x") {
            dispatch({ Turn: "o" })
        } else {
            dispatch({ Turn: "x" })
        }

        setGrid(array)
    }

    function handleHover() {
        if(game?.gameMode === "player" || game?.player === game?.Turn) {
            return (
                game?.Turn === "x" ? 
                <div className='w-8 flex justify-center items-center relative'>
                    <div className={`w-[12px] h-[40px] rounded-sm border-[1px] border-transparent  rotate-45 sm:w-[18px] sm:h-[70px] group-hover:border-blue`}></div>
                    <div className={`w-[12px] h-[40px] rounded-sm bg-semidarknavy  rotate-45 sm:w-[16px] sm:h-[65px] absolute z-30`}></div>
                    <div className={`w-[12px] h-[40px] rounded-sm border-[1px] border-transparent -rotate-45 absolute top-0 sm:w-[18px] sm:h-[70px] group-hover:border-blue`}></div>
                    <div className={`w-[12px] h-[40px] rounded-sm bg-semidarknavy  -rotate-45 sm:w-[16px] sm:h-[65px] absolute z-30`}></div>
                </div> 
                : 
                <div className='flex justify-center items-center relative'>
                    <div className="w-[32px] h-[32px] border-[1px] border-transparent rounded-full sm:w-[52px] sm:h-[52px] group-hover:border-orange"></div>
                    <div className=" absolute w-[32px] h-[32px] border-[1px] border-transparent rounded-full sm:w-[22px] sm:h-[22px] group-hover:border-orange"></div>
                </div>
            )
        }
        return <></>
    }
    return (
        <button onClick={content === "" ? handleClick : () => (<></>)} className={`bg-semidarknavy aspect-square rounded-[10px] shadow-[0_8px_0_0_#10212A] flex justify-center items-center group `}>

            {
                content === "" ? handleHover(): content === "x" ? <Gridcross /> : <Gridnought />
            }
        </button>
    )
}