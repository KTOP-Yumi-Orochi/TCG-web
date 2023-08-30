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

export default function Q2({size}) {
    const contentList = [
        {
            content: "Second Collection Reveal (Age of Discovery)",
            height: '20px'
        }, {
            content: "Roll-Out Web 3 Metaverse Templates",
            height: '20px'
        }, {
            content: "Artist Curation",
            height: '20px'
        }, {
            content: "Introduction of Metaverse Incubation Program",
            height: '20px'
        },
        {
            content: "Launch of Community-Powered Marketplace",
            height: '20px'
        },
        {
            content: "Philanthropic & Carbon-Neutrality Initiatives",
            height: '20px'
        },
    ]
    return (
            <Container>
                <Content>
                    <ButtonArea>
                        <svg width="183" height="71" viewBox="0 0 183 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="7" width="179" height="56" fill="#FF1C6E" fillOpacity="0.3"/>
                            <rect x="168" y="5.5" width="14" height="3" fill="#FF1C6E"/>
                            <rect width="14" height="3" transform="matrix (-1 6.27635e-08 6.27635e-08 1 14.002 62)" fill="#FF1C6E"/>
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
                            <path d="M39.9766 36.2969C39.9766 37.4609 39.5 38.375 38.5469 39.0391L37.9727 37.1289H34.1992L34.9609 39.6484H26.582V32.9453C26.582 32.0234 26.9102 31.2344 27.5664 30.5781C28.2227 29.9219 29.0117 29.5938 29.9336 29.5938H39.9766V36.2969ZM23.2305 43H35.957L36.7188 45.5078H40.4805L39.5312 42.332C40.6719 41.7852 41.5859 40.9766 42.2734 39.9062C42.9766 38.8047 43.3281 37.6016 43.3281 36.2969V26.2422H29.9336C28.082 26.2422 26.5039 26.8984 25.1992 28.2109C23.8867 29.5156 23.2305 31.0938 23.2305 32.9453V43ZM63.0039 34.3516L63.0625 34.3164C64.3984 33.457 65.0664 32.2305 65.0664 30.6367C65.0664 29.4258 64.6367 28.3906 63.7773 27.5312C62.918 26.6797 61.8867 26.2539 60.6836 26.2539H45.8008V29.5938H60.6836C61.168 29.5938 61.4922 29.8281 61.6562 30.2969C61.7969 30.6953 61.7227 31.0391 61.4336 31.3281C61.3477 31.4219 61.1875 31.5312 60.9531 31.6562C60.3438 31.9844 57.9062 33.3047 53.6406 35.6172C50.7031 37.2188 48.4961 38.418 47.0195 39.2148C46.7539 39.3555 46.3477 39.5742 45.8008 39.8711V43H64.2227V39.6484H53.2422L62.9453 34.3867L63.0039 34.3516ZM90.6836 34.3516L90.7422 34.3164C92.0781 33.457 92.7461 32.2305 92.7461 30.6367C92.7461 29.4258 92.3164 28.3906 91.457 27.5312C90.5977 26.6797 89.5664 26.2539 88.3633 26.2539H73.4805V29.5938H88.3633C88.8477 29.5938 89.1719 29.8281 89.3359 30.2969C89.4766 30.6953 89.4023 31.0391 89.1133 31.3281C89.0273 31.4219 88.8672 31.5312 88.6328 31.6562C88.0234 31.9844 85.5859 33.3047 81.3203 35.6172C78.3828 37.2188 76.1758 38.418 74.6992 39.2148C74.4336 39.3555 74.0273 39.5742 73.4805 39.8711V43H91.9023V39.6484H80.9219L90.625 34.3867L90.6836 34.3516ZM101.652 39.6484L111.953 31.4102V36.2969C111.953 37.2188 111.629 38.0078 110.98 38.6641C110.324 39.3203 109.535 39.6484 108.613 39.6484H101.652ZM108.859 29.5938L98.5586 37.8438V32.9453C98.5586 32.0234 98.8867 31.2344 99.543 30.5781C100.199 29.9219 100.988 29.5938 101.91 29.5938H108.859ZM95.207 43H108.613C110.457 43 112.035 42.3438 113.348 41.0312C114.652 39.7266 115.305 38.1484 115.305 36.2969V26.2539H101.91C100.059 26.2539 98.4805 26.9062 97.1758 28.2109C95.8633 29.5234 95.207 31.1016 95.207 32.9453V43ZM134.98 34.3516L135.039 34.3164C136.375 33.457 137.043 32.2305 137.043 30.6367C137.043 29.4258 136.613 28.3906 135.754 27.5312C134.895 26.6797 133.863 26.2539 132.66 26.2539H117.777V29.5938H132.66C133.145 29.5938 133.469 29.8281 133.633 30.2969C133.773 30.6953 133.699 31.0391 133.41 31.3281C133.324 31.4219 133.164 31.5312 132.93 31.6562C132.32 31.9844 129.883 33.3047 125.617 35.6172C122.68 37.2188 120.473 38.418 118.996 39.2148C118.73 39.3555 118.324 39.5742 117.777 39.8711V43H136.199V39.6484H125.219L134.922 34.3867L134.98 34.3516ZM156.707 34.3516L156.766 34.3164C158.102 33.457 158.77 32.2305 158.77 30.6367C158.77 29.4258 158.34 28.3906 157.48 27.5312C156.621 26.6797 155.59 26.2539 154.387 26.2539H139.504V29.5938H154.387C154.871 29.5938 155.195 29.8281 155.359 30.2969C155.5 30.6953 155.426 31.0391 155.137 31.3281C155.051 31.4219 154.891 31.5312 154.656 31.6562C154.047 31.9844 151.609 33.3047 147.344 35.6172C144.406 37.2188 142.199 38.418 140.723 39.2148C140.457 39.3555 140.051 39.5742 139.504 39.8711V43H157.926V39.6484H146.945L156.648 34.3867L156.707 34.3516Z" fill="white"/>
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
