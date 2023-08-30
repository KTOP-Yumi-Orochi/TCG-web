import React from 'react';
import styled, { keyframes } from 'styled-components';
import Mute from "assets/images/mute.svg";
import Unmute from "assets/images/Speaker.svg";

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
const SoundButtonStyle = styled.div`
    background-size: 100% 100%;
    position: relative;
    width: 53px;
    height: 56px;
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

`
const SoundButtonContentStyle = styled.div`
    margin: auto;
    z-index: 1;
`;
const ButtonAnimation = (show) => keyframes`
    0% { 
        transform: ${show ? 'translateX(0px)' : 'translateX(72px)'};
    }
    100% {
        transform: ${show ? 'translateX(72px)' : 'translateX(0px)'};
    }
`
const MobileTransformEffect = (show) => keyframes`
    0% { 
        transform: scale(0.85) ${show ? 'translateX(15px)' : 'translateX(72px)'};
    }
    100% {
        transform:  scale(0.85) ${show ? 'translateX(72px)' : 'translateX(15px)'};
    }
`
const MiddleTransformEffect =  (show) =>keyframes`
    0% { 
        transform: scale(0.87) ${show ? 'translateX(15px)' : 'translateX(74px)'};
    }
    100% {
        transform:  scale(0.87) ${show ? 'translateX(74px)' : 'translateX(15px)'};
    }
`

const Transition = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${props =>props.show ?  'translateX(72px)': 'translateX(0px)'};
    animation: 1s ${props =>ButtonAnimation(props.show)};
    @media(max-width:1300px){
        transform: scale(0.87) ${props =>props.show ?  'translateX(74px)': 'translateX(15px)'};
        animation: 1s ${props =>MiddleTransformEffect(props.show)};
    }
    @media(max-width:490px){
        transform: scale(0.85) ${props =>props.show ?  'translateX(72px)': 'translateX(15px)'};
        animation: 1s ${props =>MobileTransformEffect(props.show)};
    }
`


export default function SoundButton({ marginLeft = '0px', marginRight = '0px', marginTop = '0px', marginBottom = '0px', margin = '0px', callback, icon, active = true, isMute }) {

    const [show,setShow] = React.useState(false);
    const showButton = () =>{
        setShow(!show);
    } 
    return (
        <Transition show ={show}>
            <svg width="16" height="35" viewBox="0 0 16 35" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }} onClick={showButton}>
                <path d="M7.57095e-07 17.3203L15.5 34.641L15.5 -6.77527e-07L7.57095e-07 17.3203Z" fill="#FF1C6E" />
            </svg>
            <div onClick={() => callback ? callback() : () => { }} >
                <SoundButtonStyle marginTop={marginTop} marginLeft={marginLeft} marginBottom={marginBottom} marginRight={marginRight} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div style={{ position: "absolute", zIndex: '-1', display: 'flex', flexDirection: 'row' }} >
                        <svg width="53" height="56" viewBox="0 0 53 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="50.7846" height="54" fill="#FF1C6E" fillOpacity="0.3" />
                            <rect x="1" y="1" width="50.7846" height="54" stroke="#FF1C6E" strokeWidth="2" />
                        </svg>
                    </div>
                    <SoundButtonContentStyle>
                        <img src={!isMute ? Mute : Unmute} alt='sound'></img>
                    </SoundButtonContentStyle>
                </SoundButtonStyle>
            </div>
        </Transition>
    )
}