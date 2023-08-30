import React from "react";
import styled, { keyframes } from "styled-components";

import MainImage from "assets/images/whitepaper/whirlpool.webp";

const ContainerAnimation = keyframes`
    0%{
        -webkit-transform: scale(1.2);
            -ms-transform: scale(1.2);
                transform: scale(1.2);
    }
    100%{
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
                transform: scale(1);
    }
`;
const Container = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: ${(props) => props.height}px;
  animation: ${ContainerAnimation} 1s ease 1;
  webkit-animation: ${ContainerAnimation} 1s ease 1;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-position: center bottom;
`;
const MainContainer = styled.div`
    width: 100%;
    height: calc(100vh - 190px);
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Content = styled.span`
    position: absolute;
    top: 45%;
    transform: translateY(-50%) translateX(20px);
    font-size: 46px;
    font-weight: 700;
    text-align: center;
    color: #FFF;
    line-height: 1.2;
`;
const ContentImage = styled.img`
    height: auto;
    max-width: 100%;
`;

export default function DragonBibbleSection({ size }) {
    return (
        <Container id="testing" height={size.height}>
            <MainContainer>
                <Content>Coming soon ...</Content>
                <ContentImage src={MainImage} alt="" />
            </MainContainer>
        </Container>
    );
}
