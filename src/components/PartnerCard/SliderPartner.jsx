import React from "react";
import "./style.css";
import Card from "components/PartnerCard/Card";
import styled from "styled-components";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useWindowSize } from "hooks/useWindowSize";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 810px;
  @media (max-width: 1280px) {
    max-width: 625px;
  }
  @media (max-width: 1200px) {
    justify-content: center;
    max-width: calc(100vw - 120px);
  }
  @media (max-width: 768px) {
    max-width: unset;
  }
`;

const SliderPartner = () => {
  const [targetIndex, setTargetIndex] = React.useState(0);
  const size = useWindowSize();
  const partnerList = [
    { content: "koncepted", icon: 'chainIcon' }, 
    { content: "Dan Schutt", icon: 'instagram' }, 
    { content: "The_Real_Theory", icon: 'trangle' },
    { content: "koncepted", icon: 'chainIcon' }, 
    { content: "Dan Schutt", icon: 'instagram' }, 
    { content: "The_Real_Theory", icon: 'trangle' },
  ]

  return (
    <Container>
      <AliceCarousel
        mouseTracking
        items={3}
        infinite={true}
        responsive={{
          0: {
            items: 3
          }
        }}
        onSlideChange={(e) => {
          window.fullpage_api.setAllowScrolling(false);
        }}
        onSlideChanged={(e) => {
          window.fullpage_api.setAllowScrolling(true);
          setTargetIndex(e.item);
        }}
        disableDotsControls={true}
        disableButtonsControls={true}
        keyboardNavigation={true}
        centerMode
        renderSlideInfo={true}
      >
        {
          partnerList.map((partner, index) => {
            return (
              <Card key={'sliderPartner' + index} name={partner.content} zoom={ size.width > 1120 ? targetIndex === index ? 'true' : 'false' : targetIndex === index - 1 ? 'true' : targetIndex === 5 && index === 0 ? 'true' : 'false'} url={"assets/images/partner/" + partner.content + ".png"} />
            )
          })
        }
      </AliceCarousel>
    </Container>

  );
};

export default SliderPartner;
