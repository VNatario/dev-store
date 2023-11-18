import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  //Definindo a fonte em uma variavel
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'DevStore',
  description: 'App de estudo com Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
