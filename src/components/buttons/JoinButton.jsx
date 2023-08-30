import React,{useState} from 'react';
import styled from 'styled-components';

const MetaButtonStyle = styled.div `
    background-size: 100% 100%;
    position: relative;
    width: 209px;
    height: 48px;
    display: inline-flex;
    transform: translate(0%, 0%);
    overflow: hidden;
    color: #f7d4d4;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    margin-left: ${
    props => props.marginLeft
};
    margin-right: ${
    props => props.marginRight
};
    margin-top: ${
    props => props.marginTop
};
    margin-bottom: ${
    props => props.marginBottom
};
    -webkit-transform: translate(0%, 0%);
    &::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: #ad8585;
        opacity: 0;
        -webkit-transition: .1s opacity ease-in-out;
        transition: .1s opacity ease-in-out;
    }
    >span {
        position: absolute;
    }

    :hover svg {
        fill: #FF1C6E;
    }
`;
const MetaButtonContentStyle = styled.div `
    font-family: "Kusanagi";
    font-size: 14px;
    letter-spacing: 0px;
    text-transform: uppercase;
    font-weight: 400;
    color: white;
    margin: auto;
    z-index: 1;
    display: inline-flex;
    flex-direction: row;
    align-items: 'center';
`;

const ButtonBackground = styled.div `
    position: absolute;
    z-index: -1;
    animation :  bg 0.3s both ease-in ;
    
    @keyframes bg{
        0%{
            opacity:0;
        }
        50%{
            opacity:0;
        }
        51%
        {
            opacity: 0.4;
        }
        70%
        {
            opacity: 0.4;
        }
        71%
        {
            opacity: 0.05;
        }
        80%
        {
            opacity: 0.05;
        }

        83%{
            opacity: 0.9;
        }
        100%{
            opacity: 1;
            ;
        }
    }
`

const ButtonName = styled.div `
    z-index:10;
    animation :  name 0.3s both ease-in ;
    @keyframes name{
        0%{
            opacity:0;
        }
        50%{
            opacity:0;
        }
        51%
        {
            opacity: 0.4;
        }
        70%
        {
            opacity: 0.4;
        }
        71%
        {
            opacity: 0.05;
        }
        80%
        {
            opacity: 0.05;
        }

        83%{
            opacity: 0.9;
        }
        100%{
            opacity: 1;
            ;
        }
    }

`



export default function JoinButton({
    content,
    marginTop = '0px',
    marginLeft = '0px',
    marginRight = '0px',
    marginBottom = '0px',
    margin,
    background ='transparent',
    icon = ""
    
}) {

    const [isHover,setIsHover] = useState(false);

    const handleEnter= () =>{
        setIsHover(true);
    }
    const handleLeave = () =>{
        setIsHover(false)
    }

    const handleConnectDiscord = () =>{
        // window.open('https://discord.gg/legendsofmeta');
    }
    return (
        <div onMouseEnter ={handleEnter}  onMouseLeave ={handleLeave} onClick={handleConnectDiscord}>
            <MetaButtonStyle marginTop={marginTop}
                marginLeft={marginLeft}
                marginRight={marginRight}
                marginBottom={marginBottom}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <ButtonBackground>
                    <svg width="210" height="48" viewBox="0 0 210 48" fill="none" >
                        <path d="M27.1224 46.9451L1 23.5533V1.05518H182.052L208.174 24.447V46.9451H27.1224Z"
                            fill={isHover ? '#7789D4':'transparent'}
                            fillOpacity="1"
                            stroke={'#7789D4'}
                            strokeWidth="2"/>
                    </svg>
                </ButtonBackground>
                <MetaButtonContentStyle>
                    {
                        icon === "telegram" ? <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md-hidden" style={{marginRight: '10px'}}>
                            <path d="M7.06289 10.3856L6.76514 14.5736C7.19114 14.5736 7.37564 14.3906 7.59689 14.1708L9.59414 12.2621L13.7326 15.2928C14.4916 15.7158 15.0264 15.4931 15.2311 14.5946L17.9476 1.86557L17.9484 1.86482C18.1891 0.742816 17.5426 0.304066 16.8031 0.579316L0.835634 6.69256C-0.254117 7.11556 -0.237617 7.72306 0.650384 7.99831L4.73264 9.26806L14.2149 3.33482C14.6611 3.03932 15.0669 3.20282 14.7331 3.49832L7.06289 10.3856Z" fill="white"/>
                        </svg>
                        : icon === "twitter" ? <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md-hidden" style={{marginRight: '10px'}}>
                            <path d="M17.5921 2.33212C17.3093 2.45754 17.0186 2.56339 16.7215 2.64932C17.0732 2.25158 17.3414 1.78358 17.5051 1.27145C17.5418 1.15666 17.5037 1.03101 17.4094 0.955928C17.3151 0.880793 17.1842 0.871793 17.0804 0.933283C16.4496 1.30745 15.7689 1.57635 15.0553 1.73359C14.3364 1.03112 13.36 0.631348 12.3506 0.631348C10.2199 0.631348 8.48643 2.36475 8.48643 4.49537C8.48643 4.66317 8.49706 4.83005 8.51808 4.99461C5.87411 4.76247 3.41606 3.46292 1.72813 1.3924C1.66797 1.3186 1.5753 1.27883 1.48043 1.28643C1.38549 1.29386 1.30019 1.3474 1.25223 1.42968C0.909883 2.01712 0.728896 2.68898 0.728896 3.37257C0.728896 4.30364 1.06132 5.18703 1.64852 5.8773C1.46997 5.81547 1.29671 5.73818 1.13134 5.64638C1.04256 5.59697 0.934212 5.59772 0.846012 5.6483C0.757754 5.69887 0.702419 5.79189 0.700096 5.89356C0.69969 5.91069 0.69969 5.92782 0.69969 5.94518C0.69969 7.33496 1.44768 8.58619 2.59126 9.26816C2.49301 9.25834 2.39483 9.24412 2.29728 9.22548C2.19671 9.20626 2.0933 9.2415 2.02548 9.31821C1.95754 9.39485 1.93507 9.50169 1.96637 9.59924C2.38966 10.9208 3.47947 11.8928 4.79695 12.1892C3.70424 12.8736 2.45463 13.2321 1.14284 13.2321C0.869122 13.2321 0.593838 13.216 0.324419 13.1841C0.19058 13.1682 0.0626059 13.2473 0.0170252 13.3745C-0.0285554 13.5019 0.0197542 13.6438 0.133619 13.7168C1.81883 14.7974 3.76741 15.3685 5.76861 15.3685C9.70271 15.3685 12.1638 13.5133 13.5355 11.957C15.2461 10.0164 16.2272 7.44783 16.2272 4.90989C16.2272 4.80386 16.2256 4.69679 16.2223 4.59007C16.8972 4.0816 17.4782 3.46623 17.9511 2.75895C18.0229 2.65153 18.0151 2.50956 17.9319 2.41068C17.8488 2.31174 17.7103 2.27974 17.5921 2.33212Z" fill="white"/>
                        </svg>
                        : icon === "discord" ? <img src="assets/images/discord.png" style={{marginRight:'7px'}} alt='' />
                        : ""
                    }
                    <ButtonName>{content}</ButtonName>
                </MetaButtonContentStyle>
            </MetaButtonStyle>
        </div>
    )
}
