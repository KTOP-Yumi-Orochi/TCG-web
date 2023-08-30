import React,{createContext,useState,useEffect} from 'react';

export const LandingContext = createContext({});

export const LandingContextProvider = ({children}) => {
    const size = useWindowDimensions();
    const [background, setBackground] = useState("");
    const [allowScrollNext, setAllowScrollNext] = useState();
    const [allowScrollPrev, setAllowScrollPrev] = useState();
    const [currentSection, setCurrentSection] = useState();
    const [activeIndexId, setActiveIndexId] = useState(0);                  //-------------index num for current section
    const [metaverseModalOpen, setMetaverseModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState({});
    const [newsTab, setNewsTab] = useState("latest");
    const [lang, setLang] = useState('en');
    const [characters,setCharacters] = useState([
        'assets/images/characters/character0.png',
        'assets/images/characters/character1.png',
        'assets/images/characters/character2.png',
        'assets/images/characters/character3.png',
        'assets/images/characters/character4.png',

    ])
    const [arealist,setArealist] = useState([
        'assets/images/area/tcg/0.png',
        'assets/images/area/tcg/1.png',
        'assets/images/area/tcg/2.png',
        'assets/images/area/tcg/3.png',
        'assets/images/area/tcg/4.png',
        'assets/images/area/tcg/5.png',
        'assets/images/area/tcg/6.png',
        'assets/images/area/tcg/7.png',
        'assets/images/area/tcg/8.png',
        'assets/images/area/tcg/9.png',
        'assets/images/area/tcg/10.png',
        'assets/images/area/tcg/11.png',
        'assets/images/area/tcg/12.png',
        'assets/images/area/tcg/13.png',
        'assets/images/area/tcg/14.png',
    ])
    React.useEffect(() => {
        setBackground('assets/images/section-1.png');
        setAllowScrollPrev(false);
        setAllowScrollNext(false);
    }, [])
    return (
        <LandingContext.Provider
            value={{
                size,
                background,
                setBackground,
                allowScrollNext,
                setAllowScrollNext,
                allowScrollPrev,
                setAllowScrollPrev,
                currentSection,
                setCurrentSection,
                lang,
                setLang,
                activeIndexId, setActiveIndexId,
                characters,setCharacters,
                arealist,setArealist,
                metaverseModalOpen,
                setMetaverseModalOpen,
                modalInfo,
                setModalInfo,
                newsTab,
                setNewsTab,
            }}
        >
            {children}
        </LandingContext.Provider>
    )
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
