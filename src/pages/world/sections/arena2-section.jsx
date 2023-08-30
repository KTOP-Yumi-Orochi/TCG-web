import React from "react";
import styled, { keyframes } from "styled-components";

import Background from "assets/images/world/arena2.jpg";
import HeaderBefore from "assets/images/world/header-effect.png";
import WorldLogo from "assets/images/world/arena2-logo.png";
import WorldModalButton from "components/buttons/WorldModalButton";

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
  background-image: url(${Background});
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${ContainerAnimation} 1s ease 1;
  webkit-animation: ${ContainerAnimation} 1s ease 1;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-position: center bottom;
  @media (max-width: 1920px) {
    background-image: url(${Background});
  }
  @media (max-width: 1440px) {
    background-image: url(${Background});
  }
  @media (max-width: 1400px) {
    justify-content: flex-end;
  }
  @media (max-width: 1280px) {
    background-image: url(${Background});
  }
  @media (max-width: 490px) {
    background-image: url(${Background});
  }
`;
const PageContainer = styled.div`
  height: ${(props) => props.height - 194}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1400px) {
    height: ${(props) => props.height - 94}px;
  }
`;
const WorldImage = styled.img`
  width: 12vh;
`;
const WorldName = styled.span`
  position: relative;
  font-weight: 400;
  font-size: 4.6vh;
  line-height: 9vh;
  color: #FFF;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 35.6vh;
    height: 1.3vh;
    left: 0;
    transform: translate(calc(-100% - 3.5vh), -50%);
    background: url(${HeaderBefore}) center no-repeat;
    background-size: cover;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 35.6vh;
    height: 1.3vh;
    right: 0;
    background: url(${HeaderBefore}) center no-repeat;
    background-size: cover;
    transform: translate(calc(100% + 3.5vh), -50%) rotateY(180deg);
  }
`;
const WorldDescription = styled.div`
  width: 700px;
  margin-top: 20px;
  text-align: center;
`;
const Text = styled.span`
  text-align: center;
  font-size: 18px;
  line-height: 1.8;
  color: #FFF;
`;

export default function Arena2({ size }) {
  return (
    <Container id="testing" height={size.height}>
      <PageContainer height={size.height}>
        <WorldImage src={WorldLogo} alt="" />
        <WorldName>Liyue</WorldName>
        <WorldDescription>
          <Text>
            A bountiful harbor that lies in the east of Teyvat.
            <br />
            Mountains stand tall and proud alongside the stone forest, that together with the open plains and lively rivers make up Liyue's bountiful landscape, which shows its unique beauty through each of the four seasons. Just how many gifts from the Geo God lie in wait amongst the rocks of Liyue's mountains?
          </Text>
        </WorldDescription>
        <WorldModalButton worldName="Liyue" />
      </PageContainer>
    </Container>
  );
}
