import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 15px;
`;

const HeaderContent = styled.div`
    margin-top: 40px;

    h2 {
        font-size: 32px;
        font-weight: 500;
        text-align: center;
    }
`;

const ChartsContent = styled.div`
    margin-top: 32px;
`;

const ScrollableCharts = styled.div`
    position: relative;
    outline: none;
`;

const ChartsSection = styled.div`
    position: relative;
    z-index: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;

    ul {
        display: flex;
    }

    ul li {
        margin-right: 16px;
        width: 249.6px;
        user-select: none;
        box-sizing: border-box;
        list-style-type: none!important;
        flex-shrink: 0;
        position: relative;
        outline: none;
    }

    ul li a {
        position: relative;
        outline: none;
        width: 100%;
        padding: 10px 0;
        line-height: 40px;
        background: #ededed;
        border-radius: 8px;
        border: none;
        font-size: 18px;
        font-weight: 500;
        color: #2b2d35!important;
        margin: 12px;
        filter: grayscale(100%);
        transition: .3s;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul li a:hover {
        box-shadow: 0 0 15px 2px rgba(0,0,0,.1);
        text-decoration: underline;
        background: #fff;
        filter: grayscale(0);
    }

    ul li a img {
        margin-right: 10px;
        width: 32px;
        vertical-align: bottom;
    }
`;

export default function Charts () {
    return (
        <Container>
            <HeaderContent>
                <h2>Live data and charts found on</h2>
            </HeaderContent>
            <ChartsContent>
                <ScrollableCharts>
                    <ChartsSection>
                        <ul>
                            <li>
                                <Link to="https://coinstats.app/coins/tcgcoin-2-0/" target="_blank">
                                    <img src="https://d1ak9kdvdopy8s.cloudfront.net/items/coin-bogged.png" alt='' /> Coinstats
                                </Link>
                            </li>
                            <li>
                                <Link to="https://bscscan.com/token/0xf73d8276c15ce56b2f4aee5920e62f767a7f3aea" target="_blank">
                                    <img src="https://d1ak9kdvdopy8s.cloudfront.net/items/coin-contracts.png" alt='' /> Contract address
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.coingecko.com/en/coins/tcgcoin-2-0" target="_blank">
                                    <img src="https://d1ak9kdvdopy8s.cloudfront.net/items/coin-gecko.png" alt='' /> Coin Gecko
                                </Link>
                            </li>
                            <li>
                                <Link to="https://poocoin.app/tokens/0xf73d8276c15ce56b2f4aee5920e62f767a7f3aea" target="_blank">
                                    <img src="https://d1ak9kdvdopy8s.cloudfront.net/items/coin-poo.png" alt='' /> PooCoin Charts
                                </Link>
                            </li>
                            <li>
                                <Link to="https://pancakeswap.finance/swap?outputCurrency=0xf73d8276c15ce56b2f4aee5920e62f767a7f3aea" target="_blank">
                                    <img src="https://d1ak9kdvdopy8s.cloudfront.net/items/coin-tcg.png" alt='' /> Buy TCGCoin
                                </Link>
                            </li>
                            <li>
                                <Link to="https://coinmarketcap.com/currencies/tcgcoin-2-0/" target="_blank">
                                    <img src="https://d1ak9kdvdopy8s.cloudfront.net/items/coin-marketcap.png" alt='' /> CoinMarketCap
                                </Link>
                            </li>
                        </ul>
                    </ChartsSection>
                </ScrollableCharts>
            </ChartsContent>
        </Container>
    )
}