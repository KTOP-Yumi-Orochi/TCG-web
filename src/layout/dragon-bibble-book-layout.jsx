import React, { useState, useEffect, useContext } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { LandingContext } from "contexts/LandingContext";
import styled from "styled-components";
import song from "bg_sound.mp3";
import SoundButton from "components/buttons/SoundButton";
import DragonBibbleBookSection from "pages/whitepaper/section/DragonBibbleBookSection";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "config/DragonBubbleparticlesConfig";

import BgSound from "assets/bg_sound.mp3";

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
                        <div className="section"><DragonBibbleBookSection size={props.size} /></div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    )
};

const DragonBibbleLayout = () => {
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
    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    return (
        <>
            <Particles init={particlesInit} options={particlesOptions} />
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

export default DragonBibbleLayout;
