import React from "react";
import styled from "styled-components";

const Container =  styled.a`
  width:fit-content;
  margin:2vh 0px;
  cursor:pointer;
`
const MemberPolygon = styled.div`
  width: 141px;
  height: 163px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
`;
const Outline = styled.div`
  position: absolute;
`;
const TextContainer =  styled.div`
  transform: translateX(50%);
  position:relative;
`
const TextArea =  styled.div`
  width:253px;
  height:100%;
  position:absolute;
  top:0;
  padding-left:86px;
  padding-top: 19px;
  padding-right:37.85px;
`
const MemberPhoto = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;

`
const Photo = styled.img`
  width: 135px;
  ${(props) => props.src};
  ${(props) => props.alt};
`;

const Name =  styled.div`
  font-family:'Kusanagi';
  font-size: 12.65px;
  color:white;
`
const Position =  styled.div`
  margin-top:3px;
  font-family:'Kusanagi';
  font-size: 9.5px;
  color: rgba(255, 255, 255, 0.5);
`
const Description= styled.div`
  font-family:'Roboto';
  font-size: 9.5px;
  color:white;
  line-height:13.28px;
`

function Member({ url,member, name ='anmar alharbi', position = 'founder',des}) {
  return (
    <Container href={url}>
      <MemberPolygon>
          <Outline>
          <svg width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M17.4018 44.4907L81.5031 7.48179L145.604 44.4907V118.508L81.5031 155.517L17.4018 118.508V44.4907Z" stroke="white" strokeWidth="0.790549"/>
            <path opacity="0.1" d="M11.3142 40.9782L81.5 0.456425L151.686 40.9782V122.022L81.5 162.544L11.3142 122.022V40.9782Z" stroke="white" strokeWidth="0.790549"/>
          </svg>
          </Outline>
          <MemberPhoto> 
            <Photo height={135} src={`assets/images/team/${member}`} alt="Photo" />
          </MemberPhoto>
          <TextContainer>
            <svg width="379" height="159" viewBox="0 0 379 159" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.847656 0H60.7784L90.2315 8.93787V0H101.244H377.848V135.479L367.091 146.769L355.31 159H178.079L168.859 154.296H98.171L89.4631 159H0.847656V0Z" fill="black" fillOpacity="0.6"/>
              <path d="M340.277 19.3438H378.224V54.9185H348.614L344.302 50.8361L340.277 47.337V19.3438Z" fill="white" fillOpacity="0.2"/>
              <path d="M355.981 41.9997H353.079V32.6528H355.981V41.9997ZM354.529 31.3778C353.6 31.3778 352.848 30.6091 352.848 29.6809C352.848 29.2351 353.025 28.8076 353.34 28.4923C353.655 28.1771 354.083 28 354.529 28C354.974 28 355.402 28.1771 355.717 28.4923C356.032 28.8076 356.21 29.2351 356.21 29.6809C356.21 30.6091 355.456 31.3778 354.529 31.3778ZM366.845 41.9997H363.948V37.4497C363.948 36.3653 363.926 34.9747 362.439 34.9747C360.93 34.9747 360.699 36.1528 360.699 37.3716V41.9997H357.8V32.6528H360.583V33.9278H360.624C361.011 33.1934 361.958 32.4184 363.37 32.4184C366.308 32.4184 366.848 34.3528 366.848 36.8653V41.9997H366.845Z" fill="white"/>
            </svg>
            <TextArea>
              <Name>{name}</Name>
              <Position>{position}</Position>
              <svg width="83" height="6" viewBox="0 0 83 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.8004 2.55004L0.847656 0.663193V5.22743L4.8004 3.34059V2.55004ZM82.9752 2.94531L80.6931 0.663193L78.411 2.94531L80.6931 5.22743L82.9752 2.94531ZM4.40513 3.34059H80.6931V2.55004H4.40513V3.34059Z" fill="white" fillOpacity="0.5"/>
              </svg>
              <Description>
              {des}
              </Description>
            </TextArea>
          </TextContainer>

      </MemberPolygon>
    </Container>
  );
}

export default Member;
