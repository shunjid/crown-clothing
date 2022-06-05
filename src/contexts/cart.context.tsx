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

const removeCartItem = (cartItems: ICartItem[], productToRemove: IProduct) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  )

  if (existingCartItem!.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  )
}

const clearCartItem = (cartItems: ICartItem[], cartItemToClear: ICartItem) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)

type CartContextType = {
  isCartOpen: boolean
  setIsCartOpen: (isCartOpen: boolean) => void
  cartItems: ICartItem[]
  addItemToCart: (productToAdd: IProduct) => void
  removeItemFromCart: (productToRemove: IProduct) => void
  clearItemFromCart: (cartItemToRemove: ICartItem) => void
  cartCount: number
  cartTotal: number
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<ICartItem[]>([])
  const [cartCount, setCartCount] = useState<number>(0)
  const [cartTotal, setCartTotal] = useState<number>(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd: IProduct) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = (productToRemove: IProduct) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const clearItemFromCart = (cartItemToRemove: ICartItem) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  } as CartContextType

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
