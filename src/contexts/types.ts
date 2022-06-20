import { Reducer } from 'react'
import { ICartItem, IProduct } from '../types'

export interface ICartContextType {
  isCartOpen: boolean
  setIsCartOpen: (isCartOpen: boolean) => void
  cartItems: ICartItem[]
  addItemToCart: (productToAdd: IProduct) => void
  removeItemFromCart: (productToRemove: IProduct) => void
  clearItemFromCart: (cartItemToRemove: ICartItem) => void
  cartCount: number
  cartTotal: number
}

export interface ICartReducerState {
  isCartOpen: boolean
  cartItems: ICartItem[]
  cartCount: number
  cartTotal: number
}

export type TCartReducerCollectivePayload = Omit<
  Partial<ICartReducerState>,
  'isCartOpen'
>

export interface ICartReducerAction {
  type: string
  payload: TCartReducerCollectivePayload | boolean
}

export type TCartReducer = Reducer<ICartReducerState, ICartReducerAction>
