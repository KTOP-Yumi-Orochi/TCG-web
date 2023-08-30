import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:relative;
    width:145px;
    height:34px;
    overflow:hidden;
`;
const Content = styled.div`
    position: absolute;
    display:flex;
    width:100%;
    font-family:'Kusanagi';
    font-size:24px;
    color:#FF1C6E;
    justify-content: space-between;
    align-items:center;
    height:100%;
    animation: number 0.24s both ease-in ;
    animation-delay: ${props =>props.time}s;
    @keyframes number{
        from{
            transform: translateY(-100%);
        }
        to
        {
            transform: translateY(0%);
        }
    }
`;
const NumberText = styled.div`
    ${props =>props.isRTL ? 'margin-left : 20px' : 'margin-right : 20px'};
`;

export default function PageNumber ({currentPage=0, total=0,time=0.57,isRTL}) {
    const current = currentPage > 9 ? currentPage.toString() : '0' + currentPage.toString();
    const totalPage = total > 9 ? total.toString() : '0' + total.toString() 
    return (
        <Container>
            <Content time={time}>
            <NumberText isRTL={isRTL}>
                {current}/{totalPage}
            </NumberText>
            <svg width="47" height="16" viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop:'4px' }}>
                <path opacity="0.5" fillRule="evenodd" fillRule="evenodd" d="M23.4613 0H46.998V1.61908H24.1318L10.7342 15.0167H0.182102V13.4017H10.0637L23.4613 0ZM6.77393 9.38701H0.0771179V7.76793H6.10337L12.2033 1.66811H1.61435V3.57335H-0.000534058V0.0532227H16.1035L6.77393 9.38701ZM27.267 5.31885L17.6512 14.9388H32.8395L41.2207 6.55354L40.08 5.41297L32.169 13.3198H21.5515L27.9376 6.93383H31.4413L29.2213 9.15379L30.3661 10.2945L35.3416 5.31885H27.267Z" fill="white"/>
            </svg>
            </Content>
        </Container>
    )
}