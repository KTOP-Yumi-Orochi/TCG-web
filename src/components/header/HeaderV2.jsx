import HeaderButton from 'components/buttons/HeaderButton';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import TwitterButton from 'components/buttons/TwitterButton';
import DiscordButton from 'components/buttons/DiscordButton';
import TelegramButton from 'components/buttons/TelegramButton';
import MenuButton from 'components/buttons/MenuButton';
const MoveLeft = keyframes`
  0%{
    transform: translateX(35%);
  }
  100% {
    transform: translateX(0px);
  }
`

const MoveLeftSmall = keyframes`
  0%{
    transform: translateX(10%);
  }
  100% {
    transform: translateX(-14%);
  }
`

const MoveRight = keyframes`
  0%{
    transform: translateX(-85%);
  }
  100% {
    transform: translateX(-50%);
  }
`

const MoveRightSmall = keyframes`
  0%{
    transform: translateX(-75%);
  }
  100% {
    transform: translateX(-50%);
  }
`

const MetaLogoLeft = styled.svg`
  width: 22.65vw;
  transform: translateX(100%);
  animation: ${MoveLeft} 1s 0.5s ease-in-out;
  animation-fill-mode: forwards;
`
const MetaLogoRight = styled.svg`
  width: 22.65vw;
  transform: translateX(-100%);
  animation: ${MoveRight} 1s 0.5s ease-in-out;
  animation-fill-mode: forwards;
`

const Expand = keyframes`
  0%{
    width: 60px;
    height: 60px;
    clipPath: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  }
  95% {
    clipPath: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  }
  100% {
    width: 202px;
    height: 202px;
    clipPath: polygon(0 0, 100% 0%, 100% 100%, 0 100%);

  }
`
const ExpandSmall = keyframes`
  0%{
    width: 43px;
    height: 43px;
    clipPath: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  }
  95% {
    clipPath: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  }
  100% {
    width: 134px;
    height: 134px;
    clipPath: polygon(0 0, 100% 0%, 100% 100%, 0 100%);

  }
`

const MetaLogoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 60px;
  height: 60px;
  clipPath: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  animation: ${Expand} 1.5s 0.5s ease;
  animation-fill-mode: forwards;
  @media (max-width: 675px) {
    animation: ${ExpandSmall} 1.5s 0.5s ease;
    animation-fill-mode: forwards;
  }
`

const LogoActionAnimation = keyframes`
  0%{
    opacity: 0;
  }
  3% {
    opacity: 0.6;
  }
  6%{
      opacity: 0.05;
  }
  8% {
      opacity: 0.6;
  }
  11% {
      opacity: 0.6;
  }
  13% {
      opacity: 0.05
  }
  16% {
      opacity: 0.05;
  }
  31%{
      opacity: 0.6;
  }
  50% {
      opacity: 0.9;
  }
  80%{
      opacity: 0.9;
  }
  100% {
      opacity: 1;
  }

`

const LogoAction = styled.div`
    animation: ${LogoActionAnimation} 2s ease-in-out 1;
    animation-fill-mode: forwards;
