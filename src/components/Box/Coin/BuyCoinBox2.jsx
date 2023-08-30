import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 600px;
    align-items: center;
    justify-content: space-between;
    padding: 15px 50px;
    background: #3bfe64;
    border-radius: 50px;
    border: 2px solid #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const ItemTitle = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #000;
    font-family: "Roboto";
    margin-bottom: 10px;
`;
const ItemContent = styled.span`
    font-size: 32px;
    font-weight: 400;
    color: #000;
    font-family: "Roboto";
`;
const BuyCoinBox1 = ({ content1, content2 }) => {
    return(
        <Container>
            <ItemContainer style={{ borderRight: "2px solid #000" }}>
                <ItemTitle>ETH equals</ItemTitle>
                <ItemContent>{content1} TCG2.0</ItemContent>
            </ItemContainer>
            <ItemContainer>
                <ItemTitle>TCG2.0 price</ItemTitle>
                <ItemContent>{content2} $</ItemContent>
            </ItemContainer>
        </Container>
    )
}
export default BuyCoinBox1