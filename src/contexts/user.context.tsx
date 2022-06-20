import { User } from 'firebase/auth'
import { createContext, useEffect, useReducer } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'
import { createReducerAction } from '../utils/helpers/reducer.helper'
import {
  IUserContextType,
  IUserReducerAction,
  TUserReducer,
  TUserReducerState,
} from './types'

export const UserContext = createContext<IUserContextType>({
  currentUser: null,
  setCurrentUser: () => {},
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const INITIAL_STATE: TUserReducerState = {
  currentUser: null,
}

const userReducer = (state: TUserReducerState, action: IUserReducerAction) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      throw new Error('Unhandled action type in userReducer')
  }
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ currentUser }, userDispatcher] = useReducer<TUserReducer>(
    userReducer,
    INITIAL_STATE
  )

  const setCurrentUser = (user: User | null) => {
    userDispatcher(
      createReducerAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
    )
  }

  const value = { currentUser, setCurrentUser } as IUserContextType

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
