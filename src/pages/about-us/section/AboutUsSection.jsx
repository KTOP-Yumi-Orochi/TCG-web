import React from "react";
import styled, { keyframes } from "styled-components";
import TextDecorator from "components/textDecorator/TextDecorator";
import ArticleDecorator from "components/textDecorator/ArticleDecorator";
import AboutUsCard from "components/cards/AboutUsCard";

import HeaderImage from "assets/images/about-us/selection.png";
import MainImage from "assets/images/about-us/abous-us-new.png";
import DavidEvans from "assets/images/about-us/david-evans.png";
import FrankCurzio from "assets/images/about-us/frank-curzio.png";
import JustinDelGiudice from "assets/images/about-us/justin-del-giudice.png";
import JaceFalkenberg from "assets/images/about-us/jace-falkenberg.png";
import AdamZelfel from "assets/images/about-us/adam-zelfel.png";
import JakubStrnad from "assets/images/about-us/jakub-srtrnad.png";
import PaulReeves from "assets/images/about-us/paul-reeves.png";
import MeredythLodge from "assets/images/about-us/meredyth-lodge.png";
import TimurKusherbayev from "assets/images/about-us/timur-kusherbayev.png";
import TimurPak from 'assets/images/about-us/pak-timur.png';
import PavelDjuric from "assets/images/about-us/pavel-djuric.png";
import MarkWilliams from "assets/images/about-us/mark-williams.png";
import RoyJohnson from "assets/images/about-us/roy-johnson.png";
import PJKrypto from "assets/images/about-us/pj_crypto_avatar.png";
import TylerWilke from "assets/images/about-us/tyler-wilke.png";
import AndreAllen from "assets/images/about-us/andre-allen.png";
import LinkedIn from "assets/images/about-us/linkedIn.png";
import Telegram from "assets/images/about-us/telegram.svg";
import Twitter from "assets/images/about-us/twitter.svg";
import Facebook from "assets/images/about-us/facebook.svg";
import YouTube from "assets/images/about-us/youtube.png";

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
const MainSection = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 15px;
    margin: 0 auto;
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 100px;
`;
const TitleSection = styled.div`
    width: 40%;
    margin-right: 30px;
`;
const Title = styled.div`
    margin-bottom: 40px;
    position: relative;
`;
const ImageAnimation = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;
const TitleImage = styled.img`
    position: absolute;
    top: 5px;
    right: 22%;
    bottom: 0;
    width: 100px;
    height: 77px;
    opacity: 0;
    animation: 1s ease-out 1s ${ImageAnimation} forwards;
`;
const ImageSection = styled.div`
    width: calc(60% - 30px);
`;
const MainHeaderImage = styled.img`
    width: 100%;
    height: auto;
`;
const TeamSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`;
const TeamSectionHeader = styled.div`
    margin-bottom: 100px;
    align-self: center;
`;
const TeamContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const TeamList = styled.div`
    width: calc(50% - 50px);
    margin: 0 25px 100px;
`;
const CommercialSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    align-items: center;
`;
const CommercialText = styled.p`
    font-family: Roboto;
    font-size: 22px;
    line-height: 35px;
    width: fit-content;
    text-align: center;
    color: #FFF;
`;
const CommercialContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const CommercialList = styled.div`
    width: calc(50% - 50px);
    margin: 0 25px 100px;
