import { User } from 'firebase/auth'
import { createContext, Reducer, useEffect, useReducer } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'

type UserContextType = {
  currentUser: User | null
  setCurrentUser: (user?: User | null) => void
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => {},
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

type UserReducerState = Pick<UserContextType, 'currentUser'>
type UserReducerAction = {
  type: string
  payload: User | null
}
type UserReducer = Reducer<UserReducerState, UserReducerAction>

const INITIAL_STATE: UserReducerState = {
  currentUser: null,
}

const userReducer = (state: UserReducerState, action: UserReducerAction) => {
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
  const [{ currentUser }, userDispatcher] = useReducer<UserReducer>(
    userReducer,
    INITIAL_STATE
  )

  const setCurrentUser = (user: User | null) => {
    userDispatcher({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
  }

  const value = { currentUser, setCurrentUser } as UserContextType

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
