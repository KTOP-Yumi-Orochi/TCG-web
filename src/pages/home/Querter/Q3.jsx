import React from 'react';
import styled from 'styled-components';
import ArticleDecorator from 'components/textDecorator/ArticleDecorator';

const Container = styled.div `
  height: fit-content;
  display: flex;
  padding:0;
  max-width: 1800px;
  width:calc(100vw - 120px);
  align-items: center;
  justify-content:start;
  @media(max-width:490px ){
    width:calc(100vw - 48px);
  }
`;
const Content = styled.div `
    max-width: 732px;
    @media(max-width:1600px){
        max-width: 465px;
    }
    @media(max-width: 490px){
        max-width: 340px;
    }
    @media (max-height: 650px) {
        max-width: 600px
    }
`;
const Context = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
    @media(max-width:490px){
        margin-bottom:20px;
    }
`;
const Icon = styled.div `
    margin-right: 8px;
    margin-top:20px;
    @media (max-width: 1300px) {
        margin-top: 0px;
    }
    @media (max-height: 800px) {
        margin-top: 5px;
    }
`;
const ButtonArea = styled.div `
    margin-top: 20px;
`;

export default function Q3({size}) {
    const contentList = [
        {
            content: "Release of Aetherya’s Play-2-Earn Game with Story-Driven Progression-Based Content",
            height: '20px'
        }, {
            content: "Airdrop of Aetherya Genesis NFT Monsters",
            height: '20px'
        }, {
            content: "Introduction of Revenue Sharing Game Leaderboard",
            height: '20px'
        }, {
            content: "Staking Portal for $MGT Holders",
            height: '20px'
        },
        {
            content: "Activation of Metagate Launchpad",
            height: '20px'
        },
        {
            content:"DAO Voting & Governance",
            height:'20px'
        },
        {
            content: "NFT Loot Boxes for $MGT Holders",
            height: '20px'
        }
    ]

    return (
            <Container>
                <Content>
                    <ButtonArea>
                        <svg width="183" height="71" viewBox="0 0 183 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="7" width="179" height="56" fill="#FF1C6E" fillOpacity="0.3"/>
                            <rect x="168" y="5.5" width="14" height="3" fill="#FF1C6E"/>
                            <rect width="14" height="3" transform="matrix(-1 6.27635e-08 6.27635e-08 1 14.002 62)" fill="#FF1C6E"/>
                            <rect x="168" y="62" width="14" height="3" fill="#FF1C6E"/>
                            <rect x="179" y="14" width="14" height="3" transform="rotate(-90 179 14)" fill="#FF1C6E"/>
                            <rect width="14" height="3" transform="matrix(-5.18986e-09 -1 -1 5.18986e-09 3 70.5)" fill="#FF1C6E"/>
                            <rect x="179.002" y="70.5" width="14" height="3" transform="rotate(-90 179.002 70.5)" fill="#FF1C6E"/>
                            <rect width="14" height="3" transform="matrix(-1 0 0 1 14 5.5)" fill="#FF1C6E"/>
                            <rect width="14" height="3" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)" fill="#FF1C6E"/>
                            <line y1="6.5" x2="180" y2="6.5" stroke="#FF1C6E"/>
                            <line x1="1.5" y1="62" x2="1.5" y2="10" stroke="#FF1C6E"/>
                            <line x1="180.5" y1="65" x2="180.5" y2="7" stroke="#FF1C6E"/>
                            <line y1="63.5" x2="180" y2="63.5" stroke="#FF1C6E"/>
                            <path d="M40.3984 36.2969C40.3984 37.4609 39.9219 38.375 38.9688 39.0391L38.3945 37.1289H34.6211L35.3828 39.6484H27.0039V32.9453C27.0039 32.0234 27.332 31.2344 27.9883 30.5781C28.6445 29.9219 29.4336 29.5938 30.3555 29.5938H40.3984V36.2969ZM23.6523 43H36.3789L37.1406 45.5078H40.9023L39.9531 42.332C41.0938 41.7852 42.0078 40.9766 42.6953 39.9062C43.3984 38.8047 43.75 37.6016 43.75 36.2969V26.2422H30.3555C28.5039 26.2422 26.9258 26.8984 25.6211 28.2109C24.3086 29.5156 23.6523 31.0938 23.6523 32.9453V43ZM46.2227 26.2539V29.5938H59.6289C60.0898 29.5938 60.4844 29.7578 60.8125 30.0859C61.1406 30.4141 61.3047 30.8086 61.3047 31.2695C61.3047 31.7305 61.1406 32.125 60.8125 32.4531C60.4844 32.7812 60.0898 32.9453 59.6289 32.9453H50.4062V36.2969H59.6289C60.0898 36.2969 60.4844 36.4609 60.8125 36.7891C61.1406 37.1172 61.3047 37.5117 61.3047 37.9727V39.6484H46.2227V43H64.6445V37.9727C64.6445 36.6914 64.2188 35.5742 63.3672 34.6211C64.2188 33.668 64.6445 32.5508 64.6445 31.2695C64.6445 29.8867 64.1562 28.7031 63.1797 27.7188C62.1953 26.7422 61.0117 26.2539 59.6289 26.2539H46.2227ZM90.2617 34.3516L90.3203 34.3164C91.6562 33.457 92.3242 32.2305 92.3242 30.6367C92.3242 29.4258 91.8945 28.3906 91.0352 27.5312C90.1758 26.6797 89.1445 26.2539 87.9414 26.2539H73.0586V29.5938H87.9414C88.4258 29.5938 88.75 29.8281 88.9141 30.2969C89.0547 30.6953 88.9805 31.0391 88.6914 31.3281C88.6055 31.4219 88.4453 31.5312 88.2109 31.6562C87.6016 31.9844 85.1641 33.3047 80.8984 35.6172C77.9609 37.2188 75.7539 38.418 74.2773 39.2148C74.0117 39.3555 73.6055 39.5742 73.0586 39.8711V43H91.4805V39.6484H80.5L90.2031 34.3867L90.2617 34.3516ZM101.23 39.6484L111.531 31.4102V36.2969C111.531 37.2188 111.207 38.0078 110.559 38.6641C109.902 39.3203 109.113 39.6484 108.191 39.6484H101.23ZM108.438 29.5938L98.1367 37.8438V32.9453C98.1367 32.0234 98.4648 31.2344 99.1211 30.5781C99.7773 29.9219 100.566 29.5938 101.488 29.5938H108.438ZM94.7852 43H108.191C110.035 43 111.613 42.3438 112.926 41.0312C114.23 39.7266 114.883 38.1484 114.883 36.2969V26.2539H101.488C99.6367 26.2539 98.0586 26.9062 96.7539 28.2109C95.4414 29.5234 94.7852 31.1016 94.7852 32.9453V43ZM134.559 34.3516L134.617 34.3164C135.953 33.457 136.621 32.2305 136.621 30.6367C136.621 29.4258 136.191 28.3906 135.332 27.5312C134.473 26.6797 133.441 26.2539 132.238 26.2539H117.355V29.5938H132.238C132.723 29.5938 133.047 29.8281 133.211 30.2969C133.352 30.6953 133.277 31.0391 132.988 31.3281C132.902 31.4219 132.742 31.5312 132.508 31.6562C131.898 31.9844 129.461 33.3047 125.195 35.6172C122.258 37.2188 120.051 38.418 118.574 39.2148C118.309 39.3555 117.902 39.5742 117.355 39.8711V43H135.777V39.6484H124.797L134.5 34.3867L134.559 34.3516ZM156.285 34.3516L156.344 34.3164C157.68 33.457 158.348 32.2305 158.348 30.6367C158.348 29.4258 157.918 28.3906 157.059 27.5312C156.199 26.6797 155.168 26.2539 153.965 26.2539H139.082V29.5938H153.965C154.449 29.5938 154.773 29.8281 154.938 30.2969C155.078 30.6953 155.004 31.0391 154.715 31.3281C154.629 31.4219 154.469 31.5312 154.234 31.6562C153.625 31.9844 151.188 33.3047 146.922 35.6172C143.984 37.2188 141.777 38.418 140.301 39.2148C140.035 39.3555 139.629 39.5742 139.082 39.8711V43H157.504V39.6484H146.523L156.227 34.3867L156.285 34.3516Z" fill="white"/>
                        </svg>
                    </ButtonArea>

                    {
                    contentList.map((listItem, index) => {
                        return <Context key={index}>
                            <Icon>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="5.65723" width="8" height="8" transform="rotate(-45 0 5.65723)" fill="#FF1C6E"/>
                                </svg>
                            </Icon>
                            <ArticleDecorator content={
                                    listItem.content
                                }
                                fontFamily='Roboto'
                                fontSize={16}
                                lineHeight={22.4}/>
                        </Context>
                })
                } </Content>
            </Container>
    )
}
