import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin-bottom: 5px;
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: "Kusanagi";
  font-size: 8.6px;
  line-height: 140%;
  text-transform: uppercase;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 160px;
  }
`;

const BackImage = styled.div`
  background: url("assets/images/nft/tcg/background/${(props) => props.type}.gif");
  background-size: cover;
  width: 260px;
  height: 414px;
  border-radius: 16px;
  margin-bottom: 60px;

  @media (max-width: 1200px) {
    width: 160px;
    height: 314px;
    margin-bottom: 20px;
  }
`;

const CardBody = styled.div`
  padding: 8px 8px 0 !important;
`;

const CardImage = styled.div`
  position: relative;
  height: 260px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 1200px) {
    height: 155px;
  }
`;

const CardTagInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  width: 100%;
  margin-top: 16px;
`;

const CardTag = styled.div`
  color: gold;
  padding: 5px 15px;
  background: hsla(0, 0%, 100%, 0.15);
  border-radius: 12px;
  font-size: 14px;
`;

const CardBottom = styled.div`
  background: linear-gradient(
    85.57deg,
    #ffca7a 3.36%,
    #ffc807 33.67%,
    #ffdf6b 64.94%,
    #ffe310 92.88%
  );
  position: relative;
  backdrop-filter: blur(34px);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;

const CardBottomInfo = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 10px;
  @media (max-width: 1200px) {
    font-size: 14px;
    padding: 5px;
  }
`;

const CardTitle = styled.div`
  margin-top: 10px;
  padding: 0px 8px;
`;

const Name = styled.div`
  margin-top: 3px;
  text-align: center;
`;

const NFTCard = ({ item }) => {
  return (
    <Container>
      <BackImage type={item.type}>
        <CardBody>
          <CardImage>
            {/* <ProgressiveImage
              src={name + ".png"}
              placeholder={"lowResolution/" + name + ".png"}
              callback={() => {
                setMetaverseModalOpen(true);
                setModalInfo({ imgUrl: name, title: name });
              }}
              alt={"metagate"}
            ></ProgressiveImage> */}
            <img src={`assets/images/nft/tcg/${item.title}.gif`} alt="nft" />
          </CardImage>
          <CardTagInfo>
            <CardTag>{item.label}</CardTag>
          </CardTagInfo>
          <CardTitle>
            <h3>{item.content}</h3>
          </CardTitle>
          <CardBottom>
            <img
              src={`assets/images/nft/tcg/bottom/${item.type}_bottom.gif`}
              alt="bottom"
            />
            <CardBottomInfo>
              <span>1,898/5,626</span>
            </CardBottomInfo>
          </CardBottom>
        </CardBody>
        <Name>{item.title}</Name>
      </BackImage>
    </Container>
  );
};

export default NFTCard;
