import { createContext, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout, setUser } from '../features/auth/authSlice'

export const AuthContext = createContext({
  user: null,
  login: () => {},
  signOut: () => {},
})

export function AuthProvider({ children }) {
  const [user, setLocalUser] = useState(null)
  const dispatch = useDispatch()

  const value = useMemo(
    () => ({
      user,
      login(nextUser) {
        setLocalUser(nextUser)
        dispatch(setUser(nextUser))
      },
      signOut() {
        setLocalUser(null)
        dispatch(logout())
      },
    }),
    [dispatch, user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
