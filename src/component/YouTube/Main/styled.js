import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    overflow-y: scroll;
`;
const Container1 = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap:wrap ;
    justify-content: space-between;
`;
const Wrapper =styled.div`
    width: 333px;
    display: flex;
    flex-direction: column;
    gap: 12px;

`;
const InfoWrapper =styled.div`
    gap: 12px;
    display: flex;
`;
const Image = styled.img``;
const UserImage = styled.img`
    width: 36px;
    height: 36px;
`;
const Title = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
`;
const Name = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.6);
`;
const Time = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.6);
`;

export {InfoWrapper,Wrapper,Container,Container1,Image,UserImage,Title,Name,Time}