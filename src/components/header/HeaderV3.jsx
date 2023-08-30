import React from "react";
import styled, { keyframes } from "styled-components";
import HeaderButtonV2 from "components/buttons/HeaderButtonV2";
import { useNavigate, useLocation } from "react-router-dom";
import Web3Status from "components/web3Status";
import LeftLine from "assets/images/header/leftline.png";
import RightLine from "assets/images/header/rightline.png";
import RightLineSmall from "assets/images/header/rightline_small.png";
import Logo from "assets/images/header/logo.svg";

const Expand = keyframes`
  0%{
    width: 60px;
    height: 60px;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  }
  95% {
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  }
  100% {
    width: 202px;
    height: 202px;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);

  }
`;
const MetaLogoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 60px;
  height: 60px;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  animation: ${Expand} 1.5s 0.5s ease;
  animation-fill-mode: forwards;
`;

const LogoActionAnimation = keyframes`
  0%{
    opacity: 0;
  }
  3% {
    opacity: 0.6;
  }
  6%{
      opacity: 0.05;
  }
  8% {
      opacity: 0.6;
  }
  11% {
      opacity: 0.6;
  }
  13% {
      opacity: 0.05
  }
  16% {
      opacity: 0.05;
  }
  31%{
      opacity: 0.6;
  }
  50% {
      opacity: 0.9;
  }
  80%{
      opacity: 0.9;
  }
  100% {
      opacity: 1;
  }

`;

const LogoAction = styled.div`
  animation: ${LogoActionAnimation} 2s ease-in-out 1;
  animation-fill-mode: forwards;
`;

const MetaLogoContentContainer = styled.div`
  min-width: 232px;
  height: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    min-width: 154px;
  }
`;

const MetaLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 232px;
  position: relative;
  margin-left: -25px;
  margin-right: -25px;
  width: calc(100% - 1093px);
  cursor: pointer;
  @media (max-width: 2560px) {
    width: calc(100% - 1542px);
  }
  @media (max-width: 1100px) {
    width: calc(100vw - 210px);
    min-width: 181px;
  }
`;
const HeaderLeftLineAnimation = keyframes`
  0% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;
const HeaderRightLineAnimation = keyframes`
  0% {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  }
  100% {
    clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
  }
`;

const HeaderLeftLineUpper = styled.img`
  position: absolute;
  top: 0px;
  width: 508px;
  height: auto;
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  animation: ${HeaderLeftLineAnimation} 1s ease 1;
  animation-fill-mode: forwards;
  @media (max-width: 2560px) {
    width: 746px;
  }
  @media (max-width: 1920px) {
    width: calc(45.84vw - 159px);
  }
`;
const HeaderLeftLineDown = styled.img`
  position: absolute;
  bottom: 0px;
  width: 508px;
  height: auto;
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  animation: ${HeaderLeftLineAnimation} 1s ease 1;
  animation-fill-mode: forwards;
  @media (max-width: 2560px) {
    width: 746px;
  }
  @media (max-width: 1920px) {
    width: calc(45.84vw - 159px);
  }
`;
const HeaderRightLineUpper = styled.img`
  position: absolute;
  top: 0px;
  width: 100%;
  height: auto;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  animation: ${HeaderRightLineAnimation} 1s ease 1;
  animation-fill-mode: forwards;

  @media (max-width: 1100px) {
    display: none;
  }
