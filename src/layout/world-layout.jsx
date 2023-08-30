import ReactFullpage from "@fullpage/react-fullpage";
import { LandingContext } from "contexts/LandingContext";
import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import song from "bg_sound.mp3";
import SoundButton from "components/buttons/SoundButton";
import HeaderV3 from "components/header/HeaderV3";

import Arena1 from "pages/world/sections/arena1-section";
import Arena2 from "pages/world/sections/arena2-section";
import Arena3 from "pages/world/sections/arena3-section";
import Arena4 from "pages/world/sections/arena4-section";

import BgSound from "assets/bg_sound.mp3";

const HeaderBox = styled.div`
  position: absolute;
  width: 100%;
  height: 78px;
  top: 0;
  z-index: 3;
`;
const HeaderContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  overflow: hidden;
  direction: initial;
  margin-top: 30px;
  @media (max-width: 1300px) {
    margin-top: 20px;
  }
  @media (max-width: 490px) {
    margin-top: 11px;
  }
`;
const SoundButtonArea = styled.div`
  position: fixed;
  top: 50%;
  z-index: 1;
  right: 10px;
`;
const SidebarContainer = styled.div`
    position:absolute;
    width: calc(50vw - 900px);
    z-index:1;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding-left: 50px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    @media (max-width: 1920px) {
      width: 60px;
    }
    @media (max-width: 768px) {
        width: 24px;
    }
`;
const ScrollTransition = styled.div`
    display: inline-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 60px;
    height: ${props => props.height}px;
    @media(max-width:1300px){
      margin-top: 40px;
    }
    @media (max-width: 768px) {
      display: none !important;
    }
    
`;
const ScrollUpsideBarAnimation = keyframes`
    0%{
        clip-path: inset(175px 0px 0px 0px);
    }
    100%{
        clip-path: inset(0px 0px 0px 0px);
    }
`
const ScrollUpsideBar = styled.svg`
    animation: ${ScrollUpsideBarAnimation} 1s ease 1;
    animation-fill-mode: forwards;
