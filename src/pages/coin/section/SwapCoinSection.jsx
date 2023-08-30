import React from "react";
import styled, { keyframes } from "styled-components";
import BalanceCard from "components/cards/BalanceCard";
import DistributionCard from "components/cards/DistributionCard";
import FeeCard from "components/cards/FeeCard";
import SwapInput from "components/Input/SwapInput";
import TokenSwapButton from "components/buttons/TokenSwapButton";

import CoinBackground from "assets/images/backgrounds/coin-background.PNG";
import BSC from "assets/images/tokens/bsc.png";
import ETH from "assets/images/tokens/eth.png";
import PLG from "assets/images/tokens/plg.png";

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
  padding: 150px 120px 50px 120px;
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
const BalanceBox = styled.div`
  width: 100%;
  padding: 25px 15px;
  border-radius: 1.5vh;
  box-shadow: 0 0 8px 2px rgba(0,0,0,.1);
  background: #fff;
  margin-bottom: 16px;
  box-sizing: border-box;
`;
const BalanceTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0 10px 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-fmily: "Roboto";
  color: rgba(0, 0, 0, 0.87);
`;
const BalanceContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin: 0;
`;
const DistributionBox = styled.div`
  width: 100%;
  padding: 25px 15px;
  border-radius: 1.5vh;
  box-shadow: 0 0 8px 2px rgba(0,0,0,.1);
  background: #fff;
  margin-bottom: 16px;
  box-sizing: border-box;
`;
const DistributionTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0 10px 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-fmily: "Roboto";
  color: rgba(0, 0, 0, 0.87);
  display: flex;
`;
const DistributionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  margin: 0;
`;
const DistributionLeftContent = styled.div`
  padding: 0 5% 0 0;
  margin: 0 5% 0 0;
  border-right: 2px solid rgba(0, 0, 0, 0.1);
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DistributionTotalCard = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const DistributionTotalCardTitle = styled.span`
  font-weight: 700;
  color: #3485ff;
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  line-height: 1.2;
`;
const DistributionTotalCardContent = styled.span`
  color: #5f718b;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-size: 1.25rem;
`;
const WalletReservesContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  justify-content: space-between;
  gap: 20px;
`;
const WalletReservesBox = styled.div`
  padding: 25px;
  border-radius: 1.5vh;
  box-shadow: 0 0 8px 2px rgba(0,0,0,.1);
  background: #fff;
  width: 50%;
`;
const WalletReservesHeader = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0 10px 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-fmily: "Roboto";
  color: rgba(0, 0, 0, 0.87);
  display: flex;
`;
const WalletReservesParagraph = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;
const WalletReservesTitle = styled.span`
  margin-right: 10px;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
`;
const WalletReservesContent = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #3485ff;
`;
const SwapFeesContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 50px;
  justify-content: space-between;
  gap: 20px;
`;
const SwapBox = styled.div`
  padding: 25px;
  border-radius: 1.5vh;
  box-shadow: 0 0 8px 2px rgba(0,0,0,.1);
  background: #fff;
  width: 60%;
`;
const SwapTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0 10px 10px;
  font-fmily: "Roboto";
  color: rgba(0, 0, 0, 0.87);
  display: flex;
`;
const SwapSubTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #3485ff;
  margin: 0 10px 10px;
`;
const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justiy-content: space-between;
  gap: 20px;
  box-sizing: border-box;
  padding: 30px 10px;
`
const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 15px;
  padding: 0 10px;
  box-sizing: border-box;
`
const FeesBox = styled.div`
  padding: 25px;
  border-radius: 1.5vh;
  box-shadow: 0 0 8px 2px rgba(0,0,0,.1);
  background: #fff;
  width: 40%;
