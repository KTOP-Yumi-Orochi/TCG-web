import React, { useState } from "react";
import styled from "styled-components";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

import BoxImage from "assets/images/mystery-box/box-image.png";
import BusdIcon from "assets/images/mystery-box/busd-icon.png";

const BuyButton = styled.button`
    padding: 15px 35px;
    border-radius: 5px;
    background: #5aff7f;
    font-size: 14px;
    font-weight: 500;
    color: #000;
    white-space: nowrap;
    margin-right: 15px;
    transition: .2s ease-in-out;
    cursor: pointer;
    border: none;
    outline: none;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 8px 2px rgba(90,255,127,.3);
    }
`;

const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    background-color: #FFFFFF;
    border: none;
    border-radius: 20px;
`
const ModalHeaderSection = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    border: none;
`;
const CloseButton = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;
const StyledSVG = styled.svg`
    width: 20px;
    height: auto;
    fill: rgba(43, 45, 53, 0.5);
    &:hover {
        fill: #2b2d35;
    }
`;
const ModalBody = styled.div`
    padding: 0 30px 30px;
`;
const ContentHeader = styled.div`
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #d9e3e9;
    display: flex;
    justify-content: center;
`;
const ContentHeaderTitle = styled.span`
    font-size: 32px;
    font-weight: 700;
    color: #2b2d35;
    margin-bottom: 0.5rem;
    line-height: 1.2;
`;
const MainContent = styled.div`
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
`;
const ContentImage = styled.img`
    display: inline-block;
    width: 40%;
    margin-right: 50px;
    border: 4px solid #c5a973;
    border-radius: 15px;
    height: auto;
    box-sizing: border-box;
`;
const CheckoutSummary = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 60%;
`;
const SummaryName = styled.span`
    color: #ef56fd;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;
const SummaryTitle = styled.span`
    font-size: 32px;
    font-weight: 500;
    color: #2b2d35;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #d9e3e9;
    line-height: 1.2;
`;
const SummaryPrice = styled.div`
    margin-bottom: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;
const PriceLabel = styled.span`
    font-size: 1.75rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
`;
const PriceContent = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    line-height: 1.5;
`;
const PriceIcon = styled.img`
    width: 25px;
    height: auto;
    margin-right: 10px;
`;
const PriceAmount = styled.span`
    font-size: 20px;
    font-weight: 700;
    color: #2b2d35;
    margin-right: 10px;
`;
const PriceUsdRatio = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: #5f718b;
`;
const BoxesAmount = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid #d9e3e9;
`;
const BoxesAmountLabel = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #989898;
    margin-right: 15px;
    line-height: 1.5;
    letter-spacing: .01em;
`;
const BoxesAmountCounter = styled.div`
    padding: 5px;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    display: flex;
    align-items: center;
    user-select: none;
`;
const CounterController = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 3px;
    background: #e3e3e3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
const CounterControllerContent = styled.i`
    font-size: 20px;
    font-weight: 100;
    color: #1f1f1f;
`;
const CounterNumber = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: #2b2d35;
    margin: 0 10px;
`;
const SummaryAgreement = styled.div`
    margin-bottom: 10px;
`;
const CheckboxContainer = styled.div`
    box-sizing: border-box;
    display: inline-flex;
    position: relative;
    margin: 1rem 0;
    margin-right: 1rem;
    line-height: 20px;
    cursor: pointer;
    align-items: center;
`;
const StyledCheckboxContainer = styled.div`
    width: 48px;
    height: 48px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;
const StyledCheckBox = styled.input`
    width: 24px;
    height: 24px;
    cursor: pointer;
    accent-color: #32e322;
`;
const StyledLabel = styled.label`
    font-size: 14px;
    font-weight: 400;
    color: #2b2d35;
    cursor: pointer;
    line-height: 20px;
`;
const ContentWarning = styled.span`
    display: inline-block;
    padding: 5px 25px;
    background: #dde4ff;
    border-radius: 50px;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 700;
    color: #111316;
    text-align: center;
    line-height: 1.5;
    letter-spacing: .01em;
    align-self: start;
