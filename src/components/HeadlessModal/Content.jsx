import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalContent = ({ children, className = "" }) => {
  return <Container>{children}</Container>;
};

export const BorderedModalContent = ({ children, className }) => {
  return <Container>{children}</Container>;
};

export default ModalContent;
