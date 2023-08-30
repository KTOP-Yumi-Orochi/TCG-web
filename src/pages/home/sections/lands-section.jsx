import React, { useState, useContext } from 'react';
import ArticleDecorator from 'components/textDecorator/ArticleDecorator';
import TextDecorator from 'components/textDecorator/TextDecorator';
import Box from 'components/Box/Box'
import styled from 'styled-components';
import { LandingContext } from 'contexts/LandingContext'
import SliderBox from 'components/SliderBox/Index'

import Background_2560 from "assets/images/backgrounds/2560/section6.png";
import Background_1920 from "assets/images/backgrounds/1920/section6.png";
import Background from "assets/images/backgrounds/section6.png";
import Background_1280 from "assets/images/backgrounds/1280/section6.png";
import Background_mobile from "assets/images/backgrounds/mobile/section6.png";

const WrappedContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${props => props.height}px;
    background-image : url(${Background_2560});
    background-size: cover;
    background-repeat: no-repeat;
    justify-content:center;
    align-items: center;
    background-position: center bottom;
    @media(max-width:1920px){
        background-image : url(${Background_1920});
    }
    @media(max-width:1440px){
        background-image : url(${Background});
    }
    @media(max-width:1400px){
       justify-content:flex-end ;
    }
    @media (max-width: 1280px) {
        background-image: url(${Background_1280});
    }
    @media(max-width:490px){
        background-image : url(${Background_mobile});
    }

`;
const PageContainer = styled.div`
    height: ${props => props.height - 194}px;
    @media(max-width:1400px){
        height: ${props => props.height - 90}px;
    }
    @media(max-width:490px){
        height: ${props => props.height - 70}px;
    }
`;
const CellContent = ({ amount, description, size }) => {
    const fontSizeTop = 24;
    const { lang } = React.useContext(LandingContext);
    const fontFamily = lang !== "en" ? size.width < 490 ? 'SwissraD' : 'Israr-Syria' : 'Kusanagi';
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', justifyContent: 'center', height: '100%' }}>
            <TextDecorator direction={'up'} fontSize={fontSizeTop} content={amount} fontFamily={fontFamily} width='fit-content'></TextDecorator>
            <ArticleDecorator content={description} fontFamily='Roboto' fontSize={12} lineHeight={14.4} />
        </div>

    )
}

const RowCorner1 = ({ amount, description, size }) => {
    return (
        <div style={{ border: '1px solid rgba(255,255,255,0.5)', width: '221px', height: '90px', position: 'relative', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '-8px', marginLeft: '-2px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)" fill="white" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '-8px', marginLeft: '-2px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(-1 0 0 1 14 5.5)" fill="white" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ bottom: "-7px", marginLeft: '-2px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)" fill="white" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ bottom: "-7px", marginLeft: '-2px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(-1 0 0 1 14 5.5)" fill="white" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '-2px', right: '-13px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)" fill="white" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '-8px', right: '-7.5px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(-1 0 0 1 14 5.5)" fill="white" />
            </svg>
            <CellContent amount={amount} description={description} size={size}></CellContent>
        </div>
    )
}

const RowCorner2 = ({ amount, description, size }) => {
    return (
        <div style={{ border: '1px solid rgba(255,255,255,0.5)', width: '221px', height: '90px', marginLeft: '-1px', position: 'relative' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '-8px', right: '-13px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)" fill="white" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '-8px', right: '-2px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(-1 0 0 1 14 5.5)" fill="white" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ bottom: "-7px", right: '-13px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)" fill="white" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ bottom: "-7px", right: '-2px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(-1 0 0 1 14 5.5)" fill="white" />
            </svg>
            <CellContent amount={amount} description={description} size={size}></CellContent>

        </div>
    )
}

const RowCorner3 = ({ amount, description, size }) => {
    return (
        <div style={{ border: '1px solid rgba(255,255,255,0.5)', width: '221px', height: '90px', position: 'relative' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ bottom: "-7px", marginLeft: '-2px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)" fill="white" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ bottom: "-7px", marginLeft: '-2px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)" fill="white" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ bottom: "-7px", marginLeft: '-2px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(-1 0 0 1 14 5.5)" fill="white" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ bottom: '-2px', right: '-13px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)" fill="white" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ bottom: '-7.5px', right: '-7.5px', position: 'absolute' }}>
                <rect width="14" height="3" transform="matrix(-1 0 0 1 14 5.5)" fill="white" />
            </svg>
            <CellContent amount={amount} description={description} size={size}></CellContent>

        </div>
    )
}

const Container = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    max-width: 1800px;
    width:calc(100vw - 120px);
    justify-content: flex-start;

    @media(max-width:1200px){
        height: ${props => props.height - 96}px;
        padding:0;
        flex-direction: column-reverse;
        margin:0px auto;
        align-items: center;
        justify-content: center;
        
    }
    @media(max-width:420px){
        width:100vw;
        justify-content: center;
        align-items: center;
        margin:0px;
        width:calc(100vw - 48px);
    }
`;
const LeftContainer = styled.div`
    @media(max-width:968px){
        height:175px;
        width: calc(100vw - 48px);
        overflow:hidden;
        padding-bottom:52px;
    }
`;
const Content = styled.div`
    max-width: 732px;
    @media(max-width:1600px){
        max-width: 562px;
    }
    @media(max-width:1200px){
        max-width:91.68vw;
        width: 100%;
        height:100%;
        overflow:auto;
        -webkit-overflow-scrolling: touch;  
        scrollbar-width: none;
    }
    @media(max-width:420px){
        width: 100%;
    }
`;
const TextArea = styled.div`
    margin-top:1.4%;
    margin-bottom:1.8%;
    max-width: 616px;
    @media(max-width:1200px){
        margin-top:1%;
    }
`;
const TableArea = styled.div`
    display: flex;
    flex-direction: row;
    @media(max-width:490px){
        transform:scale(0.92);
        margin-left:-15px;
    }
`;
const MetaText = styled.div`
    font-family: Kusanagi;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
    letter-spacing: 0em;
    text-transform:uppercase ;
    text-align: left;
    color:white;
`;
const RightContent = styled.div`
    display:flex;
    align-items:center;
    width:60%;
    margin-left:150px;
    justify-content:center;
    @media(max-width:1600px){
        margin-left:0px;
    }

    @media(max-width:1200px){
        width: 100%;
        overflow: hidden;
    }
    @media(max-width:490px){
        width: 100vw;
     
    }
`;
const GameAreaContentContainer = styled.div`
    transform: scale(${props => props.scale});
    height:fit-content;
    display:flex;
    align-items:center;
`;
const BoxArea = styled.div`
    position:relative;
    width:454px;
    height:489px;
    @media(max-width:1200px) {
        width:252.9px;
        height:266.33px;
    }
`;
const FeatureContainer = styled.div`
    display:flex ;
    justify-content:space-between;
    flex-direction: row;
    font-family:'Roboto';
    font-weight:bold;
    font-size:18px;
    line-height:140%;
    color:white;
    @media(max-width:736px){
        font-size: 14px;
    }
`;
const LeftFeature = styled.div`
    width:50% ;
`;
const RightFeature = styled.div`
     width:50% ;
`;
const OutBox = styled.img`
    position:absolute;
    ${(props) => props.src};
    ${(props) => props.alt};
    z-index:10;
    @media(max-width:1366px) {
        width:100%;
    }
    
`;
const GameArea = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    display:flex; 
    justify-content:center;
    align-items:center;
