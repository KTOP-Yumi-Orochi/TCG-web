import React from "react";
import ArticleDecorator from "components/textDecorator/ArticleDecorator";
import TextDecorator from "components/textDecorator/TextDecorator";
import styled from "styled-components";
import Button from 'components/buttons/Button'
import SliderPartner from "components/PartnerCard/SliderPartner";

const Container = styled.div`
  width: 100vw;
  height: ${(props) => props.height}px;
  background-image: url("assets/images/backgrounds/2560/section3.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center bottom;
  @media (max-width: 1920px) {
    background-image: url("assets/images/backgrounds/1920/section3.png");
  }
  @media (max-width: 1440px) {
    background-image: url("assets/images/backgrounds/metaverse.png");
  }
  @media (max-width: 1400px) {
    align-items: end;
  }
  @media (max-width: 1280px) {
    background-image: url("assets/images/backgrounds/1280/section3.png");
  }
  @media (max-width: 490px) {
    background-image: url("assets/images/backgrounds/mobile/section3.png");
  }
`;
const PageContainer = styled.div`
  height: ${(props) => props.height - 194}px;
  padding-top: 116px;
  padding-bottom: 78px;
  @media (max-width: 1400px) {
    height: ${(props) => props.height - 194}px;
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
    justify-content: space-around;
  }
  @media (max-width: 490px) {
    height: ${(props) => props.height - 60}px;
    justify-content: flex-end;
    width: calc(100vw - 48px);
  }
`;

const Content = styled.div`
  @media(max-width:1400px){
    height:410px;
    overflow:scroll;
    width:100%;
    margin-bottom:50px;
  }
  @media(max-width:490px){
    max-height:324px;
  }
`
const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

`;
const Context = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 3px;
    @media(max-width:490px){
        margin-bottom:20px;
    }
`;
const Icon = styled.div`
    margin-right: 8px;
    margin-top:20px ;
    @media (max-width: 1300px) {
        margin-top: 0px;
    }
    @media (max-height: 800px) {
        margin-top: 5px;
    }
`;



export default function Partner({ size, direction }) {
  const querterRef = React.useRef();
  const content = "By becoming a dedicated partner of Aetherya, you'll unlock access to a new era of community engagement, meta architecture, and web3 social interaction. Our globally renowned artists will create a custom-designed property and theme to suit your brand perfectly.";
  const text = "After securing your partnership in our metaverse, you’ll be airdropped your custom NFT property. Then, you can begin to reap the benefits of being a resident of Meta Prime, such as:"
  const handleWheel = (e) => {
    e.stopPropagation();
  };
  const handleTouchStart = e => {
    e.stopPropagation();
  }
  const handleTouchEnd = (e) => {

    e.stopPropagation();

  }

  const contentList = ['A lifetime worth of ad space on our Metaverse Explorer', 'Your own custom web3 funnel to offer personalized services', 'An established digital footprint in the heart of the metaverse']
  return (<Container height={size.height}>
    <PageContainer height={size.height}>
      <BodyContainer height={size.height}>
        <Content>
          <LeftContainer onWheel={e => handleWheel(e)} onTouchMoveCapture={(e) => e.stopPropagation()} onTouchStart={(e) => handleTouchStart(e)} onTouchEnd={e => handleTouchEnd(e)} onTouchCancelCapture={e => handleTouchEnd(e)} ref={querterRef}>
            <TextDecorator uppercase="none" content="Our partners" direction="up" fontFamily="Kusanagi" fontSize={32}></TextDecorator>
            <div style={{ height: "14px" }}></div>
            <ArticleDecorator content={content} fontFamily="Roboto" fontSize={16} lineHeight={22.4} width={size.width > 1600 ? "732px" : size.width < 490 ? "342px" : "493px"}></ArticleDecorator>
            <div style={{ height: "14px" }}></div>
            <TextDecorator uppercase="none" content="Do you want to" direction="up" fontFamily="Kusanagi" fontSize={20}></TextDecorator>
            <TextDecorator uppercase="none" content="become a partner" direction="up" fontFamily="Kusanagi" fontSize={20}></TextDecorator>
            <div style={{ height: "14px" }}></div>
            <ArticleDecorator content={text} fontFamily="Roboto" fontSize={16} lineHeight={22.4} width={size.width > 1600 ? "732px" : size.width < 490 ? "342px" : "493px"}></ArticleDecorator>
            {
              contentList.map((txt, index) => {
                return <Context key={index}>
                  <Icon>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="5.65723" width="8" height="8" transform="rotate(-45 0 5.65723)" fill="#FF1C6E" />
                    </svg>
                  </Icon>
                  <ArticleDecorator content={txt}
                    fontFamily='Roboto'
                    fontSize={18}
                    weight={700}
                    lineHeight={22.4}
                  />
                </Context>
              })
            }
            <div style={{ height: "14px" }}></div>
            <Button content={'become a partner'} />
          </LeftContainer>
        </Content>
        <SliderPartner />
      </BodyContainer>
    </PageContainer>
  </Container>)

}
