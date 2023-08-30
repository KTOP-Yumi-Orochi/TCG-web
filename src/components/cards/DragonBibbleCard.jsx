import React from "react";
import styled from "styled-components";

const Container = styled.div`
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 306px;
    height: 172px;
    background-color: #111;
    border-radius: 4px;
    border: 1px solid rgba(255,255,255,0.1);
    overflow: hidden;
    &:hover {
        border: #fff solid 1px;
    }
`;
const ImageContent = styled.img`
    opacity: 0.75;
    transition: all 0.5s 0s ease;
    width: 100%;
    height: 100%;
    &:hover {
        opacity: 1;
        transform: scale(1.2);
    }
`;
const Title = styled.div`
    width: 100%;
    position: absolute;
    background-color: #111;
    bottom: 0;
    height: 36px;
    line-height: 36px;
    opacity: 0.75;
    text-align: center;
    font-size: 20px;
    color: #fff;
`;

export default function DragonBibbleCard({image, title}) {
    return (
        <Container>
            <ImageContent src={image} alt="" />
            <Title>{title}</Title>
        </Container>
    )
}