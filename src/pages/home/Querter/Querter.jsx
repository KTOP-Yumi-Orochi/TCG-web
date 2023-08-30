import Q1 from "pages/home/Querter/Q1";
import Q2 from 'pages/home/Querter/Q2';
import Q3 from 'pages/home/Querter/Q3';
import Q4 from 'pages/home/Querter/Q4';
import styled from "styled-components";
import React from 'react';

const QuerterContainer = styled.div`
    height: ${props => props.height - 192}px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    align-items: center;
    background-image : url('assets/images/backgrounds/2560/section8.png');
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 116px;
    padding-bottom: 74px;
    background-position: center;
    @media(max-width:1920px){
        background-image : url('assets/images/backgrounds/1920/section8.png');
    }
    @media(max-width:1440px){
        background-image: url('assets/images/backgrounds/roadmap.png');
        }
        @media (max-width: 1280px) {
        background-image: url('assets/images/backgrounds/1280/section8.png');
    }
    @media(max-width:490px){
        background-image : url('assets/images/backgrounds/mobile/section8.png');
    }
`;
const QuerterBody = styled.div`
    height: ${props => props.height - 194}px;
    overflow: scroll;
    scrollbar-width: none;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;


export default function Querter({ setMoveNext, size, direction }) {
    const querterRef = React.useRef();
    const q1 = React.useRef();
    const q2 = React.useRef();
    const q3 = React.useRef();
    const q4 = React.useRef();
    const handleWheel = (e) => {
        const isBottom = querterRef.current.scrollHeight - Math.floor(querterRef.current.scrollTop) === querterRef.current.clientHeight;
        const isTop = querterRef.current.scrollTop === 0;
        if (direction === 'down') {
            if(isBottom) {
                setMoveNext(true);
            }
            else if(isTop) {
                setMoveNext(true);
            }
            else {
                e.stopPropagation();
            }
        } else {
            if(isTop) {
                setMoveNext(true);    
            }
            else if(isBottom) {
                setMoveNext(true);
            }
            else {
                e.stopPropagation()
            }
        }
    }

    const handleTouchStart = e => {
        e.stopPropagation(); 
    }
    const handleTouchEnd = (e) => {

        e.stopPropagation();
        const isBottom = querterRef.current.scrollHeight - Math.floor(querterRef.current.scrollTop) === querterRef.current.clientHeight;
        const isTop = querterRef.current.scrollTop === 0;
        if (direction === 'down') {
            if(isBottom) {
                window.fullpage_api.moveSectionDown();
            }
            else if(isTop) {
                window.fullpage_api.moveSectionUp();
            }
            else {
                e.stopPropagation();
            }
        } else {
            if(isTop) {
                window.fullpage_api.moveSectionUp();
            }
            else if(isBottom) {
                window.fullpage_api.moveSectionDown();
            }
            else {
                e.stopPropagation()
            }
        }
    }

    return (
        <div >
            <QuerterContainer height={size.height}>
               
                <QuerterBody height={size.height} onTouchMove={e => e.preventDefault} onTouchMoveCapture = {(e) =>e.stopPropagation()} onWheel={(e) => handleWheel(e)} onTouchStart={(e) => handleTouchStart(e)} onTouchEnd={e => handleTouchEnd(e)} onTouchCancelCapture={e => handleTouchEnd(e)} ref={querterRef}>
                    <div ref={q1} style={{ marginTop: '60px' }}>
                      
                        <Q1 size={size}></Q1>
                    </div>
                    <div ref={q2} style={{ marginTop: '60px' }}>
                      
                        <Q2 size={size}></Q2>
                    </div>
                    <div ref={q3} style={{ marginTop: '60px' }}>
                      
                        <Q3 size={size}></Q3>
                    </div>
                    <div ref={q4} style={{ marginTop: '60px' }}>
                     
                        <Q4 size={size}></Q4>
                    </div>
                </QuerterBody>
            </QuerterContainer>
        </div>

    )
}
