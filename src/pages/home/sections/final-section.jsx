import React from "react";
import styled from "styled-components";
import { LandingContext } from "contexts/LandingContext";
import { txt } from "lang";
import TextDecorator from "components/textDecorator/TextDecorator";
import ArticleDecorator from "components/textDecorator/ArticleDecorator";
import JoinButton from "components/buttons/JoinButton";

import Background_2560 from "assets/images/backgrounds/2560/section10.png";
import Background_1920 from "assets/images/backgrounds/1920/section10.png";
import Background from "assets/images/backgrounds/final.png";
import Background_1280 from "assets/images/backgrounds/1280/section10.png";
import Background_mobile from "assets/images/backgrounds/mobile/section10.png";
import Logo from "assets/images/logo.png";

const WrappedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => props.height}px;
  background-image: url(${Background_2560});
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  background-position: center;
  @media (max-width: 1920px) {
    background-image: url(${Background_1920});
  }
  @media (max-width: 1440px) {
    background-image: url(${Background});
  }
  @media (max-width: 1280px) {
    background-image: url(${Background_1280});
  }
  @media (max-width: 490px) {
    background-image: url(${Background_mobile});
  }
`;
const Container = styled.div`
  height: ${(props) => props.height - 194}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1800px;
  align-items: center;
  width: 100%;
  height: 80%;
  @media (max-width: 768px) {
    margin: auto;
    height: fit-content;
    height: 60%;
  }
`;
const TitleArea = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const TextArea = styled.div`
  max-width: 732px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 1600px) {
    max-width: 583px;
  }
  @media (max-width: 768px) {
    margin-top: 11px;
    margin-bottom: 24px;
    max-width: 316px;
  }
`;
const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const BottomContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1800px;
  width: 91.68vw;
  justify-content: center;
  @media (max-width: 768px) {
    position: unset;
    flex-direction: column;
    height: 40%;
    justify-content: flex-start;
  }
`;
const MetagateArea = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  @media (max-width: 768px) {
    position: unset;
    left: unset;
    margin-bottom: 20px;
  }
`;
const MetagateContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 300px;
  }
`;
const ActionArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const MetaCopyWritter = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  color: white;
  margin-top: 10px;
`;
const ButtonTwitter = styled.svg`
  cursor: pointer;
  margin-right: 24px;
  &:hover path {
    background: blue;
    fill: #1380ff;
  }
