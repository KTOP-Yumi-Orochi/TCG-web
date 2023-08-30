import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 50px;
    background: #3485ff;
    border-radius: 50px;
    border: 2px solid #fff;
`;
const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const ItemTitle = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    font-family: "Roboto";
    margin-bottom: 10px;
`;
const ItemContent = styled.span`
    font-size: 32px;
    font-weight: 400;
    color: #fff;
    font-family: "Roboto";
`;
const BuyCoinBox1 = ({ content1, content2, content3 }) => {
    return(
        <Container>
            <ItemContainer>
                <ItemTitle>Status</ItemTitle>
                <ItemContent>{content1}</ItemContent>
            </ItemContainer>
            <ItemContainer>
                <ItemTitle>Coin</ItemTitle>
                <ItemContent>{content2}</ItemContent>
            </ItemContainer>
            <ItemContainer>
                <ItemTitle>Symbol</ItemTitle>
                <ItemContent>{content3}</ItemContent>
            </ItemContainer>
        </Container>
    )
}
export default BuyCoinBox1