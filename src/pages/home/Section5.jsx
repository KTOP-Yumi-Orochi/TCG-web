import React, { useState ,useContext } from 'react';
import styled from 'styled-components';
import ArticleDecorator from 'components/textDecorator/ArticleDecorator';
import TextDecorator from 'components/textDecorator/TextDecorator';
import Box from 'components/Box/Box'
import { LandingContext } from 'contexts/LandingContext';
import SliderBox from 'components/SliderBox/Index'

const WrappedContainer =styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${props =>props.height}px;
    background-image : url('assets/images/backgrounds/2560/section5.png');
    background-size: cover;
    background-repeat: no-repeat;
    justify-content:center;
    align-items: center;
    background-position: center bottom;
    @media(max-width:1920px){
        background-image : url('assets/images/backgrounds/1920/section5.png');
    }
    @media(max-width:1440px){
        background-image : url('assets/images/backgrounds/section5.png');
    }
    @media(max-width:1400px){
       justify-content:flex-end ;
    }
    @media (max-width: 1280px) {
        background-image: url('assets/images/backgrounds/1280/section5.png');
    }
    @media(max-width:490px){
        background-image : url('assets/images/backgrounds/mobile/section5.png');
    }
`;
const PageContainer =  styled.div`
    height: ${props =>props.height -194}px;
    @media(max-width:1400px){
        height: ${props =>props.height -94}px;
    }
`;
const Container = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    max-width: 1800px;
    width:calc(100vw - 120px);
    justify-content:start;
    @media(max-width:1200px){
        padding:0;
        height: 90%;
        flex-direction:column-reverse;
        margin:0px auto;
        align-items: flex-end;
        justify-content:center;
        width:calc(100vw - 48px);
    }
    @media(max-width:420px){
        width:100vw;
        justify-content: center;
        align-items: center;
    }
`;
const Content = styled.div`
    max-width: 732px;
    @media(max-width:1600px){
        width: 562px;
        max-width: 562px;
    }
    @media(max-width:1200px){
        max-width:91.68vw;
        width: 100%;
    }
    @media(max-width:420px){
        width: calc(100vw -48px);
    }
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
`;
const Context = styled.div`
    margin-top:20px;
    @media (max-width: 1280px) {
        width: 376px;
    }
    @media(max-width:1200px){
        margin-top:14px;
    }
    @media (max-width: 490px) {
        width: 350px;
    }
`;
const GameCharacterContentContainer = styled.div`
    transform: scale(${props => props.scale});
    height:fit-content;
    display:flex;
    align-items:center;
`;
const BoxCharacter = styled.div`
    position:relative;
    width:464px;
    height:490px;
    @media(max-width:1200px) {
        width:252.9px;
        height:266.33px;
    }
`;
const Outline = styled.img`
    position:absolute;
    z-index:10;
    @media(max-width:1366px) {
        width:100%;
    }
`;
const GameCharacter = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    display:flex; 
    justify-content:center;
    align-items:center;
`;
const MainCharacter = styled.img`
    ${(props) => props.src};
    ${(props) => props.alt};
    @media(max-width:1200px) {
        width:90%;
    }
`;
const Character1 = styled.div`
    position: absolute;
    right: -56px;
    top: -67px;
    cursor:pointer;
`;
const Character2 = styled.div`
    position: absolute;
    right: -145px;
    top: 50px;
    cursor:pointer;
`;
const Character3 = styled.div`
    position: absolute;
    right: -180px;
    top: 187px;
    cursor:pointer;
`;
const Character4 = styled.div`
    position: absolute;
    right: -145px;
    bottom: 50px;
    cursor:pointer;
`;
const Character5 = styled.div`
    position: absolute;
    right: -56px;
    bottom: -67px;
    cursor:pointer;
`;

export default function Section5({size}) {
    const content ="Upon purchasing your property, you unlock the ability to redeem an NFT Avatar that can accompany you on your journey through the multiverse. As you explore the land your unique avatars, you’ll quickly find yourself immersed in all of the wonders that the World of Aetherya has to offer. Our hand-modeled and intricately designed avatars come from all parts of the multiverse, with their unique traits, native biomes, and colorful personas."
    const [index,setIndex] = useState(0);
    const { lang } = React.useContext(LandingContext);
    const fontFamily = lang !== "en" ? size.width < 490 ? 'SwissraD' : 'Israr-Syria' : 'Kusanagi';

    const { characters } = useContext(LandingContext);

    const handleSelected =(id) =>{
        setIndex(id);
    }

    return (
        <WrappedContainer height={size.height}>
            <PageContainer height={size.height}>
                <Container>
                    <Content>
                        <TextDecorator direction={'up'} fontSize={size.width < 490 ? 24 : 32} content={'The AVATARS'} fontFamily={fontFamily} width='fit-content'></TextDecorator>
                        <Context>
                            <ArticleDecorator content={content} fontFamily='Roboto'  fontSize={16} lineHeight={22.4} />
                        </Context>
                    </Content>
                    <RightContent>
                        {size.width >1200 ? 
                            <GameCharacterContentContainer scale = {size.height < 1024 ? size.height / 1024 : 1}>
                                <BoxCharacter>
                                    <Outline width={'100%'} src={'assets/images/hexagon.png'} />
                                    <GameCharacter>
                                        <MainCharacter width={'90%'} src = {characters[index]}/>
                                    </GameCharacter>
                                    <Character1 onClick={()=>handleSelected(0)}>
                                        <Box name = {characters[0]}/>
                                    </Character1>
                                    <Character2 onClick={()=>handleSelected(1)}>
                                        <Box name = {characters[1]}/>
                                    </Character2>
                                    <Character3 onClick={()=>handleSelected(2)}>
                                        <Box name = {characters[2]}/>
                                    </Character3>
                                    <Character4 onClick={()=>handleSelected(3)}>
                                        <Box name = {characters[3]}/>
                                    </Character4>
                                    <Character5 onClick={()=>handleSelected(4)}>
                                        <Box name = {characters[4]}/>
                                    </Character5>
                                </BoxCharacter>
                            </GameCharacterContentContainer>
                            :
                            <GameCharacterContentContainer scale = {1}>
                                <SliderBox id='character'/>
                            </GameCharacterContentContainer>
                            }
                    </RightContent>
                </Container>
            </PageContainer>
        </WrappedContainer>
    )
}