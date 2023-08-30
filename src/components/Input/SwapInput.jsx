import React, { useState } from "react";
import styled from "styled-components";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

import BSC from "assets/images/tokens/bsc.png";
import ETH from "assets/images/tokens/eth.png";
import Polygon from "assets/images/tokens/plg.png";

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
`;
const Label = styled.span`
    display: inline-block;
    font-size: 20px;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.87);
`;
const InputContainer = styled.div`
    padding: 20px;
    border-radius: 0.5rem;
    border: 2px solid #d9e3e9;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const InputField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 20px;
    width: 100%;
`;
const InputItem = styled.input`
    font-size: 20px;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: rgba(0, 0, 0, 0.87);
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
const DropdownField = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    &:active {
        transform: translateY(2px);
    }
`;
const DropdownContent = styled.span`
    font-size: 20px;
    white-space: nowrap;
    margin: 0 5px 0 0;
    color: rgba(0, 0, 0, 0.87);
`;
const SelectedToken = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
`;
const SelectedTokenImage = styled.img`
    width: 25px;
    margin-right: 5px;
`;
const SelectedTokenName = styled.span`
    font-size: 18px;
    white-space: nowrap;
    margin: 0 5px 0 0;
    color: rgba(0, 0, 0, 0.87);
`;
const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    background-color: #FFFFFF;
    border: none;
    border-radius: 20px;
`
const ModalHeaderSection = styled.div`
    padding: 20px 30px;
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
const ModalHeader = styled.span`
    font-size: 28px;
    font-weight: 600;
    margin: 0;
    align-self: center;
    line-height: 1.2;
    color: rgba(0, 0, 0, 0.87);
`;
const ModalBody = styled.div`
    padding: 30px 20px;
`;
const SearchSection = styled.div`
    margin-bottom: 20px;
`;
const SearchField = styled.input`
    padding: 15px;
    width: 100%;
    border: 2px solid #d9e3e9;
    border-radius: .5rem;
    outline: none;
    font-size: 16px;
    box-sizing: border-box;
`;
const TokenSelectSection = styled.div`
    height: 100%;
    width: 100%;
    padding: 0px;
    position: relative;
    overflow: hidden;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
`;
const TokenList = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 0.3rem;
    cursor: pointer;
    &:hover {
        background-color: rgba(43, 45, 53, 0.1);
    }
`;
const TokenImage = styled.img`
    width: 40px;
    margin-right: 5px;
`;
const TokenContent = styled.div`
    display: flex;
    flex-direction: column;
`;
const TokenName = styled.span`
    font-size: 16px;
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
    color: rgba(0, 0, 0, 0.87);
`;
const TokenDescription = styled.span`
    color: rgba(43, 45, 53, 0.5);
    font-size: 14px;
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
`;

export default function SwapInput({ label }) {
    const [open, setOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [selectedImage, setSelectedimage] = useState();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const selectBSC = () => {
        setSelectedCurrency("BSC");
        setSelectedimage(BSC);
        handleClose();
    }
    const selectETH = () => {
        setSelectedCurrency("ETH");
        setSelectedimage(ETH);
        handleClose();
    }
    const selectPolygon = () => {
        setSelectedCurrency("Polygon");
        setSelectedimage(Polygon);
        handleClose();
    }

    return (
        <Container>
            <Label>{label}</Label>
            <InputContainer>
                <InputField>
                    <InputItem type="number" placeholder="0.0" />
                </InputField>
                {selectedCurrency === "" ? (
                    <DropdownField onClick={handleOpen}>
                        <DropdownContent>Select currency</DropdownContent>
                        <svg data-v-061b061d="" width="9" height="5" fill="#2b2d35" xmlns="https://www.w3.org/2000/svg" style={{ width: "15px", height: "auto", marginTop: "7px" }}>
                            <path data-v-061b061d="" d="M4.851 4.864l4.005-3.787a.45.45 0 000-.659L8.561.14a.513.513 0 00-.696 0L4.502 3.32 1.135.137A.504.504 0 00.787 0a.504.504 0 00-.348.136L.144.415a.45.45 0 000 .658l4.008 3.791a.504.504 0 00.35.136.504.504 0 00.35-.136z"></path>
                        </svg>
                    </DropdownField>
                ) : (
                    <DropdownField onClick={handleOpen}>
                        <SelectedToken>
                            <SelectedTokenImage src={selectedImage} alt="" />
                            <SelectedTokenName>TCG2 [{selectedCurrency}]</SelectedTokenName>
                        </SelectedToken>
                        <svg data-v-061b061d="" width="9" height="5" fill="#2b2d35" xmlns="https://www.w3.org/2000/svg" style={{ width: "15px", height: "auto", marginTop: "2px" }}>
                            <path data-v-061b061d="" d="M4.851 4.864l4.005-3.787a.45.45 0 000-.659L8.561.14a.513.513 0 00-.696 0L4.502 3.32 1.135.137A.504.504 0 00.787 0a.504.504 0 00-.348.136L.144.415a.45.45 0 000 .658l4.008 3.791a.504.504 0 00.35.136.504.504 0 00.35-.136z"></path>
                        </svg>
                    </DropdownField>
                )}
            </InputContainer>
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
                            <ModalHeader>Select Token</ModalHeader>
                        </ModalHeaderSection>
                        <ModalBody>
                            <SearchSection>
                                <SearchField type="text" placeholder="Search name or paste address" />
                            </SearchSection>
                            <TokenSelectSection>
                                <TokenList onClick={selectBSC} style={selectedCurrency === "BSC" ? { opacity: "0.5" } : {}}>
                                    <TokenImage src={BSC} alt="" />
                                    <TokenContent>
                                        <TokenName>TCG2 [BSC]</TokenName>
                                        <TokenDescription>Binance Smart Chain</TokenDescription>
                                    </TokenContent>
                                </TokenList>
                                <TokenList onClick={selectETH} style={selectedCurrency === "ETH" ? { opacity: "0.5" } : {}}>
                                    <TokenImage src={ETH} alt="" />
                                    <TokenContent>
                                        <TokenName>TCG2 [ETH]</TokenName>
                                        <TokenDescription>Ethereum</TokenDescription>
                                    </TokenContent>
                                </TokenList>
                                <TokenList onClick={selectPolygon} style={selectedCurrency === "Polygon" ? { opacity: "0.5" } : {}}>
                                    <TokenImage src={Polygon} alt="" />
                                    <TokenContent>
                                        <TokenName>TCG2 [Polygon]</TokenName>
                                        <TokenDescription>Polygon</TokenDescription>
                                    </TokenContent>
                                </TokenList>
                            </TokenSelectSection>
                        </ModalBody>
                    </ModalContainer>
                </Fade>
            </Modal>
        </Container>
    );
}