import styled from "styled-components";
import {NavLink} from 'react-router-dom'


export const Container = styled.div`
    display:flex;
    justify-content:space-evenly;
    background-color:black;
    color: white;
    height:50px;
    align-items:center
`;

export const Link = styled(NavLink)`
    text-decoration:none;

`;