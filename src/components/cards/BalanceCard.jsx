import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 70px;
    width: 210px;
    padding: 20px;
    background: rgba(52, 133, 255, 0.1);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const Title = styled.span`
    font-weight: 700;
    color: #3485ff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
`;
const Section = styled.section`
    box-sizing: border-box;
`;
const Content = styled.span`
    font-weight: 700;
    color: #3485ff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 24px;
`;
export default function BalanceCard({ title, content }) {
  return (
    <Container>
        <Header>
            <Title>{title}</Title>
        </Header>
        <Section>
            <Content>{content}</Content>
        </Section>
    </Container>
  );
}
