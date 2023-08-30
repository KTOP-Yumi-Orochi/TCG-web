import React from "react";
import styled from "styled-components";

import StickerImage from "assets/images/coin/Coincard-sticker.png";
import TitleImage from "assets/images/coin/Coincard-title.png";

const Container = styled.div`
  width: 340px;
  height: 100%;
  @media (max-width: 1280px) {
    width: 260px;
  }
  @media (max-width: 490px) {
    width: 220px;
  }
  &::before {
    position: absolute;
    z-index: 2;
    top: -18px;
    left: 50%;
    display: block;
    content: '';
    width: 31px;
    height: 38px;
    background-image: url(${StickerImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: translateX(-50%);
  }
`;
const ImageContainer = styled.div`
    width: 100%;
    height: 210px;
    box-sizing: border-box;
    border: 2px solid #fff;
    overflow: hidden;
`;
const CoverImage = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: inline-block;
  overflow: hidden;
  transition: all 0.5s 0s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
const Title = styled.p`
  width: 276px;
  height: 40px;
  font-size: 24px;
  font-family: Roboto;
  line-height: 40px;
  color: #f4d8a8;
  text-align: center;
  margin: 20px auto 0;
  background-image: url(${TitleImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function CoinCard({ image, title }) {
  return (
    <Container>
      <ImageContainer>
        <CoverImage src={image} width="100%"></CoverImage>
      </ImageContainer>
      <Title>{title}</Title>
    </Container>
  );
}
