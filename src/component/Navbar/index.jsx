import React from 'react'
import {Container} from './styled'
import {Link} from './styled'

function Navbar() {
  return (
    <Container>
        <Link exact activeStyle={{color:"coral"}} to={'/'}>Logo</Link>
        <Link activeStyle={{color:"coral"}} to={'/home'}>Home</Link>
        <Link activeStyle={{color:"coral"}} to={'/contact'}>Contact</Link>
        <Link activeStyle={{color:"coral"}} to={'/category'}>Category</Link>
        <Link activeStyle={{color:"coral"}} to={'/about'}>About</Link>
        <Link activeStyle={{color:"coral"}} to={'/news'}>News</Link>
        <Link activeStyle={{color:"coral"}} to={'/sport'}>Sport</Link>
    </Container>
  )
}

export default Navbar