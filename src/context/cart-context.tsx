'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (ProductID: string) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: string) {
    setCartItems((prevState) => {
      const productInCart = prevState.some(
        (item) => item.productId === productId
      )

      if (productInCart) {
        return prevState.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity++ }
          } else {
            return item
          }
        })
      } else {
        return [...prevState, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