`;

const Section10 = ({ size }) => {
  const { lang } = React.useContext(LandingContext);
  const content = txt("section10", "body", lang);

  return (
    <WrappedContainer height={size.height}>
      <Container height={size.height}>
        <CenterContainer>
          <TitleArea>
            <TextDecorator
              direction={"up"}
              uppercase="none"
              fontSize={48}
              content={txt("section10", "top", lang)}
              width="fit-content"
            ></TextDecorator>
          </TitleArea>
          <TitleArea>
            <TextDecorator
              direction={"down"}
              uppercase="none"
              fontSize={48}
              content={txt("section10", "down", lang)}
              width="fit-content"
            ></TextDecorator>
          </TitleArea>
          <TextArea>
            <ArticleDecorator
              fontFamily="Roboto"
              content={content}
              width={size.width > 768 ? "583px" : "316px"}
              fontSize={20}
              lineHeight={20}
              position={"center"}
            />
          </TextArea>
          <ButtonArea>
            <ActionArea>
              <ButtonTwitter
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="1"
                  d="M23.4561 2.94347C23.0791 3.1107 22.6915 3.25183 22.2954 3.36641C22.7643 2.83609 23.1218 2.21209 23.3401 1.52925C23.389 1.37619 23.3383 1.20866 23.2125 1.10856C23.0869 1.00837 22.9123 0.996375 22.7739 1.07836C21.9328 1.57725 21.0253 1.93578 20.0737 2.14543C19.1152 1.20881 17.8133 0.675781 16.4674 0.675781C13.6265 0.675781 11.3152 2.98698 11.3152 5.82781C11.3152 6.05155 11.3294 6.27405 11.3574 6.49346C7.83214 6.18394 4.55475 4.45121 2.30417 1.69052C2.22396 1.59212 2.1004 1.53908 1.9739 1.54923C1.84732 1.55914 1.73359 1.63052 1.66964 1.74022C1.21318 2.52347 0.971862 3.41929 0.971862 4.33075C0.971862 5.57217 1.41509 6.75003 2.19803 7.67039C1.95996 7.58794 1.72895 7.48489 1.50846 7.36249C1.39008 7.29661 1.24562 7.29761 1.12802 7.36505C1.01034 7.43248 0.936558 7.55651 0.933462 7.69207C0.93292 7.71491 0.93292 7.73774 0.93292 7.76089C0.93292 9.61392 1.93024 11.2822 3.45501 12.1915C3.32402 12.1784 3.1931 12.1595 3.06304 12.1346C2.92895 12.109 2.79106 12.156 2.70064 12.2583C2.61005 12.3605 2.58009 12.5029 2.62182 12.633C3.18621 14.395 4.63929 15.6911 6.39594 16.0863C4.93898 16.9988 3.27284 17.4768 1.52378 17.4768C1.15883 17.4768 0.791784 17.4553 0.432558 17.4128C0.254107 17.3916 0.0834745 17.497 0.0227003 17.6667C-0.0380739 17.8365 0.026339 18.0258 0.178158 18.1231C2.4251 19.5638 5.02322 20.3253 7.69147 20.3253C12.9369 20.3253 16.2184 17.8517 18.0474 15.7767C20.3282 13.1892 21.6362 9.76443 21.6362 6.3805C21.6362 6.23914 21.6341 6.09638 21.6297 5.95408C22.5296 5.27612 23.3043 4.45563 23.9347 3.51258C24.0305 3.36936 24.0201 3.18007 23.9092 3.04822C23.7984 2.9163 23.6138 2.87364 23.4561 2.94347Z"
                  fill="white"
                />
              </ButtonTwitter>
              <JoinButton
                background={"white"}
                content={"join discord"}
                icon="discord"
              />
            </ActionArea>
          </ButtonArea>
          <div>
            <svg
              width="110"
              height="16"
              viewBox="0 0 110 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                d="M86.4613 0H109.998V1.61908H87.1318L73.7342 15.0167H63.1821V13.4017H73.0637L86.4613 0ZM69.7739 9.38652H63.0771V7.76744H69.1034L75.2033 1.66762H64.6144V3.57287H62.9995V0.0527344H79.1035L69.7739 9.38652ZM90.267 5.31836L80.6512 14.9383H95.8395L104.221 6.55306L103.08 5.41248L95.169 13.3193H84.5515L90.9376 6.93335H94.4413L92.2213 9.1533L93.3661 10.294L98.3416 5.31836H90.267Z"
                fill="white"
              />
              <path
                opacity="0.5"
                fillRule="evenodd"
                d="M23.5368 0H0V1.61908H22.8662L36.2638 15.0167H46.8159V13.4017H36.9344L23.5368 0ZM40.2241 9.38652H46.9209V7.76744H40.8947L34.7948 1.66762H45.3837V3.57287H46.9986V0.0527344H30.8945L40.2241 9.38652ZM19.731 5.31836L29.3469 14.9383H14.1585L5.77734 6.55306L6.91802 5.41248L14.8291 13.3193H25.4465L19.0605 6.93335H15.5568L17.7768 9.1533L16.632 10.294L11.6565 5.31836H19.731Z"
                fill="white"
              />
            </svg>
          </div>
        </CenterContainer>
        <BottomContent>
          <MetagateArea>
            <MetagateContent>
              <img src={Logo} alt="logo" />
            </MetagateContent>
            <MetaCopyWritter>All Rights Reserved Legends of Meta 2023</MetaCopyWritter>
          </MetagateArea>
        </BottomContent>
      </Container>
    </WrappedContainer>
  );
};

export default Section10;
