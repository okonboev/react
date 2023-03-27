import React from 'react'
import {main} from '../../../utils/main'
import Navin from './Navin'
import {Container,Container1, Image, InfoWrapper, Name, Time, Title, UserImage, Wrapper} from './styled'
function Main() {
  return (
    <Container>
      <Navin />
      <Container1>
        {
         main.map((val)=>(
           <Wrapper>
             <Image src={val.img}/>
             <InfoWrapper>
               <UserImage src={val.user}/>
               <div>
                 <Title>{val.info}</Title>
                 <Name>{val.names}</Name>
                <div style={{display:"flex"}}>
                   <Time>{val.view}</Time>
                   <Time>{val.time}</Time>
                </div>
               </div>
             </InfoWrapper>
              
           </Wrapper>
         ))
       }
      </Container1>
    </Container>
  )
}

export default Main