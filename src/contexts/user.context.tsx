import { User } from 'firebase/auth'
import { createContext, useState } from 'react'

type UserContextType = {
  currentUser: User | null
  setCurrentUser: (user?: User | null) => void
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => {},
})

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser } as UserContextType
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