`;
const MainArea = styled.img`
    ${(props) => props.src};
    ${(props) => props.alt};
    width:416px;
`;
const Area1 = styled.div`
    position: absolute;
    left: 172px;
    cursor:pointer;
    top: -153px;
    opacity:${props => props.opacity};
`;
const Area2 = styled.div`
    position: absolute;
    right: 22px;
    cursor:pointer;
    top: -124px;
    opacity:${props => props.opacity};
`;
const Area3 = styled.div`
    position: absolute;
    right: -100px;
    cursor:pointer;
    top: -34px;
    z-index:10;
    opacity:${props => props.opacity};
`;
const Area4 = styled.div`
    position: absolute;
    right: -161px;
    cursor:pointer;
    top: 87px;
    z-index:10;
    opacity:${props => props.opacity};
`;
const Area5 = styled.div`
    position: absolute;
    right: -178px;
    cursor:pointer;
    bottom: 146px;
    z-index:10;
    opacity:${props => props.opacity};
`;
const Area6 = styled.div`
    position: absolute;
    right: -145px;
    bottom: 22px;
    cursor:pointer;
    z-index:10;
    opacity:${props => props.opacity};
`;
const Area7 = styled.div`
    position: absolute;
    right: -64px;
    bottom: -82px;
    cursor:pointer;
    z-index:10;
    opacity:${props => props.opacity};
`;
const Area8 = styled.div`
    position: absolute;
    right: 86px;
    bottom: -150px;
    cursor:pointer;
    z-index:10;
    opacity:${props => props.opacity};
`;
const Area9 = styled.div`
    position: absolute;
    left: 86px;
    bottom: -150px;
    cursor:pointer;
    z-index:10;
    opacity:${props => props.opacity};
`;
const Area10 = styled.div`
    position: absolute;
    left: -64px;
    bottom: -82px;
    cursor:pointer;
    z-index:10;
    opacity:${props => props.opacity};
