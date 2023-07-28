import './globals.css'
import { Inter } from 'next/font/google'
import { Outfit } from 'next/font/google'
import SharedStateProvider from './Sharedstateprovider'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Tic Tac Toe',
  description: 'Tic Tac Toe Game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={outfit.className}>
        <SharedStateProvider children={children} />
      </body>
    </html>
  )
}
