import React, { useState } from "react";
import Slider from "react-slick";
import styled from 'styled-components'

const Image = styled.img`
    width: 108px;
`;

const ActiveImage = styled.img`
  position: absolute;
    width: 230px;
    z-index:1;

`;

const ActiveBackground = styled.img`
    position: absolute;
    width: 258px;
    z-index:2;
`
const ItemContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const ActiveItem = styled.div`
    width: 258px;
    height: 273px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:2;

`;

const Item = styled.div`
    width: 127px;
    height: 140px;
    background: url('assets/images/outline-mobile.svg');
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
`

const SliderCharacterBox = ({
    images,
    slidesToShow = 3
}) => {
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: false,
        speed: 300,
        slidesToShow: slidesToShow,
        centerPadding: "0",
        swipeToSlide: true,
        focusOnSelect: true,
        nextArrow: false,
        prevArrow: false,
        arrows: false,
        touchThreshold: 1000,
        touchMove: false,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 1490,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const templateImages = images.map((image, idx) => {
        if (image !== null) {
            return (
                <div className={

                    idx === imageIndex ? "activeSlide" : "slide"
                }
                    key={
                        image.id

                    }>
                    <ItemContainer> {
                        idx === imageIndex ? <ActiveItem>
                            <ActiveBackground width={250} src={'assets/images/box-mobile.png'} />
                            <ActiveImage width={230} src={
                                image.src
                          
                            } />
                        </ActiveItem> : <Item>
                            <Image width={108} src={
                                image.src
      
                            } />
                        </Item>
                    } </ItemContainer>
                </div>
            );
        }
        return null;
    });

    return (
        <div style={
            {
                width: '780px',
                transform: 'scale(0.8)'
            }
        }>
            <Slider {...settings}>
                {templateImages}</Slider>
        </div>
    )

};

export default SliderCharacterBox;
