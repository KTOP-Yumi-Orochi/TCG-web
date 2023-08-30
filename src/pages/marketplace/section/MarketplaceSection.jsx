import React, { useState } from 'react';
import styled from 'styled-components';
import NFTFilter from './components/NFTFilter';
import NFTView from './components/NFTVIew';
import MarketplaceHeader from './components/HeaderSection';
import Charts from './components/Charts';
import { callTcgAPI } from 'utils/callApi';

const Container = styled.div`
    background-color: #ffffff;
`;

const Content = styled.div`
    margin-top: 75px
`;

const FilterContent = styled.div`

`;

const MainContent = styled.div`
    width: calc(100% - 360px);
    padding: 20px;
    max-width: 1440px;
    margin: 0px auto;

    .viewContent {
      margin: calc(4.5% - 20px) calc(4% - 20px) 0px;
      padding: 0px 0px 0px 20px;
    }
`;

export default function MarketplaceSection() {

    const [nftCards, setNftCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const getItems = async () => {
        const data = await callTcgAPI(`marketplace/items/?on_sale=true&page=${currentPage}&sort=created_at`, "GET", {});
        console.log("getItems = ", data);

        if (currentPage === 1) {
            setNftCards(data.results);
        } else {
            let _nftCards = [...nftCards];
            _nftCards = _nftCards.concat(data.results);
            setNftCards(_nftCards);
        }

        setCurrentPage(currentPage + 1);
    }

    console.log("<<<<<", nftCards);

    return (
        <Container>
            <MarketplaceHeader />
            <Charts />
            <Content>
                <FilterContent>
                    <NFTFilter />
                </FilterContent>
                <MainContent>
                    <div className='viewContent'>
                        <NFTView nftCards={nftCards} getItems={getItems} />
                    </div>
                </MainContent>
            </Content>
        </Container>
    );
};
