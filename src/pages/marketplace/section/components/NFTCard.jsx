import React, { useState } from "react";
import styled from '@emotion/styled';
import { Box } from '@mui/material';

import Gold from "assets/images/marketplace/gold_bottom.gif";
import Diamond from "assets/images/marketplace/diamond_bottom.gif";
import Platinum from "assets/images/marketplace/platinum_bottom.gif";
import Silver from "assets/images/marketplace/silver_bottom.gif";
import BnbIcon from "assets/images/tokens/bnb-white.png";

const Flex = styled.div`
    display: flex;
    position: relative;
`;

const ImgView = styled.div`
    .cardImage{
        scale: 1.2;
        transition: 0.5s;
    }
    div{
        overflow: hidden;
    }
`;

const Wrapper = styled.div`
    background-color: black;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        width: 11%;
        padding-top: 11%;
        background-color: rgb(255, 255, 255);
        transition: transform 0.5s ease 0s;
        transform: translate(50%, -50%) rotate(45deg);
    }

    h1 {
        transition: 0.5s;
        font-size: 18px;
        color: #1c1c02;
    }

    &:hover{
        .cardImage{
            scale: 1.05;
        }
        h1{
            margin-left: 10px;
        }
        &::after {
            transform: translate(100%, -100%) rotate(45deg);
        }
    }
`;

const Rarity = styled.h2`
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    padding: 3px 12px;
    border-radius: 20px;
    background: #0000008a;

    position: absolute;
    top: 16px;
    left: 16px;

    color: white;
`;



const CardName = styled.h1`
    font-family: DM Mono,monospace;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    white-space: nowrap;
    width: 100%;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;

`;

const CardBottom = styled.div`
    position: relative;
    overflow: hidden;
`;

const CardBottomBg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const PriceBox = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    position: absolute;
    top: 0;
    right: 0;
`;

const NameBox = styled.div`
    padding: 15px;

    position: relative;
    z-index: 2;
`;

const Price = styled.p`
    width: 100%;
    padding: 5px 10px;
    background-color: #000;
    border-radius: 0.4vw;
    display: flex;
    align-items: center;
    font-size: 12px;
    color:white;
    justify-content: space-between;

    img{
        margin-right: 4px;
    }
`;

const NFTCard = ({ item, auction, price, currency }) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Wrapper>
            <ImgView>
                <Flex>
                    <img
                        src={item.gif}
                        onLoad={() => { setImageLoaded(true) }}
                        style={imageLoaded ? { opacity: 1 } : { opacity: 0.1 }}
                        className='cardImage'
                        alt=""
                    />
                </Flex>
                <Rarity>{item.rarity}</Rarity>

                {(price != null || auction != null) ? <PriceBox>
                    <Price>
                        <img src={BnbIcon} style={{ width: "18px" }} alt="" />
                        <Box sx={{ color: "white" }}>
                            {(price == null ? auction.starting_price : price).toFixed(2)}
                            {currency == null ? auction.currency : currency}
                        </Box>
                    </Price>
                </PriceBox> :
                    <PriceBox>
                        <Price style={{ justifyContent: "center" }}>
                            TCG World
                        </Price>
                    </PriceBox>
                }

            </ImgView>

            <CardBottom>
                {item.rarity === "Gold" && <CardBottomBg src={Gold} />}
                {item.rarity === "Diamond" && <CardBottomBg src={Diamond} />}
                {item.rarity === "Silver" && <CardBottomBg src={Silver} />}
                {item.rarity === "Platinum" && <CardBottomBg src={Platinum} />}
                <NameBox>
                    <CardName>{item.title}</CardName>
                </NameBox>
            </CardBottom>
        </Wrapper>
    );
};

export default NFTCard;
