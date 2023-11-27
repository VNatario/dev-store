import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  //Definindo a fonte em uma variavel
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    // %s -> Valor dinâmico que vai ser alterado de acordo com o titulo de cada pagina
    template: '%s | devStore',
    default: 'devStore',
  },
  description: 'App de estudo com Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  )
}
