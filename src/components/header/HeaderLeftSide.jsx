import styled, { keyframes } from 'styled-components';
import LanguageButton from 'components/buttons/LanguageButton';

const Xlg = styled.svg`
    display: block;
    @media (max-width: 1311px) {
        display: none;
    }
`

const Lg = styled.svg`
    display: none;
    @media (max-width: 1311px) {
        display: block;
    }
    @media (max-width: 1033px) {
        display: none;
    }
`

const Md = styled.svg`
    display: none;
    @media (max-width: 1033px) {
        display: block;
    }
    @media (max-width: 845px) {
        display: none;
    }
`

const Sm = styled.svg`
    display: none;
    @media (max-width: 845px) {
        display: block;
    }
    @media (max-width: 735px) {
        display: none;
    }
`

const Xm = styled.svg`
    display: none;
    transform: scale(-1, 1);
    @media (max-width: 735px) {
        display: block;
    }
`
const XlgContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    visibility: visible;
    @media (max-width: 1311px) {
        visibility: hidden;
    }
`
const LgContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    visibility: hidden;
    @media (max-width: 1311px) {
        visibility: visible;
    }
    @media (max-width: 1033px) {
        visibility: hidden
    }
`
const MdContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    visibility: hidden;
    @media (max-width: 1033px) {
        visibility: visible;
    }
    @media (max-width: 845px) {
        visibility: hidden;
    }
`
const SmContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    visibility: hidden;
    @media (max-width: 845px) {
        visibility: visible;
    }
    @media (max-width: 735px) {
        visibility: hidden;
    }
`
const XmContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    visibility: hidden;
    @media (max-width: 735px) {
        visibility: visible;
    }
`

const ButtonEffectAnimation = keyframes`
    0%{
        opacity:0;
    }
    40%{
        opacity:0.9;
    }
    60%
    {
        opacity: 0.2;
    }
    70%
    {
        opacity: 0.9;
    }
    80%
    {
        opacity: 0.2;
    }

    100%{
        opacity: 1;
    }
`

const ButtonEffect = styled.div`
    animation: ${ButtonEffectAnimation} 0.27s both  ease-in ;
    animation-delay: 1s;
    opacity:1;
