import React,{useContext} from 'react';
import styled, { keyframes } from 'styled-components';
import HeaderLeftSide from 'components/header/HeaderLeftSide';
import {LandingContext} from 'contexts/LandingContext'
import {getRTL} from 'lang';

const MetaLogoLeft = styled.svg`
  display: block;
  @media (max-width: 735px) {
      display:none;
  }
`;
const Expand = keyframes`
  0%{
    width: 60px;
    height: 60px;
    clipPath: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  }
  95% {
    clipPath: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  }
  100% {
    width: 202px;
    height: 202px;
    clipPath: polygon(0 0, 100% 0%, 100% 100%, 0 100%);

  }
`;
const MetaLogoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 60px;
  height: 60px;
  clipPath: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
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
    width: calc(100vw - 1294px);
    min-width: 232px;
    height: 82px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1311px) {
        width: calc(100vw - 920px);
    }
    @media (max-width: 1033px) {
        width: calc(100vw - 738px);
    }
    @media (max-width: 845px) {
        width: calc(100vw - 628px);
    }
    @media (max-width: 735px) {
        width: calc(100vw - 210px);
        height: 68px;
        min-width: 181px;
    }
`;
const MetaLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100vw - 1220px);
    align-items: center;
    min-width: 232px;
    position: relative;
    margin-left: -25px;
    margin-right: -25px;
    @media (max-width: 1311px) {
        width: calc(100vw - 920px);
    }
    @media (max-width: 1033px) {
        width: calc(100vw - 738px);
    }
    @media (max-width: 845px) {
        width: calc(100vw - 628px);
    }
    @media (max-width: 735px) {
        width: calc(100vw - 210px);
        min-width: 181px;
    }
`;
const MetaLogoSVG = styled.svg`
    width: 202px;
    height: 69px;
    display: block;
    @media (max-width: 735px) {
        display: none;
    }
`;
const MetaLogoSVGSm = styled.svg`
    display: none;
    @media (max-width: 735px) {
        display: block;
    }
`;
const MotionTween = keyframes`
    from {
        visibility: visible;
        width: 40px
    }
    to {
        visibility: visible;
        width: 100%;
    }
`;
const MotionTweenSm = keyframes`
    from {
        visibility: visible;
        width: 40px
    }
    to {
        visibility: visible;
        width: calc(100% + 160px);
    }
`;
const MetaLogoBorderHalf = styled.div`
    overflow: hidden;
    height: 86px;
    visibility: hidden;
    animation: ${MotionTween} 1s 0.5s ease 1;
    animation-fill-mode: forwards;
    @media (max-width: 735px) {
        height: 68px;
        animation: ${MotionTweenSm} 1s 0.5s ease 1;
        animation-fill-mode: forwards;
    }
`;
const MetaLogoBorderContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 232px;
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: center;
    position: absolute;
    @media (max-width: 735px) {
        min-width: 181px;
    }
`;
const MetaLogoLeftSm = styled.svg`
    display: none;
    margin-left: 11px;
    margin-right: 11px;
    @media (max-width: 735px) {
        display: block;
    }
