import { GameContext } from "@/app/layout"
import { useContext } from "react"

export default function TrackingWins() {

    const game = useContext(GameContext)

    const handleTitle = (arg: string) => {
        if(game?.gameMode == "player"){
            if(arg == game.player){
                return "(P1)"
            }else{
                return "(P2)"
            }
        }else{
            if(arg == game?.player){
                return "(YOU)"
            }else{
                return "(CPU)"
            }
        }
    }

    return (
        <>
            <div className="flex items-center justify-center flex-col bg-lightblue rounded-[10px] p-3">
                <div className="text-[14px] tracking-[0.88px] font-medium">X {handleTitle("x")}</div>
                <div className="text-[20px] tracking-[1.25px] font-bold leading-none">{game?.x}</div>
            </div>
            <div className="flex items-center justify-center flex-col bg-sliver rounded-[10px] p-3">
                <div className="text-[14px] tracking-[0.88px] font-medium">TIES</div>
                <div className="text-[20px] tracking-[1.25px] font-bold leading-none">{game?.tie}</div>
            </div>
            <div className="flex items-center justify-center flex-col bg-orange rounded-[10px] p-3">
                <div className="text-[14px] tracking-[0.88px] font-medium">O {handleTitle("o")}</div>
                <div className="text-[20px] tracking-[1.25px] font-bold leading-none">{game?.y}</div>
            </div>
        </>
    )
}