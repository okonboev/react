import React from 'react'
import {createContext} from 'react'

export const StudentContext = createContext()


function Student({children}) {
  return (
    <StudentContext.Provider value={"hello Student"}>{children}</StudentContext.Provider>
  )
}

export default Student