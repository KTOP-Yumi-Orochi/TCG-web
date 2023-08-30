import React from "react";
import "./style.css";
import NFTCard from "components/NFT/NFTCard";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SliderNFT = ({ nfts, slidesToShow = 3 }) => {
  return (
    <Container>
      <AliceCarousel
        mouseTracking
        infinite={true}
        responsive={{
          0: {
            items: 3,
          },
          768: {
            items: 4,
          },
        }}
        onSlideChange={(e) => {
          window.fullpage_api.setAllowScrolling(false);
        }}
        onSlideChanged={(e) => {
          window.fullpage_api.setAllowScrolling(true);
        }}
        disableDotsControls={true}
        disableButtonsControls={true}
        keyboardNavigation={true}
      >
        {nfts.map((nft, index) => {
          return <NFTCard key={index} item={nft} />;
        })}
      </AliceCarousel>
    </Container>
  );
};

export default SliderNFT;
