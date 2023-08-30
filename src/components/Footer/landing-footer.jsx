import { useEffect, useState } from "react";
import styled from "styled-components";


const FooterContainer = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow:hidden;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
`
const ActionButtons = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin:0 18px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
`
const BackButton =  styled.div`
  font-family: 'Kusanagi';
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  height: 14.4px;
  color: white;
  white-space: nowrap;
  line-height: 25px;
  &:hover{
    color: rgb(77, 75, 75);
  }
`
const Footer = ({content,index}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [preview,setPreview] = useState(false);
  const  [next, setNext] = useState(false);
  const size = useWindowSize();


  useEffect(() => {
    size.width < 526 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  useEffect(() => {
    size.width < 526 ? setIsMobile(true) : setIsMobile(false);
  }, [size]);

  const handleEnterPreview =() =>{
    setPreview(true);
  }
  const handleLeavePreview =() =>{
    setPreview(false);
  }
  const handleEnterNext =() =>{
    setNext(true);
  }
  const handleLeaveNext =() =>{
    setNext(false);
  }

  return (
    <FooterContainer>
      <div>
        {
          isMobile ?
            <svg width="100%" viewBox="0 0 144 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M120.5 9.5L121.03 10.0303L120.811 10.25H120.5V9.5ZM86 9.5L85.4697 8.96967L85.6893 8.75H86V9.5ZM62 33.5L62.5303 34.0303L62.3107 34.25H62V33.5ZM0.669876 33.5L5 29.1699L9.33012 33.5L5 37.8301L0.669876 33.5ZM129.53 1.53033L121.03 10.0303L119.97 8.96967L128.47 0.46967L129.53 1.53033ZM120.5 10.25H86V8.75H120.5V10.25ZM86.5303 10.0303L62.5303 34.0303L61.4697 32.9697L85.4697 8.96967L86.5303 10.0303ZM62 34.25H5V32.75H62V34.25Z" fill="white" />
              <path opacity="0.5" d="M127.5 18.5L128.03 19.0303L127.811 19.25H127.5V18.5ZM89.6699 18.5L94 14.1699L98.3301 18.5L94 22.8301L89.6699 18.5ZM143.53 3.53033L128.03 19.0303L126.97 17.9697L142.47 2.46967L143.53 3.53033ZM127.5 19.25H94V17.75H127.5V19.25Z" fill="white" />
              <path opacity="0.5" d="M74 8L58 24H21L5 8V24H12" stroke="white" strokeWidth="1.5" />
            </svg>
            : 
            <svg height="58" viewBox="0 0 1048 58" fill="none" xmlns="http://www.w3.org/2000/svg" style={{maxWidth:'1048px',width:'100%'}}>
              <g opacity="0.5">
                <path stroke="white" strokeWidth="2"  opacity="0.5" d="M1018.5 29.5L1019.03 30.0303L1018.81 30.25H1018.5V29.5ZM176 29.5L175.47 28.9697L175.689 28.75H176V29.5ZM152 53.5L152.53 54.0303L152.311 54.25H152V53.5ZM0.669873 53.5L5 49.1699L9.33013 53.5L5 57.8301L0.669873 53.5ZM1047.53 1.53033L1019.03 30.0303L1017.97 28.9697L1046.47 0.46967L1047.53 1.53033ZM176.53 30.0303L152.53 54.0303L151.47 52.9697L175.47 28.9697L176.53 30.0303ZM152 54.25H5V52.75H152V54.25ZM1018.5 30.25H644.25V28.75H1018.5V30.25ZM644.25 30.25H176V28.75H644.25V30.25Z" fill="white"/>
                <path stroke="white" strokeWidth="2" opacity="0.5" d="M1023.5 38.5L1024.03 39.0303L1023.81 39.25H1023.5V38.5ZM177.67 38.5L182 34.1699L186.33 38.5L182 42.8301L177.67 38.5ZM1023.5 39.25H182V37.75H1023.5V39.25ZM1039.53 23.5303L1031.78 31.2803L1030.72 30.2197L1038.47 22.4697L1039.53 23.5303ZM1031.78 31.2803L1024.03 39.0303L1022.97 37.9697L1030.72 30.2197L1031.78 31.2803Z" fill="white"/>
                <path d="M164 28L148 44H21L5 28V44H12"  opacity="0.5" stroke="white" strokeWidth="2"/>
              </g>
            </svg>
        }

      </div>
      <ActionButtons> 
          <svg width="57" height="30" viewBox="0 0 57 30" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={handleEnterPreview}
            onMouseLeave={handleLeavePreview}
          >
            <path opacity={preview ? "1" : "0.5"} d="M31.2023 16.8197L29.385 18.637L36.4606 25.7126L6.87903 25.7126L28.9525 3.63912L54.504 29.1906L56.3258 27.3688L28.957 0L0.672756 28.2843L42.6668 28.2843L31.2023 16.8197Z" fill='white' />
          </svg>
        <BackButton>{content}</BackButton>
        <svg width="57" height="30" viewBox="0 0 57 30" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={handleEnterNext}
            onMouseLeave={handleLeaveNext}>
          <path opacity={next ? "1" : "0.5"} d="M25.7958 12.7194L27.6131 10.9021L20.5375 3.82644L50.119 3.82644L28.0455 25.8999L2.49406 0.348493L0.672253 2.1703L28.041 29.5391L56.3253 1.25479L14.3312 1.25479L25.7958 12.7194Z" fill='white' />
        </svg>

      </ActionButtons>
      <div>
        {
          isMobile ?
            <svg width="100%" viewBox="0 0 144 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M23.5 9.5L22.9697 10.0303L23.1893 10.25H23.5V9.5ZM58 9.5L58.5303 8.96967L58.3107 8.75H58V9.5ZM82 33.5L81.4697 34.0303L81.6893 34.25H82V33.5ZM143.33 33.5L139 29.1699L134.67 33.5L139 37.8301L143.33 33.5ZM14.4697 1.53033L22.9697 10.0303L24.0303 8.96967L15.5303 0.46967L14.4697 1.53033ZM23.5 10.25H58V8.75H23.5V10.25ZM57.4697 10.0303L81.4697 34.0303L82.5303 32.9697L58.5303 8.96967L57.4697 10.0303ZM82 34.25H139V32.75H82V34.25Z" fill="white" />
              <path opacity="0.5" d="M16.5 18.5L15.9697 19.0303L16.1893 19.25H16.5V18.5ZM54.3301 18.5L50 14.1699L45.6699 18.5L50 22.8301L54.3301 18.5ZM0.46967 3.53033L15.9697 19.0303L17.0303 17.9697L1.53033 2.46967L0.46967 3.53033ZM16.5 19.25H50V17.75H16.5V19.25Z" fill="white" />
              <path opacity="0.5" d="M70 8L86 24H123L139 8V24H132" stroke="white" strokeWidth="1.5" />
            </svg>
            : 
          <svg  height="58" viewBox="0 0 1048 58" fill="none" xmlns="http://www.w3.org/2000/svg" style={{maxWidth:'1048px',width:'100%'}}>
            <g opacity="0.5">
              <path stroke="white" strokeWidth="2" opacity="0.5" d="M29.5 29.5001L28.97 30.0304L29.19 30.2501H29.5V29.5001ZM872 29.5001L872.53 28.9698L872.311 28.7501H872V29.5001ZM896 53.5001L895.47 54.0304L895.689 54.2501H896V53.5001ZM1047.33 53.5001L1043 49.17L1038.67 53.5001L1043 57.8302L1047.33 53.5001ZM0.470032 1.53039L28.97 30.0304L30.03 28.9698L1.53009 0.469727L0.470032 1.53039ZM871.47 30.0304L895.47 54.0304L896.53 52.9698L872.53 28.9698L871.47 30.0304ZM896 54.2501H1043V52.7501H896V54.2501ZM29.5 30.2501H403.75V28.7501H29.5V30.2501ZM403.75 30.2501H872V28.7501H403.75V30.2501Z" fill="white"/>
              <path stroke="white" strokeWidth="2" opacity="0.5" d="M24.5 38.5L23.97 39.0303L24.19 39.25H24.5V38.5ZM870.33 38.5L866 34.1699L861.67 38.5L866 42.8301L870.33 38.5ZM24.5 39.25H866V37.75H24.5V39.25ZM8.46997 23.5303L16.22 31.2803L17.28 30.2197L9.53003 22.4697L8.46997 23.5303ZM16.22 31.2803L23.97 39.0303L25.03 37.9697L17.28 30.2197L16.22 31.2803Z" fill="white" />
              <path opacity="0.5" d="M884 28L900 44H1027L1043 28V44H1036" stroke="white" strokeWidth="2"/>
            </g>
          </svg>
        }
      </div>
    </FooterContainer>
  );
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default Footer;
