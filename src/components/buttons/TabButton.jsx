import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width}px;
    height: 27px;
    overflow: hidden;
    cursor: pointer;
`
const Content = styled.div`
    font-family: 'Kusanagi';
    font-size: 0.9vw;
    text-transform: uppercase;
    color: ${props => props.color};
    text-shadow: ${props => props.textShadow};
    &:hover {
        color: #FF1C6E;
        text-shadow: 0px 4px 6px #FF1C6E;
    }
    &:focus {
        color: #FF1C6E;
        text-shadow: 0px 4px 6px #FF1C6E;
    }
`

export default function TabButton({ width = 'fit-content', fontSize = 0, direction = 'up', content = '', fontFamily = 'Kusanagi', onClick, color = "", textShadow = "" }) {
    return (
        <Container height={fontSize * 1.3}>
            <Content fontSize={fontSize} direction={direction} fontFamily={fontFamily} onClick={onClick} color={color} textShadow={textShadow}>
                {content}
            </Content>
        </Container>
    )
}
