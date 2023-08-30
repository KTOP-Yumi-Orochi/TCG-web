import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    position: relative;
    width: 420px;
    height: 333px;
    background-image: url('assets/images/backgrounds/card_back.png');
    background-size: 100% 100%;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Brand = styled.div`
    width: 90px;
    height: 90px;
    position:absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    left: 20px;
    background-color: white;
`

const Img = styled.img`
    width: 75px;
    height: 75px;
`
const CardBody = styled.div`
    width: calc(100% - 40px);
    height: calc(100% - 40px);
`

const CardTitle = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`

const MainTitle = styled.div`
    font-size: 24px;
    line-height: 34px;
    font-weight: 400;
    color: white;
    font-family: 'Kusanagi';
`;
const SubTitle = styled.div`
    font-size: 12px;
    font-family: 'Kusanagi';
    font-weight: 400;
    line-height: 14.4px;
    color: #FF1C6E;
`
const CardContent = styled.div`
    margin-top: 16px;
    width: 100%;
    height: 60px;
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 20px;
    color: white;
    display: flex;
    align-items: center;
`

const Hr = styled.hr`
    width: 100%;
    background-color: white;
    opacity: 0.5;
    margin-top: 20px;
    margin-bottom: 20px;
`
const CardSubContent = styled.div`
    width: 100%;
    height: 106px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const CardContainer = styled.div`
    display: flex;
    align-items: center;
`
export default function Card({ brandImg, content, title, opensIn, totalSupply, round, tokens, price, access, preview = true }) {
    return (
        <CardContainer>
            <Container>
                <Brand>
                    {
                        brandImg ? <Img src={brandImg} width={75} height={75} alt="MetaGate"></Img> : <Img width={75} height={75} src="assets/images/brand/question.svg"></Img>
                    }
                </Brand>
                <div style={{ backgroundImage: 'url("assets/images/card/token_back.svg")', backgroundSize: 'cover', width: '55px', height: '22.5px', position: 'absolute', top: '1px', right: '1px', fontSize: '10px', fontFamily: 'Kusanagi', color: 'white', textTransform: 'upper-case', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    Token
                </div>
                <CardBody>
                    <CardTitle>
                        <MainTitle>
                            {title}
                        </MainTitle>
                        <SubTitle>coming soon</SubTitle>
                    </CardTitle>
                    <CardContent>
                        {content}
                    </CardContent>
                    <Hr></Hr>
                    <CardSubContent>
                        <div style={{ width: '100%', height: '45px', display: 'flex' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginRight: '30px', minWidth: '134px' }}>
                                <div style={{ fontFamily: 'Roboto', fontSize: '12px', lineHeight: '17px', color: 'white' }}>OPENS IN</div>
                                <div style={{ fontFamily: 'Kusanagi', fontSize: '20px', lineHeight: '28px', color: 'white' }}>{opensIn ? opensIn : 'TBA'}</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                <div style={{ fontFamily: 'Roboto', fontSize: '12px', lineHeight: '17px', color: 'white' }}>TOTAL SUPPLY</div>
                                <div style={{ fontFamily: 'Kusanagi', fontSize: '20px', lineHeight: '28px', color: 'white' }}>{totalSupply ? totalSupply : 'TBA'}</div>
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '42px', display: 'flex' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginRight: '57px' }}>
                                <div style={{ fontFamily: 'Roboto', fontSize: '12px', lineHeight: '17px', color: 'white' }}>ROUND</div>
                                <div style={{ fontFamily: 'Roboto', fontSize: '16px', lineHeight: '28px', color: 'white', minWidth: '40px' }}>{round ? round : 'TBA'}</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginRight: '57px' }}>
                                <div style={{ fontFamily: 'Roboto', fontSize: '12px', lineHeight: '17px', color: 'white' }}>TOKENS</div>
                                <div style={{ fontFamily: 'Roboto', fontSize: '16px', lineHeight: '28px', color: 'white', minWidth: '81px' }}>{tokens ? tokens : 'TBA'}</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginRight: '57px' }}>
                                <div style={{ fontFamily: 'Roboto', fontSize: '12px', lineHeight: '17px', color: 'white' }}>PRICE</div>
                                <div style={{ fontFamily: 'Roboto', fontSize: '16px', lineHeight: '28px', color: 'white', minWidth: '33px' }}>{price ? `FROM ${price} USD` : 'TBA'}</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginRight: '57px' }}>
                                <div style={{ fontFamily: 'Roboto', fontSize: '12px', lineHeight: '17px', color: 'white' }}>ACCESS</div>
                                <div style={{ fontFamily: 'Roboto', fontSize: '16px', lineHeight: '28px', color: 'white', minWidth: '55px' }}>{access ? access : 'TBA'}</div>
                            </div>
                        </div>
                    </CardSubContent>
                </CardBody>
            </Container>
        </CardContainer>

    )
}