`;
const FeesTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0 10px 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-fmily: "Roboto";
  color: rgba(0, 0, 0, 0.87);
  display: flex;
`;
const FeesCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  padding: 10px;
`;
export default function SwapCoinSection() {
  return (
    <Container id="testing">
      <BalanceBox>
        <BalanceTitle>My balance</BalanceTitle>
        <BalanceContent>
          <BalanceCard title="BSC" content="0.00 BNB" />
          <BalanceCard title="BSC TCG2" content="0.00 TCG2" />
          <BalanceCard title="Ethereum" content="0.00 ETH" />
          <BalanceCard title="Ethereum TCG2" content="0.00 TCG2" />
          <BalanceCard title="Polygon" content="0.00 MATIC" />
          <BalanceCard title="Polygon TCG2" content="0.00 TCG2" />
        </BalanceContent>
      </BalanceBox>
      <DistributionBox>
        <DistributionTitle>Distribution</DistributionTitle>
        <DistributionContent>
          <DistributionLeftContent>
            <DistributionCard title="NaN" content="Ethereum" />
            <DistributionCard title="NaN" content="BSC" />
            <DistributionCard title="NaN" content="Polygon" />
          </DistributionLeftContent>
          <DistributionTotalCard>
            <DistributionTotalCardTitle>NaN</DistributionTotalCardTitle>
            <DistributionTotalCardContent>Total supply</DistributionTotalCardContent>
          </DistributionTotalCard>
        </DistributionContent>
      </DistributionBox>
      <WalletReservesContainer>
        <WalletReservesBox>
          <WalletReservesHeader>Current wallet</WalletReservesHeader>
          <WalletReservesParagraph>
            <WalletReservesTitle>Selected wallet:</WalletReservesTitle>
            <WalletReservesContent>Please connect your wallet</WalletReservesContent>
          </WalletReservesParagraph>
          <WalletReservesParagraph>
            <WalletReservesTitle>Chain id:</WalletReservesTitle>
            <WalletReservesContent>Please connect your wallet</WalletReservesContent>
          </WalletReservesParagraph>
        </WalletReservesBox>
        <WalletReservesBox>
          <WalletReservesHeader>Exchange reserves</WalletReservesHeader>
          <WalletReservesParagraph>
            <WalletReservesTitle>TCG2 [BSC]:</WalletReservesTitle>
            <WalletReservesContent>9078551.853759468</WalletReservesContent>
          </WalletReservesParagraph>
          <WalletReservesParagraph>
            <WalletReservesTitle>TCG2 [ETH]:</WalletReservesTitle>
            <WalletReservesContent>740047.946041551</WalletReservesContent>
          </WalletReservesParagraph>
          <WalletReservesParagraph>
            <WalletReservesTitle>TCG2 [Polygon]:</WalletReservesTitle>
            <WalletReservesContent>4999890</WalletReservesContent>
          </WalletReservesParagraph>
        </WalletReservesBox>
      </WalletReservesContainer>
      <SwapFeesContainer>
        <SwapBox>
          <SwapTitle>Swap</SwapTitle>
          <SwapSubTitle>It can take up to 10 mins to recieve swapped tokens.</SwapSubTitle>
          <InputGroup>
            <SwapInput label="From" />
              <svg data-v-6206d550="" width="17" height="23" fill="none" xmlns="https://www.w3.org/2000/svg">
                <path data-v-6206d550="" d="M7.53 22.487l-.002-.001L.4 15.322a1.371 1.371 0 011.944-1.934l4.786 4.81V1.37a1.37 1.37 0 112.742 0v16.827l4.786-4.81a1.37 1.37 0 111.944 1.934l-7.13 7.164v.001a1.372 1.372 0 01-1.941 0z" fill="#2B2D35"></path>
              </svg>
            <SwapInput label="To" />
          </InputGroup>
          <ButtonGroup>
            <TokenSwapButton content="Approve" />
            <TokenSwapButton content="Bridge" />
          </ButtonGroup>
        </SwapBox>
        <FeesBox>
          <FeesTitle>Fees</FeesTitle>
          <FeesCardContainer>
            <FeeCard firstTokenImage={BSC} firstTokenName="BSC" secondTokenImage={ETH} secondTokenName="Eth" content="0.2 BNB" />
            <FeeCard firstTokenImage={BSC} firstTokenName="BSC" secondTokenImage={PLG} secondTokenName="Plg" content="0.01 BNB" />
            <FeeCard firstTokenImage={ETH} firstTokenName="Eth" secondTokenImage={BSC} secondTokenName="BSC" content="0.0027 ETH" />
            <FeeCard firstTokenImage={ETH} firstTokenName="Eth" secondTokenImage={PLG} secondTokenName="Plg" content="0.0027 ETH" />
            <FeeCard firstTokenImage={PLG} firstTokenName="Plg" secondTokenImage={BSC} secondTokenName="BSC" content="0.5 MATIC" />
            <FeeCard firstTokenImage={PLG} firstTokenName="Plg" secondTokenImage={ETH} secondTokenName="Eth" content="50 MATIC" />
          </FeesCardContainer>
        </FeesBox>
      </SwapFeesContainer>
    </Container>
  );
}
