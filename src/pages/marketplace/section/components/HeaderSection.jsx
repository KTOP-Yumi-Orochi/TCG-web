import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 1920px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    background: url(https://d1ak9kdvdopy8s.cloudfront.net/items/marketplace-intro-background-min.png) 50% no-repeat;
    background-size: cover;
    padding: 15px;
    height: 600px;
`;

const TextContent = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TextContentIntro = styled.div`
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #dcdcdc;

    h1 {
        font-size: 65px;
        font-weight: 500;
        color: #fff;
    }

    h3 {
        font-size: 27px;
        font-weight: 400;
        color: #fff;
        margin-bottom: 30px;
    }

    button {
        padding: 15px 45px;
        background: #fff;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 700;
        color: #3485ff;
        transition: .2s ease-in-out;
        outline: none;
        border: none;
        cursor: pointer;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 8px 2px rgba(0,0,0,.1);
        }
    }
`;

const TextContentInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-family: DM Mono,monospace;
        font-size: 27px;
        font-weight: 500;
        color: #fff;
    }

    p {
        font-size: 20px;
        font-weight: 500;
        color: #d9e3e9;
    }
`;

const ImageContent = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 80%;
        height: auto;
    }
`;

const scrollScreen = () => {
    window.scrollTo({
        left: 0,
        top: 800,
        behavior: "smooth"
    });
}

export default function MarketplaceHeader () {
    return (
        <Container>
            <TextContent>
                <TextContentIntro>
                    <h1>TCG Marketplace</h1>
                    <h3>Buy & trade unique TCG World Lands, Cars & Avatars</h3>
                    <button onClick={scrollScreen}>Start exploring</button>
                </TextContentIntro>
                <TextContentInfo>
                    <div>
                        <span>100,000</span>
                        <p>Plots</p>
                    </div>
                    <div>
                        <span>14,000+</span>
                        <p>Active members</p>
                    </div>
                    <div>
                        <span>4</span>
                        <p>Unique regions</p>
                    </div>
                </TextContentInfo>
            </TextContent>
            <ImageContent>
                <img src="https://d1ak9kdvdopy8s.cloudfront.net/items/maketplace-intro-min.png" alt='' />
            </ImageContent>
        </Container>
    )
}
  