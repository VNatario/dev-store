'use client'
import { useCart } from '@/context/cart-context'

export interface AddToCartButtonprops {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonprops) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adiconar ao carrinho
    </button>
  )
}
