import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 312.33px;
  height: 350.19px;
  background-size: cover;
  @media (max-width: 1280px) {
    width: 222.78px;
  }
  @media (max-width: 490px) {
    width: 202.87px;
  }
`;

const CoverImage = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export default function NFTCard({ available }) {
  return (
    <Container>
      <CoverImage
        width={"100%"}
        height="100%"
        src="assets/images/card/Frame.png"
      ></CoverImage>
    </Container>
  );
}
