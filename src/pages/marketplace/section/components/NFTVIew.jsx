import React, {useEffect} from 'react';
import { Box, Button, Grid } from '@mui/material';
import NFTCard from './NFTCard';
import styled from '@emotion/styled';

const LoadMoreButton = styled(Button)`
    width: 100%;
    padding: 10px 25px;
    border: 2px solid #2b2d35;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #2b2d35;
    text-align: center;
    transition: .2s ease-in-out;
`;

const NFTView = ({nftCards, getItems}) => {

    useEffect(()=>{
        getItems();
    }, []);

    const onLoadMoreNfts = () => {
        getItems();
    }

  return (
    <>
        <Grid container spacing={2}>
            {
                nftCards.map((nftDetail)=>(<Grid item lg={2.4} md={4} sm={6} xs={12} key={nftDetail}>
                    <NFTCard item={nftDetail.item} auction = {nftDetail.auction} currency={nftDetail.currency} price={nftDetail.price}/>
                </Grid>))
            }
        </Grid>
        <Box sx={{marginTop:"20px"}}>
            <LoadMoreButton onClick={onLoadMoreNfts}>Load More</LoadMoreButton>
        </Box>
    </>
  );
};

export default NFTView;