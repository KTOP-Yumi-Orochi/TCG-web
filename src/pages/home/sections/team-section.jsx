import React from "react";
import styled from "styled-components";
import Member from "components/Member/Member";
import TextDecorator from "components/textDecorator/TextDecorator";
import ArticleDecorator from "components/textDecorator/ArticleDecorator";
import MobileMemberItem from "components/Member/MobileMemberItem";

import Background_2560 from "assets/images/backgrounds/2560/section9.png";
import Background_1920 from "assets/images/backgrounds/1920/section9.png";
import Background from "assets/images/backgrounds/team.png";
import Background_1280 from "assets/images/backgrounds/1280/section9.png";
import Background_mobile from "assets/images/backgrounds/mobile/section9.png";

const WrappedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${(props) => props.height}px;
  justify-content: center;
  align-items: center;
  background-image: url(${Background_2560});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1920px) {
    background-image: url(${Background_1920});
  }
  @media (max-width: 1440px) {
    background-image: url(${Background});
  }
  @media (max-width: 1400px) {
    justify-content: flex-end;
  }
  @media (max-width: 1280px) {
    background-image: url(${Background_1280});
  }
  @media (max-width: 490px) {
    background-image: url(${Background_mobile});
  }
`;
const PageContainer = styled.div`
  height: ${(props) => props.height - 194}px;
  @media (max-width: 1400px) {
    height: ${(props) => props.height - 116}px;
  }
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  padding: 0;
  max-width: 1800px;
  width: calc(100vw - 120px);
  align-items: center;
  justify-content: center;
  @media (max-width: 490px) {
    width: calc(100vw - 48px);
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const PageContent = styled.div`
  width: 730px;
  min-width: 481px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  @media (max-width: 1600px) {
    width: 481px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 549px) {
    width: 356px;
    min-width: 316px;
  }
`;
const PageContext = styled.div`
  margin-top: 20px;
  width: 100%;
  @media (max-height: 800px) {
    margin-top: 5px;
  }
`;
const MemberContainer = styled.div`
  @media (max-width: 1400px) {
    overflow: hidden;
    scrollbar-width: none;
    padding-bottom: 52px;
  }
  @media (max-width: 490px) {
  }
`;
const MemberPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  @media (max-width: 1400px) {
    transform: scale(1);
  }
  @media (max-width: 1400px) {
    transform: scale(1);
    margin-left: 0%;
    height: 100%;
    overflow: auto;
  }
`;

const FirstMember = styled.div`
  @media (max-width: 1024px) {
    height: 325px;
    margin-bottom: 50px;
  }
`;
const SecondMember = styled.div`
  margin-left: 93px;
  @media (max-width: 1024px) {
    margin-left: 0px;
    height: 325px;
    margin-bottom: 20px;
  }
`;
const ThirdMember = styled.div`
  @media (max-width: 1024px) {
    height: 325px;
    margin-bottom: 20px;
  }
`;
const FooterContainer = styled.div`
  display: none;
  @media (max-width: 490px) {
    display: block;
    height: 52px;
  }
`;

const TeamIntro = ({ size }) => {
  const querterRef = React.useRef();
  const txtContent =
    "This powerhouse team consists of innovative developers, long-time gamers, world-class artists, crypto lovers, highly influential marketers, and NFT enthusiasts working together to create a ground-breaking platform and an unforgettable Web3 metaverse experience.";
  const txtContent1 =
    "At Metagate, transparency, integrity, and trust are at the forefront of everything we do. Our fully doxed team of like-minded professionals continues to grow, develop, and expand by the day, and we invite you to join us on this epic adventure into a multiverse of opportunities.";

  const content1 =
    "David is a visionary entrepreneur and seasoned crypto investor working at the crossroads of innovation, strategy, and blockchain technology. As the founder, Anmar leans on a wealth of success in building people-centered businesses that positively impact and advance the lives of others.";
  const content2 =
    "Justin's unique technology background has put him at the forefront of emerging trends, industries, and cutting-edge technology. As technology lead, Thomas harnesses the power of his visionary mindset to bring clarity to the brand's technological vision, strategies, and roadmap.";
  const content3 =
    "Jace’s background as a transformational executive and creative Marketing leader stems from over a decade of business experience and success working with high-growth companies. As marketing lead, Steven keeps his finger planted on the pulse of what drives today's society in emerging markets.";

  const handleLink = (name) => {
    if (name === "anmar") {
      window.open("https://www.linkedin.com/in/");
    } else if (name === "thomas") {
      window.open("https://www.linkedin.com/in/");
    }
    window.open("https://www.linkedin.com/in/");
  };

  const handleTouchStart = (e) => {
    e.stopPropagation();
  };
  const handleTouchEnd = (e) => {
    e.stopPropagation();
    const isBottom =
      querterRef.current.scrollHeight -
        Math.floor(querterRef.current.scrollTop) ===
      querterRef.current.clientHeight;
    const isTop = querterRef.current.scrollTop === 0;
    if (isBottom) {
      window.fullpage_api.moveSectionDown();
    } else if (isTop) {
      window.fullpage_api.moveSectionUp();
    } else {
      e.stopPropagation();
    }
  };

  return (
    <WrappedContainer height={size.height}>
      <PageContainer height={size.height}>
        <Container>
          <Content>
            <PageContent>
              <TextDecorator
                direction={"up"}
                uppercase="none"
                fontSize={32}
                content={"The team"}
                fontFamily={"Kusanagi"}
                width="fit-content"
              ></TextDecorator>
              <PageContext>
                <ArticleDecorator
                  content={txtContent}
                  fontFamily="Roboto"
                  fontSize={16}
                  lineHeight={22.4}
                />
                <div style={{ height: "15px" }}></div>
                <ArticleDecorator
                  content={txtContent1}
                  fontFamily="Roboto"
                  fontSize={16}
                  lineHeight={22.4}
                />
                <FooterContainer />
              </PageContext>
            </PageContent>
            <MemberContainer>
              <MemberPhotoContainer
                onTouchMove={(e) => e.preventDefault}
                onTouchMoveCapture={(e) => e.stopPropagation()}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchEnd={(e) => handleTouchEnd(e)}
                onTouchCancelCapture={(e) => handleTouchEnd(e)}
                ref={querterRef}
              >
                {size.width > 1024 ? (
                  <>
                    {" "}
                    <FirstMember onClick={() => handleLink("anmar")}>
                      <div style={{ width: "458.22px", height: "163px" }}>
                        <Member
                          url="https://www.linkedin.com/in/"
                          member={"david.png"}
                          des={content1}
                          name={"David"}
                          position={"founder"}
                        ></Member>
                      </div>
                    </FirstMember>
                    <SecondMember onClick={() => handleLink("anmar")}>
                      <div style={{ width: "458.22px", height: "163px" }}>
                        <Member
                          url="https://www.linkedin.com/in/"
                          member={"justin.png"}
                          des={content2}
                          name={"Justin"}
                          position={"founder"}
                        ></Member>
                      </div>
                    </SecondMember>
                    <ThirdMember onClick={() => handleLink("steven")}>
                      <div style={{ width: "458.22px", height: "163px" }}>
                        <Member
                          url="https://www.linkedin.com/in/"
                          member={"jace.png"}
                          des={content3}
                          name={"Jace"}
                          position={"founder"}
                        ></Member>
                      </div>
                    </ThirdMember>
                  </>
                ) : (
                  <>
                    <FirstMember onClick={() => handleLink("anmar")}>
                      {" "}
                      <MobileMemberItem
                        url="https://www.linkedin.com/in/"
                        member={"david.png"}
                        des={content1}
                        name={"David"}
                        position={"founder"}
                      />
                    </FirstMember>
                    <SecondMember onClick={() => handleLink("steven")}>
                      <MobileMemberItem
                        url="https://www.linkedin.com/in/"
                        member={"justin.png"}
                        des={content2}
                        name={"Justin"}
                        position={"founder"}
                      />
                    </SecondMember>
                    <ThirdMember onClick={() => handleLink("steven")}>
                      <MobileMemberItem
                        url="https://www.linkedin.com/in/"
                        member={"jace.png"}
                        des={content3}
                        name={"Jace"}
                        position={"founder"}
                      />
                    </ThirdMember>
                  </>
                )}
              </MemberPhotoContainer>
            </MemberContainer>
          </Content>
        </Container>
      </PageContainer>
    </WrappedContainer>
  );
};

export default TeamIntro;
