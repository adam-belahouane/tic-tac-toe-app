'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Outfit } from 'next/font/google'
import { useReducer, createContext } from 'react'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })

export const GameContext = createContext<State | undefined>(undefined)

export const GameDispatchContext = createContext<any | undefined>(undefined)

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface State {
  player: String,
  gameMode: String
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [state, dispatch] = useReducer(
    (state: State, action: any) => {
      return {
        ...state,
        ...action
      }
    },
    {
      player: "x",
      gameMode: "player"
    }
  )
  return (
    <GameContext.Provider value={state} >
      <GameDispatchContext.Provider value={dispatch}>
        <html lang="en">
          <body className={outfit.className}>{children}</body>
        </html>
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  )
}
