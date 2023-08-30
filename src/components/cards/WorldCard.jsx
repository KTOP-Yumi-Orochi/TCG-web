import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;
const Header = styled.span`
    position: relative;
    font-weight: 400;
    font-size: 32px;
    line-height: 66px;
    height: 66px;
    width: 100%;
    border-bottom: 3px solid rgba(255,255,255,0.1);
    margin-bottom: 20px;
    word-break: break-word;
    word-wrap: break-word;
    color: #fff;
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 80px;
        height: 3px;
        background: #cca574;
        box-sizing: border-box;
    }
`;
const Content = styled.span`
    word-break: break-word;
    word-wrap: break-word;
    color: #fff;
    font-size: 18px;
    line-height: 1.8;
`;
const Image = styled.img`
    width: 100%;
    height: auto;
    margin: 20px auto;
`;

export default function WorldCard({title, content, image}) {
    return (
        <Container>
            <Header>{title}</Header>
            {content.map((text, index) => (
                <Content key={index}>{text.text}</Content>
            ))}
            <Image src={image} alt="" />
        </Container>
    )
}