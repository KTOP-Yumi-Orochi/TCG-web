import React, { useState, useEffect, useContext } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { LandingContext } from "contexts/LandingContext";
import styled from "styled-components";
import HeaderV3 from "components/header/HeaderV3";
import song from "bg_sound.mp3";
import SoundButton from "components/buttons/SoundButton";
import BuyCoinSection from "pages/coin/section/BuyCoinSection";

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
const Fullpage = (props) => {
    return (
        <ReactFullpage
            licenseKey={"3B75641E-F89E4DA2-B934C3D7-ED8E03F1"}
            scrollingSpeed={1000} /* Options here */
            onLeave={(prev, current) => props.moveToAction(current.index)}
            scrollOverflow={true}
            render={({ state, fullpageApi }) => {
                console.log("current index: ", state)
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section"><BuyCoinSection size={props.size} /></div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    )
};

const BuyCoinLayout = () => {
    const { size } = useContext(LandingContext);
    const audioRef = React.useRef(new Audio(song));
    const [isMute, setIsMute] = useState(false);
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

    return (
        <>
            <HeaderBox>
                <HeaderContainer>
                    <HeaderV3></HeaderV3>
                </HeaderContainer>
            </HeaderBox>

            <SoundButtonArea>
                <SoundButton callback={handlePlay} isMute={isMute}></SoundButton>
            </SoundButtonArea>
            <div style={{ textAlign: "center", display: "none" }}>
                <audio id="mfo_mp3" style={{ display: 'none' }} src={BgSound} controls />
            </div>

            <Fullpage size={size} />
        </>
    );
};

export default BuyCoinLayout;
