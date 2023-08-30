import React, { useState } from "react";
import styled from "styled-components";

import DetailImageDown from "assets/images/stake/detail-down.png";

const Container = styled.div`
    width: 100%;
    margin-bottom: 20px;
    background: #f6f6f6;
    border: 1px solid #d9e3e9;
    border-radius: 20px;
    list-style: none;
    transition: .2s ease-in-out;
    overflow: hidden;
`;
const Content = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 20px;
`;
const Line = styled.div`
    position: absolute;
    top: 100%;
    left: 20px;
    right: 20px;
    height: 1px;
    background: #d9e3e9;
`;
const TokenNameSection = styled.div`
    margin-right: 10px;
    width: calc(100% - 10px);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
`;
const TokenNameSectionTitle = styled.span`
    display: inline-block;
    font-size: 16px;
    color: #989898;
    width: 100%;
`;
const TokenNameSectionContent = styled.div`
    width: calc(100% - 10px);
    display: flex;
    align-items: center;
`;
const TokenNameSectionImage = styled.img`
    width: 50px;
    height: auto;
    margin-right: 5px
`;
const TokenNameSectionTextContainer = styled.div`
    width: calc(100% - 10px);
    display: flex;
    flex-direction: column;
`;
const TokenNameSectionTextTitle = styled.span`
    font-size: 20px;
    font-weight: 500;
    color: #2b2d35;
`;
const TokenNameSectionTextDescription = styled.span`
    font-size: 14px;
    color: #5f718b;
`;
const ApySection = styled.div`
    margin-right: 10px;
    width: calc(100% - 10px);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;
const ApyTitle = styled.span`
    margin-right: 10px;
    width: calc(100% - 10px);
    font-size: 16px;
    color: #989898;
`;
const ApyContent = styled.span`
    width: calc(100% - 10px);
    color: #32e322;
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
`;
const RewardSection = styled.div`
    width: 300%;
    display: flex;
    align-items: center;
`;
const RewardItem = styled.div`
    margin-right: 10px;
    width: calc(100% - 10px);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
`;
const RewardItemTitle = styled.span`
    margin-right: 10px;
    width: calc(100% - 10px);
    display: inline-block;
    font-size: 16px;
    color: #989898;
`;
const RewardItemContent = styled.span`
    font-size: 18px;
    font-weight: 500;
`;
const DetailSection = styled.div`
    margin-right: 10px;
    width: calc(100% - 10px);
    display: flex;
    align-items: center;
`;
const DetailButton = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
`;
const DetailText = styled.span`
    font-weight: 700;
    color: #32e322;
    margin: 5px;
    font-size: 16px;
`;
const DetailImage = styled.img`
    width: 18px;
    min-width: 18px;
    transition: .2s ease-in-out;
    height: auto;
`;
const StatusSection = styled.div`
    margin-right: 10px;
    width: calc(100% - 10px);
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StatusBadge = styled.div`
    align-self: center;
    padding: 5px 10px;
    border-radius: 3px;
`;
const StatusContent = styled.span`
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
`;
const LastSection = styled.div`
    display: flex;
    width: unset;
    align-items: center;
    justify-content: center;
`;
const LastSectionContent = styled.div`
    width: 1rem;
    height: 1rem;
`;
const Detail = styled.div`
    overflow: hidden;
    transition: .2s ease-in-out;
`;
const DetailContainer = styled.div`
    box-sizing: border-box;
    padding: 20px;
`;
const DetailContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const DetailTopContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 30px;
    width: 100%;
`;
const DetailStakeAmount = styled.div`
    box-sizing: border-box;
`;
const DetailStakeAmountContainer = styled.div`
    margin-bottom: 10px;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 50px 2fr;
    gap: 0 0;
    grid-template-areas:
        "label label"
        "icon tokens";
`;
const DetailStakeAmountTitle = styled.span`
    grid-area: label;
    display: inline-block;
    font-size: 16px;
    color: #2b2d35;
    margin-bottom: 10px;
`;
const DetailStakeAmountImage = styled.img`
    grid-area: icon;
    width: 50px;
    height: auto;
    margin-right: 5px;
`;
const DetailStakeAmountCoin = styled.span`
    grid-area: tokens;
    align-self: center;
    font-size: 26px;
    font-weight: 500;
    margin-right: 10px
`;
const DetailStakeAmountBadge = styled.div`
    padding: 5px 10px;
    border-radius: 20px;
    background: #dde4ff;
    font-size: 14px;
    font-weight: 600;
