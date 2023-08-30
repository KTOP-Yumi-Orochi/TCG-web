import React from "react";
import styled, { keyframes } from "styled-components";
import StakeNavbar from 'components/nav/StakeNav';
import StakeSwitch from "components/switch/StakeSwitch";
import StakeSelectButton from "components/buttons/StakeSelectButton";
import StakeAutocomplete from "components/autocomplete/StakeAutocomplete";
import StakeTokenCard from "components/cards/StakeTokenCard";

import CoinBackground from "assets/images/backgrounds/coin-background.PNG";
import StakeHeaderImage from "assets/images/stake/StakeHeaderImage.png";
import StakeBscIcon from "assets/images/stake/stake_bnb_coin_icon.png";
import stakeEthIcon from "assets/images/stake/stake_eth_coin_icon.png";

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
  padding: 150px 75px 50px 75px;
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
const Section = styled.div`
  width: 100%;
  background-color: #fafafa;
  border-radius: 20px;
  padding: 50px;
  box-sizing: border-box;
`;
const HeaderSection = styled.div`
  margin-bottom: 50px;
`;
const Header = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: center;
`;
const HeaderImage = styled.img`
  width: 40px;
  height: auto;
  margin-right: 15px;
`;
const HeaderTiltle = styled.span`
  font-size: 40px;
  font-weight: 400;
  color: #000;
  line-height: 1.2;
`;
const SelectSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ToggleBoxContainer = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #d9e3e9;
  margin-right: 18px;
`;
const ToggleBoxTitle = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  white-space: nowrap;
  color: #1e2329;
  margin-right: 16px;
`;
const ContentSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function StakeCoinSection() {
  return (
    <Container id="testing">
      <Section>
        <HeaderSection>
          <Header>
            <HeaderImage src={StakeHeaderImage} alt="" />
            <HeaderTiltle>TCG World Staking</HeaderTiltle>
          </Header>
          <StakeNavbar />
          <SelectSection>
            <ToggleBoxContainer>
              <ToggleBoxTitle>My staked pools</ToggleBoxTitle>
              <StakeSwitch />
            </ToggleBoxContainer>
            <StakeSelectButton />
            <StakeAutocomplete />
          </SelectSection>
        </HeaderSection>
        <ContentSection>
          <StakeTokenCard tokenImage={StakeBscIcon} apy="11.06" rewardToken="1,500,000" rewardMaxStake="15,000,000" rewardTotal="13,567,023.07" status="Active" stakedAmount={0} duration={6} pendingAmount={0} totalAmount={0} harvestLocked={false} expiresIn="21:22:04:58" />
          <StakeTokenCard tokenImage={stakeEthIcon} rewardToken="150,000" rewardMaxStake="1,500,000" rewardTotal="55,575.77" status="Expired" stakedAmount={0} duration={12} pendingAmount={0} totalAmount={0} harvestLocked={false} />
          <StakeTokenCard tokenImage={stakeEthIcon} apy="13.89" rewardToken="600,000" rewardMaxStake="15,000,000" rewardTotal="491,393.78" status="Active" stakedAmount={0} duration={9} pendingAmount={0} totalAmount={0} harvestLocked={true} expiresIn=" 111:22:48:32" />
        </ContentSection>
      </Section>
    </Container>
  );
}
