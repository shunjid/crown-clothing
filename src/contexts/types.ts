import { User } from 'firebase/auth'
import { Reducer } from 'react'
import { ICartItem, IProduct, TCategoryToProductsMap } from '../types'

// Cart Context Definitions
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

// User Context Definitions
export interface IUserContextType {
  currentUser: User | null
  setCurrentUser: (user?: User | null) => void
}

export type TUserReducerState = Pick<IUserContextType, 'currentUser'>

export interface IUserReducerAction {
  type: string
  payload: User | null
}

export type TUserReducer = Reducer<TUserReducerState, IUserReducerAction>

// Categories Context Definitions
export interface ICategoriesContextType {
  categoriesMap: TCategoryToProductsMap
}
