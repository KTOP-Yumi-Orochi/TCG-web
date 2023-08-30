
import React from 'react';
import styled from 'styled-components';

import LeftFooter from "assets/images/footer/left/footer.png";
import LeftFooterSamll from "assets/images/footer/left/footer_small.png";
import LeftFooterSP from "assets/images/footer/left/footer_sp.png";
import RightFooterMD from "assets/images/footer/footer-right(1280).png";
import RightFooterSP from "assets/images/footer/right/footer_sp.png";
import RightFooterSmall from "assets/images/footer/right/footer_small.png";
import RightFooter from "assets/images/footer/right/footer.png";

const Container = styled.div`
    width: calc(100vw - 120px);
    max-width: 1800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: calc(100vw - 48px);
    }
`
const FooterLeft = styled.div`
    width: calc(50% - 39px);
    height: 57px;
    img {
        width: 100%;
        height: 100%;
        opacity: 0.5;
    }
    @media (max-width: 1450px) {
        display: none;
    }
    
`
const FooterLeftSmall = styled.div`
    width: calc(50% - 39px);
    height: 57px;
    display: none;
    img {
        width: 100%;
        height: 100%;
        opacity: 0.5;
    }
    @media (max-width: 1450px) {
        display: block;
    }
    @media (max-width: 1400px) {
        display: none;
    }
    
`
const FooterLeftMd = styled.div`
    width: calc(50% - 39px);
    height: 27px;
    display: none;
    img {
        width: 100%;
        height: 100%;
        transform:scale(-1,1);
    }
    @media (max-width: 1400px) {
        display: block;
    }
    @media (max-width: 768px) {
        display: none;
    }
    
`
const FooterRight = styled.div`
    width: calc(50% - 39px);
    height: 57px;
    img {
        width: 100%;
        height: 100%;
        opacity: 0.5;
    }
    @media (max-width: 1450px) {
        display: none;
    }
`
const FooterRightSmall = styled.div`
    width: calc(50% - 39px);
    height: 57px;
    display: none;
    img {
        width: 100%;
        height: 100%;
        opacity: 0.5;
    }
    @media (max-width: 1450px) {
        display: block;
    }
    @media (max-width: 1400px) {
        display: none;
    }
    
`
const FooterRightMd = styled.div`
    width: calc(50% - 39px);
    height: 27px;
    display: none;
    img {
        width: 100%;
        height: 100%;
    }
    @media (max-width: 1400px) {
        display: block;
    }
    @media (max-width: 768px) {
        display: none;
    }
`
const FooterLeftSP = styled.div`
    width: calc(50% - 39px);
    height: 57px;
    display: none;
    img {
        width: 100%;
        height: 100%;
    }
    @media (max-width: 768px) {
        display: block;
        height: 32.5px;
        margin-top: 20px;
    }
    
`
const FooterRightSP = styled.div`
    width: calc(50% - 39px);
    height: 57px;
    display: none;
    img {
        width: 100%;
        height: 100%;
    }
    @media (max-width: 768px) {
        display: block;
        height: 32.5px;
        margin-top: 20px;
    }
    
`
const MidContainer = styled.div`
    width: 68px;
    height: 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props=>props.index < 8 ? 'space-between' : 'space-evenly'};
    @media(max-width:1400px){
        display: none;
    }
`
const MidContainerSmall = styled.div`
    width: 68px;
    height: 41px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: none;
    @media(max-width:1400px){
        display: flex;;
    }
    
`
const Button = styled.svg`
    cursor: pointer;
    &:hover path {
        opacity: 1;
    }
`
export default function FooterV3({index}) {

    return (
        <Container>
            <FooterLeft><img alt="" src={LeftFooter} /></FooterLeft>
            <FooterLeftSmall><img alt="" src={LeftFooterSamll}></img></FooterLeftSmall>
            <FooterLeftSP><img alt="" src={LeftFooterSP}></img></FooterLeftSP>
            <FooterLeftMd><img alt="" src={RightFooterMD}></img></FooterLeftMd>
            <MidContainer index={index}>
                <Button width="55" height="29" viewBox="0 0 55 29" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => window.fullpage_api.moveSectionUp()}>
                    <path opacity="0.5" d="M29.5 18L38.5 27H3L28 2L54 28" stroke="white" strokeWidth="2" />
                </Button>
                <div style={{ fontSize: '12px', lineHeight: '14.4px', fontFamily: 'Kusanagi', color: 'white', opacity: '0.5' }}>
                    SCROLL
                </div>
               {index < 9 && <Button width="49" height="26" viewBox="0 0 49 26" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => window.fullpage_api.moveSectionDown()}>
                    <path d="M1 1L24 24L46 2H14.5L22.5 10" stroke="white" opacity="0.5" strokeWidth="2" />
                </Button>}
            </MidContainer>
            <MidContainerSmall>
                    <Button width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => window.fullpage_api.moveSectionUp()}>
                        <path opacity="0.5"  d="M13.2065 6.75598L12.4766 7.48595L15.3186 10.328L3.43659 10.328L12.3029 1.46173L22.5662 11.725L23.2979 10.9932L12.3047 0L0.943715 11.361L17.8115 11.361L13.2065 6.75598Z" fill="white"/>
                    </Button>
                    <div style={{ fontSize: '10px', lineHeight: '12px', fontFamily: 'Kusanagi', color: 'white', opacity: '0.5' }}>
                        continue
                    </div>
                    {index < 9 &&<Button width="24" height="12" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => window.fullpage_api.moveSectionDown()}>
                        <path  opacity="0.5" d="M13.2065 5.90124L12.4766 5.17128L15.3186 2.32921L3.43659 2.32921L12.3029 11.1955L22.5662 0.932221L23.2979 1.66399L12.3047 12.6572L0.943715 1.29626L17.8115 1.29626L13.2065 5.90124Z" fill="white"/>
                    </Button>}
            </MidContainerSmall>
            <FooterRightSP><img alt="" src={RightFooterSP}></img></FooterRightSP>
            <FooterRightSmall><img alt="" src={RightFooterSmall}></img></FooterRightSmall>
            <FooterRightMd><img alt="" src={RightFooterMD}></img></FooterRightMd>
            <FooterRight><img alt="" src={RightFooter}></img></FooterRight>
        </Container>
    )
}