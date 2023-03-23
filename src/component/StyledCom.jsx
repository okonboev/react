import React from 'react'
import './style.css'
import { Container, Item, Title } from './styled'

function StyledCom() {
  return (
    <Container>
        <Title color ="red">StyledCom</Title>
        <Title color='yellow'>StyledCom</Title>
        <Item prop="small">Small</Item>
        <Item prop="medium">Medium</Item>
        <Item prop="large">large</Item>
        <Item prop="xlarge">large</Item>
    </Container>
  )
}

export default StyledCom