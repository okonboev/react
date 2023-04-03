import React from 'react'
import {useContext} from 'react'
import {createContext} from 'react'

const EmployeeContext = createContext()
export const useEmployeeContext = () => useContext(EmployeeContext)

function Employee({children}) {
  return (
    <EmployeeContext.Provider value={"hello employee"}>{children}</EmployeeContext.Provider>
  )
}

export default Employee