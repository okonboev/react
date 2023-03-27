import React from 'react'
import {mainnav} from '../../../../utils/mainnav'
import {Container, Item} from './styled'
function Navin() {
  return (
    <Container>
        {
            mainnav.map((val)=>(
                <Item>{val}</Item>
            ))
        }
    </Container>
  )
}

export default Navin