`;
const DurationContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const DurationTitle = styled.span`
    display: inline-block;
    font-size: 16px;
    color: #2b2d35;
    margin-bottom: 10px;
`;
const DurationAmount = styled.span`
    font-size: 20px;
    font-weight: 500;
    color: #32e322;
`;
const PendingTotalContainer = styled.div`
    box-sizing: border-box;
`;
const PendingTotalTitle = styled.span`
    display: inline-block;
    font-size: 16px;
    color: #2b2d35;
    margin-bottom: 10px;
`;
const PendingTotalContent = styled.div`
    display: flex;
    align-items: center;
`;
const PendingTotalImage = styled.img`
    width: 50px;
    height: auto;
    margin-right: 5px
`;
const PendingTotalTextContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;
const PendingTotalText = styled.span`
    font-size: 26px;
    font-weight: 500;
    margin-right: 10px;
`;
const DetailBottomContent = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;
const DetailBottomLeftContent = styled.div`
    display: flex;
    align-items: center;
`;
const DetailBottomLeftContentItem = styled.div`
    margin-right: 20px;
    box-sizing: border-box;
`;
const DetailBottomLeftContentItemTitle = styled.span`
    font-size: 14px;
    color: #5f718b;
    margin-right: 10px;
`;
const DetailBottomLeftContentItemContent = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: #32e322;
`;
const DetailButtonGroup = styled.div`
    display: grid;
    gap: 10px;
    grid-template-rows: auto 1fr;
    grid-template-areas:
        "stake stake"
        "withdraw claim";
`;
const StakeNowButton = styled.button`
    padding: 10px 45px;
    background: #32e322;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    grid-area: stake;
    transition: .2s ease-in-out;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 8px 2px rgba(92, 92, 92, 0.1);
        transform: translate3d(0, -1px, 0);
    }
`;
const DisabledButton = styled.button`
    padding: 5px 10px;
    border: 2px solid #32e322;
    border-radius: 10px;
    grid-area: withdraw;
    transition: .2s ease-in-out;
    filter: grayscale(1);
    cursor: default;
    outline: none;
    display: flex;
    align-items: center;
`;
const StyledDisabledSvg = styled.svg`
    stroke: #32e322;
    margin-right: 5px;
`;
const ButtonText = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #32e322;
`;
const ActiveButton = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px 10px;
    border: 2px solid #2b2d35;
    border-radius: 10px;
    grid-area: claim;
    transition: .2s ease-in-out;
    &:hover {
        background: #2b2d35;
    }
    &:hover .icon {
        stroke: #fff;
    }
    &:hover .text {
        color: #fff;
    }
`;
const StyledActiveSvg = styled.svg`
    stroke: #2b2d35;
    margin-right: 5px;
`
const ActiveButtonText = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #2b2d35;
`;

export default function StakeTokenCard({tokenImage, apy, rewardToken, rewardMaxStake, rewardTotal, status, stakedAmount, duration, pendingAmount, totalAmount, harvestLocked, expiresIn}) {
    const [show, setShow] = useState(false);

    return (
        <Container style={show ? {backgroundColor: "#fff"} : {}}>
            <Content>
                {show ? (
                    <Line />
                ) : (
                    <></>
                )}
                <TokenNameSection>
                    <TokenNameSectionTitle>Token</TokenNameSectionTitle>
                    <TokenNameSectionContent>
                        <TokenNameSectionImage src={tokenImage} alt="" />
                        <TokenNameSectionTextContainer>
                            <TokenNameSectionTextTitle>TCG Coin 2.0</TokenNameSectionTextTitle>
                            <TokenNameSectionTextDescription>Stake and Earn TCG Coin</TokenNameSectionTextDescription>
                        </TokenNameSectionTextContainer>
                    </TokenNameSectionContent>
                </TokenNameSection>
                <ApySection>
                    <ApyTitle>APY</ApyTitle>
                    <ApyContent>{status === "Active" ? apy + "%" : '--'}</ApyContent>
                </ApySection>
                <RewardSection>
                    <RewardItem>
                        <RewardItemTitle>Reward Tokens (TCG2)</RewardItemTitle>
                        <RewardItemContent>{rewardToken}</RewardItemContent>
                    </RewardItem>
                    <RewardItem>
                        <RewardItemTitle>Global Max Stake (TCG2)</RewardItemTitle>
                        <RewardItemContent>{rewardMaxStake}</RewardItemContent>
                    </RewardItem>
                    <RewardItem>
                        <RewardItemTitle>Total Staked (TCG2)</RewardItemTitle>
                        <RewardItemContent>{rewardTotal}</RewardItemContent>
                    </RewardItem>
                </RewardSection>
                <DetailSection>
                    {!show ? (
                        <DetailButton onClick={() => setShow(true)}>
                            <DetailText>Details</DetailText>
                            <DetailImage src={DetailImageDown} alt="" style={show ? {transform: "rotate(180deg)"} : {}} />
                        </DetailButton>
                    ) : (
                        <DetailButton onClick={() => setShow(false)}>
                            <DetailText>Hide</DetailText>
                            <DetailImage src={DetailImageDown} alt="" style={show ? {transform: "rotate(180deg)"} : {}} />
                        </DetailButton>
                    )}
                </DetailSection>
                <StatusSection>
                    <StatusBadge style={status === "Active" ? {backgroundColor: "#bffdb4"} : {backgroundColor: "#fce3e1"}}>
                        <StatusContent style={status === "Active" ? {color: "#32e322"} : {color: "#ff504c"}}>{status}</StatusContent>
                    </StatusBadge>
                </StatusSection>
                <LastSection>
                    <LastSectionContent />
                </LastSection>
            </Content>
            <Detail style={show ? {maxHeight: "279px"} : {maxHeight: "0"}}>
                <DetailContainer>
                    <DetailContent>
                        <DetailTopContent>
                            <DetailStakeAmount>
                                <DetailStakeAmountContainer>
                                    <DetailStakeAmountTitle>Staked amount</DetailStakeAmountTitle>
                                    <DetailStakeAmountImage src={tokenImage} alt="" />
                                    <DetailStakeAmountCoin>{stakedAmount} TCG2</DetailStakeAmountCoin>
                                </DetailStakeAmountContainer>
                                <DetailStakeAmountBadge>To learn  more, click on "Stake Now"</DetailStakeAmountBadge>
                            </DetailStakeAmount>
                            <DurationContainer>
                                <DurationTitle>Duration</DurationTitle>
                                <DurationAmount>{duration} months</DurationAmount>
                            </DurationContainer>
                            <PendingTotalContainer>
                                <PendingTotalTitle>Your Pending Earnings</PendingTotalTitle>
                                <PendingTotalContent>
                                    <PendingTotalImage src={tokenImage} alt="" />
                                    <PendingTotalTextContainer>
                                        <PendingTotalText>{pendingAmount} TCG2</PendingTotalText>
                                    </PendingTotalTextContainer>
                                </PendingTotalContent>
                            </PendingTotalContainer>
                            <PendingTotalContainer>
                                <PendingTotalTitle>Your Total Earnings</PendingTotalTitle>
                                <PendingTotalContent>
                                    <PendingTotalImage src={tokenImage} alt="" />
                                    <PendingTotalTextContainer>
                                        <PendingTotalText>{totalAmount} TCG2</PendingTotalText>
                                    </PendingTotalTextContainer>
                                </PendingTotalContent>
                            </PendingTotalContainer>
                        </DetailTopContent>
                        <DetailBottomContent>
                            <DetailBottomLeftContent>
                                <DetailBottomLeftContentItem>
                                    <DetailBottomLeftContentItemTitle>Max Stake per Wallet:</DetailBottomLeftContentItemTitle>
                                    <DetailBottomLeftContentItemContent>∞</DetailBottomLeftContentItemContent>
                                </DetailBottomLeftContentItem>
                                <DetailBottomLeftContentItem>
                                    <DetailBottomLeftContentItemTitle>Harvest Locked:</DetailBottomLeftContentItemTitle>
                                    <DetailBottomLeftContentItemContent>{`${harvestLocked}`}</DetailBottomLeftContentItemContent>
                                </DetailBottomLeftContentItem>
                                <DetailBottomLeftContentItem>
                                    <DetailBottomLeftContentItemTitle>Minimal Stake:</DetailBottomLeftContentItemTitle>
                                    <DetailBottomLeftContentItemContent>500</DetailBottomLeftContentItemContent>
                                </DetailBottomLeftContentItem>
                                {status === "Active" ? (
                                    <DetailBottomLeftContentItem>
                                        <DetailBottomLeftContentItemTitle>Expires in:</DetailBottomLeftContentItemTitle>
                                        <DetailBottomLeftContentItemContent>{expiresIn}</DetailBottomLeftContentItemContent>
                                    </DetailBottomLeftContentItem>
                                ) : (
                                    <></>
                                )}
                            </DetailBottomLeftContent>
                            {status === "Active" ? (
                                <DetailButtonGroup>
                                    <StakeNowButton>Stake Now</StakeNowButton>
                                    <DisabledButton>
                                        <StyledDisabledSvg data-v-318ea0f4="" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path data-v-318ea0f4="" d="
                                            M14.8746 11.1061V13.8022C14.8746
                                            14.1597 14.7325 14.5026 14.4797
                                            14.7554C14.2269 15.0082 13.8841
                                            15.1502 13.5265 15.1502H4.09023C3.73271
                                            15.1502 3.38983 15.0082 3.13702
                                            14.7554C2.88421 14.5026 2.74219 14.1597
                                            2.74219 13.8022V11.1061" stroke-width="1.3417" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path data-v-318ea0f4="" d="M12.1777 6.38793L8.80761 3.01782L5.4375 6.38793" stroke-width="1.3417" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path data-v-318ea0f4="" d="M8.80469 3.01782V11.1061" stroke-width="1.3417" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </StyledDisabledSvg>
                                        <ButtonText>Withdraw</ButtonText>
                                    </DisabledButton>
                                    {harvestLocked === false ? (
                                        <ActiveButton>
                                            <StyledActiveSvg data-v-318ea0f4="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                                <path data-v-318ea0f4="" d="
                                                M2.39844 6.26435C2.39844 5.42058
                                                3.08245 4.73657 3.92622 4.73657H16.1485C16.9923
                                                4.73657 17.6763 5.42058 17.6763
                                                6.26435V13.9033C17.6763 14.7471 16.9923
                                                15.431 16.1485 15.431H3.92622C3.08245
                                                15.431 2.39844 14.7471 2.39844
                                                13.9033V6.26435Z
                                                " stroke-width="1.52059" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path data-v-318ea0f4="" d="
                                                M10.0495 12.3756C11.3151 12.3756
                                                12.3412 11.3496 12.3412 10.0839C12.3412
                                                8.81825 11.3151 7.79224 10.0495
                                                7.79224C8.78383 7.79224 7.75781
                                                8.81825 7.75781 10.0839C7.75781
                                                11.3496 8.78383 12.3756 10.0495 12.3756Z
                                                " stroke-width="1.52059" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path data-v-318ea0f4="" d="
                                                M2.39844 7.79214C4.08598 7.79214
                                                5.454 6.42411 5.454 4.73657
                                                " stroke-width="1.52059" stroke-linecap="round" stroke-linejoin="round"></path><path data-v-318ea0f4="" d="
                                                M14.6094 15.4312C14.6094 13.7437
                                                15.9774 12.3756 17.6649 12.3756
                                                " stroke-width="1.52059" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </StyledActiveSvg>
                                            <ActiveButtonText className="text">Harvest</ActiveButtonText>
                                        </ActiveButton>
                                    ) : (
                                        <DisabledButton style={{ gridArea: "claim" }}>
                                            <StyledDisabledSvg data-v-318ea0f4="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                                <path data-v-318ea0f4="" d="
                                                M2.39844 6.26435C2.39844 5.42058
                                                3.08245 4.73657 3.92622 4.73657H16.1485C16.9923
                                                4.73657 17.6763 5.42058 17.6763
                                                6.26435V13.9033C17.6763 14.7471 16.9923
                                                15.431 16.1485 15.431H3.92622C3.08245
                                                15.431 2.39844 14.7471 2.39844
                                                13.9033V6.26435Z
                                                " stroke-width="1.52059" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path data-v-318ea0f4="" d="
                                                M10.0495 12.3756C11.3151 12.3756
                                                12.3412 11.3496 12.3412 10.0839C12.3412
                                                8.81825 11.3151 7.79224 10.0495
                                                7.79224C8.78383 7.79224 7.75781
                                                8.81825 7.75781 10.0839C7.75781
                                                11.3496 8.78383 12.3756 10.0495 12.3756Z
                                                " stroke-width="1.52059" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path data-v-318ea0f4="" d="
                                                M2.39844 7.79214C4.08598 7.79214
                                                5.454 6.42411 5.454 4.73657
                                                " stroke-width="1.52059" stroke-linecap="round" stroke-linejoin="round"></path><path data-v-318ea0f4="" d="
                                                M14.6094 15.4312C14.6094 13.7437
                                                15.9774 12.3756 17.6649 12.3756
                                                " stroke-width="1.52059" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </StyledDisabledSvg>
                                            <ButtonText>Harvest</ButtonText>
                                        </DisabledButton>
                                    )}
                                </DetailButtonGroup>
                            ) : (
                                <></>
                            )}
                        </DetailBottomContent>
                    </DetailContent>
                </DetailContainer>
            </Detail>
        </Container>
    )
}