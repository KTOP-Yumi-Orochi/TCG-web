import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
    background-color: #a4a4a4;
    width: 100%;
    padding: 12px 25px;
    border-radius: 0.5rem;
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.1);
        opacity: 0;
        transition: .1s;
    }
    &:hover::before {
        opacity: 1;
    }
    &:active {
        transform: translateY(2px);
    }
`;

export default function TokenSwapButton({ content }) {
    return (
        <Container>
            {content}
        </Container>
    )
}