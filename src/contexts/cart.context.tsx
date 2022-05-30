import { createContext, useEffect, useState } from 'react'
import { ICartItem, IProduct } from '../types'

const addCartItem = (cartItems: ICartItem[], productToAdd: IProduct) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [
    ...cartItems,
    {
      ...productToAdd,
      quantity: 1,
    },
  ]
}

type CartContextType = {
  isCartOpen: boolean
  setIsCartOpen: (isCartOpen: boolean) => void
  cartItems: ICartItem[]
  addItemToCart: (productToAdd: IProduct) => void
  cartCount: number
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<ICartItem[]>([])
  const [cartCount, setCartCount] = useState<number>(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  const addItemToCart = (productToAdd: IProduct) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  } as CartContextType

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
