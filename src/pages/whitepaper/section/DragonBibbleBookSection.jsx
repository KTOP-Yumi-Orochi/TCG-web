import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import MetaButton from "components/buttons/MetaButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCreative} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

import Next from "assets/images/whitepaper/next.png";
import Previous from "assets/images/whitepaper/previous.png";
import NextHover from "assets/images/whitepaper/next-hover.png";
import PreviousHover from "assets/images/whitepaper/previous-hover.png";

import { chapter } from "../dragon-bibble/book/data";

const ContainerAnimation = keyframes`
    0%{
        -webkit-transform: scale(1.2);
            -ms-transform: scale(1.2);
                transform: scale(1.2);
    }
    100%{
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
                transform: scale(1);
    }
`;
const Container = styled.section`
    width: 100%;
    height: ${(props) => props.height}px;
    animation: ${ContainerAnimation} 1s ease 1;
    webkit-animation: ${ContainerAnimation} 1s ease 1;
    display: flex;
    justify-content: center;
`;
const SliderContainer = styled.div`
    width: 40%;
    overflow: hidden;
    height: calc(100vh - 66px);
    .swiper-slide {
        display: flex;
        justify-content: center;
        height: calc(100vh - 66px);
    }
    .swiper-button-next {
        background-image: url(${Next});
        background-size: cover;
        width: 45px;
        height: 64px;
        &:hover {
            background-image: url(${NextHover});
        }
    }
    .swiper-button-next:after {
        content: "";
    }
    .swiper-button-prev {
        background-image: url(${Previous});
        background-size: cover;
        width: 45px;
        height: 64px;
        &:hover {
            background-image: url(${PreviousHover});
        }
    }
    .swiper-button-prev:after {
        content: "";
    }
`;
const SwiperImage = styled.img`
    width: 80%;
    user-select: none;
`;
const BottomContainer = styled.div`
    bottom: 0;
    position: fixed;
    left: 0;
    width: 100%;
    height: 66px;
    line-height: 66px;
    font-size: 16px;
    color: #999;
    background-color: #111;
    box-shadow: 0 3px 7px 0 rgba(0,0,0,0.35);
    opacity: 0.75;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const BottomContentSection = styled.div`
    width: 614px;
    display: flex;
    justify-content: space-between;
`;
const LeftSelectSection = styled.select`
    width: 40%;
    height: 36px;
    background-color: #fff;
    border-radius: 4px;
    border: solid 1px rgba(17,17,17,0.2);
    opacity: 0.75;
    outline: none;
`;
const PagenationSection = styled.div`
    width: 50%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: end;
`;
const PageText = styled.span`
    line-height: 66px;
    font-size: 18px;
    color: #999;
`;
const RightSelectSection = styled.select`
    width: 25%;
    height: 36px;
    background-color: #fff;
    border-radius: 4px;
    border: solid 1px rgba(17,17,17,0.2);
    opacity: 0.75;
    margin: 0 25px;
    outline: none;
`;
const ButtonEffectAnimation = keyframes`
    0%{
        opacity:0;
    }
    40%{
        opacity:0.9;
    }
    60%
    {
        opacity: 0.2;
    }
    70%
    {
        opacity: 0.9;
    }
    80%
    {
        opacity: 0.2;
    }
    100%{
        opacity: 1;
    }
`;
const ButtonEffect = styled.div`
    -webkit-animation: ${ButtonEffectAnimation} 0.27s both ease-in;
    animation: ${ButtonEffectAnimation} 0.27s both ease-in;
    -webkit-animation-delay: ${(props) => props.time}s;
    animation-delay: ${(props) => props.time}s;
    opacity: 1;
    margin-left: 64px;
    @media (max-width: 700px) {
        margin-left: 0px;
    }
    position: absolute;
    top: 40px;
    left: 0;
`;

export default function DragonBibbleBookSection({ size }) {
    const navigate = useNavigate();
    let { id } = useParams();
    const swiperRef = useRef(null);

    const menus = [
        {
            title: "1. Introduction"
        },
        {
            title: "2. Dragon Rank System"
        },
        {
            title: "3. Tier1-Hunter Dragon Attributes"
        },
        {
            title: "4. Tier2-Raider Dragon Attributes"
        },
        {
            title: "5. Tier3-Battle Dragon Attributes"
        },
        {
            title: "6. Tier4-Flying Dragon Attributes"
        },
        {
            title: "7. Dragon Crafting"
        },
        {
            title: "8. Dragon Gold"
        },
        {
            title: "9. Dragon Traits & Sets"
        },
        {
            title: "10. Dragon Eggs"
        },
        {
            title: "11. Dragon Nesting"
        },
        {
            title: "12. Dragon Battles"
        },
        {
            title: "13. Dragon Customisation"
        },
        {
            title: "14. Dragon Island"
        },
        {
            title: "15. Dragon Rentals"
        },
        {
            title: "16. Summary"
        },
    ]
    const [selectedMenu, setSelectedMenu] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    const onSelectTitle = (event) => {
        const index = event.target.selectedIndex;
        navigate(`/whitepaper/dragon-bibble/${index}`);
        swiperRef?.current.swiper.slideTo(0);
    }

    const onSelectPage = (event) => {
        const selectedPage = event.target.selectedIndex + 1;
        setCurrentPage(selectedPage);
        swiperRef?.current.swiper.slideTo(selectedPage - 1);
    }

    useEffect(() => {
        setSelectedMenu(menus[id].title);
    }, [id]);

    useEffect(() => {
        swiperRef?.current.swiper.on('slideChange', () => {
            setCurrentPage(swiperRef?.current.swiper.realIndex + 1);
        })
    }, [])

    return (
        <Container height={size.height}>
            <ButtonEffect time={1}>
                <Link to="/whitepaper/dragon-bibble">
                    <MetaButton
                        background={"#FF1C6E"}
                        content="BACK"
                    />
                </Link>
            </ButtonEffect>
            <SliderContainer>
                <Swiper
                    navigation={true}
                    modules={[Navigation, EffectCreative]}
                    ref={swiperRef}
                    grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                          shadow: true,
                          translate: ['-120%', 0, -500],
                        },
                        next: {
                          shadow: true,
                          translate: ['120%', 0, -500],
                        },
                    }}
                >
                    {
                        chapter[id].map((data, index) => (
                            <SwiperSlide key={index}>
                                <SwiperImage src={data.image} alt="" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </SliderContainer>
            <BottomContainer>
                <BottomContentSection>
                    <LeftSelectSection onChange={onSelectTitle} value={selectedMenu}>
                        {menus.map((menu, index) => (
                            <option key={index}>
                                {menu.title}
                            </option>
                        ))}
                    </LeftSelectSection>
                    <PagenationSection>
                        <PageText>Page</PageText>
                        <RightSelectSection onChange={onSelectPage} value={currentPage}>
                            {chapter[id].map((data, index) => (
                                <option key={index}>{data.page}</option>
                            ))}
                        </RightSelectSection>
                        <PageText>of {chapter[id].length}</PageText>
                    </PagenationSection>
                </BottomContentSection>
            </BottomContainer>
        </Container>
    );
}
