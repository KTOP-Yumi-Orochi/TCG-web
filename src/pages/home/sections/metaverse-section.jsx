import React from "react";
import ArticleDecorator from "components/textDecorator/ArticleDecorator";
import TextDecorator from "components/textDecorator/TextDecorator";
import styled from "styled-components";
import NFTCard from "components/NFT/NFTCard";
import SliderNFT from "components/SliderNFT/SliderNFT";

import Background_2560 from "assets/images/backgrounds/2560/section3.png";
import Background_1920 from "assets/images/backgrounds/1920/section3.png";
import Background from "assets/images/backgrounds/metaverse.png";
import Background_1280 from "assets/images/backgrounds/1280/section3.png";
import Background_mobile from "assets/images/backgrounds/mobile/section3.png";


const Container = styled.div`
  width: 100vw;
  height: ${(props) => props.height}px;
  background-image: url(${Background_2560});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center bottom;
  @media (max-width: 1920px) {
    background-image: url(${Background_1920});
  }
  @media (max-width: 1440px) {
    background-image: url(${Background});
  }
  @media (max-width: 1400px) {
    align-items: end;
  }
  @media (max-width: 1280px) {
    background-image: url(${Background_1280});
  }
  @media (max-width: 490px) {
    background-image: url(${Background_mobile});
  }
`;
const PageContainer = styled.div`
  height: ${(props) => props.height - 194}px;
  @media (max-width: 1400px) {
    height: ${(props) => props.height - 94}px;
  }
`;
const BodyContainer = styled.div`
  max-width: 1800px;
  width: calc(100vw - 120px);
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
  @media (max-width: 768px) {
    height: ${(props) => props.height - 60}px;
    justify-content: flex-end;
    width: calc(100vw - 48px);
  }
`;
const LeftContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const RightContainer = styled.div`
  max-width: 900px;
  display: flex;
  overflow: auto;
  scrollbar-width: none;
  height: ${(props) => props.height - 194}px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
  @media (max-width: 1400px) {
    margin-top: -50px;
  }
`;
const MobileNFTContainer = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;
  width: 100%;
`;
const FooterContainer = styled.div`
  display: none;
  @media (max-width: 490px) {
    display: block;
    height: 52px;
  }
`;
const nfts = [
  {
    label: "gold forest",
    type: "gold",
    title: "farm16",
    content: "32 x 32 area",
  },
  {
    label: "silver forest",
    type: "silver",
    title: "north128",
    content: "128 x 128 area",
  },
  {
    label: "diamond forest",
    type: "diamond",
    title: "east128",
    content: "128 x 128 area",
  },
  {
    label: "platinum forest",
    type: "platinum",
    title: "asia64",
    content: "64 x 64 area",
  },
  {
    label: "gold forest",
    type: "gold",
    title: "farm16",
    content: "32 x 32 area",
  },
  {
    label: "silver forest",
    type: "silver",
    title: "north128",
    content: "128 x 128 area",
  },
  {
    label: "platinum forest",
    type: "platinum",
    title: "asia64",
    content: "64 x 64 area",
  },
  {
    label: "gold forest",
    type: "gold",
    title: "farm16",
    content: "32 x 32 area",
  },
  {
    label: "silver forest",
    type: "silver",
    title: "north128",
    content: "128 x 128 area",
  }
];

export default function Metaverse({ size }) {
  const content =
    "Aetherya is a land filled with wondrous beauty, untold opportunity, and ancient secrets waiting to be explored. It is the only known place in the galaxy where the Aether Crystals, a source of tremendous power, can be found. Once the home of a long-lost and highly advanced race known as The Kroatons, the Metagalactic Alliance has claimed Aetherya and pledged to protect and preserve it. However, there are dark secrets hidden here that may threaten the entire multiverse.";

  const handleWheel = (e) => {
    e.stopPropagation();
  };
  return (
    <Container height={size.height}>
      <PageContainer height={size.height}>
        <BodyContainer height={size.height}>
          <LeftContainer>
            {size.width < 1200 ? (
              <MobileNFTContainer>
                <SliderNFT nfts={nfts} slidesToShow={5} />
              </MobileNFTContainer>
            ) : (
              <></>
            )}
            <TextDecorator
              uppercase="none"
              content="the Metaverse"
              direction="up"
              fontFamily="Kusanagi"
              fontSize={32}
            ></TextDecorator>
            <div style={{ height: "14px" }}></div>
            <ArticleDecorator
              content={content}
              fontFamily="Roboto"
              fontSize={16}
              lineHeight={22.4}
              width={
                size.width > 1600
                  ? "732px"
                  : size.width < 490
                  ? "342px"
                  : "493px"
              }
            ></ArticleDecorator>
          </LeftContainer>
          {size.width > 1200 ? (
            <RightContainer
              height={size.height}
              onWheel={(e) => handleWheel(e)}
            >
              {nfts.map((item, index) => {
                return <NFTCard key={index} item={item} />;
              })}
            </RightContainer>
          ) : (
            <></>
          )}
          <FooterContainer />
        </BodyContainer>
      </PageContainer>
    </Container>
  );
}
