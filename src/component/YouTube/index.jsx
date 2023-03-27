import React from 'react'
import Main from './Main'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import {Container, Wrapper} from './styled'

function YouTube() {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
          <Sidebar/>
          <Main/>
        </Wrapper>
    </Container>
  )
}

export default YouTube