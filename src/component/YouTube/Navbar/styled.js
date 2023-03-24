import styled from "styled-components";
import {ReactComponent as menu} from '../../../assets/icon/menu.svg'
import {ReactComponent as search} from '../../../assets/icon/search.svg'
import {ReactComponent as camera} from '../../../assets/icon/camera.svg'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    /* border: 1px solid red; */
`
const Category = styled.div`
    display: flex;
    align-items: center;
`
const Icon = styled.div``;
Icon.Menu = styled(menu)``;
Icon.Logo = styled.img``;

const Input = styled.input`
    background: #000000;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 2px 0px 0px 2px;
    width: 574px;
    height: 32px;
    color: #fff;
`;
const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
`
Search.Item = styled(search)``;

const NavIcons1 = styled(camera)`
margin-right: 30px;
`;

export {Container,Category,Icon,Input,Search,NavIcons1}