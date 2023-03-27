import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 12px;
    padding: 12px;
    justify-content: center;
    width: 100%;
    height: 60px;
`;

const Item = styled.div`
    height: 30px;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 30px;
    padding: 5px;
    :hover{
        background-color:  #FFFFFF;
        color: #000000;
        cursor: pointer;
    }
`;

export {Container,Item}