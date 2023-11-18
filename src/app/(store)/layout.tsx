import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function Storelayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