`

const ParallelAnimation = keyframes`
    0%{
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`

const Parallelogram = styled.svg`
    margin-left: -10px;
    animation: ${ParallelAnimation} 1s ease 1;
    animation-fill-mode: forwards;
    @media (max-width: 1080px) {
        display: none;
    }
`
const ParallelogramRight = styled.svg`
    animation: ${ParallelAnimation} 1s ease 1;
    animation-fill-mode: forwards;
    @media (max-width: 1080px) {
        width: 13px;
        height: 13px;
    }
`

const HeaderLeftAnimation = keyframes`
    0%{
        clipPath: inset(0px 505px 0px 0px);
    }
    100%{
        clipPath: inset(0px 0px 0px 0px);
    }
`

const HeaderLeftUpper = styled.svg`
    width: 35.27vw;
    animation: ${HeaderLeftAnimation} 2s ease 1;
    @media (max-width: 490px) {
        display: none;
    }
`
const HeaderLeftDown = styled.svg`
    width: 35.27vw;
    animation: ${HeaderLeftAnimation} 2s ease 1;

    @media (max-width: 490px) {
        display: none;
    }
`

const HeaderRightAnimation = keyframes`
    0%{
        clipPath: inset(0px 0px 0px 100%);
    }
    100%{
        clipPath: inset(0px 0px 0px 0px);
    }
`

const HeaderRightUpper = styled.svg`
    width: 35.27vw;
    animation: ${HeaderRightAnimation} 2s ease 1;
`

const HeaderRightDown = styled.svg`
    width: 35.27vw;
    animation: ${HeaderRightAnimation} 2s ease 1;
`

const HeaderLeftIcon = styled.svg`
    width: 3.26vw;
    @media (max-width: 490px) {
        display: none;
    }
`

const HeaderRightIcon = styled.svg`
    width: 3.26vw;
`

const HeaderLeftContainer = styled.div`
    width: fit-content;
    height: 7.81vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const HeaderRightContainer = styled.div`
    width: fit-content;
    height: 7.81vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const HeaderRightBodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const HeaderMiddleLeft = styled.svg`
    width: 3.61vw;
`

const HeaderMiddleRight = styled.svg`
    width: 3.61vw;
`

const MetaLogoContentContainer = styled.div`
    width: 22.65vw;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MetaLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 22.65vw;
    margin-left: -25px;

`

const MetaLogoSVG = styled.svg`
    width: 19.72vw;
`

function HeaderV2() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', height: 'fit-content', alignItems: 'center' }}>
            <HeaderLeftContainer>
                <div style={{ width: 'fit-content', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <HeaderLeftUpper viewBox="0 0 508 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M7.5 4.5L0 0.919873V9.58013L7.5 6V4.5ZM507.33 5.25L503 0.919873L498.67 5.25L503 9.58013L507.33 5.25ZM6.75 6H503V4.5H6.75V6Z" fill="white" />
                    </HeaderLeftUpper>
                    <Parallelogram width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.730438" y="5.065" width="6.13" height="6.13" transform="rotate(-45 0.730438 5.065)" fill="white" fillOpacity="0.5" />
                    </Parallelogram>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <HeaderButton content="home" delay='0s'></HeaderButton>
                    <HeaderButton content="lands" delay='0.12s'></HeaderButton>
                    <HeaderButton content="features" delay='0.25s'></HeaderButton>
                    <HeaderButton content="roadmap" delay='0.5s'></HeaderButton>
                    <HeaderLeftIcon viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path strokeWidth="2px" className="squiggle" d="M0.5 3.5V1H14L6.5 8.5H0" stroke="white" strokeOpacity="0.5" />
                        <path strokeWidth="2px" className="squiggle" d="M0 14H10.1075L23.2473 1H47" stroke="white" strokeOpacity="0.5" />
                        <path strokeWidth="2px" className="squiggle" d="M30 9.5L33.5 6H27.5L19.5 14H32.5L40.5 6" stroke="white" strokeOpacity="0.5" />
                    </HeaderLeftIcon>
                </div>
                <div style={{ width: 'fit-content', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <HeaderLeftDown viewBox="0 0 508 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M7.5 4.5L0 0.919873V9.58013L7.5 6V4.5ZM507.33 5.25L503 0.919873L498.67 5.25L503 9.58013L507.33 5.25ZM6.75 6H503V4.5H6.75V6Z" fill="white" />
                    </HeaderLeftDown>
                    <Parallelogram width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.730438" y="5.065" width="6.13" height="6.13" transform="rotate(-45 0.730438 5.065)" fill="white" fillOpacity="0.5" />
                    </Parallelogram>
                </div>
            </HeaderLeftContainer>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: 'fit-content' }}>

                <HeaderMiddleLeft viewBox="0 0 52 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path strokeWidth="2px" className="path" d="M51 2.5L12.5 41L50.5 79.5" stroke="white" strokeOpacity="0.5" />
                    <path strokeWidth="2px" className="path" d="M13.5 1L27 14.5L40.5 1.5" stroke="white" strokeOpacity="0.5" />
                    <path strokeWidth="2px" className="path" d="M0.5 1L21.5 20.5" stroke="white" strokeOpacity="0.5" />
                    <path strokeWidth="2px" className="path" d="M16 27L1.5 41L16 55" stroke="white" strokeOpacity="0.5" />
                    <path strokeWidth="2px" className="path" d="M21.5 62L2 81" stroke="white" strokeOpacity="0.5" />
                    <path strokeWidth="2px" className="path" d="M13.5 80.5L27 67L40.5 80.5" stroke="white" strokeOpacity="0.5" />
                </HeaderMiddleLeft>
                
                <HeaderMiddleRight viewBox="0 0 52 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path strokeWidth="2px" className="path" d="M1 2.5L39 41L0.5 79.5" stroke="white" strokeOpacity="0.5" />
                    <path strokeWidth="2px" className="path" d="M11 1.5L24.5 15L38 1.5" stroke="white" strokeOpacity="0.5" />
                    <path strokeWidth="2px" className="path" d="M49.5 1L30 20" stroke="white" strokeOpacity="0.5" />
                    <path strokeWidth="2px" className="path" d="M35.5 27L50 41L35.5 55" stroke="white" strokeOpacity="0.5" />
                    <path strokeWidth="2px" className="path" d="M30 61.5L51 81" stroke="white" strokeOpacity="0.5" />
                    <path strokeWidth="2px" className="path" d="M11 80.5L24.5 67.5L38 81" stroke="white" strokeOpacity="0.5" />
                </HeaderMiddleRight>

            </div>
            <HeaderRightContainer>
                <div style={{ width: 'fit-content', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <HeaderRightUpper viewBox="0 0 508 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M0.669873 5.25L5 9.58013L9.33013 5.25L5 0.919873L0.669873 5.25ZM500.5 6L508 9.58013V0.919873L500.5 4.5V6ZM5 6H501.25V4.5H5V6Z" fill="white" />
                    </HeaderRightUpper>
                </div>

                <HeaderRightBodyContainer>
                    <HeaderRightIcon viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotateY(180deg)' }}>
                        <path strokeWidth="2px" className="squiggle" d="M0.5 3.5V1H14L6.5 8.5H0" stroke="white" strokeOpacity="0.5" />
                        <path strokeWidth="2px" className="squiggle" d="M0 14H10.1075L23.2473 1H47" stroke="white" strokeOpacity="0.5" />
                        <path strokeWidth="2px" className="squiggle" d="M30 9.5L33.5 6H27.5L19.5 14H32.5L40.5 6" stroke="white" strokeOpacity="0.5" />
                    </HeaderRightIcon>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 'fit-content' }}>
                        <TwitterButton></TwitterButton>
                        <DiscordButton></DiscordButton>
                        <TelegramButton></TelegramButton>
                        <MenuButton></MenuButton>
                    </div>
                </HeaderRightBodyContainer>
                <div style={{ width: 'fit-content', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                    <HeaderRightDown viewBox="0 0 508 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M0.669873 5.25L5 9.58013L9.33013 5.25L5 0.919873L0.669873 5.25ZM500.5 6L508 9.58013V0.919873L500.5 4.5V6ZM5 6H501.25V4.5H5V6Z" fill="white" />
                    </HeaderRightDown>
                </div>


            </HeaderRightContainer>
        </div>

    );
}

export default HeaderV2;

