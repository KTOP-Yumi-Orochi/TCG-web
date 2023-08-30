import React from 'react';
import styled, { keyframes } from 'styled-components';

const ButtonAnimation = keyframes`
    0%{
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`

const Container = styled.div`
    transform: scale(0);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${ButtonAnimation} 1.5s 0.5s ease 1;
    animation-fill-mode: forwards;
    &:hover svg{
        transform: scale(1.2);
        transition: transform 0.5s ease;
    }
    @media (max-width: 1080px) {
        margin-right: 21px;
    }
    @media (max-width: 490px) {
        display: none;
    }
`
const Icon = styled.svg`
    width: 18px;
`

export default function TelegramButton() {
    return (
        <Container>
            <Icon viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.06289 10.3856L6.76514 14.5736C7.19114 14.5736 7.37564 14.3906 7.59689 14.1708L9.59414 12.2621L13.7326 15.2928C14.4916 15.7158 15.0264 15.4931 15.2311 14.5946L17.9476 1.86557L17.9484 1.86482C18.1891 0.742816 17.5426 0.304066 16.8031 0.579316L0.835634 6.69256C-0.254117 7.11556 -0.237617 7.72306 0.650384 7.99831L4.73264 9.26806L14.2149 3.33482C14.6611 3.03932 15.0669 3.20282 14.7331 3.49832L7.06289 10.3856Z" fill="white" />
            </Icon>
        </Container>
    )
}