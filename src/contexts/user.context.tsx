import { User } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
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

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
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
