import React from 'react';
import styled from 'styled-components';
import TextDecorator from 'components/textDecorator/TextDecorator';
import ArticleDecorator from 'components/textDecorator/ArticleDecorator';

const Container = styled.div `
  height:fit-content;
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
    margin-top:20px ;
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

export default function Q1({size}) {
    const contentList = [
        {
            content: "Genesis Metaverse Collection Sale (Aetherya)",
            height: '20px'
        }, 
        {
            content: "$MGT Launchpad Token Sale (KYC Required)",
            height: '20px'
        },
        {
            content: "$CRYSTAL GameFi Token Yields",
            height: '20px'
        }, 
        {
            content: "DEX & Directory Listings",
            height: '20px'
        },
        {
            content: "Smart Contracts Audit",
            height: '20px'
        }, 

    ]



    return (
            <Container>
                <Content>
                    <TextDecorator direction={'up'}
                        fontSize={
                            size.width < 490 ? 24 : 32
                        }
                        content={'the roadmap'}
                        fontFamily={'Kusanagi'}
                        width='fit-content'/>
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
                            <path d="M47.0898 36.2969C47.0898 37.4609 46.6133 38.375 45.6602 39.0391L45.0859 37.1289H41.3125L42.0742 39.6484H33.6953V32.9453C33.6953 32.0234 34.0234 31.2344 34.6797 30.5781C35.3359 29.9219 36.125 29.5938 37.0469 29.5938H47.0898V36.2969ZM30.3438 43H43.0703L43.832 45.5078H47.5938L46.6445 42.332C47.7852 41.7852 48.6992 40.9766 49.3867 39.9062C50.0898 38.8047 50.4414 37.6016 50.4414 36.2969V26.2422H37.0469C35.1953 26.2422 33.6172 26.8984 32.3125 28.2109C31 29.5156 30.3438 31.0938 30.3438 32.9453V43ZM52.9141 26.2539V29.5938H54.5898V43H57.9414V26.2539H52.9141ZM83.5703 34.3516L83.6289 34.3164C84.9648 33.457 85.6328 32.2305 85.6328 30.6367C85.6328 29.4258 85.2031 28.3906 84.3438 27.5312C83.4844 26.6797 82.4531 26.2539 81.25 26.2539H66.3672V29.5938H81.25C81.7344 29.5938 82.0586 29.8281 82.2227 30.2969C82.3633 30.6953 82.2891 31.0391 82 31.3281C81.9141 31.4219 81.7539 31.5312 81.5195 31.6562C80.9102 31.9844 78.4727 33.3047 74.207 35.6172C71.2695 37.2188 69.0625 38.418 67.5859 39.2148C67.3203 39.3555 66.9141 39.5742 66.3672 39.8711V43H84.7891V39.6484H73.8086L83.5117 34.3867L83.5703 34.3516ZM94.5391 39.6484L104.84 31.4102V36.2969C104.84 37.2188 104.516 38.0078 103.867 38.6641C103.211 39.3203 102.422 39.6484 101.5 39.6484H94.5391ZM101.746 29.5938L91.4453 37.8438V32.9453C91.4453 32.0234 91.7734 31.2344 92.4297 30.5781C93.0859 29.9219 93.875 29.5938 94.7969 29.5938H101.746ZM88.0938 43H101.5C103.344 43 104.922 42.3438 106.234 41.0312C107.539 39.7266 108.191 38.1484 108.191 36.2969V26.2539H94.7969C92.9453 26.2539 91.3672 26.9062 90.0625 28.2109C88.75 29.5234 88.0938 31.1016 88.0938 32.9453V43ZM127.867 34.3516L127.926 34.3164C129.262 33.457 129.93 32.2305 129.93 30.6367C129.93 29.4258 129.5 28.3906 128.641 27.5312C127.781 26.6797 126.75 26.2539 125.547 26.2539H110.664V29.5938H125.547C126.031 29.5938 126.355 29.8281 126.52 30.2969C126.66 30.6953 126.586 31.0391 126.297 31.3281C126.211 31.4219 126.051 31.5312 125.816 31.6562C125.207 31.9844 122.77 33.3047 118.504 35.6172C115.566 37.2188 113.359 38.418 111.883 39.2148C111.617 39.3555 111.211 39.5742 110.664 39.8711V43H129.086V39.6484H118.105L127.809 34.3867L127.867 34.3516ZM149.594 34.3516L149.652 34.3164C150.988 33.457 151.656 32.2305 151.656 30.6367C151.656 29.4258 151.227 28.3906 150.367 27.5312C149.508 26.6797 148.477 26.2539 147.273 26.2539H132.391V29.5938H147.273C147.758 29.5938 148.082 29.8281 148.246 30.2969C148.387 30.6953 148.312 31.0391 148.023 31.3281C147.938 31.4219 147.777 31.5312 147.543 31.6562C146.934 31.9844 144.496 33.3047 140.23 35.6172C137.293 37.2188 135.086 38.418 133.609 39.2148C133.344 39.3555 132.938 39.5742 132.391 39.8711V43H150.812V39.6484H139.832L149.535 34.3867L149.594 34.3516Z" fill="white"/>
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
