import React from 'react'
import styled from 'styled-components'


const Container =  styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:fit-content;
`

const Image = styled.img`
    width:${props => props.zoom === 'true' ? '335px' : '255px'};
    @media (max-width: 1440px) {
        width: ${props => props.zoom === 'true' ? '265px' : '200px'}
    }
    @media (max-width: 1280px) {
        width: ${props => props.zoom === 'true' ? '222px' : '169px'}
    }
    @media (max-width: 1120px) {
        width: ${props => props.zoom === 'true' ? '220px' : '158px'}
    }
`
const Text =styled.div`
    font-family:'Kusanagi';
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color:white;
    @media (max-width: 768px) {
        font-size: 10px;
    }
`

const PartnerCard = ({name, url, zoom}) =>{

    return(<Container>
        <Image src={url} zoom={zoom} onDragStart={e => e.preventDefault()}/>
        <Text>{name}</Text>
    </Container>)
}


export default PartnerCard