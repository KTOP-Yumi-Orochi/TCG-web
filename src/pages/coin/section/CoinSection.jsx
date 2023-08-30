import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import CoinCard from 'components/cards/CoinCard';
import TextDecorator from "components/textDecorator/TextDecorator";

import BuyImage from "assets/images/coin/Buy-coin.png";
import SwapImage from "assets/images/coin/Swap-coin.jfif";
import StakeImage from "assets/images/coin/Stake-coin-bg.jpeg";
import CoinBackground from "assets/images/backgrounds/coin-background.PNG";

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
  background-image: url(${CoinBackground});
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
`;
const BodyContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height - 194}px;
  
`;
const WelcomeBodyContainer = styled.div`
  margin-top: 100px;
  width: calc(100vw - 120px);
  max-width: 1800px;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    width: calc(100vw - 48px);
  }
`;
const PageContainer = styled.div`
  height: ${(props) => props.height - 194}px;
  display: flex;
  justify-content: center;
  @media (max-width: 1400px) {
    height: ${(props) => props.height - 94}px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
`;
const CoinCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const FooterContainer = styled.div`
  display: none;
  @media (max-width: 490px) {
    display: block;
    height: 52px;
  }
`;
const CoinCardAnimationEffect = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
const CoinCardAnimation = styled.div`
  opacity: 0;
  animation: ${CoinCardAnimationEffect} 1s ${props => props.delay}s ease 1;
  animation-fill-mode: forwards;
  position: relative;
`;
export default function CoinSection({ size }) {
  const TitleContent1 = "Use your coin and";
  const TitleContent2 = "make maximum profits";
  return (
    <Container id="testing" height={size.height}>
      <PageContainer height={size.height}>
        <WelcomeBodyContainer>
          <BodyContainer height={size.height}>
            <TitleContainer>
              <TextDecorator
                uppercase="none"
                delay={0.5}
                direction="up"
                content={TitleContent1}
                fontFamily="Kusanagi"
                fontSize={size.width <= 550 ? 24 : size.width <= 1280 ? 40 : 54}
              ></TextDecorator>
              <TextDecorator
                delay={0.5}
                direction="down"
                content={TitleContent2}
                fontFamily="Kusanagi"
                fontSize={size.width <= 550 ? 20 : size.width <= 1280 ? 45 : 55}
              ></TextDecorator>
            </TitleContainer>
            <CoinCardContainer>
              <CoinCardAnimation delay={0.6} style={{ marginRight: '10vw' }}>
                <Link to="/coin/buy" style={{ textDecoration: "none" }}>
                  <CoinCard image={BuyImage} title="Buy Coin" />
                </Link>
              </CoinCardAnimation>
              <CoinCardAnimation delay={0.8} style={{ marginRight: '10vw' }}>
                <Link to="/coin/swap" style={{ textDecoration: "none" }}>
                  <CoinCard image={SwapImage} title="Swap Coin" />
                </Link>
              </CoinCardAnimation>
              <CoinCardAnimation delay={1.0}>
                <Link to="/coin/stake" style={{ textDecoration: "none" }}>
                  <CoinCard image={StakeImage} title="Stake Coin" />
                </Link>
              </CoinCardAnimation>
            </CoinCardContainer>
            <FooterContainer />
          </BodyContainer>
        </WelcomeBodyContainer>
      </PageContainer>
    </Container>
  );
}
