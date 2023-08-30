import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(50% - 16px);
    width: 100%;
    padding: 15px;
    background: rgba(52, 133, 255, 0.1);
    border-radius: 1vh;
    box-sizing: border-box;
`;
const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;
const TokenItem = styled.div`
    display: flex;
    align-items: center;
`;
const TokenImage = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 5px;
`;
const TokenName = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: #5f718b;
`;
const Content = styled.span`
    font-size: 20px;
    font-weight: 700;
    color: #5f718b;
`;
export default function FeeCard({ firstTokenImage, firstTokenName, secondTokenImage, secondTokenName, content }) {
  return (
    <Container>
        <Header>
            <TokenItem>
                <TokenImage src={firstTokenImage} alt="" />
                <TokenName>{firstTokenName}</TokenName>
            </TokenItem>
            <svg data-v-b37cfba2="" viewBox="0 0 12 8" fill="none" xmlns="https://www.w3.org/2000/svg" style={{ width: "20px", height: "auto" }}>
                <path data-v-b37cfba2="" d="M9.6 2.857a.557.557 0 00-.175-.403A.616.616 0 009 2.286H2.045L3.425.98a.56.56 0 00.177-.406.56.56 0 00-.176-.405A.618.618 0 002.999 0c-.16 0-.313.06-.426.168l-2.4 2.284a.545.545 0 00-.126.622.578.578 0 00.22.257.622.622 0 00.332.097h8.402c.159 0 .311-.06.424-.167a.557.557 0 00.176-.404zm2.353 2.068a.578.578 0 00-.22-.257.622.622 0 00-.332-.097H2.999c-.159 0-.311.06-.424.167a.557.557 0 00-.176.404c0 .151.064.296.176.403A.616.616 0 003 5.713h6.956L8.575 7.02a.57.57 0 00-.178.406.547.547 0 00.177.405.603.603 0 00.427.169.627.627 0 00.426-.169l2.4-2.284a.546.546 0 00.126-.622z" fill="#5F718B"></path>
            </svg>
            <TokenItem>
                <TokenImage src={secondTokenImage} alt="" />
                <TokenName>{secondTokenName}</TokenName>
            </TokenItem>
        </Header>
        <Content>{content}</Content>
    </Container>
  );
}