`


export default function HeaderLeftSide({ isRTL }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {
                isRTL ? <div>
                    <Xlg width="672" height="89" viewBox="0 0 672 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M499 2H514.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M484.5 87L486 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M499 88H514.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M471 30L463.5 37.5H492.5L477.5 22.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M453 45H500" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M470.5 59.5L464 53H491.5L477.5 67" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M574.609 1.18945H577.638L580.003 3.55955L578.491 5.07121L574.609 1.18945Z" fill="#707070" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M550 27.5L567.5 45L550 62.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M545 67L539 73M539 17L545.5 23.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M535.5 26.5L554 45L535.5 63.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M526.5 27H519L537 45M537 45H541M537 45L519 63H526.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M510 19.5H531" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M510 70.5H531" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M499.5 20L524.5 45L499.5 70" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M41.847 88.5725L26.7679 88.5725L26.7679 87.2664L43.1479 87.2664L41.847 88.5725Z" fill="#98979B" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M671 3L629 45L671 87" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M658.5 2L644 16.5L629.5 2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M616 1.5L637.5 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M631.5 30L616.5 45L631.5 60" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M637.5 67L616 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M629 88.5L643.5 74L658 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M597.5 62.5L613 78L626 65" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M594.5 83.5L589.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M587.5 88.5V66.5L605.5 84.5L601.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M613 24.5L592.5 45L613 65.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M592.5 45H606.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M618.5 31.5L611.5 38.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M611 51L618.5 58.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M597.5 27.5L613 12L625.5 24.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M595 7L589.5 1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M602.5 1L607 5.5L587.5 25V1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M592.5 32.5L580 45L592.5 57.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M576.5 1.5L579 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M563.5 1.5L574.5 12.5H560.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M551 1.5L554 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M539 1.5L558.5 21H577.5L578.5 29.5H564L572.5 38.5H586.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M586.5 51.5H572.5L564 60H578.5L578 68.5H558.5L538.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M554 85.5L551 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M560.5 77.5H574.5L563.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M579.5 85.5L576.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M524.5 1L534 10.5H477.5L512 45L477.5 79.5H533.5L524.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M484.5 3L486.5 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M469.5 18L442.5 45L469.5 72" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M416 2H404L437.5 35.5L471 2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M416 87H404L437.5 53.5L472 88" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M434.5 69.5L424 78.5H440V64" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M425.5 87H441.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M425.5 2H441.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M434.5 20L424.5 11H440V25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M402 14L432.5 44.5L402 75" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M398 53L411 66" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <circle strokeOpacity="0.5" strokeWidth="2px" className="path" cx="396.5" cy="43.5" r="9" stroke="white" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M395.5 6L357 44.5L395.5 83" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M388 27L370 45L388 62.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M139 15L108.5 45.5L139 76" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M143 54L130 67" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <circle strokeOpacity="0.5" strokeWidth="2px" className="path" r="9" transform="matrix(-1 0 0 1 144.5 44.5)" stroke="white" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M277 2.5H385" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M277.5 87H385" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M377.5 10.5L343.5 44.5L377.5 78.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M343.5 21H333.5V41.5L354 21" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M343.5 68.5H334V48.5L354 68.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M361 11.5H324.5V78H361" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M299 11.5H315.5V19.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M299 78H315V70" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M317.5 59.5L305 72" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M304.5 17.5L317.5 30" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M287 11.5L320 44.5L287 77.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M265 4.5V85L305.5 44.5L265 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M265 15.5L277.5 28" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M283.5 22.5L265 41" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M126 2.5H242" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M254 5L214 45L254.5 85.5V5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M236.5 23L254.5 41" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M241.5 28L254.5 15" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M232.5 12L199.5 45L232.5 78" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M220.5 11.5H204.5V19.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M215 17.5L202.5 30" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M202 59.5L215 72.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M204 70V78H220.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M125.5 87H242.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M158.5 12H195V78H158.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M69.5 1.5L103.5 35.5L136.5 2.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M100 2.5H116" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M101 25V10.5H118L106.5 20.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M69.5 88.5L103.5 54.5L136 87" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M101 64.5V78.5H117.5L107 69.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M100 87H116" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M72 18.5L98.5 45L72 71.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M63.5 22.5L48.5 37.5H77.5L70.5 30.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M41.5 45H88" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M64 67.5L49.5 53H77.5L70.5 60" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M16.5 1.5L7.5 10.5H63.5L29 45L63.5 79.5H7.5L16.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M27 2H42.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M27 88H42.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M42 70L17 45L42 20" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M173.5 21.5H183V41.5L163 21.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M173.5 69H183V49L163 69" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M32 20H11.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M16 28H23L5.5 45.5M5.5 45.5H1M5.5 45.5L23.5 63.5H16" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M32 71.5H11.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M140.5 10L175 44.5L141 78.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </Xlg>

                    <Lg width="486" height="89" viewBox="0 0 486 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M209.064 6.5L171.064 44.5L209.064 82.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M202.064 27L184.064 45L202.064 63" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M211.064 53.5C216.035 53.5 220.064 49.4706 220.064 44.5C220.064 39.5294 216.035 35.5 211.064 35.5C206.093 35.5 202.064 39.5294 202.064 44.5C202.064 49.4706 206.093 53.5 211.064 53.5Z" stroke="white" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M215.564 75.5L246.564 44.5L215.564 13.5M212.564 53.5L224.564 65.5L212.564 53.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M229.564 2H217.564L251.064 35.5L284.564 2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M239.064 2H254.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M248.064 20L239.064 11H253.564V25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M229.564 87H218.064L251.564 53.5L285.064 87" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M248.064 69L237.064 79H253.564V64" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M239.064 87H255.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M284.064 18L257.064 45L283.564 71.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M298.064 3L300.064 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M312.064 2H328.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M338.064 1.5L347.064 10.5H290.564L325.064 45L290.564 79.5H347.064L338.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M284.564 30L277.564 37H305.064L291.064 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M266.564 45H313.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M284.564 60L277.564 53H305.564L291.064 67.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M298.064 87L299.564 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M363.564 27.5L381.064 45L363.564 62.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M352.064 1L372.064 21H391.564V30H377.564L386.064 38.5H399.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M406.064 32L393.064 45L406.064 58" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M399.064 51.5H386.564L378.064 60H392.064L391.564 68.5H372.064L352.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M364.564 1.5L367.564 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M365.064 88.5L368.064 85.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M377.564 1.5L388.064 12.5H373.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M374.064 77.5H388.064L377.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M389.564 1L392.564 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M390.064 88.5L392.564 86" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M408.064 6.5L402.564 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M401.064 1.5V23.5L419.564 5L416.064 1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M408.564 83L403.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M401.064 88.5V66L419.564 84.5L415.564 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M411.064 27.5L426.564 12L439.064 24.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M406.064 45L426.564 65.5M426.564 24.5L406.064 45L426.564 24.5ZM406.064 45H420.064H406.064Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M411.064 62.5L426.564 78L439.064 65.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M432.564 31.5L425.064 39" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M424.564 51L432.064 58.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M429.564 1.5L451.064 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M429.564 88.5L451.064 67" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M445.564 30L430.564 45L445.564 60" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M442.064 1.5L457.064 16.5L472.064 1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M442.064 88.5L457.064 73.5L472.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M484.564 3L442.564 45L484.564 87" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M312.564 88H328.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M313.064 20L338.064 45L313.064 70" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M323.564 19.5H344.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M340.064 27H333.064L350.564 44.5H354.564V45.5H350.564L333.064 63H340.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M324.064 70.5H344.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M349.564 26.5L368.064 45L349.564 63.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M353.064 17.5L358.564 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M353.064 73L359.064 67" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M98.564 35C103.535 35 107.564 39.0294 107.564 44C107.564 48.9706 103.535 53 98.564 53C93.5934 53 89.564 48.9706 89.564 44C89.564 39.0294 93.5934 35 98.564 35Z" stroke="white" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M189.564 78L156.564 45L189.564 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M161.564 70V78H177.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M172.064 72L159.564 59.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M159.564 30L172.064 17.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M161.564 19.5V12H177.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M83.064 2H199.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M115.064 78H152.064V12H115.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M81.564 87.5H199.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M98.064 79L131.564 45.5L98.064 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M95.064 75.5L65.064 45.5L95.064 15.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M26.564 1L60.564 35L93.564 2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M93.064 87L60.564 54.5L27.064 88" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57.064 87H73.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M58.064 64.5V78.5H74.064L64.064 69" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M86.064 66L98.564 53.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M58.064 24.5V11H73.564L64.064 20" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57.064 2H73.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M28.564 72L55.564 45L28.564 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M27.564 59.5L33.564 53.5H13.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M20.564 67.5L13.064 60" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M12.564 44.5H45.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M28.064 30L35.064 37H12.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M21.064 22.5L12.064 31.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M8.06399 23L17.064 14H0.999999" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M8.12796 69L17.128 78H1.06396" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </Lg>

                    <Md width="401" height="89" viewBox="0 0 401 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M199.064 18L172.064 45L198.564 71.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M213.064 3L215.064 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M227.064 2H243.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M253.064 1.5L262.064 10.5H205.564L240.064 45L205.564 79.5H262.064L253.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M199.564 30L192.564 37H220.064L206.064 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M181.564 45H228.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M199.564 60L192.564 53H220.564L206.064 67.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M213.064 87L214.564 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M278.564 27.5L296.064 45L278.564 62.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M267.064 1L287.064 21H306.564V30H292.564L301.064 38.5H314.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M321.064 32L308.064 45L321.064 58" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M314.064 51.5H301.564L293.064 60H307.064L306.564 68.5H287.064L267.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M279.564 1.5L282.564 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M280.064 88.5L283.064 85.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M292.564 1.5L303.064 12.5H288.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M289.064 77.5H303.064L292.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M304.564 1L307.564 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M305.064 88.5L307.564 86" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M323.064 6.5L317.564 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M316.064 1.5V23.5L334.564 5L331.064 1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M323.564 83L318.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M316.064 88.5V66L334.564 84.5L330.564 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M326.064 27.5L341.564 12L354.064 24.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M321.064 45L341.564 65.5M341.564 24.5L321.064 45L341.564 24.5ZM321.064 45H335.064H321.064Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M326.064 62.5L341.564 78L354.064 65.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M347.564 31.5L340.064 39" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M339.564 51L347.064 58.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M344.564 1.5L366.064 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M344.564 88.5L366.064 67" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M360.564 30L345.564 45L360.564 60" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M357.064 1.5L372.064 16.5L387.064 1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M357.064 88.5L372.064 73.5L387.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M399.564 3L357.564 45L399.564 87" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M227.564 88H243.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M228.064 20L253.064 45L228.064 70" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M238.564 19.5H259.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M255.064 27H248.064L265.564 44.5H269.564V45.5H265.564L248.064 63H255.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M239.064 70.5H259.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M264.564 26.5L283.064 45L264.564 63.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M268.064 17.5L273.564 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M268.064 73L274.064 67" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M98.564 35C103.535 35 107.564 39.0294 107.564 44C107.564 48.9706 103.535 53 98.564 53C93.5934 53 89.564 48.9706 89.564 44C89.564 39.0294 93.5934 35 98.564 35Z" stroke="white" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M189.564 78L156.564 45L189.564 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M161.564 70V78H177.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M172.064 72L159.564 59.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M159.564 30L172.064 17.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M161.564 19.5V12H177.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M83.064 2H199.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M115.064 78H152.064V12H115.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M81.564 87.5H199.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M98.064 79L131.564 45.5L98.064 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M95.064 75.5L65.064 45.5L95.064 15.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M26.564 1L60.564 35L93.564 2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M93.064 87L60.564 54.5L27.064 88" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57.064 87H73.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M58.064 64.5V78.5H74.064L64.064 69" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M86.064 66L98.564 53.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M58.064 24.5V11H73.564L64.064 20" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57.064 2H73.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M28.564 72L55.564 45L28.564 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M27.564 59.5L33.564 53.5H13.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M20.564 67.5L13.064 60" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M12.564 44.5H45.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M28.064 30L35.064 37H12.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M21.064 22.5L12.064 31.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M8.06399 23L17.064 14H0.999999" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M8.12796 69L17.128 78H1.06396" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </Md>

                    <Sm width="340" height="89" viewBox="0 0 340 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M191.5 26L173 44.5L191.5 63" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M197 26L215.5 44.5L197 63" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M177.5 26L160 43.5L177.5 61" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M188 16L182.5 21.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M188 71.5L182 65.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M213.5 27L231 44.5L213.5 62" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M203 17L208.5 22.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M203 72.5L209 66.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M1 9.48865H19L1 27.4886" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M1 80H19L1 62" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M206.064 1L226.064 21H245.564V30H231.564L240.064 38.5H253.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M260.064 32L247.064 45L260.064 58" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M253.064 51.5H240.564L232.064 60H246.064L245.564 68.5H226.064L206.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M221.564 1.5L224.564 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M222.064 88.5L225.064 85.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M231.564 1.5L242.064 12.5H227.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M228.064 77.5H242.064L231.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M243.564 1L246.564 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M244.064 88.5L246.564 86" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M262.064 6.5L256.564 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M255.064 1.5V23.5L273.564 5L270.064 1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M262.564 83L257.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M255.064 88.5V66L273.564 84.5L269.564 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M265.064 27.5L280.564 12L293.064 24.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M260.064 45L280.564 65.5M280.564 24.5L260.064 45L280.564 24.5ZM260.064 45H274.064H260.064Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M265.064 62.5L280.564 78L293.064 65.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M286.564 31.5L279.064 39" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M278.564 51L286.064 58.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M283.564 1.5L305.064 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M283.564 88.5L305.064 67" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M299.564 30L284.564 45L299.564 60" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M296.064 1.5L311.064 16.5L326.064 1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M296.064 88.5L311.064 73.5L326.064 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M338.564 3L296.564 45L338.564 87" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M98.564 35C103.535 35 107.564 39.0294 107.564 44C107.564 48.9706 103.535 53 98.564 53C93.5934 53 89.564 48.9706 89.564 44C89.564 39.0294 93.5934 35 98.564 35Z" stroke="white" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M83.064 2H199.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M115.064 78H152.064V12H115.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M81.564 87.5H199.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M98.064 79L131.564 45.5L98.064 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M95.064 75.5L65.064 45.5L95.064 15.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M26.564 1L60.564 35L93.564 2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M93.064 87L60.564 54.5L27.064 88" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57.064 87H73.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M58.064 64.5V78.5H74.064L64.064 69" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M86.064 66L98.564 53.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M58.064 24.5V11H73.564L64.064 20" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57.064 2H73.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M28.564 72L55.564 45L28.564 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M27.564 59.5L33.564 53.5H13.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M20.564 67.5L13.064 60" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M12.564 44.5H45.564" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M28.064 30L35.064 37H12.064" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M21.064 22.5L12.064 31.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </Sm>
                    <div style={{ transform: 'scale(-1, 1)' }}>
                        <Xm width="97" height="64" viewBox="0 0 97 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M96 2.5L66 32.5L96 62.5" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M65.5 1L76.5 12L87 1.5" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M66 63.5L76.5 53L87 63.5" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M56.5 63.5L72 48" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M56.5 1L72 16.5" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M43.5 20L54.5 9L63.5 18" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M43 45L54.5 56.5L63.5 47.5" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M68 21.5L57 32.5L68 43.5" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M54.5 18L40 32.5L54.5 47" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M40 32.5H49.5" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M37.5 1L41.5 5" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M36 1V17.5L49.5 4L46.5 1" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M41.5 60L38 63.5" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M36 63.5V47.5L49.5 61L47 63.5" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M39.5 23.5L30.5 32.5L39.5 41.5" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M1 1L15.5 15.5H29L29.5 21.5H19L25 27.5H35" stroke="white" />
                            <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M34.5 37H25.5L19 43.5H29.5L29 49.5H15.5L1.5 63.5" stroke="white" />
                        </Xm>

                    </div>
                </div>
                    : <div>
                        <XlgContainer>
                            <div style={{ position: 'absolute', left: '120px' }}>
                                <ButtonEffect>
                                    <LanguageButton></LanguageButton>
                                </ButtonEffect>
                            </div>
                            <Xlg width="665" height="89" viewBox="0 0 665 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle strokeOpacity="0.5" strokeWidth="2px" className="path" r="9" transform="matrix(-1 0 0 1 391.5 43.5)" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M492 2H507.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M477.5 87L479 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M492 88H507.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M464 30L456.5 37.5H485.5L470.5 22.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M446 45H493" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M463.5 59.5L457 53H484.5L470.5 67" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M567.609 1.18945H570.638L573.003 3.55955L571.491 5.07121L567.609 1.18945Z" fill="#707070" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M543 27.5L560.5 45L543 62.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M538 67L532 73M532 17L538.5 23.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M528.5 26.5L547 45L528.5 63.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M519.5 27H512L530 45M530 45H534M530 45L512 63H519.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M503 19.5H524" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M503 70.5H524" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M492.5 20L517.5 45L492.5 70" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M34.847 88.5725L19.7679 88.5725L19.7679 87.2664L36.1479 87.2664L34.847 88.5725Z" fill="#98979B" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M664 3L622 45L664 87" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M651.5 2L637 16.5L622.5 2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M609 1.5L630.5 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M624.5 30L609.5 45L624.5 60" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M630.5 67L609 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M622 88.5L636.5 74L651 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M590.5 62.5L606 78L619 65" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M587.5 83.5L582.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M580.5 88.5V66.5L598.5 84.5L594.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M606 24.5L585.5 45L606 65.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M585.5 45H599.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M611.5 31.5L604.5 38.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M604 51L611.5 58.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M590.5 27.5L606 12L618.5 24.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M588 7L582.5 1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M595.5 1L600 5.5L580.5 25V1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M585.5 32.5L573 45L585.5 57.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M569.5 1.5L572 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M556.5 1.5L567.5 12.5H553.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M544 1.5L547 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M532 1.5L551.5 21H570.5L571.5 29.5H557L565.5 38.5H579.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M579.5 51.5H565.5L557 60H571.5L571 68.5H551.5L531.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M547 85.5L544 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M553.5 77.5H567.5L556.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M572.5 85.5L569.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M517.5 1L527 10.5H470.5L505 45L470.5 79.5H526.5L517.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M477.5 3L479.5 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M462.5 18L435.5 45L462.5 72" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M409 2H397L430.5 35.5L464 2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M409 87H397L430.5 53.5L465 88" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M427.5 69.5L417 78.5H433V64" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M418.5 87H434.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M418.5 2H434.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M427.5 20L417.5 11H433V25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M395 14L425.5 44.5L395 75" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M391 53L404 66" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M388.5 6L350 44.5L388.5 83" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M381 27L363 45L381 62.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M270 2.5H378" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M270.5 87H378" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M370.5 10.5L336.5 44.5L370.5 78.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M336.5 21H326.5V41.5L347 21" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M336.5 68.5H327V48.5L347 68.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M354 11.5H317.5V78H354" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M292 11.5H308.5V19.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M292 78H308V70" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M310.5 59.5L298 72" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M297.5 17.5L310.5 30" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M280 11.5L313 44.5L280 77.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M258 4.5V85L298.5 44.5L258 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M258 15.5L270.5 28" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M276.5 22.5L258 41" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M119 2.5H235" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M247 5L207 45L247.5 85.5V5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M229.5 23L247.5 41" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M234.5 28L247.5 15" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M225.5 12L192.5 45L225.5 78" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M213.5 11.5H197.5V19.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M208 17.5L195.5 30" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M195 59.5L208 72.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M197 70V78H213.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M118.5 87H235.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M151.5 12H188V78H151.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M62.5 1.5L96.5 35.5L129.5 2.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M93 2.5H109" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M94 25V10.5H111L99.5 20.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M113.5 31L100.5 44L112 55.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M62.5 88.5L96.5 54.5L129 87" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M94 64.5V78.5H110.5L100 69.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M93 87H109" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M65 18.5L91.5 45L65 71.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M56.5 22.5L41.5 37.5H70.5L63.5 30.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M34.5 45H81" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57 67.5L42.5 53H70.5L63.5 60" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M9.5 1.5L0.5 10.5H56.5L22 45L56.5 79.5H0.5L9.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M20 2H35.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M20 88H35.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M35 70L10 45L35 20" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </Xlg>

                        </XlgContainer>
                        <LgContainer>
                            <div style={{ position: 'absolute', left: '80px' }}>
                                <ButtonEffect>
                                    <LanguageButton></LanguageButton>
                                </ButtonEffect>
                            </div>
                            <Lg width="485" height="91" viewBox="0 0 485 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M209 6.5L171 44.5L209 82.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M202 27L184 45L202 63" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M211 53.5C215.971 53.5 220 49.4706 220 44.5C220 39.5294 215.971 35.5 211 35.5C206.029 35.5 202 39.5294 202 44.5C202 49.4706 206.029 53.5 211 53.5Z" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M215.5 75.5L246.5 44.5L215.5 13.5M212.5 53.5L224.5 65.5L212.5 53.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M229.5 2H217.5L251 35.5L284.5 2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M239 2H254.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M248 20L239 11H253.5V25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M229.5 87H218L251.5 53.5L285 87" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M248 69L237 79H253.5V64" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M239 87H255" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M284 18L257 45L283.5 71.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M298 3L300 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M312 2H328.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M338 1.5L347 10.5H290.5L325 45L290.5 79.5H347L338 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M284.5 30L277.5 37H305L291 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M266.5 45H313.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M284.5 60L277.5 53H305.5L291 67.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M298 87L299.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M363.5 27.5L381 45L363.5 62.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M352 1L372 21H391.5V30H377.5L386 38.5H399.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M406 32L393 45L406 58" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M399 51.5H386.5L378 60H392L391.5 68.5H372L352 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M364.5 1.5L367.5 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M365 88.5L368 85.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M377.5 1.5L388 12.5H373.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M374 77.5H388L377 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M389.5 1L392.5 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M390 88.5L392.5 86" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M408 6.5L402.5 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M401 1.5V23.5L419.5 5L416 1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M408.5 83L403 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M401 88.5V66L419.5 84.5L415.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M411 27.5L426.5 12L439 24.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M406 45L426.5 65.5M426.5 24.5L406 45L426.5 24.5ZM406 45H420H406Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M411 62.5L426.5 78L439 65.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M432.5 31.5L425 39" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M424.5 51L432 58.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M429.5 1.5L451 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M429.5 88.5L451 67" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M445.5 30L430.5 45L445.5 60" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M442 1.5L457 16.5L472 1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M442 88.5L457 73.5L472 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M484.5 3L442.5 45L484.5 87" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M312.5 88H328" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M313 20L338 45L313 70" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M323.5 19.5H344.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M340 27H333L350.5 44.5H354.5V45.5H350.5L333 63H340" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M324 70.5H344" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M349.5 26.5L368 45L349.5 63.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M353 17.5L358.5 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M353 73L359 67" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M27.5 17.875L54.5 45.4886L27.5 73.1023" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M20 22.9886L6 37.3068H33L26.5 30.6591" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M1.5 45.4886H44" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M20 68.5L5.5 53.6705H33L26.5 60.3182" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M1.5 61.8523L20 80.7727H1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M26 89.9773L60 55.2046L92.5 88.4432" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57 65.4318V79.2386H72.5L63 70.5455" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M56 88.4432H72" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M25.5 1L59.5 35.7727L93 1.51136" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M25.5 1L59.5 35.7727L93 1.51136" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M56.5 1.51135H71.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57 25.5454V10.2045H73.5L63 20.4318" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M81.5 1.51135H198.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M81.5 88.4432H197.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M114 11.7386H150.5V78.7273H114" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M160.5 19.4091V11.2273H176.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M160.5 71.5682V79.2386H176.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M171 17.3636L158.5 30.1477" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M158 60.3182L171 73.6136" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M1 9.48865H19L1 27.4886" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M192.5 79L158.5 45L192.5 11" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </Lg>
                        </LgContainer>
                        <MdContainer>
                            <div style={{ position: 'absolute', left: '80px' }}>
                                <ButtonEffect>
                                    <LanguageButton></LanguageButton>
                                </ButtonEffect>
                            </div>
                            <Md width="394" height="91" viewBox="0 0 394 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M193 18.9773L166 45.9773L192.5 72.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M207 3.97729L209 1.97729" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M221 2.97729H237.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M247 2.47729L256 11.4773H199.5L234 45.9773L199.5 80.4773H256L247 89.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M193.5 30.9773L186.5 37.9773H214L200 23.9773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M175.5 45.9773H222.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M193.5 60.9773L186.5 53.9773H214.5L200 68.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M207 87.9773L208.5 89.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M272.5 28.4773L290 45.9773L272.5 63.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M261 1.97729L281 21.9773H300.5V30.9773H286.5L295 39.4773H308.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M315 32.9773L302 45.9773L315 58.9773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M308 52.4773H295.5L287 60.9773H301L300.5 69.4773H281L261 89.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M273.5 2.47729L276.5 5.47729" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M274 89.4773L277 86.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M286.5 2.47729L297 13.4773H282.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M283 78.4773H297L286 89.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M298.5 1.97729L301.5 4.97729" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M299 89.4773L301.5 86.9773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M317 7.47729L311.5 1.97729" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M310 2.47729V24.4773L328.5 5.97729L325 2.47729" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M317.5 83.9773L312 89.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M310 89.4773V66.9773L328.5 85.4773L324.5 89.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M320 28.4773L335.5 12.9773L348 25.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M315 45.9773L335.5 66.4773M335.5 25.4773L315 45.9773L335.5 25.4773ZM315 45.9773H329H315Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M320 63.4773L335.5 78.9773L348 66.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M341.5 32.4773L334 39.9773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M333.5 51.9773L341 59.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M338.5 2.47729L360 23.9773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M338.5 89.4773L360 67.9773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M354.5 30.9773L339.5 45.9773L354.5 60.9773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M351 2.47729L366 17.4773L381 2.47729" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M351 89.4773L366 74.4773L381 89.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M393.5 3.97729L351.5 45.9773L393.5 87.9773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M221.5 88.9773H237" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M222 20.9773L247 45.9773L222 70.9773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M232.5 20.4773H253.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M249 27.9773H242L259.5 45.4773H263.5V46.4773H259.5L242 63.9773H249" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M233 71.4773H253" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M258.5 27.4773L277 45.9773L258.5 64.4773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M262 18.4773L267.5 23.9773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M262 73.9773L268 67.9773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M27.5 17.875L54.5 45.4886L27.5 73.1022" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M20 22.9886L6 37.3068H33L26.5 30.6591" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M1.5 45.4886H44" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M20 68.5L5.5 53.6704H33L26.5 60.3182" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M1.5 61.8523L20 80.7727H1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M26 89.9773L60 55.2046L92.5 88.4432" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57 65.4318V79.2386H72.5L63 70.5454" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M56 88.4431H72" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M25.5 0.999969L59.5 35.7727L93 1.51133" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M56.5 1.51132H71.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57 25.5454V10.2045H73.5L63 20.4318" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M81.5 1.51132H198.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M81.5 88.4431H197.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M114 11.7386H150.5V78.7273H114" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M160.5 19.4091V11.2273H176.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M160.5 71.5681V79.2386H176.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M171 17.3636L158.5 30.1477" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M158 60.3181L171 73.6136" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M188.5 11.7386L155.5 45.4886L188.5 79.2386" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M1 9.48862H19L1 27.4886" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </Md>
                        </MdContainer>
                        <SmContainer>
                            <div style={{ position: 'absolute', left: '80px' }}>
                                <ButtonEffect>
                                    <LanguageButton></LanguageButton>
                                </ButtonEffect>
                            </div>
                            <Sm width="339" height="91" viewBox="0 0 339 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M206 1L226 21H245.5V30H231.5L240 38.5H253.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M260 32L247 45L260 58" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M253 51.5H240.5L232 60H246L245.5 68.5H226L206 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M218.5 1.5L221.5 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M219 88.5L222 85.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M231.5 1.5L242 12.5H227.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M228 77.5H242L231 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M243.5 1L246.5 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M244 88.5L246.5 86" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M262 6.5L256.5 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M255 1.5V23.5L273.5 5L270 1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M262.5 83L257 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M255 88.5V66L273.5 84.5L269.5 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M265 27.5L280.5 12L293 24.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M260 45L280.5 65.5M280.5 24.5L260 45L280.5 24.5ZM260 45H274H260Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M265 62.5L280.5 78L293 65.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M286.5 31.5L279 39" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M278.5 51L286 58.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M283.5 1.5L305 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M283.5 88.5L305 67" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M299.5 30L284.5 45L299.5 60" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M296 1.5L311 16.5L326 1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M296 88.5L311 73.5L326 88.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M338.5 3L296.5 45L338.5 87" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M203.5 26.5L222 45L203.5 63.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M194.5 27L176 45.5L194.5 64" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M217.5 27.5L235 45L217.5 62.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M207 17.5L212.5 23" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M207 73L213 67" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M177.5 28L160 45.5L177.5 63" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M188 18L182.5 23.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M188 73.5L182 67.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M27.5 17.875L54.5 45.4886L27.5 73.1023" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M20 22.9885L6 37.3067H33L26.5 30.659" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M1.5 45.4885H44" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M20 68.5L5.5 53.6705H33L26.5 60.3182" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M1.5 61.8523L20 80.7727H1.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M26 89.9773L60 55.2046L92.5 88.4432" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57 65.4318V79.2386H72.5L63 70.5455" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M56 88.4432H72" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M25.5 1L59.5 35.7727L93 1.51136" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M56.5 1.51135H71.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57 25.5454V10.2045H73.5L63 20.4318" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M81.5 1.51135H198.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M81.5 88.4432H197.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M114 11.7385H150.5V78.7272H114" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M1 9.48865H19L1 27.4886" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </Sm>
                        </SmContainer>
                        <XmContainer>
                            <div style={{ position: 'absolute', left: '40px', zIndex: 30 }}>
                                <ButtonEffect>
                                    <LanguageButton></LanguageButton>
                                </ButtonEffect>
                            </div>
                            <Xm width="212" height="65" viewBox="0 0 212 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle strokeOpacity="0.5" strokeWidth="2px" className="path" cx="206" cy="33" r="5.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M0.5 2.5L30.5 32.5L0.5 62.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M9.5 1.5L20 12L30.5 1.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M25 16.5L40.5 1" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M9.5 63.5L20 53L30.5 63.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M25 48.5L40 63.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M29 21.5L40 32.5L29 43.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M33 18L42.5 8.5L53.5 19.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M33 47L42.5 56.5L53.5 45.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M38 23L43.5 28.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M38 42L43.5 36.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M42 18L56.5 32.5L42 47" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M47 32.5H56.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M50 1L47 4L60.5 17.5V1" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M55.5 5L59.5 1" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M50 64L47 61L60.5 47.5V64" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M55.5 60L59 63.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M57 23.5L66 32.5L57 41.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M95 1L80.5 15.5H67.5L67 21.5H77.5L71.5 27.5H61.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M62 37H71.5L78 43.5H67L67.5 49.5H81L95 63.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M69 1L66.5 3.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M77.5 1L69.5 9H80" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M87 1L84.5 3.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M80 55.5H69.5L78 64" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M66.5 62L68 63.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M84.5 61.5L87 64" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M89 7.5H129.5L104.5 32.5L129 57H88.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M95 13L91 17" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M91 48.5L95 52.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M87.5 20L75 32.5L87.5 45" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M97.5 19.5L84.5 32.5L97.5 45.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M101 14H116" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M101 51H116" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M104.5 20H109L96.5 32.5M96.5 32.5H94M96.5 32.5L109 45H104.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M113 1.5H124" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M113 63.5H124.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M133 1L134.5 2.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M138 2H149.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M137.5 8H152.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M136.5 58H151.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M134 63H145.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M153.5 1L178.5 26L202.5 2H194" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M166 2H177.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M176.5 18.5V8H188.5L180.5 15" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M154 64L179 39L203 63H194" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M176.5 46.5V57H189L180.5 50" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M166 63H177.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M204 10.5L182 32.5L204 54.5" stroke="white" />
                                <path strokeOpacity="0.5" strokeWidth="2px" className="path" d="M197.5 47.5L206.5 38.5" stroke="white" />
                            </Xm>
                        </XmContainer>
                    </div>
            }
        </div>
    )
}