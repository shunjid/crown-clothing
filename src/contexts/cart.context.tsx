import { createContext, useState } from 'react'

type CartContextType = {
  isCartOpen: boolean
  setIsCartOpen: (isCartOpen: boolean) => void
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const value = { isCartOpen, setIsCartOpen } as CartContextType
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