`;

export default function AboutUsSection() {
    const content = "Behind every great company is a team of great people. At TCGCoin 2.0 we have brought together leading experts from all over the world to ensure we bring you the biggest and best virtual experience in the Metaverse.";
    const commercialContent1 = "Owning a commercial plot of land in TCG World offers a multitude of possibilities to business owners, real estate developers, cryptocurrency/NFT projects, and investors from all walks of life. Commercial real estate plots boast high visibility and in-game traffic due to their prime city locations. Commercial plots offer vast opportunities for e-commerce, social media, gaming, livestreaming, entertainment, education, virtual events, digital marketing, in world real estate development including rentals, advertisements/billboards, resale and so much more! Due to its immense versatility to owners, commercial properties are extremely scarce and available locations are selling quickly.";
    const commercialContent2 = "Commercial real estate is sold exclusively through our Senior Commercial Real Estate Management Team.";
    const commercialContent3 = "Email us today to discuss pricing and options!";
    return (
        <Container id="testing">
            <MainSection>
                <Header>
                    <TitleSection>
                        <Title>
                            <TextDecorator
                                uppercase="none"
                                delay={0.5}
                                direction="up"
                                content="About Us"
                                fontFamily="Kusanagi"
                                fontSize={60}
                            ></TextDecorator>
                            <TitleImage src={HeaderImage} alt="" />
                        </Title>
                        <ArticleDecorator
                            delay={1}
                            content={content}
                            fontFamily="Roboto"
                            fontSize={24}
                            lineHeight={35}
                            width="fit-content"
                        ></ArticleDecorator>
                    </TitleSection>
                    <ImageSection>
                        <MainHeaderImage src={MainImage} alt="" />
                    </ImageSection>
                </Header>
                <TeamSection>
                    <TeamSectionHeader>
                        <TextDecorator
                            uppercase="none"
                            delay={1}
                            direction="up"
                            content="Meet the team behind the project"
                            fontFamily="Kusanagi"
                            fontSize={46}
                        ></TextDecorator>
                    </TeamSectionHeader>
                    <TeamContent>
                        <TeamList>
                            <AboutUsCard avatar={DavidEvans} memberName="David Evans" description="Chief Executive Officer" socialLink={[LinkedIn, Telegram, Twitter]} />
                        </TeamList>
                        <TeamList>
                            <AboutUsCard avatar={FrankCurzio} memberName="Frank Curzio" description="President: Development and implementation of the company's business strategy" socialLink={[LinkedIn, Telegram, Twitter, Facebook]} />
                        </TeamList>
                        <TeamList>
                            <AboutUsCard avatar={JustinDelGiudice} memberName="Justin Del Giudice" description="Vice President" socialLink={[LinkedIn, Telegram, Twitter]} />
                        </TeamList>
                        <TeamList>
                            <AboutUsCard avatar={JaceFalkenberg} memberName="Jace Falkenberg" description="Chief Gaming Officer" socialLink={[LinkedIn, Telegram]} />
                        </TeamList>
                        <TeamList>
                            <AboutUsCard avatar={AdamZelfel} memberName="Adam Zelfel" description="Web & Blockchain Developer" socialLink={[LinkedIn]} />
                        </TeamList>
                        <TeamList>
                            <AboutUsCard avatar={JakubStrnad} memberName="Jakub Strnad" description="Web & Blockchain Developer" socialLink={[LinkedIn]} />
                        </TeamList>
                        <TeamList>
                            <AboutUsCard avatar={PaulReeves} memberName="Paul Reeves" description="Cofounder & Head of TCG Real Estate" socialLink={[LinkedIn, Telegram, Twitter]} />
                        </TeamList>
                        <TeamList>
                            <AboutUsCard avatar={MeredythLodge} memberName="Meredyth Lodge" description="Special Events Coordinator" socialLink={[LinkedIn, Telegram, Twitter]} />
                        </TeamList>
                        <TeamList>
                            <AboutUsCard avatar={TimurKusherbayev} memberName="Timur Kusherbayev" description="UI / UX Designer" socialLink={[LinkedIn, Telegram]} />
                        </TeamList>
                        <TeamList>
                            <AboutUsCard avatar={TimurPak} memberName="Timur Pak" description="Front End Developer" socialLink={[LinkedIn, Telegram]} />
                        </TeamList>
                        <TeamList>
                            <AboutUsCard avatar={PavelDjuric} memberName="Pavel Djuric" description="Web3 Product Manager" socialLink={[LinkedIn, Telegram]} />
                        </TeamList>
                        <TeamList>
                            <AboutUsCard avatar={MarkWilliams} memberName="Mark Williams" description="Graphics, Multimedia & Marketing" socialLink={[LinkedIn, Telegram, Twitter]} />
                        </TeamList>
                        <TeamList>
                            <AboutUsCard avatar={RoyJohnson} memberName="Roy Johnson" description="Moderator" socialLink={[Telegram, Twitter, Facebook]} />
                        </TeamList>
                        <TeamList>
                            <AboutUsCard avatar={PJKrypto} memberName="PJ Krypto" description="TCG World Head of Visual Communications, Youtube influencer and crypto enthusiast" socialLink={[Twitter, YouTube]} />
                        </TeamList>
                    </TeamContent>
                </TeamSection>
                <CommercialSection>
                    <Title>
                        <TextDecorator
                            uppercase="none"
                            delay={0.5}
                            direction="up"
                            content="TCG World Commercial Real Estate"
                            fontFamily="Kusanagi"
                            fontSize={42}
                        ></TextDecorator>
                    </Title>
                    <CommercialText>{commercialContent1}</CommercialText>
                    <CommercialText>{commercialContent2}</CommercialText>
                    <CommercialText>{commercialContent3}</CommercialText>
                    <CommercialContent>
                        <CommercialList>
                            <AboutUsCard avatar={TylerWilke} memberName="Tyler Wilke" description="Senior Commercial Real Estate" socialLink={[Telegram, Twitter, Facebook]} />
                        </CommercialList>
                        <CommercialList>
                            <AboutUsCard avatar={AndreAllen} memberName="Andre Allen" description="Senior Commercial Real Estate Manager" socialLink={[LinkedIn, Telegram, Twitter, Facebook]} />
                        </CommercialList>
                    </CommercialContent>
                </CommercialSection>
            </MainSection>
        </Container>
    );
}
