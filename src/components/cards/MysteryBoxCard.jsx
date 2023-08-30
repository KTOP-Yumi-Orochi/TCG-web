import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Card = styled.div`
    min-width: 270px;
    position: relative;
    border-radius: 15px;
    background: ${props => props.backgroundColor};
`;
const ImageContainer = styled.div`
    padding: 10px 10px 5px;
    margin-bottom: 5px;
`;
const CardImage = styled.img`
    width: 100%;
    height: 100%;
    max-height: 180px;
    border-radius: 8px;
    object-fit: cover;
    object-position: bottom;
`;
const CardInfo = styled.div`
    padding: 0 10px 10px;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    cursor: grab;
    user-select: none;
`;
const TagsContainer = styled.div`
    position: relative;
    outline: none;
    position: relative;
    z-index: 0;
    overflow: hidden;
    margin-bottom: 10px;
    display: flex;
`;
const FirstTags = styled.span`
    list-style: none;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 10px;
    border-radius: 30px;
    margin: 0 5px 5px 0;
    color: ${props => props.color};
    background: ${props => props.firstTagBackground};
`;
const OtherTags = styled.span`
    list-style: none;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 10px;
    border-radius: 30px;
    margin: 0 5px 5px 0;
    color: ${props => props.color};
    background: ${props => props.otherTagBackground};
`;
const CardAttributesSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
const CardAttributes = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;
const AttributeHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
`;
const AttributeHeaderText = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.color};
    line-height: 1.5;
`;
const AttributeRail = styled.div`
    position: relative;
    width: 100%;
    height: 3px;
    border-radius: 20px;
    background: hsla(0,0%,100%,.5);
`;
const AttributeRailContent = styled.span`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 20px;
    background: ${props => props.railColor};
`;
const CardBottomContainer = styled.div`
    position: relative;
    z-index: 2;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    background: ${props => props.bottomColor};
`;
const CardBottomContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
const CardBottomImage = styled.img`
    width: 70px;
    height: auto;
`;

export default function MysteryBoxCard({backgroundColor, firstTagBackground, otherTagBackground, railColor, bottomColor, cardImage, firstTag, secondTag, thirdTag, fourthTag, firstAttribute, secondAttribue, thirdAttribute, fourthAttribute, firstRailContent, secondRailContent, thirdRailContent, fourthRailContent, bottomImage, color}) {
    return (
        <Container>
            <Card backgroundColor={backgroundColor}>
                <ImageContainer>
                    <CardImage src={cardImage} alt="" />
                </ImageContainer>
                <CardInfo>
                    <TagsContainer>
                        <FirstTags firstTagBackground={firstTagBackground} color={color}>{firstTag}</FirstTags>
                        <OtherTags otherTagBackground={otherTagBackground} color={color}>{secondTag}</OtherTags>
                        <OtherTags otherTagBackground={otherTagBackground} color={color}>{thirdTag}</OtherTags>
                        <OtherTags otherTagBackground={otherTagBackground} color={color}>{fourthTag}</OtherTags>
                    </TagsContainer>
                    <CardAttributesSection>
                        <CardAttributes>
                            <AttributeHeader>
                                <AttributeHeaderText color={color}>Top Speed</AttributeHeaderText>
                                <AttributeHeaderText color={color}>{firstAttribute}/320</AttributeHeaderText>
                            </AttributeHeader>
                            <AttributeRail>
                                <AttributeRailContent railColor={railColor} style={{ right: firstRailContent }} />
                            </AttributeRail>
                        </CardAttributes>
                        <CardAttributes>
                            <AttributeHeader>
                                <AttributeHeaderText color={color}>Horse Power</AttributeHeaderText>
                                <AttributeHeaderText color={color}>{secondAttribue}</AttributeHeaderText>
                            </AttributeHeader>
                            <AttributeRail>
                                <AttributeRailContent railColor={railColor} style={{ right: secondRailContent }} />
                            </AttributeRail>
                        </CardAttributes>
                        <CardAttributes>
                            <AttributeHeader>
                                <AttributeHeaderText color={color}>Handling</AttributeHeaderText>
                                <AttributeHeaderText color={color}>{thirdAttribute}/100</AttributeHeaderText>
                            </AttributeHeader>
                            <AttributeRail>
                                <AttributeRailContent railColor={railColor} style={{ right: thirdRailContent }} />
                            </AttributeRail>
                        </CardAttributes>
                        <CardAttributes>
                            <AttributeHeader>
                                <AttributeHeaderText color={color}>0-100 km/h</AttributeHeaderText>
                                <AttributeHeaderText color={color}>{fourthAttribute} sec</AttributeHeaderText>
                            </AttributeHeader>
                            <AttributeRail>
                                <AttributeRailContent railColor={railColor} style={{ right: fourthRailContent }} />
                            </AttributeRail>
                        </CardAttributes>
                    </CardAttributesSection>
                </CardInfo>
                <CardBottomContainer bottomColor={bottomColor}>
                    <CardBottomContent>
                        <CardBottomImage src={bottomImage} alt="" />
                    </CardBottomContent>
                </CardBottomContainer>
            </Card>
        </Container>
    )
}