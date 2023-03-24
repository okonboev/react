import React from 'react'
import Main from './Main'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import {Container} from './styled'

function YouTube() {
  return (
    <Container>
        <Navbar/>
        <Sidebar/>
        <Main/>
    </Container>
  )
}

export default YouTube