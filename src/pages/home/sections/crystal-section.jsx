import React from 'react';
import FeatureButton from 'components/buttons/FeatureButton';
import ArticleDecorator from 'components/textDecorator/ArticleDecorator';
import TextDecorator from 'components/textDecorator/TextDecorator';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: ${props =>props.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image : url('assets/images/backgrounds/2560/section7.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    @media(max-width:1920px){
        background-image : url('assets/images/backgrounds/1920/section7.png');
    }
    @media(max-width:1440px){
        background-image: url('assets/images/backgrounds/aetherya.png');
    }
    @media(max-width:1400px){
      align-items:end ;
    }

    @media (max-width: 1280px) {
        background-image: url('assets/images/backgrounds/1280/section7.png');
    }
    @media(max-width:490px){
        background-image : url('assets/images/backgrounds/mobile/section7.png');
    }
`;
const PageContainer =  styled.div`
    height: ${props =>props.height -194}px;
    @media(max-width:1400px){
        height: ${props =>props.height -94}px;
    }
`;
const BodyContainer = styled.div`
    max-width: 1800px;
    width:calc(100vw - 120px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 490px) {
        justify-content: flex-end;
        height: ${props =>props.height -194}px;
        @media(max-width:490px ){
        width:calc(100vw - 48px);
  }
    }
`;
const TextArea = styled.div`
    display: flex;
    width: 247.4px;
    justify-content: space-between;
    margin-top: 80px;
    margin-bottom: 20px; 
`;
const FooterContainer =  styled.div`
     display:none;
     @media(max-width:490px) {
         display:block;
         height:52px;
     }
`;

export default function Aetherya({size}) {
    const content = 'Every Aetheryan property comes equipped with an anchor yielding $CRYSTAL that empowers residents to access lucrative GameFi opportunities and story-driven, progression-based content.'
    const icons = [
        'assets/images/buttons/feature_key_back2.svg',
        'assets/images/buttons/feature_key_back1.svg',
        'assets/images/buttons/feature_key_back4.svg',
        'assets/images/buttons/feature_key_back3.svg',
    ];

    const articles = [
        {
            title: 'token airdrops',
            content: '$CRYSTAL is Aetherya’s native metaverse token. Property owners are able to earn these utility tokens on a daily basis by just owning a property. Use these valuable tokens in Aetherya’s game shop or exchange it for other cryptocurrencies.'
        },
        {
            title: 'monster breeding',
            content: 'Evolve your monsters to the final stage of evolution to gain access to our innovative monster breeding mechanic. Pair two monsters of the same class together to form a whole new legendary tier of monsters with unique traits, appearances, and elemental abilities.'
        },
        {
            title: 'pve ',
            content: 'Your epic journey across the beautiful World of Aetherya brings you to   the f orefront of mystical lands and creature-filled underworlds. Take on challenging quests, explore the wonders of the World, discover the ancient secrets of Aetherya, and accumulate XP to unlock access to valuable in-game loot and upgrades.'
        },
        { 
            title: 'pvp ',
            content: 'Rise to the top of the leaderboard and earn your portion of the revenue sharing pool. Evolve your monsters by augmenting them with crystals to upgrade their ranks, battle abilities, and league statuses. Gain access to the league by owning a monster that fits the level and criteria of that specific league tier.'
        },

    ]
    
    const [index, setIndex] = React.useState(0);
    const handleClick =(id) =>{
        setIndex(id)
    }
    
    return (
        <Container height={size.height}>
            <PageContainer  height={size.height}>
                <BodyContainer>
                    <TextDecorator uppercase="none" content='The $CRYSTAL' direction='up' fontFamily='Kusanagi' fontSize={32}></TextDecorator>

                    <ArticleDecorator content={content} fontFamily='Roboto' fontSize={16} lineHeight={22.4} width={size.width > 1600 ? '732px' : size.width < 490 ? '342px' : '476px'}></ArticleDecorator>
                    <TextArea>
                        {
                            icons.map((icon, idx) => {
                                return <FeatureButton icon={icon} key={"feature_buttons" + idx} active={idx === index}  callback={() => handleClick(idx)}></FeatureButton>
                            })
                        }
                    </TextArea>
                    <TextDecorator uppercase="none" width='fit-content' content={articles[index].title} direction='up' fontFamily='Kusanagi' fontSize={24}></TextDecorator>
                    <div style={{ height: '10px' }}></div>
                    <div style={{height:'101px'}}>
                        <ArticleDecorator weight = {600} width={size.width > 1600 ? '732px' : size.width < 490 ? '342px' : '476px'} content={articles[index].content} fontFamily='Roboto' fontSize={16} lineHeight={22.4}></ArticleDecorator>
                    </div>
                    <FooterContainer />
                </BodyContainer>
            </PageContainer>
        </Container>
    )
}
