import styled from 'styled-components';
import {stl} from 'lang';

const ContentArea = styled.div`
    display:flex;
    flex-direction:column;
    color:white;
    font-family: 'Kusanagi';
    width:fit-content;
`;
const TopContent = styled.div`
    position: relative;
    height:${props => props.height ? props.height * 1.1875 : 'fit-content'}px;
    overflow: hidden;
    width:505px;
    display: flex;
    justify-content:${props =>props.positon};
   
    @media(max-width : 768px) {
        width:260px;
        height:29.6875px;
    }
    @media (max-height: 900px) {
        height: 6.4vh;
    }
`;
const TopText = styled.div`
    position: absolute;
    top:0px;
    animation: text 0.42s both ease-in ;
    font-size: ${props =>props.fontSize}px;
    animation-delay: ${props =>props.time}s;
    font-family : ${props => props.lang ==='en' ? 'Kusanagi': 'Israr-Syria' };
    z-index: 0;
    transform: translateY(0%);
    @keyframes text{
        from{
            transform: translateY(100%);
        }
        to
        {
            transform: translateY(0%);
        }
    }
    /* @media(max-width : 768px) {
        height:25px;
        font-size:25px;
    }
    @media (max-height: 900px) {
        font-size: 5.5vh;
        height: 6.4vh;
    } */
    @media(max-width : 768px) and (max-height: 700px)  {
        font-size:3vh;
    }
    @media (max-width: 768px) and (min-height: 700px) {
        font-size: 6vw;
    }
`;
const DownContent = styled.div`
    position: relative;
    height:${props =>props.height * 1.1875}px;
    overflow: hidden;
    width:500px;
    display: flex;
    justify-content:${props =>props.positon};
    @media(max-width : 768px) {
        width:348px;
        height:5vw;
    }
    @media (max-height: 900px) {
        height: 10vh;
    }
    
`;
const DownText = styled.div`
    position: absolute;
    top:0px;
    animation:text1 0.42s both ease-in ;
    z-index: 10;
    font-size: ${props =>props.fontSize}px;
    animation-delay: ${props =>props.time}s;
    @keyframes text1{
        from{
            transform: translateY(-100%);
        }
        to
        {
            transform: translateY(0%);
        }
    }
    @media(max-width : 768px) and (max-height: 700px)  {
        font-size:5vh;
    }
    @media (max-width: 768px) and (min-height: 700px) {
        font-size: 6vw;
    }
`;

const Title = ({subText,subFontSize,text,fontSize,positon ="flex-start" ,time,lang}) =>{
    return(<div>
            <ContentArea fontSize={subFontSize}>
                <TopContent height={subFontSize} positon ={positon}>
                    <TopText fontSize={subFontSize} time={time} style={ stl(lang) } lang ={lang}>{subText}</TopText>
                </TopContent>
                <DownContent height={fontSize} positon ={positon}>
                    <DownText fontSize={fontSize} time ={time} style={ stl(lang) }>{text}</DownText>
                </DownContent>
            </ContentArea>
        </div>)
}

export default Title