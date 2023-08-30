import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;
const Title = styled.span`
    font-weight: 700;
    color: #3485ff;
    margin-bottom: 0.5rem;
    font-size: 1.75rem;
    line-height: 1.2;
`;
const Content = styled.span`
    color: #5f718b;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 1.25rem;
`;
export default function DistributionCard({ title, content }) {
  return (
    <Container>
        <Title>{title}</Title>
        <Content>{content}</Content>
    </Container>
  );
}
