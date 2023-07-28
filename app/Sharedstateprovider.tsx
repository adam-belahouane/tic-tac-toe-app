'use client'

import { useReducer, createContext } from 'react'

export const GameContext = createContext<State | undefined>(undefined)

export const GameDispatchContext = createContext<any | undefined>(undefined)

interface State {
    player: String,
    gameMode: String,
    Turn: string,
    x: number,
    y: number,
    tie: number,
    winner: string,
    resetGrid: boolean
}

export const initialState = {
    player: "x",
    gameMode: "player",
    Turn: "x",
    x: 0,
    y: 0,
    tie: 0,
    winner: "",
    resetGrid: false
}



export default function SharedStateProvider({ children }: {
    children: React.ReactNode
}) {

    const [state, dispatch] = useReducer(
        (state: State, action: any) => {
            return {
                ...state,
                ...action
            }
        },
        initialState
    )

    return (
        <GameContext.Provider value={state} >
            <GameDispatchContext.Provider value={dispatch}>
                {children}
            </GameDispatchContext.Provider>
        </GameContext.Provider>

    )

}