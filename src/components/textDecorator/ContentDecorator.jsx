import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    text-align: ${props => props.textAlign};
    direction:initial;
    margin:15px  0px;
    font-family : ${props => props.lang === 'en' ? 'Aceh' : 'SwissraD'};
    color: white;
    font-size: ${props => `${props.fontSize}px`};
    line-height: 140%;
    width: ${props => `${props.minWidth}px`};
    -webkit-animation: txt 1s both ease-in;
            animation: txt 1s both ease-in;
    -webkit-animation-delay:0.43s;
            animation-delay:0.43s;
    @-webkit-keyframes txt{
        0% {
            opacity:0;
        }
        50% {
            opacity:0.5;
        }
        75%{
            opacity:0.3;
        }
        100%{
            opacity:1;
        }
    }
    @keyframes txt{
        0% {
            opacity:0;
        }
        50% {
            opacity:0.5;
        }
        75%{
            opacity:0.3;
        }
        100%{
            opacity:1;
        }
    }


    @media (max-width: 500px) {
        font-size: 14px;
        width: 300px;
        font-family : ${props => props.lang === 'en' ? 'Aceh' : 'SwissraM'};
    }
`;
const ChangeFont = styled.span`
    font-family:'Aceh';
    text-transform: uppercase;
`;

export default function ContentDecorator({ content = "", lang, width = 0, scaleX = 1, scaleY = 1, fontSize = 0,position ='left' }) {
    return (
        <Text lang={lang} minWidth={width * scaleX * scaleY} fontSize={fontSize * scaleX * scaleY} textAlign ={position}>
            { lang === 'en' ? content : <span>انطلق في رحلة عبر <ChangeFont>&nbsp;Metagate&nbsp;</ChangeFont>واستكشف فرص تقنية ال<ChangeFont>&nbsp;web3&nbsp;</ChangeFont>عبر الإستثمار في الفنون الرقمية <ChangeFont>&nbsp;(NFT)&nbsp;</ChangeFont>و الطرح الأولي لمشاريع الميتافيرس حصرياً على<ChangeFont>&nbsp;Metagate&nbsp;</ChangeFont></span>}
        </Text>
    )
}