`;
const Area11 = styled.div`
    position: absolute;
    left: -145px;
    bottom: 22px;
    cursor:pointer;
    z-index:10;
    opacity:${props => props.opacity};
`;
const Area12 = styled.div`
    position: absolute;
    left: -178px;
    bottom: 146px;
    z-index:10;
    cursor:pointer;
    opacity:${props => props.opacity};
`;
const Area13 = styled.div`
    position: absolute;
    left: -161px;
    top: 87px;
    z-index:10;
    cursor:pointer;

    opacity:${props => props.opacity};
`;
const Area14 = styled.div`
    position: absolute;
    left: -100px;
    top: -34px;
    z-index:10;
    cursor:pointer;

    opacity:${props => props.opacity};
`;
const Area15 = styled.div`
    position: absolute;
    left: 22px;
    top: -124px;
    z-index:10;
    cursor:pointer;
    opacity:${props => props.opacity};
`;

export default function Section6({ size }) {
    const fontSizeTop = 32;
    const { lang } = React.useContext(LandingContext);
    const fontFamily = lang !== "en" ? size.width < 490 ? 'SwissraD' : 'Israr-Syria' : 'Kusanagi';
    const { arealist } = useContext(LandingContext);
    const [index, setIndex] = useState(11);
    const querterRef = React.useRef();

    const tableContent = [
        {
            amount: '16',
            description: 'Districts'
        },
        {
            amount: '500',
            description: 'Capitals'
        },
        {
            amount: '80',
            description: 'Mythics'
        },
    ]

    const content = "Each district unveiled in The World of Aetherya will come with a highly coveted set of properties with unique variations and traits spread across 8000 premium NFTs. The Aetherya Collection will serve as the central hub for different biomes, legendary races, mystical monsters, and breathtaking premium NFT properties. Every premium property designed by our award-winning artists comes jam-packed with a wealth of features, benefits, and rewards."
    const handleSelected = (id) => {
        setIndex(id);
    }

    const leftList = ['Rentable', 'NFT Gallery & Shop', 'Web3 Social Homebase', 'Monetized Streaming']
    const rightList = ['Token Airdrops', 'Play-to-Earn PVE & PVP', 'Genesis Monster NFT Airdrop', 'Dynamic Ads']

    const handleWheel = (e) => {
        e.stopPropagation();
    }
    const handleTouchStart = e => {
        e.stopPropagation();
    }
    const handleTouchEnd = (e) => {

        e.stopPropagation();
        const isBottom = querterRef.current.scrollHeight - Math.floor(querterRef.current.scrollTop) === querterRef.current.clientHeight;
        const isTop = querterRef.current.scrollTop === 0;
        if (isBottom) {
            window.fullpage_api.moveSectionDown();
        }
        else if (isTop) {
            window.fullpage_api.moveSectionUp();
        }
        else {
            e.stopPropagation();
        }
    }

    return (
        <WrappedContainer height={size.height}>
            <PageContainer height={size.height}>

                <Container height={size.height}>
                    <LeftContainer>
                        <Content onWheel={e => handleWheel(e)} onTouchMove={e => e.preventDefault} onTouchMoveCapture={(e) => e.stopPropagation()} onTouchStart={(e) => handleTouchStart(e)} onTouchEnd={e => handleTouchEnd(e)} onTouchCancelCapture={e => handleTouchEnd(e)} ref={querterRef}>
                            <TextDecorator uppercase="none" direction={'up'} fontSize={fontSizeTop} content={'The nfts'} fontFamily={fontFamily} width='fit-content'></TextDecorator>
                            <TextArea>
                                <ArticleDecorator content={content} fontFamily='Roboto' fontSize={size.width > 1180 ? 16 : 12} lineHeight={size.width > 1180 ? 22.4 : 16.8} />
                            </TextArea>
                            <div style={{ marginBottom: '17px' }}>
                                <MetaText>DISTRICT BREAKDOWN:</MetaText>
                            </div>

                            <TableArea>
                                {
                                    tableContent.map((tableCell, index) => {
                                        return (
                                            parseInt(index / 3) === 0 ? (index % 3 === 0 ? <RowCorner1 {...tableCell} key={index} size={size}></RowCorner1> : index % 3 === 1 ? <RowCorner2 {...tableCell} key={index} size={size} /> : <RowCorner3 {...tableCell} key={index} size={size} />) : ""
                                        )
                                    })
                                }
                            </TableArea>

                            <div style={{ marginTop: '20px', marginBottom: "8px" }}>
                                <MetaText>Features</MetaText>
                            </div>
                            <FeatureContainer>
                                <LeftFeature>
                                    {
                                        leftList.map((text, idx) => {
                                            return (<div style={{ margin: '5px 0px', display: 'flex' }} key={idx}>
                                                <span style={{ marginRight: '12px' }}><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.4722 15.4652L12.9579 10.048L7.53866 9.58569M17.8006 19.3346C22.1268 15.7045 22.692 9.2536 19.0612 4.92651C15.431 0.600279 8.97931 0.035828 4.65308 3.66597C0.326842 7.29611 -0.237609 13.7478 3.39253 18.0741C7.02338 22.4011 13.4744 22.9647 17.8006 19.3346Z" stroke="#FF1C6E" strokeWidth="1.24382" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></span> {text}
                                            </div>)
                                        })
                                    }
                                </LeftFeature>
                                <RightFeature>
                                    {
                                        rightList.map((text, idx) => {
                                            return (<div style={{ margin: '5px 0px', display: 'flex' }} key={idx}>
                                                <span style={{ marginRight: '12px' }}><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.4722 15.4652L12.9579 10.048L7.53866 9.58569M17.8006 19.3346C22.1268 15.7045 22.692 9.2536 19.0612 4.92651C15.431 0.600279 8.97931 0.035828 4.65308 3.66597C0.326842 7.29611 -0.237609 13.7478 3.39253 18.0741C7.02338 22.4011 13.4744 22.9647 17.8006 19.3346Z" stroke="#FF1C6E" strokeWidth="1.24382" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></span> {text}
                                            </div>)
                                        })
                                    }
                                </RightFeature>
                            </FeatureContainer>
                        </Content>

                    </LeftContainer>

                    <RightContent>
                        {size.width > 1200 ?
                            <GameAreaContentContainer scale={size.height < 1024 ? size.height / 1024 : 1}>
                                <BoxArea>
                                    <OutBox width={'100%'} src={'assets/images/area-box.png'} />
                                    <GameArea>
                                        <MainArea width={416} src={arealist[index]} />
                                    </GameArea>
                                    <Area1 onClick={() => handleSelected(0)} opacity={index === 0 ? 1 : 0.3}>
                                        <Box name={arealist[0]} />
                                    </Area1>
                                    <Area2 onClick={() => handleSelected(1)} opacity={index === 1 ? 1 : 0.3}>
                                        <Box name={arealist[1]} />
                                    </Area2>
                                    <Area3 onClick={() => handleSelected(2)} opacity={index === 2 ? 1 : 0.3}>
                                        <Box name={arealist[2]} />
                                    </Area3>
                                    <Area4 onClick={() => handleSelected(3)} opacity={index === 3 ? 3 : 0.3}>
                                        <Box name={arealist[3]} />
                                    </Area4>
                                    <Area5 onClick={() => handleSelected(4)} opacity={index === 4 ? 1 : 0.3}>
                                        <Box name={arealist[4]} />
                                    </Area5>
                                    <Area6 onClick={() => handleSelected(5)} opacity={index === 5 ? 1 : 0.3}>
                                        <Box name={arealist[5]} />
                                    </Area6>
                                    <Area7 onClick={() => handleSelected(6)} opacity={index === 6 ? 1 : 0.3}>
                                        <Box name={arealist[6]} />
                                    </Area7>
                                    <Area8 onClick={() => handleSelected(7)} opacity={index === 7 ? 1 : 0.3}>
                                        <Box name={arealist[7]} />
                                    </Area8>
                                    <Area9 onClick={() => handleSelected(8)} opacity={index === 8 ? 1 : 0.3}>
                                        <Box name={arealist[8]} />
                                    </Area9>
                                    <Area10 onClick={() => handleSelected(9)} opacity={index === 9 ? 1 : 0.3}>
                                        <Box name={arealist[9]} />
                                    </Area10>
                                    <Area11 onClick={() => handleSelected(10)} opacity={index === 10 ? 1 : 0.3}>
                                        <Box name={arealist[10]} />
                                    </Area11>
                                    <Area12 onClick={() => handleSelected(11)} opacity={index === 11 ? 1 : 0.3}>
                                        <Box name={arealist[11]} />
                                    </Area12>
                                    <Area13 onClick={() => handleSelected(12)} opacity={index === 12 ? 1 : 0.3}>
                                        <Box name={arealist[12]} />
                                    </Area13>
                                    <Area14 onClick={() => handleSelected(13)} opacity={index === 13 ? 1 : 0.3}>
                                        <Box name={arealist[13]} />
                                    </Area14>
                                    <Area15 onClick={() => handleSelected(14)} opacity={index === 14 ? 1 : 0.3}>
                                        <Box name={arealist[14]} />
                                    </Area15>
                                </BoxArea>
                            </GameAreaContentContainer>
                            :
                            <GameAreaContentContainer>
                                <SliderBox />
                            </GameAreaContentContainer>}
                    </RightContent>
                </Container>
            </PageContainer>
        </WrappedContainer>
    )
}