`;

export default function HeaderV1() {

    const { lang } = useContext(LandingContext);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', height: 'fit-content', alignItems: 'center' }}>
            {/* <HeaderRightSide isRTL={false}></HeaderRightSide> */}
            <HeaderLeftSide isRTL={!getRTL(lang)}></HeaderLeftSide>
            <MetaLogoContainer>
                <MetaLogoBorderContainer>
                    <MetaLogoBorderHalf>
                        <MetaLogoLeft width="1486" height="86" viewBox="0 0 1486 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1485 85H43L1 43L42 1H1485" stroke="white" strokeWidth="2px" strokeOpacity='0.5' strokeLinecap="round" strokeLinejoin="round" />
                        </MetaLogoLeft>
                        <MetaLogoLeftSm width="1159" height="68" viewBox="0 0 1159 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1158 67H33.7453L1 34L32.9656 1H1158"  strokeWidth="2px" stroke="white" strokeOpacity='0.5' strokeLinecap="round" strokeLinejoin="round" />
                        </MetaLogoLeftSm>



                    </MetaLogoBorderHalf>
                    <MetaLogoBorderHalf>
                        <div style={{ transform: 'scale(-1, 1)' }}>
                            <MetaLogoLeft width="1486" height="86" viewBox="0 0 1486 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1485 85H43L1 43L42 1H1485" stroke="white" strokeWidth="2px" strokeOpacity='0.5' strokeLinecap="round" strokeLinejoin="round" />
                            </MetaLogoLeft>
                            <MetaLogoLeftSm width="1159" height="68" viewBox="0 0 1159 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1158 67H33.7453L1 34L32.9656 1H1158" strokeWidth="2px" stroke="white" strokeOpacity='0.5' strokeLinecap="round" strokeLinejoin="round" />
                            </MetaLogoLeftSm>
                        </div>

                    </MetaLogoBorderHalf>
                </MetaLogoBorderContainer>
                <MetaLogoContentContainer>
                    <MetaLogoContent>
                        <LogoAction>
                            <MetaLogoSVG width="202" height="69" viewBox="0 0 202 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_157_1782)">
                                    <path fillRule="evenodd" d="M20 41.4576V27.751L31.1177 20.6021L42.2353 27.751V41.4576L31.1177 48.6021L20 41.4576ZM21.1595 40.8754L31.1177 47.2747L41.1031 40.8754L36.4423 37.8855L32.1953 40.6287C31.8758 40.8317 31.5073 40.9391 31.1313 40.9391C30.7553 40.9391 30.3868 40.8317 30.0673 40.6287L25.8158 37.8855L21.1595 40.8754ZM31.1177 34.3764C31.4942 34.3764 31.8631 34.2674 32.1817 34.0618L41.1031 28.3519L31.1313 21.9573L21.1595 28.3519L30.0537 34.0618C30.3723 34.2674 30.7411 34.3764 31.1177 34.3764ZM59.5308 36.2793L52.8601 28.8374H49.6484V40.3668H51.953V31.2889L59.5308 39.794L67.1086 31.2889V40.3668H69.4131V28.8374H66.2015L59.5308 36.2793ZM85.0586 37.896H71.0586V40.3666H85.0586V37.896ZM71.0586 28.8374H85.0586V31.308H71.0586V28.8374ZM85.0586 33.7783H71.0586V35.4254H85.0586V33.7783ZM92.1388 31.1286H86.7051V28.8374H99.8815V31.1286H94.4479V40.3668H92.1388V31.1286ZM110.907 28.8409H101.529V40.3668H103.838V36.9342H113.22V40.3668H115.529V33.4192C115.535 32.8064 115.412 32.1992 115.169 31.636C114.926 31.0727 114.567 30.5656 114.116 30.147C113.708 29.7127 113.209 29.3711 112.656 29.1457C112.102 28.9203 111.505 28.8164 110.907 28.8409ZM113.216 34.5603H103.852V31.1278H110.907C111.524 31.1342 112.116 31.3678 112.569 31.7831C112.991 32.226 113.228 32.8102 113.234 33.4192L113.216 34.5603ZM121.653 37.5006C121.412 36.937 121.29 36.3295 121.295 35.7163L121.304 28.8374H135.295V31.0432H123.693V35.7072C123.677 36.0117 123.728 36.316 123.842 36.5988C123.956 36.8816 124.13 37.136 124.352 37.3443C124.799 37.7603 125.385 37.9943 125.995 38.0001H132.988V35.7072H127.149V33.4142H135.286V40.3665H125.986C125.373 40.3742 124.765 40.2562 124.199 40.0196C123.633 39.783 123.121 39.4328 122.696 38.9907C122.249 38.5716 121.894 38.0642 121.653 37.5006ZM138.346 30.1444C137.898 30.5632 137.542 31.0704 137.3 31.6338C137.058 32.1972 136.936 32.8045 136.942 33.4175V40.3668H139.237V36.9334H148.646V40.3668H150.941V28.838H141.619C141.014 28.8279 140.413 28.9382 139.851 29.1625C139.289 29.3868 138.777 29.7206 138.346 30.1444ZM148.66 34.5589H139.333V33.4175C139.339 32.8083 139.575 32.2239 139.994 31.7809C140.206 31.5595 140.463 31.3863 140.749 31.2732C141.034 31.1601 141.34 31.1097 141.646 31.1255H148.66V34.5589ZM158.022 31.1286H152.588V28.8374H165.764V31.1286H160.331V40.3668H158.022V31.1286ZM181.412 33.7783H167.412V35.4254H181.412V33.7783ZM167.412 37.896H181.412V40.3666H167.412V37.896ZM181.412 28.8374H167.412V31.308H181.412V28.8374Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_157_1782" x="0" y="0.602051" width="201.412" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="10" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_157_1782" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_157_1782" result="shape" />
                                    </filter>
                                </defs>
                            </MetaLogoSVG>
                            <MetaLogoSVGSm width="182" height="44" viewBox="0 0 182 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1291_10352)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.9728 38.5365V26.5966L30.6574 20.3691L40.342 26.5966V38.5365L30.6574 44.76L20.9728 38.5365ZM21.9828 38.0293L30.6574 43.6037L39.3557 38.0293L35.2957 35.4247L31.5962 37.8144C31.3178 37.9912 30.9968 38.0848 30.6693 38.0848C30.3418 38.0848 30.0207 37.9912 29.7424 37.8144L26.0389 35.4247L21.9828 38.0293ZM30.6574 32.368C30.9854 32.368 31.3067 32.273 31.5843 32.0939L39.3557 27.12L30.6693 21.5497L21.9828 27.12L29.7305 32.0939C30.0081 32.273 30.3294 32.368 30.6574 32.368ZM55.4081 34.0254L49.5972 27.5428H46.7995V37.5861H48.807V29.6783L55.4081 37.0871L62.0091 29.6783V37.5861H64.0166V27.5428H61.2189L55.4081 34.0254ZM77.6454 35.4337H65.45V37.5858H77.6454V35.4337ZM65.45 27.5428H77.6454V29.6949H65.45V27.5428ZM77.6454 31.8474H65.45V33.2821H77.6454V31.8474ZM83.8131 29.5387H79.0797V27.5428H90.5578V29.5387H85.8245V37.5861H83.8131V29.5387ZM100.162 27.5458H91.9931V37.5861H94.0042V34.5959H102.177V37.5861H104.188V31.534C104.193 31.0002 104.086 30.4713 103.874 29.9806C103.663 29.49 103.35 29.0482 102.958 28.6835C102.602 28.3053 102.168 28.0077 101.685 27.8113C101.203 27.615 100.683 27.5245 100.162 27.5458ZM102.173 32.528H94.0163V29.5379H100.162C100.699 29.5436 101.215 29.747 101.61 30.1088C101.977 30.4946 102.184 31.0035 102.189 31.534L102.173 32.528ZM109.523 35.0893C109.313 34.5983 109.207 34.0691 109.211 33.535L109.219 27.5428H121.406V29.4642H111.3V33.527C111.286 33.7923 111.331 34.0574 111.43 34.3038C111.529 34.5501 111.681 34.7717 111.874 34.9531C112.264 35.3156 112.774 35.5194 113.305 35.5244H119.397V33.527H114.31V31.5296H121.398V37.5858H113.297C112.763 37.5925 112.234 37.4897 111.741 37.2836C111.248 37.0775 110.802 36.7724 110.431 36.3873C110.042 36.0222 109.733 35.5802 109.523 35.0893ZM124.064 28.6813C123.674 29.0461 123.363 29.4879 123.153 29.9787C122.942 30.4695 122.836 30.9986 122.841 31.5325V37.5861H124.84V34.5952H133.037V37.5861H135.036V27.5433H126.915C126.388 27.5345 125.865 27.6306 125.375 27.8259C124.886 28.0213 124.44 28.3121 124.064 28.6813ZM133.049 32.5268H124.924V31.5325C124.929 31.0019 125.135 30.4928 125.5 30.1069C125.684 29.914 125.909 29.7631 126.157 29.6646C126.405 29.566 126.672 29.5222 126.939 29.5359H133.049V32.5268ZM141.204 29.5387H136.47V27.5428H147.948V29.5387H143.215V37.5861H141.204V29.5387ZM161.579 31.8474H149.384V33.2821H161.579V31.8474ZM149.384 35.4337H161.579V37.5858H149.384V35.4337ZM161.579 27.5428H149.384V29.6949H161.579V27.5428Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1291_10352" x="0.972778" y="0.369141" width="180.606" height="64.3909" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="10" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1291_10352" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1291_10352" result="shape" />
                                    </filter>
                                </defs>
                            </MetaLogoSVGSm>

                        </LogoAction>
                    </MetaLogoContent>
                </MetaLogoContentContainer>
            </MetaLogoContainer>
            <div style={{ transform: 'scale(-1, 1)' }}>
                <HeaderLeftSide isRTL={getRTL(lang)}></HeaderLeftSide>
            </div>
            {/* <ButtonArea isRTL ={getRTL(lang)}> */}
                {/* <Button /> */}
                {/* <LanguageButton />
            </ButtonArea>  */}
        </div>

    );
}



