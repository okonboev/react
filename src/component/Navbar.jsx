import React, {useContext} from 'react'
import {StutendContext} from './context'
import {Container} from './navbarstyle'
import {useEmployeeContext} from '../context/Employee'
import {FruitsContext} from '../context/Fruits'
import {StudentContext} from '../context/Student'

function Navbar({data}) {
  const [state,setState] = useContext(StutendContext)
  const employee = useEmployeeContext()
  const fruit=useContext(FruitsContext)
  const student=useContext(StudentContext)
  return (
    <Container>
      <h1>Students {state.length}</h1>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>{student}</h1>
      <h1>{fruit}</h1>
      <h1>{employee}</h1>
    </Container>
  )
}

export default Navbar