import styled from "styled-components";
import { css } from "styled-components";

const getSize = (props) =>{
    switch (props.prop) {
        case "small" : return "100px";
        case "medium" : return "200px";
        case "large" : return "300px";
        default : return "200px" 
    }
}

const Container  = styled.div`
   background-color:gray;
   padding:20px;
   display: flex;
   gap: 15px;
`;

const common = css`
    background-color: coral;
    font-size: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
    text-align: center;
`

const Title = styled("h1")`
   color: ${(props)=>props.color};
   ${common};
   font-size: 25px;

`
const Item = styled.div`
    width: ${getSize};
    height: ${getSize};
    ${common}
 
`

export {Container,Title,Item}