import React from 'react';
import FeatureButton from 'components/buttons/FeatureButton';
import ArticleDecorator from 'components/textDecorator/ArticleDecorator';
import TextDecorator from 'components/textDecorator/TextDecorator';
import styled, { keyframes } from 'styled-components'

const WrappedContainer = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: ${props =>props.height}px;
    justify-content:center;
    align-items: center;
    background-image: url('assets/images/backgrounds/section4/2560/main.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media(max-width:1920px){
        background-image : url('assets/images/backgrounds/section4/1920/main.png');
    }
    @media(max-width:1440px){
        background-image: url('assets/images/backgrounds/section4/main.png');
    }
    @media(max-width:1400px){
        justify-content: flex-end ;
    }
    @media (max-width: 1280px) {
        background-image: url('assets/images/backgrounds/section4/1280/main.png');
    }
    @media(max-width:490px){
        background-image : url('assets/images/backgrounds/section4/mobile/main.png');
    }
`;
const backgroundEffect = keyframes`
    0%{
        opacity: 0;
    }
    10%{
        opacity: 1;
    }
    17%
    {   
        opacity: 0;
    }
    25%
    {
        opacity: 1;
    }
    33%
    {
        opacity: 0;
    }
    40%
    {
        opacity: 1;
    }
    100%{
        opacity: 1;
    }
`;
const AnimationBackground = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${props =>props.height}px;
    justify-content:center;
    align-items: flex-start;
    opacity: ${props => props.hover ?  0.3 : 0 };
    background-image: url('assets/images/backgrounds/section4/2560/part${props => props.index}.png');
    background-size: cover;
    background-repeat: no-repeat;
    animation: ${props => props.play === 'true' ? backgroundEffect : ''} 1s 0.5s ease 1;
    animation-fill-mode: forwards;
    z-index:2;
    background-position: center;
    @media(max-width:1920px){
        background-image: url('assets/images/backgrounds/section4/1920/part${props => props.index}.png');
    }
    @media(max-width:1440px){
        background-image: url('assets/images/backgrounds/section4/part${props => props.index}.png');
    }
    @media(max-width:1280px){
        background-image: url('assets/images/backgrounds/section4/1280/part${props => props.index}.png');
    }
    @media(max-width:490px){
        background-image: url('assets/images/backgrounds/section4/mobile/part${props => props.index}.png');
    }

`;
const PageContainer =  styled.div`
    height: ${props =>props.height -194}px;
    
    @media(max-width:1400px){
        height: ${props =>props.height -94}px;
    }
`;
const Container = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1800px;
    width:calc(100vw - 120px);
    align-items: flex-center;
    z-index:5;
    @media(max-width:1400px){
        justify-content:flex-center;
    }
    @media(max-width:490px){
        justify-content: flex-end;
        width:calc(100vw - 48px);
    }
`;
const TextArea = styled.div`
    height: 92px;
    @media(max-width:736px){
        height: 84px;
    }

`;
const FooterContainer =  styled.div`
     display:none;
     @media(max-width:490px) {
         display:block;
         height:90px;
     }
`;

export default function CapitalSection1({size,start}) {
    const [index, setIndex] = React.useState(0);
    const [play, setPlay] = React.useState('false');

    React.useEffect(() =>{
        start === 3 ?  setPlay('true') : setPlay('false');
    },[start])
    React.useEffect(() => {
        setPlay('true');
    }, [index])
    const content = 'Meta Prime is comprised of 5 unique districts, each containing 100 properties that are reserved to be custom designed by our team and airdropped to our partners in the following sectors: business, art, music, gaming, and meta architects. The Capital of the multiverse provides partners with the platform to elevate their metaverse and web3 presence. Enjoy benefits like a lifetime of ad space on our Metaverse Explorer and leverage your personal web3 funnel to offer custom services to your community.';
    const icons = [
        'assets/images/buttons/feature_back1.svg',
        'assets/images/buttons/feature_back2.svg',
        'assets/images/buttons/feature_back3.svg',
        'assets/images/buttons/feature_back4.svg',
        'assets/images/buttons/feature_back5.svg',
    ]
    const articles = [
        {
            title: 'Canvas Row (Art District)',
            content: 'A place for the world’s best Digital Artists to take up residency while venturing through awe-inspiring art showcases, breathtaking galleries, and museums displaying work from some of the most gifted visionaries in the metaverse. Canvas Row is sure to stoke the burning flames of your imagination and creativity.'
        },
        {
            title: 'melody (music District)',
            content: 'In the Melody Block, it’s extremely rare to come across a resident who isn’t filled with beautiful melodies, natural gifts, and inspiring influence. This is the place where world-class DJs and chart-topping artists echo sounds of hope, excitement, and artistry across the multiverse. Ignite the sounds of the metaverse and give your fans a whole new avenue to enjoy your brand.'
        },
        {
            title: 'crystal towers (financial District)',
            content: 'Home to some of the sharpest minds in business and finance, Crystal Towers is a place where you can rub shoulders with business elites, industrial titans, global CEOs, and technology giants. Form strategic partnerships and build an empire from the seat of your metropolis-style office to bring a new level of innovation and opportunity to the World of Aetherya.'
        },
        {
            title: 'builder’s block (builders District)',
            content: 'In the distance, the sound of visionary meta architects can be heard forging bridges and pathways to the future of innovation and possibilities found within the metaverse. Residents from the Builder’s Block have a proven history of embracing emerging technology, cementing the building blocks for triumphant victories across the metaverse.'
        },
        {
            title: 'west valiant (gamer District)',
            content: 'West Valiant has plugged in some of the world’s biggest streamers, influencers, and gaming superstars into a system enabling them to engage with their communities, show off their elite skills, and earn exciting rewards by leveraging advanced web3 monetization tools.'
        }
    ]



    const handleClick = (index) => {
        setIndex(index);
        setPlay('false')
    }

    return (
        <WrappedContainer height={size.height}>
            <AnimationBackground index={index > 4 ? 4 : index} play={play} height={size.height} />
            <PageContainer height={size.height}>
                <Container height ={size.height}>
                    <TextDecorator direction={'up'} fontSize={32} smFontSize={18} content={'the capital'} fontFamily={'Kusanagi'} width='284px'></TextDecorator>
                    <div style={{ marginTop: '1.8vh' }}>
                        <ArticleDecorator content={content} fontFamily='Roboto' fontSize={size.width < 490 ? 12 : 16} lineHeight={22.4} width={size.width>1600 ? '732px':size.width < 490 ? '342px' : '600px'}></ArticleDecorator>
                    </div>
                    <div style={{ display: 'flex', width: '313px', justifyContent: 'space-between', marginTop: '7vh', marginBottom: '1.8vh',zIndex:10}}>
                        {
                            icons.map((icon, idx) => {
                                return <FeatureButton icon={icon} key={"feature_buttons" + idx} active={idx === index} callback={() => handleClick(idx)}></FeatureButton>
                            })
                        }
                    </div>
                    <TextDecorator uppercase="none" width='fit-content' content={articles[index].title} direction='up' fontFamily='Kusanagi' fontSize={size.width > 1280 ? 32 : 24} smFontSize={18}></TextDecorator>
                    <div style={{ height: '10px' }}></div>
                    <TextArea>
                        <ArticleDecorator height={'132px'} width={size.width>1600 ? '732px' : size.width < 490 ? '342px' : '600px'} content={articles[index].content} fontFamily='Roboto' fontSize={16} lineHeight={22.4}></ArticleDecorator>
                    </TextArea>
                    <FooterContainer />
                </Container>
            </PageContainer>
        </WrappedContainer>
    )
}