`;
const RectButtonsAppearAnimation = keyframes`
    0%{
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
    100%{
        transform: translateX(0px);
        -webkit-transform: translateX(0px);
    }
`;
const RectButtonsTransition = styled.div`
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    display: flex;
    flex-direction: column;
    gap: 8px;
    animation: ${RectButtonsAppearAnimation} 0.8s ease 1;
    animation-fill-mode: forwards;
`;
const RectButtonsContainer = styled.div`
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
`;
const RectButtonAnimation = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;
const RectButtonContainer = styled.div`
    transform: ${props => props.play === 'true' ? 'scale(0)' : 'scale(1)'};
    animation: ${props => props.play === 'true' ? RectButtonAnimation : ''} 0.5s ${props => props.duration * props.index}s cubic-bezier(.65,.01,.39,.99) 1;
    animation-fill-mode: forwards;
    display: flex;
    align-items: center;
    margin-left: -11px;
`;
const SidebarText = styled.span`
    color: #FFF;
    font-size: 20px;
    cursor: pointer;
    margin-left: 10px;
    padding: 2px 10px;
    width: 150px;
`;

const Fullpage = (props) => {
  return (
    <ReactFullpage
      licenseKey={"3B75641E-F89E4DA2-B934C3D7-ED8E03F1"}
      scrollingSpeed={1000} /* Options here */
      onLeave={(prev, current) => props.moveToAction(current.index)}
      normalScrollElements=".worldModal"

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section"><Arena1 size={props.size} /></div>
            <div className="section"><Arena2 size={props.size} /></div>
            <div className="section"><Arena3 size={props.size} /></div>
            <div className="section"><Arena4 size={props.size} /></div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
};

const WorldLayout = () => {
  const { size } = useContext(LandingContext);
  const audioRef = React.useRef(new Audio(song));
  const [isMute, setIsMute] = useState(false);
  const arrayIterator = [
    { world: "Mondstadt" },
    { world: "Liyue" },
    { world: "Inazuma" },
    { world: "Sumeru" },
  ];

  const [sectionIdx, setSectionIdx] = useState(0)
  audioRef.current.loop = true;

  const player = () => {
    audioRef.current.play();
  };

  const pause = () => {
    audioRef.current.pause();
  };

  useEffect(() => {
    isMute ? player() : pause();
  }, [isMute]);

  const handleSelectSlider = (idx) => {
    setSectionIdx(idx);
    window.fullpage_api.moveTo(idx + 1)
  }

  const handleSetIndex = (idx) => {
    setSectionIdx(idx)
  }
  var audio_tag;
  React.useEffect(() => {
    audio_tag = document.getElementById('mfo_mp3');
  })
  const handlePlay = () => {
    setIsMute(!isMute);
    if (isMute) {
      audio_tag.pause();
    }
    else {
      audio_tag.play();
    }


  };
  const RectButton = ({ index, world }) => {
    return (
      <RectButtonContainer duration={0.1} onClick={() => handleSelectSlider(index)}>
        <svg width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '6px', cursor: 'pointer' }}>
          <rect x="0.707107" y="10" width="13.1421" height="13.1421" transform="rotate(-45 0.707107 10)" fill={sectionIdx === index ? "#FF1C6E" : 'white'} fillOpacity="0.3" stroke={sectionIdx === index ? "#FF1C6E" : 'white'} />
        </svg>
        <SidebarText style={sectionIdx === index ? { backgroundColor: "rgba(255, 28, 110, 0.5)" } : { backgroundColor: 'teransparent' }}>{world}</SidebarText>
      </RectButtonContainer>

    )
  }

  return (
    <>
      <HeaderBox>
        <HeaderContainer>
          <HeaderV3 setActiveIndex={setSectionIdx}></HeaderV3>
        </HeaderContainer>
      </HeaderBox>

      <SoundButtonArea>
        <SoundButton callback={handlePlay} isMute={isMute}></SoundButton>
      </SoundButtonArea>
      <div style={{ textAlign: "center", display: "none" }}>
        <audio id="mfo_mp3" style={{ display: 'none' }} src={BgSound} controls />
      </div>
      {sectionIdx < 9 ?
        <SidebarContainer>
          <ScrollTransition height={size.height} >
            <div style={{ marginBottom: '1.07vh' }}>
              {size.width > 1300 ?
                <ScrollUpsideBar height="18vh" viewBox="0 0 10 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M5.00001 0.669876L9.33014 5L5.00001 9.33012L0.669881 5L5.00001 0.669876ZM4.25001 185L4.25001 5L5.75001 5L5.75001 185L4.25001 185Z" fill="white" />
                </ScrollUpsideBar>
                :
                <ScrollUpsideBar width="10" height="67" viewBox="0 0 10 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M5.00023 0.669873L9.33034 5.00002L5.0002 9.33013L0.670089 4.99998L5.00023 0.669873ZM4.25 66.5L4.25022 5L5.75022 5L5.75 66.5L4.25 66.5Z" fill="white" />
                </ScrollUpsideBar>

              }
            </div>

            <RectButtonsContainer>
              <RectButtonsTransition >
                {
                  arrayIterator.map((item, idx) => {
                    return (
                      <RectButton index={idx} world={item.world} key={idx} ></RectButton>
                    )
                  })
                }
              </RectButtonsTransition>
            </RectButtonsContainer>

            <div style={{ marginTop: '1.07vh' }}>
              {size.width > 1400 ?
                <ScrollUpsideBar id="upperarrow" height="18vh" viewBox="0 0 10 185" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
                  <path opacity="0.5" d="M5.00001 0.669876L9.33014 5L5.00001 9.33012L0.669881 5L5.00001 0.669876ZM4.25001 185L4.25001 5L5.75001 5L5.75001 185L4.25001 185Z" fill="white" />
                </ScrollUpsideBar>
                :
                <ScrollUpsideBar width="10" height="66" viewBox="0 0 10 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M5.00023 65.8301L9.33034 61.5L5.0002 57.1699L0.670089 61.5L5.00023 65.8301ZM4.25 2.63777e-06L4.25022 61.5L5.75022 61.5L5.75 -2.63777e-06L4.25 2.63777e-06Z" fill="white" />
                </ScrollUpsideBar>
              }
            </div>
          </ScrollTransition>
        </SidebarContainer> : <></>
      }
      <Fullpage size={size} moveToAction={handleSetIndex} />

    </>
  );
};

export default WorldLayout;
