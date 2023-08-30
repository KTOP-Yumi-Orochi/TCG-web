import React from "react";
import styled from "styled-components";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

import Background_2560 from "assets/images/backgrounds/2560/section3.png";
import Background_1920 from "assets/images/backgrounds/1920/section3.png";
import Background from "assets/images/backgrounds/metaverse.png";
import Background_1280 from "assets/images/backgrounds/1280/section3.png";
import Background_mobile from "assets/images/backgrounds/mobile/section3.png";
import Mountain2 from "assets/images/part/download2.png";
import Mountain1 from "assets/images/part/download1.png";
import Mountain3 from "assets/images/part/download3.png";
const Container = styled.div`
  width: 100vw;
  height: ${(props) => props.height}px;
  background-image: url(${Background_2560});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center bottom;
  @media (max-width: 1920px) {
    background-image: url(${Background_1920});
  }
  @media (max-width: 1440px) {
    background-image: url(${Background});
  }
  @media (max-width: 1400px) {
    align-items: end;
  }
  @media (max-width: 1280px) {
    background-image: url(${Background_1280});
  }
  @media (max-width: 490px) {
    background-image: url(${Background_mobile});
  }
`;
const PageContainer = styled.div`
  height: ${(props) => props.height}px;
  background-color: rgb(0, 0, 0, 0.8);
`;
const BodyContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
  @media (max-width: 768px) {
    height: ${(props) => props.height}px;
    justify-content: flex-end;
    width: 100vw);
  }
`;

const StyledMouseParallaxContainer = styled(MouseParallaxContainer)`
  height: 100%;
  width: 100%;
`;

const StyledMouseParallaxChild = styled(MouseParallaxChild)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`;

const ColorBackground = styled.div`
  z-index: 0;
  height: ${(props) => props.defaultValue || "120%"};
  content: "";
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;

  // background: linear-gradient(transparent 0%, rgb(3, 6, 8) 90%);
`;

const ColorBackground2 = styled.div`
  content: "";
  background-image: linear-gradient(transparent 50%, rgb(7, 18, 26) 65%);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  width: 100%;
  height: 105%;
`;

const MountainContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 104%;
  margin-left: -2%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CharacterContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterView = styled.div`
  width: 40vw;
  img {
    width: 100%;
    height: 100%;
  }
`;

const PlayContainer = styled.div`
  position: absolute;
  left: calc(50% + 10vw);
  top: 50%;
  transform: translate(0, -30%);
  z-index: 1;
  width: 35vw
  margin-top: 0px;
  text-align: center;

  @media(max-width:768px){
    display: none;
  }

  h1{
    font-style: italic;
    
    span{
      display: block;
      font-size: 1.5rem;
      line-height: 1;
      font-weight: 600;
      letter-spacing: 0.1em;
      color:white;

    }
    strong{
      display: block;
      font-size: 120px;
      line-height: 0.85;
      font-family: "Beaufort for LOL", serif;
      font-weight: 800;
      letter-spacing: 0.03em;
      color:white;
    }
  }

  p{
    color:white;
    padding-left: 10%;
    padding-right: 10%;
  }

`;

const CharacterBorder = styled.div`
  z-index: -1;
  position: absolute;
  width: 30vw;
  height: 30vw;
  rotate: 45deg;

  background: #ffffff00;
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid #656769;
  color: white;
  padding: 20px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: 0.5s;
    pointer-events: none;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  }

  span:nth-child(1) {
    transform: rotate(0deg);
  }

  span:nth-child(2) {
    transform: rotate(90deg);
  }

  span:nth-child(3) {
    transform: rotate(180deg);
  }

  span:nth-child(4) {
    transform: rotate(270deg);
  }

  span:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background: white;
    animation: animate 3s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: scaleX(0);
      transform-origin: left;
    }
    50% {
      transform: scaleX(1);
      transform-origin: left;
    }
    50.1% {
      transform: scaleX(1);
      transform-origin: right;
    }

    100% {
      transform: scaleX(0);
      transform-origin: right;
    }
  }
`;

const StyleSection = ({ size }) => {
  return (
    <Container height={size.height}>
      <PageContainer height={size.height}>
        <BodyContainer height={size.height}>
          <StyledMouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
            <BackgroundContainer>
              <ColorBackground />
              <MouseParallaxChild
                factorX={0.03}
                factorY={0.03}
                inverted={true}
                style={{ width: "100%", height: "100%", position: "absolute" }}
              >
                <MountainContainer>
                  <img src={Mountain2} alt="download2" />
                </MountainContainer>
              </MouseParallaxChild>

              <MouseParallaxChild
                factorX={-0.03}
                factorY={-0.03}
                inverted={true}
                style={{ width: "100%", height: "100%", position: "absolute" }}
              >
                <MountainContainer>
                  <img src={Mountain1} alt="download1" />
                  <ColorBackground2 />
                </MountainContainer>
              </MouseParallaxChild>
              <ColorBackground defaultValue={"25%"} />
            </BackgroundContainer>

            <StyledMouseParallaxChild
              factorX={-0.01}
              factorY={-0.01}
              inverted={true}
            >
              <CharacterContainer>
                <CharacterBorder>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </CharacterBorder>

                <CharacterView>
                  <img src={Mountain3} alt="download3" />
                </CharacterView>
              </CharacterContainer>
            </StyledMouseParallaxChild>

            <StyledMouseParallaxChild
              factorX={0.05}
              factorY={0.0}
              inverted={true}
            >
              <PlayContainer>
                <h1>
                  <span>SLAY WITH</span>
                  <strong>STYLE</strong>
                </h1>
                <p>
                  Make it personal by changing up the look of your favorite
                  champions with skins.
                </p>
              </PlayContainer>
            </StyledMouseParallaxChild>
          </StyledMouseParallaxContainer>
        </BodyContainer>
      </PageContainer>
    </Container>
  );
};

export default StyleSection;
