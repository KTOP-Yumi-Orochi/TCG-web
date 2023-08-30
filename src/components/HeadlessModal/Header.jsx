import React from "react";
import styled from "styled-components";

import TokenClose from "assets/images/card/token_close.svg";
import TokenBack from "assets/images/card/token_back.svg";
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 18px 0px;
`;

const HeaderLabel = styled.div`
  padding-left: 150px;
  font-family: "Kusanagi";
  font-size: 20px;
  color: white;
`;

const CloseBtn = styled.div`
  background-image: url(${TokenClose});
  background-size: cover;
  width: 70px;
  height: 22.5px;
  position: absolute;
  top: 1px;
  right: 1px;
  font-size: 10px;
  font-family: Kusanagi;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const BackBtn = styled.div`
  background-image: url(${TokenBack});
  background-size: cover;
  width: 70px;
  height: 22.5px;
  position: absolute;
  top: 1px;
  right: 71px;
  font-size: 10px;
  font-family: Kusanagi;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalHeader = ({ header, onBack, onClose }) => {
  return (
    <Header>
      <HeaderLabel>{header}</HeaderLabel>

      {onBack && (
        <BackBtn onClick={onBack}>
          <span>back</span>
        </BackBtn>
      )}
      {onClose && (
        <CloseBtn onClick={onClose}>
          <span>close</span>
        </CloseBtn>
      )}
    </Header>
  );
};

export default ModalHeader;
