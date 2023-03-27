import React from 'react'
import {ReactComponent as bookshelf} from '../../../assets/icon/bookshelf.svg';
import {sidebar} from '../../../utils/sidebar';
import {Container, H3, HR, Title, Wrapper} from './styled';

function Sidebar() {
  return (
    <Container>
      {
        sidebar.map((val)=>(
         <div>
           <Title>{val.title}</Title>
           {
            val.data.map(({id,icon:Icons,names})=>(
              <Wrapper>
                <Icons />
                <H3>{names}</H3>
              </Wrapper>
            ))
           }
           <HR />
         </div>
        ))
      }
    </Container>
  )
}

export default Sidebar