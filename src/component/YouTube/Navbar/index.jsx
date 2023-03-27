import React from 'react'
import {Category, Container, Icon, Input, NavIcons1, Search} from './styled'
import logo from '../../../assets/img/logo.png'
import user from '../../../assets/img/pp.png'
function Navbar() {
  return (
    <Container>
      <Category>
        <Icon.Menu/>
        <Icon.Logo src={logo} alt="logo"/>
      </Category>
      <Category>
        <Input  placeholder='search'/>
        <Search>
          <Search.Item />
        </Search>
      </Category>
      <Category>
        <NavIcons1/>
        <NavIcons1/>
        <NavIcons1/>
        <Icon.Logo src={user}/>
      </Category>
    </Container>
  )
}

export default Navbar