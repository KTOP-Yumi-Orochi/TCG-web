import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import WorldCard from "components/cards/WorldCard";
import { arena1Data, arena2Data, arena3Data, arena4Data } from "pages/world/data/WorldModalData";

import Button from "assets/images/world/button.png";
import ButtonEffect from "assets/images/world/button-effect.png";
import ModalHeaderImage from "assets/images/world/modal-header.png";
import ModalClose from "assets/images/world/modal-close.png";

const Wave = keyframes`
  0% {
    transform: scale(0.5)
  }
  100% {
    transform: scale(0.9)
  }
`;
const HeaderButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  margin-top: 9vh;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &::before {
    display: block;
    content: '';
    width: 54px;
    height: 54px;
    transform-origin: center;
    background: url(${Button}) center no-repeat;
    background-size: 100% auto;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  &::after {
    content: '';
    position: absolute;
    top: -20px;
    width: 98px;
    height: 98px;
    background: url(${ButtonEffect}) center no-repeat;
    background-size: cover;
    transform-origin: center;
    animation: ${Wave} 1s linear infinite;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;
const ButtonText = styled.span`
    color: #fff;
    font-size: 14px;
    line-height: 31px;
    text-align: center;
`;
const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 30px;
    width: 720px;
    height: 823px;
    background-color: transparent;
    border: none;
    outline: none;
`;
const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
`;
const HeaderTitle = styled.span`
    width: 640px;
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;
    padding: 0;
    font-size: 32px;
    color: #fff;
    padding-left: 24px;
    background: rgba(128,128,128,0.1) url(${ModalHeaderImage}) no-repeat left center/auto 100%;
`;
const CloseButton = styled.button`
    width: 60px;
    height: 60px;
    background: rgba(128,128,128,0.1) url(${ModalClose}) center no-repeat;
    background-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
`;
const ModalBody = styled.div`
    position: relative;
    margin-top: 25px;
    padding-bottom: 30px;
    margin-right: 5px;
    height: calc(100% - 100px);
    overflow: auto;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        display: block;
        width: 10px;
	    background-color: transparent;
        border-radius: 10px;
        z-index: 1;
    }
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
        border-radius: 10px;
        width: 3px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #AAA;
        border-radius: 10px;
        width: 20px;
        z-index: 10;
        cursor: pointer;
    }
`;
const MainContent = styled.div`
    position: relative;
    top: 0px;
    left: 0px;
    margin-right: 30px;
`;
const CardContainer = styled.div`
    width: 640px;
    padding-left: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 25.19px;
`;

export default function WorldModalButton({worldName}) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <HeaderButton onClick={handleOpen}>
                <ButtonText>View Details</ButtonText>
            </HeaderButton>

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
                style={{ backgroundColor: "rgba(18, 18, 18, 0.6)" }}
            >
                <Fade in={open}>
                    <ModalContainer className="worldModal">
                        <ModalHeader>
                            <HeaderTitle>{worldName}</HeaderTitle>
                            <CloseButton onClick={handleClose} />
                        </ModalHeader>
                        <ModalBody>
                            <MainContent>
                                <CardContainer>
                                    { worldName === "Mondstadt" && arena1Data.map((data, index) => (
                                        <WorldCard key={index} title={data.title} content={data.content} image={data.image} />
                                    ))}
                                    { worldName === "Liyue" && arena2Data.map((data, index) => (
                                        <WorldCard key={index} title={data.title} content={data.content} image={data.image} />
                                    ))}
                                    { worldName === "Inazuma" && arena3Data.map((data, index) => (
                                        <WorldCard key={index} title={data.title} content={data.content} image={data.image} />
                                    ))}
                                    { worldName === "Sumeru" && arena4Data.map((data, index) => (
                                        <WorldCard key={index} title={data.title} content={data.content} image={data.image} />
                                    ))}
                                </CardContainer>
                            </MainContent>
                            {/* <ScrollbarSection>
                                <ScrollThumbContainer>
                                    <Thumb></Thumb>
                                </ScrollThumbContainer>
                                <Track></Track>
                            </ScrollbarSection> */}
                        </ModalBody>
                    </ModalContainer>
                </Fade>
            </Modal>
        </>
    );
  }