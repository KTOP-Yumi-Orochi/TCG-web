import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { LandingContext } from 'contexts/LandingContext';
import { txt, stl, nextLang, getRTL } from 'lang';

const animateRight = keyframes`
    0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
    }
    100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
    }
`
const animateLeft = keyframes`
    0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
    }
    100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
    }
`
const animateBottom = keyframes`
    0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
    }
    100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
    }
`
const animateTop = keyframes`
    0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
    }
    100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
    }
`
const MetaButtonStyle = styled.div`
    background-size: 100% 100%;
    position: relative;
    width: 58.5px;
    height: 43px;
    display: inline-flex;
    transform: translate(0%, 0%);
    overflow: hidden;
    color: #f7d4d4;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    -webkit-transform: translate(0%, 0%);
    &::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: #ad8585;
        opacity: 0;
        -webkit-transition: .1s opacity ease-in-out;
        transition: .1s opacity ease-in-out;
    }
    &:hover::before {
        opacity: 0.2;
    }

    >span {
        position: absolute;
    }

    :hover svg {
        fill: #FF1C6E;
    }

    &:hover > span:nth-child(1) {
        top: 0px;
        left: 0px;
        width: 100%;
        height: 2px;
        border-radius: 2px;
        background: -webkit-gradient(linear, right top, left top, from(rgba(43, 8, 8, 0)), to(#ffffff));
        background: linear-gradient(to left, rgba(43, 8, 8, 0), #ffffff);
        -webkit-animation: 1s ${animateTop} linear infinite;
                animation: 1s ${animateTop} linear infinite;
    }
    &:hover > span:nth-child(2) {
        top: 0px;
        right: 0px;
        height: 100%;
        width: 2px;
        background: -webkit-gradient(linear, left bottom, left top, from(rgba(43, 8, 8, 0)), to(#ffffff));
        background: linear-gradient(to top, rgba(43, 8, 8, 0), #ffffff);
        -webkit-animation: 1s ${animateRight} linear  infinite;
                animation: 1s ${animateRight} linear  infinite;
    }

    &:hover > span:nth-child(3) {
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 2px;
        background: -webkit-gradient(linear, left top, right top, from(rgba(43, 8, 8, 0)), to(#ffffff));
        background: linear-gradient(to right, rgba(43, 8, 8, 0), #ffffff);
        -webkit-animation: 1s ${animateBottom} linear infinite;
                animation: 1s ${animateBottom} linear infinite;
    }
    &:hover > span:nth-child(4) {
        top: 0px;
        left: 0px;
        height: 100%;
        width: 2px;
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(43, 8, 8, 0)), to(#ffffff));
        background: linear-gradient(to bottom, rgba(43, 8, 8, 0), #ffffff);
        -webkit-animation: 1s ${animateLeft} linear  infinite;
                animation: 1s ${animateLeft} linear  infinite;
    }

    >span:nth-child(5) {
        z-index: 20;
    }

    &::after {
        background: #fff;
        content: "";
        height: 155px;
        left: -75px;
        opacity: .2;
        position: absolute;
        top: -50px;
        transform: rotate(35deg);
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        width: 50px;
        z-index: -10;
    }
    &:hover::after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.215, 0.610, 0.355, 1);
    }
    &:active svg>path {
        fill: #FF1C6E;
        stroke: #FF1C6E;
    }

    @media (max-width: 735px) {
        transform: scale(0.7);
    }
`;
const MetaButtonContentStyle = styled.div`
    font-family: ${props =>props.lang ==='en' ? 'Israr-Syria' :'Kusanagi'};
    font-size: 14px;
    letter-spacing: 0px;
    text-transform: uppercase;
    font-weight: 400;
    color: white;
    margin: auto;
    z-index: 1;
    display: inline-flex;
    flex-direction: row;
    align-items: 'center';
    transform: ${props => props.lang == 'en' ? 'scale(-1, 1)' : 'scale(1, 1)'};
`;
const MetaButtonCornerRightUp = styled.div`
    position: absolute;
    top: -7px;
    right: 0px;
    z-index: -1;
    font-size: 16px;
`;
const MetaButtonCornerRightDown = styled.div`
    position: absolute;
    bottom: -3px;
    right: 0px;
    z-index: -1;
    font-size: 16px;
`;
const MetaButtonCornerLeftUp = styled.div`
    position: absolute;
    top: -7px;
    left: 0px;
    z-index: -1;
    font-size: 16px;
`
const MetaButtonCornerLeftDown = styled.div`
    position: absolute;
    bottom: -4px;
    left: 0px;
    z-index: -1;
    font-size: 16px;
    
`;

export default function LanguageButton({ marginTop = '0px', marginLeft = '0px', marginRight = '0px', marginBottom = '0px', margin, background = 'white', icon = "" ,}) {

    const { lang, setLang } = useContext(LandingContext);

    const handleClick = () => {
        setLang(nextLang(lang));
    }

    var style = stl(lang)
    var content = txt('buttons', 'languageButton', nextLang(lang));
    const isRTL = getRTL(lang);

    return (
        <div onClick={handleClick}>
            <MetaButtonStyle marginTop={marginTop} marginLeft={marginLeft} marginRight={marginRight} marginBottom={marginBottom} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div style={{ position: "absolute", zIndex: '-1' }}>
                <svg width="59" height="43" viewBox="0 0 59 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0911 41.9986L0.999974 21.0826V1H36.476L57.567 21.9159V41.9986H22.0911Z" fill="#FF1C6E" fillOpacity="0.3" stroke="#FF1C6E" strokeWidth="2"/>
                </svg>

                            
                </div>
                <MetaButtonContentStyle style={style} lang={lang}>
                    {content}
                </MetaButtonContentStyle>
                <MetaButtonCornerLeftUp>


                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.70886 0.481445L0 9.19031V0.481445H8.70886Z" fill="#FF1C6E" />
                    </svg>
                </MetaButtonCornerLeftUp>
                <MetaButtonCornerLeftDown>


                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-3.80676e-07 0.343142L8.70886 9.052L0 9.052L-3.80676e-07 0.343142Z" fill="#FF1C6E" />
                    </svg>
                </MetaButtonCornerLeftDown>
                <MetaButtonCornerRightUp>


                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.29114 0.481445L9 9.19031V0.481445H0.29114Z" fill="#FF1C6E" />
                    </svg>
                </MetaButtonCornerRightUp>
                <MetaButtonCornerRightDown>

                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0.343142L0.29114 9.052L9 9.052L9 0.343142Z" fill="#FF1C6E" />
                    </svg>
                </MetaButtonCornerRightDown>
            </MetaButtonStyle>
        </div>
    )
}