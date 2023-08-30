import React from "react";
import styled from "styled-components";

import NewsBackground from "assets/images/news/newscard-bg.png";
import NewsTitle from "assets/images/news/newscard-title.png";
import Youtube from "assets/images/news/youtube.png";
import Medium from "assets/images/news/medium.png";

const Container = styled.div`
  width: 400px;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${NewsBackground});
  padding: 30px;
`;
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
`
const TitleContainer = styled.div`
    height: 60px;
    overflow: hidden;
`
const TitleContent = styled.span`
    font-size: 22px;
    color: #000000;
    font-weight: 500;
`
const SocialImage = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${NewsTitle});
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    margin-top: 20px;
    height: 37px;
`
const SocialLogo = styled.img`
    margin-left: 55px;
`
const SocialContent = styled.span`
    margin-left: 10px;
    font-size: 16px;
    color: #FFFFFF;
`
const ImageField = styled.div`
    overflow: hidden;
    margin-top: 10px;
    height: 200px;
    position: relative;
    display: flex;
    justify-content: center;
`
const CoverImage = styled.img`
    position: absolute;
    object-fit: cover;
    filter: blur(8px);
    width: 100%;
    height: 100%;
`
const ContentImage = styled.img`
    position; relative;
    object-fit: contain;
    height: 200px;
    z-index: 2;
`
const DateImage = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${NewsTitle});
    width: 100%;
    height: auto;
    display: flex;
    align-itmes: center;
    padding: 8px 0;
    margin-top: 10px;
`
const DateContent = styled.span`
    font-size: 16px;
    color: #FFFFFF;
    margin-left: 55px;
`
const TextContainer = styled.div`
    overflow-y: auto;
    margin-top: 10px;
`
const TextCpntent = styled.span`
    font-size: 20px;
    color: #000000;
`

export default function NFTCard({ title, date, content, social, image }) {
    return (
        <Container>
            <CardContent>
                <TitleContainer>
                    <TitleContent>{title}</TitleContent>
                </TitleContainer>
                {social === "youtube#video" ? <SocialImage>
                    <SocialLogo src={Youtube} width={30} height={21} alt="" />
                    <SocialContent>Youtube</SocialContent>
                </SocialImage> : <SocialImage>
                    <SocialLogo src={Medium} width={28} alt="" />
                    <SocialContent>Medium</SocialContent>
                </SocialImage>}
                <ImageField>
                    <CoverImage src={image} alt="" />
                    <ContentImage src={image} alt="" />
                </ImageField>
                <DateImage>
                    <DateContent>{date}</DateContent>
                </DateImage>
                <TextContainer>
                    <TextCpntent>{content}</TextCpntent>
                </TextContainer>
            </CardContent>
        </Container>
    );
}
