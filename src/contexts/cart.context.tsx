import { createContext, useReducer } from 'react'
import { ICartItem, IProduct } from '../types'
import { createReducerAction } from '../utils/helpers/reducer.helper'
import {
  ICartContextType,
  ICartReducerAction,
  ICartReducerState,
  TCartReducer,
  TCartReducerCollectivePayload,
} from './types'

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

export const CartContext = createContext<ICartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  TOGGLE_CART: 'TOGGLE_CART',
}

const INITIAL_STATE: ICartReducerState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

const cartReducer = (state: ICartReducerState, action: ICartReducerAction) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...(payload as TCartReducerCollectivePayload),
      }
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: payload as boolean,
      }
    default:
      throw new Error('Unhandled action type in cartReducer')
  }
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatchCart] =
    useReducer<TCartReducer>(cartReducer, INITIAL_STATE)

  const updateCartItemReducer = (newCartItems: ICartItem[]) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )

    dispatchCart(
      createReducerAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    )
  }

  const setIsCartOpen = (toggleValue: boolean) => {
    dispatchCart(
      createReducerAction(CART_ACTION_TYPES.TOGGLE_CART, toggleValue)
    )
  }

  const addItemToCart = (productToAdd: IProduct) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemReducer(newCartItems)
  }

  const removeItemFromCart = (productToRemove: IProduct) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    updateCartItemReducer(newCartItems)
  }

  const clearItemFromCart = (cartItemToRemove: ICartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove)
    updateCartItemReducer(newCartItems)
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
  } as ICartContextType

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
