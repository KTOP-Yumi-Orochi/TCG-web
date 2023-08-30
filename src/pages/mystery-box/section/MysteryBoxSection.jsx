import React,{ useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import MysteryBoxCard from "components/cards/MysteryBoxCard";
import MysteryBoxModal from "components/modal/MysteryBoxModal";

import MysteryBoxDrop from "assets/video/mystery-box-roadster-drop.mp4";
import BSCLogo from "assets/images/mystery-box/bsc-logo.png";
import Scroll from "assets/images/mystery-box/scroll-down.png";
import FirstCard from "assets/images/mystery-box/first-card.png";
import FirstIcon from "assets/images/mystery-box/first-icon.png";
import SecondCard from "assets/images/mystery-box/second-card.png";
import SecondIcon from "assets/images/mystery-box/second-icon.png";
import ThirdCard from "assets/images/mystery-box/third-card.png";
import ThirdIcon from "assets/images/mystery-box/third-icon.png";
import FourthCard from "assets/images/mystery-box/fourth-card.png";
import FourthIcon from "assets/images/mystery-box/fourth-icon.png";
import BlueArrow from "assets/images/mystery-box/arrows-blue.png";
import PuppleArrow from "assets/images/mystery-box/arrows-purple.png";
import YellowArrow from "assets/images/mystery-box/arrows-yellow.png";

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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 150px 75px 50px 75px;
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    animation: ${ContainerAnimation} 1s ease 1;
    webkit-animation: ${ContainerAnimation} 1s ease 1;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    background-position: center bottom;
    position: relative;
`;
const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Video = styled.video`
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    margin-top: -125px;
    z-index: 0;
`;
const TextSectionAnimation = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;
const TextSection = styled.div`
    position: absolute;
    top: 34%;
    right: 18%;
    opacity: 0;
    transform: translateY(-50%);
    animation: 2s ease-out 3.5s ${TextSectionAnimation} forwards;
    z-index: 1;
`;
const Header = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`;
const TopHeader = styled.span`
    background: linear-gradient(90.22deg, rgb(242, 88, 255) 0.26%, rgb(161, 53, 205) 101.6%);
    display: inline-block;
    font-size: 40px;
    font-weight: 700;
    -webkit-background-clip: text!important;
    -webkit-text-fill-color: transparent;
    margin-bottom: -10px;
`;
const MainTitle = styled.span`
    font-size: 64px;
    font-weight: 700;
    white-space: nowrap;
    background: linear-gradient(90.22deg, #f8d048 .26%, #f07c11 101.6%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
`;
const LuckyContent = styled.span`
    display: inline-block;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.5;
`;
const ListDetails = styled.ul`
    padding: 0;
    margin-bottom: 15px;
    margin-top: 0;
`;
const ListItem = styled.li`
    list-style: none;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    line-height: 1.5;
`;
const PriceSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;
const BscLogo = styled.img`
    width: 25px;
    height: auto;
    margin-right: 10px;
`;
const PriceAmount = styled.span`
    font-size: 25px;
    font-weight: 500;
    color: #fff;
    line-height: 1.5;
`;
const ButtonSection = styled.div`
    display: flex;
    align-items: center;
`;
const LeftPrceText = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: hsla(0,0%,100%,.4392156862745098);
    line-height: 1.5;
`;
const LeftPriceAmount = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    line-height: 1.5;
`;
const ScrollDownButton = keyframes`
    0% {
        transform: translateY(-15px) translateX(-50%);
    }
    25% {
        transform: translateY(0) translateX(-50%);
    }
    50% {
        transform: translateY(-15px) translateX(-50%);
    }
    75% {
        transform: translateY(0) translateX(-50%);
    }
    100% {
        transform: translateY(-15px) translateX(-50%);
    }
`;
const ScrollButton = styled.button`
    position: absolute;
    top: 54%;
    left: 50%;
    width: 70px;
    height: 70px;
    border-radius: 100px;
    padding: 20px;
    animation: ${ScrollDownButton} 3s ease-in-out infinite forwards;
    transform: translateX(-50%);
    transition: .2s ease-in-out;
    background: transparent;
    border: none;
    outline; none;
    cursor: pointer;
    &:hover {
        background: #0f0f0f;
    }
    &:hover .scrollText {
        opacity: 1;
    }
`;
const ScrollText = styled.span`
    position: absolute;
    bottom: 120%;
    left: 50%;
    opacity: 0;
    transition: .2s ease-in-out;
    transform: translateX(-50%);
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    white-space: nowrap;
    padding: 10px 20px;
    background: #0f0f0f;
    border-radius: 50px;
`;
const ScrollImage = styled.img`
    width: 100%;
    height: auto;
    transition: .2s ease-in-out;
`;
const CardsSecton = styled.div`
    padding: 0 15px 50px 15px;
    overflow: hiddne;
    margin-top: -40px;
    width: 100%;
`;
const CardContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;
const CardContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
const ArrowImage = styled.img`
    display: block;
    margin: 0 auto;
`;

export default function MysteryBoxSection() {
    const [targetTop, setTargetTop] = useState(false);

    const scrollScreen = () => {
        if (targetTop === false) {
            window.scrollTo({
                left: 0,
                top: 700,
                behavior: "smooth"
            });
        }
        else {
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth"
            });
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setTargetTop(window.scrollY > document.body.clientHeight / 3);
        });
    }, []);

    return (
        <Container id="testing">
            <TextSection>
                <Header>
                    <TopHeader>Bellere</TopHeader>
                    <MainTitle>Mystery Box</MainTitle>
                </Header>
                <LuckyContent>
                    Feeling lucky? Grab multiple Mystery Boxes
                    <br />
                    before they all run out!
                </LuckyContent>
                <ListDetails>
                    <ListItem>
                        <span style={{ color: "#f8d048" }}>Mythic </span>
                        <span>Bueller </span>
                        <span style={{ color: "#7f7f7f" }}>(0.16%)</span>
                    </ListItem>
                    <ListItem>
                        <span style={{ color: "#ff8139" }}>Legendary </span>
                        <span>Furon </span>
                        <span style={{ color: "#7f7f7f" }}>(1.64%)</span>
                    </ListItem>
                    <ListItem>
                        <span style={{ color: "#9730fe" }}>Epic </span>
                        <span>Parry T-4 </span>
                        <span style={{ color: "#7f7f7f" }}>(16.37%)</span>
                    </ListItem>
                    <ListItem>
                        <span style={{ color: "#3485ff" }}>Rare </span>
                        <span>Octane </span>
                        <span style={{ color: "#7f7f7f" }}>(81.83%)</span>
                    </ListItem>
                </ListDetails>
                <PriceSection>
                    <BscLogo src={BSCLogo} alt="" />
                    <PriceAmount>50 BUSD</PriceAmount>
                </PriceSection>
                <ButtonSection>
                    <MysteryBoxModal />
                    <LeftPriceAmount>3718 &nbsp;</LeftPriceAmount>
                    <LeftPrceText>boxes left</LeftPrceText>
                </ButtonSection>
            </TextSection>
            <Section>
                <Video
                    autoPlay
                    muted
                    data-object-fit="cover"
                    data-object-position="center center"
                    >
                    <source
                        src={MysteryBoxDrop}
                        type="video/mp4"
                    />
                </Video>
            </Section>
            <ScrollButton onClick={scrollScreen}>
                <ScrollText className="scrollText">{targetTop ? "Go back up" : "Items in this container"}</ScrollText>
                <ScrollImage src={Scroll} style={{ transform: targetTop ? "rotate(180deg)" : "rotate(0deg)" }} alt="" />
            </ScrollButton>
            <CardsSecton>
                <CardContainer>
                    <MysteryBoxCard backgroundColor="radial-gradient(216.29% 72.6% at 50.17% 12.21%,#0443bc 0,#151515 100%)" firstTagBackground="#324974" otherTagBackground="linear-gradient(94.7deg,#113eb3 -8.84%,#4174f7 108.78%)" railColor="radial-gradient(216.29% 72.6% at 50.17% 12.21%,#0443bc 0,#151515 100%)" firstRailContent="37.5%" secondRailContent="78.8%" thirdRailContent="28%" fourthRailContent="66.3636%" bottomColor="linear-gradient(85.57deg,#76b5ea 3.36%,#3460ff 38.33%,#6888fe 65.84%,#1343f0 92.88%)" cardImage={FirstCard} firstTag="Car" secondTag="Rare" thirdTag="Roadster" fourthTag="Modern" firstAttribute={200} secondAttribue={212} thirdAttribute={72} fourthAttribute={7.3} bottomImage={FirstIcon} color="#FFF" />
                    <CardContent>
                        <ArrowImage src={BlueArrow} alt="" />
                        <MysteryBoxCard backgroundColor="radial-gradient(207.12% 69.52% at 50.17% 14.04%,#a836e4 0,#151515 100%)" firstTagBackground="#6f4586" otherTagBackground="linear-gradient(94.7deg,#7b11b3 -8.84%,#a031dc 108.78%)" railColor="#a845f5" firstRailContent="21.875%" secondRailContent="69.4%" thirdRailContent="22%" fourthRailContent="46.3636%" bottomColor="linear-gradient(85.57deg,#670799 3.36%,#a836e4 37.87%,#610791 65.84%,#a836e4 92.88%)" cardImage={SecondCard} firstTag="Car" secondTag="Epic" thirdTag="Roadster" fourthTag="Modern" firstAttribute={250} secondAttribue={306} thirdAttribute={78} fourthAttribute={5.1} bottomImage={SecondIcon} color="#FFF" />
                    </CardContent>
                    <CardContent>
                        <ArrowImage src={PuppleArrow} alt="" />
                        <MysteryBoxCard backgroundColor="linear-gradient(165.05deg,#68421d 1.53%,#d59647 24.92%,#e0b580 51.88%,#d59647 74.51%,#ba813d 99.99%)" firstTagBackground="#ffd199" otherTagBackground="linear-gradient(94.7deg,#fb9025 64.06%,#fb9025 108.78%)" railColor="linear-gradient(85.57deg,#ffca7a 3.36%,rgba(175,0,105,.32) 92.88%)" firstRailContent="16.25%" secondRailContent="65.5%" thirdRailContent="10%" fourthRailContent="40%" bottomColor="linear-gradient(85.07deg,#e0b580 -.59%,#ba813d 103.66%)" cardImage={ThirdCard} firstTag="Car" secondTag="Legendary" thirdTag="Roadster" fourthTag="Modern" firstAttribute={268} secondAttribue={345} thirdAttribute={90} fourthAttribute={4.4} bottomImage={ThirdIcon} color="#3a3a3a" />
                    </CardContent>
                    <CardContent>
                        <ArrowImage src={YellowArrow} alt="" />
                        <MysteryBoxCard backgroundColor="linear-gradient(165.06deg,#f9df7b 1.72%,#b78114 34.48%,#f9df7b 70.31%,#b78114 99.99%)" firstTagBackground="#ffe197" otherTagBackground="linear-gradient(100.03deg,#ffc807 23.95%,#fb9025 160.63%)" railColor="linear-gradient(85.57deg,#ffca7a 3.36%,rgba(175,0,105,.32) 92.88%)" firstRailContent="9.375%" secondRailContent="62%" thirdRailContent="5%" fourthRailContent="36.3636%" bottomColor="linear-gradient(90.16deg,#b78114 -6.59%,#f9df7b 30.4%,#b78114 67.39%,#f9df7b 107.96%)" cardImage={FourthCard} firstTag="Car" secondTag="Mythic" thirdTag="Roadster" fourthTag="Modern" firstAttribute={290} secondAttribue={380} thirdAttribute={95} fourthAttribute={4} bottomImage={FourthIcon} color="#3a3a3a" />
                    </CardContent>
                </CardContainer>
            </CardsSecton>
        </Container>
    );
}