`;
const HeaderRightLineSmallUpper = styled.img`
  position: absolute;
  top: 0px;
  width: 100%;
  height: auto;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  animation: ${HeaderRightLineAnimation} 1s ease 1;
  animation-fill-mode: forwards;
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const HeaderRightLineDown = styled.img`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: auto;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  animation: ${HeaderRightLineAnimation} 1s ease 1;
  animation-fill-mode: forwards;
  @media (max-width: 1100px) {
    display: none;
  }
`;
const HeaderRightLineSmallDown = styled.img`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: auto;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  animation: ${HeaderRightLineAnimation} 1s ease 1;
  animation-fill-mode: forwards;
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const HeaderLeftContainer = styled.div`
  width: 508px;
  height: 80px;
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 2560px) {
    width: 746px;
  }
  @media (max-width: 1920px) {
    width: calc(45.84vw - 159px);
  }
  @media (max-width: 1280px) {
    height: 64px;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;
const HeaderRightContainer = styled.div`
  width: 508px;
  height: 80px;
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 2560px) {
    width: 746px;
  }
  @media (max-width: 1920px) {
    width: calc(45.84vw - 159px);
  }
  @media (max-width: 1280px) {
    height: 64px;
  }
  @media (max-width: 1100px) {
    width: 185px;
    margin-left: 15px;
  }
  @media (max-width: 745px) {
    height: 68px;
  }
`;

const PatternLeft = styled.svg`
  margin-left: 16px;
  margin-top: 4px;
  width: 52px;
  @media (max-width: 1100px) {
    margin-left: 0px;
  }
  @media (max-width: 1280px) {
    height: 64px;
  }
  @media (max-width: 745px) {
    width: 44px;
    margin-left: 0px;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 30px;
  width: calc(100vw - 120px);
  max-width: 1800px;
  height: fit-content;
  align-items: center;
  @media (max-width: 1300px) {
    top: 18px;
  }
  @media (max-width: 768px) {
    width: calc(100vw - 48px);
    top: 16px;
  }
`;

function HeaderV3({ setActiveIndex }) {
  const navigate = useNavigate();
  const location = useLocation();

  const homeButtonHandler = () => {
    if (location.pathname === "/") {
      if (setActiveIndex) {
        setActiveIndex(0);
        window.fullpage_api.moveTo(1);
      }
    } else {
      navigate("/");
    }
  };
  return (
    <HeaderContainer>
      <div>
        <HeaderLeftContainer>
          <HeaderLeftLineUpper
            width={508}
            height="auto"
            src={LeftLine}
          ></HeaderLeftLineUpper>

          {/* <svg
            style={{ position: "absolute", right: "0px" }}
            width="47"
            height="15"
            viewBox="0 0 47 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path"
              d="M0.5 3.5V1H14L6.5 8.5H0.5"
              stroke="white"
              strokeWidth="2"
              opacity="0.5"
            />
            <path
              className="path"
              d="M0 14.5H10.5L24 1H47"
              stroke="white"
              strokeWidth="2"
              opacity="0.5"
            />
            <path
              className="path"
              d="M30 9.5L33.5 6H27.5L19.5 14H32.5L40.5 6"
              stroke="white"
              strokeWidth="2"
              opacity="0.5"
            />
          </svg> */}
          
          <HeaderButtonV2
            content="Home"
            callback={() => navigate("/home")}
          ></HeaderButtonV2>
          <HeaderButtonV2
            content="News"
            callback={() => navigate("/news")}
          ></HeaderButtonV2>
          <HeaderButtonV2
            content="Map"
            callback={() => navigate("/map")}
          ></HeaderButtonV2>
          <HeaderButtonV2
            content="World"
            callback={() => navigate("/world")}
          ></HeaderButtonV2>
          <HeaderButtonV2
            content="Marketplace"
            callback={() => navigate("/marketplace")}
          ></HeaderButtonV2>
          <HeaderButtonV2
            content="Mystery Box"
            callback={() => navigate("/mystery-box")}
          ></HeaderButtonV2>
          <HeaderButtonV2
            content="Coin"
            callback={() => navigate("/coin")}
          ></HeaderButtonV2>

          <HeaderLeftLineDown
            width={508}
            height="auto"
            src={LeftLine}
          ></HeaderLeftLineDown>
        </HeaderLeftContainer>
      </div>
      <div>
        <PatternLeft
          viewBox="0 0 52 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M13.5 1.5L27 15L40.5 1.5"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            className="path"
            d="M0.5 1L21.5 20.5"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            className="path"
            d="M13.5 81L27 67.5L40.5 81"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            className="path"
            d="M16 27L1.5 41L16 55"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            className="path"
            d="M21 62L1.5 81"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            className="path"
            d="M51.5 3L13.5 41L51.5 79"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
        </PatternLeft>
      </div>
      <MetaLogoContainer onClick={homeButtonHandler}>
        {/* <MetaLogoBorderContainer>
          <MetaLogoBorderHalf>
            <MetaLogoLeft
              width="1486"
              height="86"
              viewBox="0 0 1486 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1485 85H43L1 43L42 1H1485"
                stroke="white"
                strokeWidth="2px"
                strokeOpacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </MetaLogoLeft>
            <MetaLogoLeftSmall
              width="711"
              height="62"
              viewBox="0 0 711 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 31L31.5 0.5H679L710 31L679.5 61.5H31.5L1 31Z"
                stroke="white"
                strokeWidth="2px"
                strokeOpacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </MetaLogoLeftSmall>
          </MetaLogoBorderHalf>
          <MetaLogoBorderHalf>
            <div style={{ transform: "scale(-1, 1)" }}>
              <MetaLogoLeft
                width="1486"
                height="86"
                viewBox="0 0 1486 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1485 85H43L1 43L42 1H1485"
                  stroke="white"
                  strokeWidth="2px"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </MetaLogoLeft>
              <MetaLogoLeftSmall
                width="711"
                height="62"
                viewBox="0 0 711 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 31L31.5 0.5H679L710 31L679.5 61.5H31.5L1 31Z"
                  stroke="white"
                  strokeWidth="2px"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </MetaLogoLeftSmall>
            </div>
          </MetaLogoBorderHalf>
        </MetaLogoBorderContainer> */}
        <MetaLogoContentContainer>
          <MetaLogoContent>
            <LogoAction>
              <img src={Logo} alt="logo" width={150} />
              {/* <MetaLogoSVGSm
                width="182"
                height="44"
                viewBox="0 0 182 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1291_10352)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.9728 38.5365V26.5966L30.6574 20.3691L40.342 26.5966V38.5365L30.6574 44.76L20.9728 38.5365ZM21.9828 38.0293L30.6574 43.6037L39.3557 38.0293L35.2957 35.4247L31.5962 37.8144C31.3178 37.9912 30.9968 38.0848 30.6693 38.0848C30.3418 38.0848 30.0207 37.9912 29.7424 37.8144L26.0389 35.4247L21.9828 38.0293ZM30.6574 32.368C30.9854 32.368 31.3067 32.273 31.5843 32.0939L39.3557 27.12L30.6693 21.5497L21.9828 27.12L29.7305 32.0939C30.0081 32.273 30.3294 32.368 30.6574 32.368ZM55.4081 34.0254L49.5972 27.5428H46.7995V37.5861H48.807V29.6783L55.4081 37.0871L62.0091 29.6783V37.5861H64.0166V27.5428H61.2189L55.4081 34.0254ZM77.6454 35.4337H65.45V37.5858H77.6454V35.4337ZM65.45 27.5428H77.6454V29.6949H65.45V27.5428ZM77.6454 31.8474H65.45V33.2821H77.6454V31.8474ZM83.8131 29.5387H79.0797V27.5428H90.5578V29.5387H85.8245V37.5861H83.8131V29.5387ZM100.162 27.5458H91.9931V37.5861H94.0042V34.5959H102.177V37.5861H104.188V31.534C104.193 31.0002 104.086 30.4713 103.874 29.9806C103.663 29.49 103.35 29.0482 102.958 28.6835C102.602 28.3053 102.168 28.0077 101.685 27.8113C101.203 27.615 100.683 27.5245 100.162 27.5458ZM102.173 32.528H94.0163V29.5379H100.162C100.699 29.5436 101.215 29.747 101.61 30.1088C101.977 30.4946 102.184 31.0035 102.189 31.534L102.173 32.528ZM109.523 35.0893C109.313 34.5983 109.207 34.0691 109.211 33.535L109.219 27.5428H121.406V29.4642H111.3V33.527C111.286 33.7923 111.331 34.0574 111.43 34.3038C111.529 34.5501 111.681 34.7717 111.874 34.9531C112.264 35.3156 112.774 35.5194 113.305 35.5244H119.397V33.527H114.31V31.5296H121.398V37.5858H113.297C112.763 37.5925 112.234 37.4897 111.741 37.2836C111.248 37.0775 110.802 36.7724 110.431 36.3873C110.042 36.0222 109.733 35.5802 109.523 35.0893ZM124.064 28.6813C123.674 29.0461 123.363 29.4879 123.153 29.9787C122.942 30.4695 122.836 30.9986 122.841 31.5325V37.5861H124.84V34.5952H133.037V37.5861H135.036V27.5433H126.915C126.388 27.5345 125.865 27.6306 125.375 27.8259C124.886 28.0213 124.44 28.3121 124.064 28.6813ZM133.049 32.5268H124.924V31.5325C124.929 31.0019 125.135 30.4928 125.5 30.1069C125.684 29.914 125.909 29.7631 126.157 29.6646C126.405 29.566 126.672 29.5222 126.939 29.5359H133.049V32.5268ZM141.204 29.5387H136.47V27.5428H147.948V29.5387H143.215V37.5861H141.204V29.5387ZM161.579 31.8474H149.384V33.2821H161.579V31.8474ZM149.384 35.4337H161.579V37.5858H149.384V35.4337ZM161.579 27.5428H149.384V29.6949H161.579V27.5428Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1291_10352"
                    x="0.972778"
                    y="0.369141"
                    width="180.606"
                    height="64.3909"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1291_10352"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1291_10352"
                      result="shape"
                    />
                  </filter>
                </defs>
              </MetaLogoSVGSm> */}
            </LogoAction>
          </MetaLogoContent>
        </MetaLogoContentContainer>
      </MetaLogoContainer>
      <div style={{ transform: "scale(-1, 1)" }}>
        <PatternLeft
          viewBox="0 0 52 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M13.5 1.5L27 15L40.5 1.5"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            className="path"
            d="M0.5 1L21.5 20.5"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            className="path"
            d="M13.5 81L27 67.5L40.5 81"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            className="path"
            d="M16 27L1.5 41L16 55"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            className="path"
            d="M21 62L1.5 81"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            className="path"
            d="M51.5 3L13.5 41L51.5 79"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
        </PatternLeft>
      </div>
      <HeaderRightContainer>
        <HeaderRightLineUpper
          width={"100%"}
          height="auto"
          src={RightLine}
        ></HeaderRightLineUpper>
        <HeaderRightLineSmallUpper
          width={"100%"}
          height="auto"
          src={RightLineSmall}
        ></HeaderRightLineSmallUpper>
        {/* <svg
          style={{ position: "absolute", left: "0px" }}
          width="47"
          height="15"
          viewBox="0 0 47 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M0 1H23L36.5 14.5H47"
            stroke="white"
            strokeWidth={2}
            opacity={0.5}
          />
          <path
            className="path"
            d="M46.5 3.5V1H33L40.5 8.5H46.5"
            stroke="white"
            strokeWidth={2}
            opacity={0.5}
          />
          <path
            className="path"
            d="M6.5 6L14.5 14H27L19 6H13.5L17 9.5"
            stroke="white"
            strokeWidth={2}
            opacity={0.5}
          />
        </svg> */}
        <HeaderButtonV2
          content="Whitepaper"
          callback={() => navigate("/whitepaper")}
        ></HeaderButtonV2>
        <HeaderButtonV2
          content="About Us"
          callback={() => navigate("/about-us")}
        ></HeaderButtonV2>
        <HeaderButtonV2
          content="play TCG world"
          callback={() => navigate("/play")}
        ></HeaderButtonV2>

        <Web3Status />
        {/* <MdHidden>
          <TwitterButton></TwitterButton>
        </MdHidden>
        <MdHidden>
          <DiscordButton></DiscordButton>
        </MdHidden> */}
        {/* <MenuButton></MenuButton> */}
        <HeaderRightLineSmallDown
          width={"100%"}
          height="auto"
          src={RightLineSmall}
        ></HeaderRightLineSmallDown>
        <HeaderRightLineDown
          width={"100%"}
          height="auto"
          src={RightLine}
        ></HeaderRightLineDown>
      </HeaderRightContainer>
    </HeaderContainer>
  );
}

export default HeaderV3;
