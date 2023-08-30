import React from 'react';
import styled, {keyframes} from 'styled-components';

const HeaderButtonAnimation = keyframes`
    0% {
        transform: translateY(200%);
    }
    100% {
        transform: translateY(0%);
    }
`

const HeaderButtonStyle = styled.div`
    font-family: 'Kusanagi';
    line-height: 2vw;
    font-size: 1vw;
    color: white;
    transform: translateY(200%);
    animation-name: ${HeaderButtonAnimation};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-delay: ${props => props.delay};
    animation-fill-mode: forwards;
    &::before{
        opacity: 0
    }

    &::after {
        background: #fff;
        content: "";
        height: 155px;
        left: -150px;
        opacity: .7;
        position: absolute;
        top: -50px;
        transform: rotate(35deg);
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        width: 50px;
        z-index: -20;
    }
    
    &:hover::after {
        left: 120%;
        opacity: 0;
        transition: all 550ms cubic-bezier(0.215, 0.610, 0.355, 1);
    }

    /* @media (max-width:1385px) {
        font-size: 12px;
    } */

    @media (max-width: 1080px) {
        display: none;
    }
    cursor: pointer;
`

export default function HeaderButton ({content, delay}) {
    return (
        <div style={{width: 'fit-content', height: '2.63vh', overflow: 'hidden', display: 'flex', alignItems: 'center'}}>
            <HeaderButtonStyle delay={delay}>
                {content}
            </HeaderButtonStyle>
        </div>
        
    )
}