`;
const CheckoutButton = styled.button`
    background: #ededed;
    width: 60%;
    padding: 15px 45px;
    border-radius: 7px;
    font-size: 14px;
    font-weight: 700;
    color: #2b2d35;
    transition: .2s ease-in-out;
    cursor: default;
    border: none;
`;

export default function MysteryBoxModal() {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(1);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const clickMinus = () => {
        if (count === 1) {
            return;
        }
        else {
            setCount(count - 1);
        }
    }
    const clickPlus = () => {
        setCount(count + 1);
    }
    return (
        <>
            <BuyButton onClick={handleOpen}>Buy the Box</BuyButton>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <ModalContainer>
                        <ModalHeaderSection>
                            <CloseButton onClick={handleClose}>
                                <StyledSVG data-v-b6f41860="" viewBox="0 0 22 22" xmlns="https://www.w3.org/2000/svg">
                                    <path data-v-b6f41860="" d="M21.692 1.953L20.172.452a1.09 1.09 0 00-1.52 0l-7.58 7.58L3.348.309a1.09 1.09 0 00-1.52 0l-1.52 1.52a1.09 1.09 0 000 1.519l7.706 7.706-7.562 7.598a1.09 1.09 0 000 1.52l1.52 1.52a1.09 1.09 0 001.519 0l7.58-7.581 7.581 7.58a1.09 1.09 0 001.52 0l1.52-1.52a1.09 1.09 0 000-1.519l-7.599-7.58 7.58-7.58c.43-.43.43-1.11.019-1.539z"></path>
                                </StyledSVG>
                            </CloseButton>
                        </ModalHeaderSection>
                        <ModalBody>
                            <ContentHeader>
                                <ContentHeaderTitle>Complete Checkout</ContentHeaderTitle>
                            </ContentHeader>
                            <MainContent>
                                <ContentImage src={BoxImage} alt="" />
                                <CheckoutSummary>
                                    <SummaryName>Beller</SummaryName>
                                    <SummaryTitle>Mystery box</SummaryTitle>
                                    <SummaryPrice>
                                        <PriceLabel>Total:</PriceLabel>
                                        <PriceContent>
                                            <PriceIcon src={BusdIcon} alt="" />
                                            <PriceAmount>{(50.00 * count).toFixed(2)} BUSD</PriceAmount>
                                            <PriceUsdRatio>(±${(49.98 * count).toFixed(2)})</PriceUsdRatio>
                                        </PriceContent>
                                    </SummaryPrice>
                                    <BoxesAmount>
                                        <BoxesAmountLabel>Box amount:</BoxesAmountLabel>
                                        <BoxesAmountCounter>
                                            <CounterController onClick={clickMinus}>
                                                <CounterControllerContent className="fa fa-minus" />
                                            </CounterController>
                                            <CounterNumber>{count}</CounterNumber>
                                            <CounterController onClick={clickPlus}>
                                                <CounterControllerContent className="fa fa-plus" />
                                            </CounterController>
                                        </BoxesAmountCounter>
                                    </BoxesAmount>
                                    <SummaryAgreement>
                                        <CheckboxContainer>
                                            <StyledCheckboxContainer>
                                                <StyledCheckBox type="checkbox" id="agreement" name="vehicle1" />
                                            </StyledCheckboxContainer>
                                            <StyledLabel for="agreement">I have read and I agree to <span style={{ color: "#32e322" }}>TCG Marketplace Service Agreement</span></StyledLabel>
                                        </CheckboxContainer>
                                    </SummaryAgreement>
                                    <ContentWarning>ℹ️ You need to be signed in to buy boxes</ContentWarning>
                                    <CheckoutButton>Checkout</CheckoutButton>
                                </CheckoutSummary>
                            </MainContent>
                        </ModalBody>
                    </ModalContainer>
                </Fade>
            </Modal>
        </>
    )
}