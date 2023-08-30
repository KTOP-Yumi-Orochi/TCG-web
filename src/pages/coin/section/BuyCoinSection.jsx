import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import TextDecorator from "components/textDecorator/TextDecorator";
import BuyCoinBox1 from 'components/Box/Coin/BuyCoinBox1';
import BuyCoinBox2 from 'components/Box/Coin/BuyCoinBox2';
import BuyCoinBox3 from 'components/Box/Coin/BuyCoinBox3';

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
  margin-top: 50px;
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
  margin-bottom: 5vh;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const FooterContainer = styled.div`
  display: none;
  @media (max-width: 490px) {
    display: block;
    height: 52px;
  }
`;
const MainBoxAnimationEffect = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
const CoinBoxAnimation = styled.div`
  opacity: 0;
  animation: ${MainBoxAnimationEffect} 1s ${props => props.delay}s ease 1;
  animation-fill-mode: forwards;
  position: relative;
`;
export default function BuyCoinSection({ size }) {
    const TitleContent = "Buy TCG2";
    const [RATIO, SetRATIO] = useState(0);
    const [tcgCoinPriceUsd, setTcgCoinPriceUsd] = useState(0);
    async function getData() {
        try {
            const response = await fetch(
                `https://tcg.world/api/v1/utils/currency_in_usd/?address=0xF73d8276C15Ce56b2f4AeE5920e62F767A7f3aEA`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage?.getItem('token')}`,
                    },
                }
            );
            const data = await response.json();
            let ratio = (1 / (data.price_in_eth * 1.05)).toFixed(0);
            let _tcgCoinPriceUsd = (data.price_in_usd * 1.05).toFixed(8);

            setTcgCoinPriceUsd(_tcgCoinPriceUsd);
            SetRATIO(ratio);
        } catch {
            console.error("Wrong card item response format");
        }
    }
    useEffect(() => {
        getData();
    }, []);
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
                                content={TitleContent}
                                fontFamily="Kusanagi"
                                fontSize={size.width <= 550 ? 24 : size.width <= 1280 ? 40 : 54}
                            ></TextDecorator>
                        </TitleContainer>
                        <MainContainer>
                            <CoinBoxAnimation delay={0.6} style={{ marginBottom: "2vh" }}>
                                <BuyCoinBox1 content1="Live!" content2="TCG Coin 2.0" content3="TCG2.0" />
                            </CoinBoxAnimation>
                            <CoinBoxAnimation delay={0.8} style={{ marginBottom: "4vh" }}>
                                <BuyCoinBox2 content1={RATIO} content2={tcgCoinPriceUsd} />
                            </CoinBoxAnimation>
                            <CoinBoxAnimation delay={1.0}>
                                <BuyCoinBox3 />
                            </CoinBoxAnimation>
                        </MainContainer>
                        <FooterContainer />
                    </BodyContainer>
                </WelcomeBodyContainer>
            </PageContainer>
        </Container>
    );
}
