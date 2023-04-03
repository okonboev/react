import React from 'react'
import {createContext} from 'react'

export const FruitsContext = createContext()


function Fruits({children}) {
  return (
    <FruitsContext.Provider value={"hello Fruits"}>{children}</FruitsContext.Provider>
  )
}

export default Fruits