import React from 'react';
import styled, { keyframes } from 'styled-components';

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
const FeatureButtonStyle = styled.div`
    background-size: 100% 100%;
    position: relative;
    width: 53px;
    height: 53px;
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
    cursor:pointer;
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
const FeatureButtonContentStyle = styled.div`
    margin: auto;
    z-index: 1;
`;
const FeatureButtonCornerRightUp = styled.div`
    position: absolute;
    top: -11px;
    right: 0px;
    z-index: -1;
`;
const FeatureButtonCornerRightDown = styled.div`
    position: absolute;
    bottom: -6px;
    right: 0px;
    z-index: -1;
`;
const FeatureButtonCornerLeftUp = styled.div`
    position: absolute;
    top: -10px;
    left: 0px;
    z-index: -1;
`
const FeatureButtonLeftDown = styled.div`
    position: absolute;
    bottom: -4px;
    left: 0px;
    z-index: -1;
`;
export default function FeatureButton({ marginLeft = '0px', marginRight = '0px', marginTop = '0px', marginBottom = '0px', margin = '0px', callback, icon, active=true }) {

    return (
        <div>
            <FeatureButtonStyle marginTop={marginTop} marginLeft={marginLeft} marginBottom={marginBottom} marginRight={marginRight} onClick={() => callback ? callback() : {}}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div style={{ position: "absolute", zIndex: '-1' }}>
                    <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.28232 52.352L0.882812 44.7661V0.5H45.3353L52.7348 8.08583V52.352H8.28232Z" fill={active ? '#FF1C6E' : 'white'} fillOpacity="0.3" stroke={active ? '#FF1C6E' : 'white'} />
                    </svg>
                </div>

                <FeatureButtonContentStyle>
                    <img src={icon} alt=''></img>
                </FeatureButtonContentStyle>

                <FeatureButtonCornerLeftUp>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.10943 0L0.382812 7.68756V0H7.10943Z" fill={active ? '#FF1C6E' : 'white'} />
                    </svg>
                </FeatureButtonCornerLeftUp>
                
                <FeatureButtonLeftDown>
                    <svg width="5" height="6" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.18754 5.85156L0.382812 0.0858927V5.85156H5.18754Z" fill={active ? '#FF1C6E' : 'white'} />
                    </svg>
                </FeatureButtonLeftDown>
                
                <FeatureButtonCornerRightUp>
                    <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.42965 0L5.23438 5.76567V0H0.42965Z" fill={active ? '#FF1C6E' : 'white'} />
                    </svg>
                </FeatureButtonCornerRightUp>
                
                <FeatureButtonCornerRightDown>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.507761 7.85156L7.23438 0.164002V7.85156H0.507761Z" fill={active ? '#FF1C6E' : 'white'} />
                    </svg>
                </FeatureButtonCornerRightDown>
            </FeatureButtonStyle>
        </div>
    )
}