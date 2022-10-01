import { createContext, useState } from 'react'

export const navbarCont = createContext()

export default function NavbarProvider ({ children }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <navbarCont.Provider value={{ isOpen, setOpen }}>
      {children}
    </navbarCont.Provider>
  )
}