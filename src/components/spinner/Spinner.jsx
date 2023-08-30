import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
`
const wave = keyframes`
    0%, 100% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(2);
    }
`
const FirstLine = styled.div`
    float: left;
    margin: 40% 2% 0 0;
    width: 4%;
    height: 16%;
    background-color: #FFF;
    animation: ${wave} 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) infinite;
    animation-delay: 0.1s;
`
const SecondLine = styled.div`
    float: left;
    margin: 40% 2% 0 0;
    width: 4%;
    height: 16%;
    background-color: #FFF;
    animation: ${wave} 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) infinite;
    animation-delay: 0.2s;
`
const ThirdLine = styled.div`
    float: left;
    margin: 40% 2% 0 0;
    width: 4%;
    height: 16%;
    background-color: #FFF;
    animation: ${wave} 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) infinite;
    animation-delay: 0.3s;
`
const FourthLine = styled.div`
    float: left;
    margin: 40% 2% 0 0;
    width: 4%;
    height: 16%;
    background-color: #FFF;
    animation: ${wave} 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) infinite;
    animation-delay: 0.4s;
`
const FifthLine = styled.div`
    float: left;
    margin: 40% 0 0 0;
    width: 4%;
    height: 16%;
    background-color: #FFF;
    animation: ${wave} 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) infinite;
    animation-delay: 0.5s;
`

export default function Spinner() {
    return (
        <Container>
            <FirstLine />
            <SecondLine />
            <ThirdLine />
            <FourthLine />
            <FifthLine />
        </Container>
    )
}