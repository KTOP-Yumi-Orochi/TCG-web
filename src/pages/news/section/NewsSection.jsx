import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import NewsTabs from "components/Tabs/NewsTab";
import NewsCard from "components/cards/NewsCard";
import Spinner from "components/spinner/Spinner";
import { callTcgAPI } from "utils/callApi";
import { LandingContext } from "contexts/LandingContext";

import BackgroundImage from "assets/images/backgrounds/news-background.jpg";
import NewsImage from "assets/images/news/news-main.png";
import BackButtonImage from "assets/images/news/news-back.png";

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
  width: 100%;
  height: ${(props) => props.height}px;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${ContainerAnimation} 1s ease 1;
  webkit-animation: ${ContainerAnimation} 1s ease 1;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-position: center bottom;
`;
const BodyContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: ${(props) => props.height - 194}px;
  @media (max-width: 1400px) {
    width: 506px;
  }
  @media (max-width: 490px) {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
`;
const NewsContainer = styled.div`
  background-image: url(${NewsImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: calc(100vw - 180px);
  position: relative;
`
const BackButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-image: url(${BackButtonImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 11vw;
  height: 3vw;
  display: flex;
  justify-content: end;
`
const BackText = styled.p`
  font-family: Kusanagi;
  font-size: 1.1vw;
  color: white;
  margin-top: 0.55vw;
  margin-right: 1.5vw;
`
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding-top: 50px;
  height: 560px;
  padding: 50px 4vw;
  column-gap: 4vw;
  row-gap: 4vw;
  overflow: auto;
`
const WelcomeBodyContainer = styled.div`
  margin-top: 100px;
  width: calc(100vw - 120px);
  max-width: 1800px;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    width: calc(100vw - 48px);
  }
`;
const PageContainer = styled.div`
  height: ${(props) => props.height - 194}px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1400px) {
    height: ${(props) => props.height - 94}px;
  }
`;
const FooterContainer = styled.div`
  display: none;
  @media (max-width: 490px) {
    display: block;
    height: 52px;
  }
`;
const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export default function NewsSection({ size }) {
  const { newsTab } = useContext(LandingContext);
  const [cardItems, setCardItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getNews = async () => {
    setIsLoading(true);
    let hasMore = true;
    let nextPageToken = "";
    let data = [];
    while (hasMore) {
      const response = await callTcgAPI(`news/youtube/${nextPageToken}`, "GET", {});
      data = [...data, ...response?.items];
      hasMore = response?.items.length === 12;
      nextPageToken = `?page_token=${response.nextPageToken}`;
    }
    setCardItems(data);
    console.log(data.length);
    setIsLoading(false);
  }

  const getMediumArticles = async () => {
    setIsLoading(true);
    let hasMore = true;
    let nextPageToken = "";
    let data = [];
    while (hasMore) {
      const response = await callTcgAPI(`news/youtube/${nextPageToken}`, "GET", {});
      data = [...data, ...response?.items];
      hasMore = response?.items.length === 12;
      nextPageToken = `?page_token=${response.nextPageToken}`;
    }
    const mediumData = data?.filter((item) => item.id.kind !== "youtube#video");
    setCardItems(mediumData);
    console.log(mediumData.length);
    setIsLoading(false);
  }

  const getYoutubeArticles = async () => {
    setIsLoading(true);
    let hasMore = true;
    let nextPageToken = "";
    let data = [];
    while (hasMore) {
      const response = await callTcgAPI(`news/youtube/${nextPageToken}`, "GET", {});
      data = [...data, ...response?.items];
      hasMore = response?.items.length === 12;
      nextPageToken = `?page_token=${response.nextPageToken}`;
    }
    const mediumData = data?.filter((item) => item.id.kind === "youtube#video");
    setCardItems(mediumData);
    console.log(mediumData.length);
    setIsLoading(false);
  }

  useEffect(() => {
    if(newsTab === "medium") {
      getMediumArticles();
    }
    else if(newsTab === "youtube") {
      getYoutubeArticles();
    }
    else {
      getNews();
    }
  }, [newsTab]);
  
  return (
    <Container id="testing" height={size.height}>
      <PageContainer height={size.height}>
        <WelcomeBodyContainer>
          <BodyContainer height={size.height}>
            <NewsContainer>
              <NewsTabs />
              <Link to="/home">
                <BackButton>
                  <BackText>
                    Back
                  </BackText>
                </BackButton>
              </Link>
              <CardContainer>
                {isLoading ? (
                  <SpinnerContainer>
                    <Spinner />
                  </SpinnerContainer>
                ) : (
                  cardItems?.map((item, index) => (
                    <NewsCard key={index} title={item.snippet.title} date={dayjs(item.snippet.publishTime).format('HH:mm MMMM DD, YYYY')} content={item.snippet.description} social={item.id.kind} image={item.snippet.thumbnails.high.url} />
                  ))
                )}
              </CardContainer>
            </NewsContainer>
            <FooterContainer />
          </BodyContainer>
        </WelcomeBodyContainer>
      </PageContainer>
    </Container>
  );
}
