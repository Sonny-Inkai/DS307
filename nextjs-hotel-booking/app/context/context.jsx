'use client'

import { useState, createContext, useContext, useEffect } from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedSession = localStorage.getItem('session')
    if (savedSession) {
      setSession(JSON.parse(savedSession))
    }
    setLoading(false)
  }, [])

  return (
    <Context.Provider value={{ session, setSession, loading }}>
      {children}
    </Context.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(Context)
}
