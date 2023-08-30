import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
    width: 518px;
    height: 518px;
    position: relative;
    @media (max-width: 1280px) {
        width: 294px;
        height: 294px;
        transform: scale(0.567);
        transform-origin: top left;
    }

`;
const ItemImageContainer = styled.div`
    position: absolute;
    top: -1px;
    left: -1px;
    width: 518px;
    height: 518px;
    clip-path: path("M257.524 12.8652H257.731L257.877 12.719L270.112 0.5H519.5V420.871L507.266 433.09L507.119 433.236V433.443V507.427L495.031 519.5H24.9688L0.5 495.062V24.9377L12.5879 12.8652H257.524Z");
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ItemImage = styled.img`
    width: 916px;
    height: 518px;
`;

export default function ModalItem({src}) {
    const alt = "MetagateNFT";
    const [loading, setLoading] = React.useState(true);
    const [imgUrl, setImgUrl] = React.useState("assets/images/nft/lowResolution/" + src + '.png');
    React.useEffect(() => {
        const imageToLoad = new Image();
        imageToLoad.src = "assets/images/nft/highResolution/" + src + '.png';
        imageToLoad.onload = () => {
            setImgUrl("assets/images/nft/highResolution/" + src + ".png");
            setLoading(false);
        }
    }, [])
    return (
        <Container>
            {
                loading ? "" : <img style={{opacity: loading ? 0.5 : 1, transition: 'opacity 0.2s ease'}} alt={alt} src="assets/images/modal/itemBack.png"></img>
            }
            <ItemImageContainer>
                <ItemImage width={916} height={518} src={imgUrl} style={{opacity: loading ? 0.5 : 1, transition: 'opacity 0.2s ease'}} alt={alt}></ItemImage>
            </ItemImageContainer>
        </Container>
    )
}