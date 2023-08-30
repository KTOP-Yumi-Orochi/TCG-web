import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const ImageSection = styled.div`
    width: 60%;
    margin-bottom: 15px;
    border-radius: 15px;
    overflow: hidden;
`;
const AvatarImage = styled.img`
    width: 100%;
    height: auto;
`;
const Content = styled.div`
    width: 100%;
    text-align: center;
`;
const Name = styled.div`
    font-size: 48px;
    font-weight: 500;
    line-height: 1;
    color: #07963a;
    margin-bottom: 10px;
`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #FFF;
`;
const SocialLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;
const SocialImage = styled.img`
    box-sizing: border-box;
    width: 40px;
`;

export default function AboutUsCard({avatar, memberName, description, socialLink}) {
    return (
        <Container>
            <ImageSection>
                <AvatarImage src={avatar} alt="" />
            </ImageSection>
            <Content>
                <Name>{memberName}</Name>
                <Description>{description}</Description>
                <SocialLink>
                    {socialLink.map((social, index) => (
                        <SocialImage key={index} src={social} alt="" />
                    ))}
                </SocialLink>
            </Content>
        </Container>
    )
}