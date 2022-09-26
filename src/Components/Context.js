import React, { createContext, useState } from 'react'

export const Data=createContext()

const Context = ({children}) => {
  const [cart,setCart]=useState([])

  return (
    <div>
        <Data.Provider value={{cart,setCart}}>{children}</Data.Provider>
    </div>
  )
}

export default Context