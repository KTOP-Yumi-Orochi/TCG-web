import React from "react";
import styled from "styled-components";

const Card = styled.a`
  width: 316px;
  height: 324px;
  display: flex;
  align-items: end;
  margin-top: 115px;
`;
const Container = styled.div`
  width: 316px;
  height: 213px;
  background: url("assets/images/Member_Box_bg.png");
  position: relative;
`;
const Aavatar = styled.div`
  position: absolute;
  width: 142px;
  height: 163px;
  background: url("assets/images/mobile-member-outline.svg");
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(57%, -67%);
`;
const TextArea = styled.div`
  position: absolute;
  margin: auto;
  width: 266px;
  height: 121px;
  top: 33%;
  left: 11%;
`;
const Name = styled.div`
  font-family: "Kusanagi";
  font-style: normal;
  font-weight: normal;
  font-size: 12.6488px;
  line-height: 120%;
  color: white;
`;
const Position = styled.div`
  font-family: "Kusanagi";
  font-style: normal;
  font-weight: normal;
  font-size: 9.49px;
  line-height: 11.38px;
  color: grey;
  margin-top: 6px;
`;
const Description = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 9.49px;
  line-height: 11.28px;
  color: white;
  margin-top: 21px;
`;
const MobileMemberItem = ({ url, member, name, position, des }) => {
  return (
    <Card href={url}>
      <Container>
        <Aavatar>
          <img
            src={`assets/images/team/${member}`}
            style={{ width: "139px" }}
            alt=""
          />
        </Aavatar>
        <TextArea>
          <Name>{name}</Name>
          <Position>{position}</Position>
          <Description>{des}</Description>
        </TextArea>
      </Container>
    </Card>
  );
};

export default MobileMemberItem;
