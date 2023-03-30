import React, {useContext} from 'react'
import {StutendContext} from './context'
import {Container} from './navbarstyle'

function Navbar({data}) {
  const [state,setState] = useContext(StutendContext)
  return (
    <Container>
      <h1>Students {state.length}</h1>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      <h1>FAQ</h1>
      <h1>FAQ</h1>
    </Container>
  )
}

export default Navbar