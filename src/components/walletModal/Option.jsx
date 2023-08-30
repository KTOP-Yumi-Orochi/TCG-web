import React from "react";
import styled, { keyframes } from "styled-components";

const animateRight = keyframes`
    0% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
    }
    100% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
    }
`;
const animateLeft = keyframes`
    0% {
        -webkit-transform: translateY(-100%);
                transform: translateY(-100%);
    }
    100% {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
    }
`;
const animateBottom = keyframes`
    0% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
    }
    100% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
    }
`;
const animateTop = keyframes`
    0% {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
    }
    100% {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
    }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 60px;
  box-sizing: border-box;
  padding: 10px;
  color: white;
  overflow: hidden;

  > span {
    position: absolute;
  }

  &:hover > span:nth-child(1) {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      from(rgba(43, 8, 8, 0)),
      to(#ffffff)
    );
    background: linear-gradient(to left, rgba(43, 8, 8, 0), #ffffff);
    -webkit-animation: 1s ${animateTop} linear infinite;
    animation: 1s ${animateTop} linear infinite;
  }
  &:hover > span:nth-child(2) {
    top: 0px;
    right: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(rgba(43, 8, 8, 0)),
      to(#ffffff)
    );
    background: linear-gradient(to top, rgba(43, 8, 8, 0), #ffffff);
    -webkit-animation: 1s ${animateRight} linear infinite;
    animation: 1s ${animateRight} linear infinite;
  }

  &:hover > span:nth-child(3) {
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgba(43, 8, 8, 0)),
      to(#ffffff)
    );
    background: linear-gradient(to right, rgba(43, 8, 8, 0), #ffffff);
    -webkit-animation: 1s ${animateBottom} linear infinite;
    animation: 1s ${animateBottom} linear infinite;
  }
  &:hover > span:nth-child(4) {
    top: 0px;
    left: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(43, 8, 8, 0)),
      to(#ffffff)
    );
    background: linear-gradient(to bottom, rgba(43, 8, 8, 0), #ffffff);
    -webkit-animation: 1s ${animateLeft} linear infinite;
    animation: 1s ${animateLeft} linear infinite;
  }

  &::after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }
  &:hover::after {
    left: 120%;
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

const Description = styled.div`
  flex: auto;
`;

const Title = styled.div`
  font-family: Kusanagi;
  font-weight: 500;
`

export default function Option({
  id,
  link = null,
  onClick = null,
  header,
  subheader = null,
  icon,
  color,
  active = false,
  clickable = true,
  description,
}) {
  const content = (
    <Container
      data-id={id}
      data-active={active}
      data-description={description}
      role="button"
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ top: "-8px", left: "-2px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ top: "-8px", left: "-2px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(-1 0 0 1 14 5.5)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ bottom: "-7px", left: "-2px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ bottom: "-7px", left: "-2px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(-1 0 0 1 14 5.5)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ top: "-2px", right: "-13px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ top: "-8px", right: "-7.5px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(-1 0 0 1 14 5.5)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ bottom: "-7px", right: "-13px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 3 14)"
          fill="white"
        />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ bottom: "-7px", right: "-2px", position: "absolute" }}
      >
        <rect
          width="14"
          height="3"
          transform="matrix(-1 0 0 1 14 5.5)"
          fill="white"
        />
      </svg>
      <Description>
        <Title id={`wallet-option-${header}`}>{header}</Title>
        {subheader && <div>{subheader}</div>}
      </Description>
      <img src={icon} alt="Icon" width={32} height={32} />
    </Container>
  );

  if (link) {
    return <a href={link} style={{ textDecoration: "none" }}>{content}</a>;
  }

  return content;
}
