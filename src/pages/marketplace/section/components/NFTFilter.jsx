import React, { useState, useEffect } from 'react';
import { Box, Button, ToggleButton } from '@mui/material';
import styled from '@emotion/styled';
import { InputAdornment, TextField, ListItem } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Container = styled.div`
    margin: 0px 2%;

    ul li .MuiFormControlLabel-root .MuiTypography-root {
        font-size: 18px;
        font-weight: 700;
        color: rgba(0,0,0,.87);
    }
`;

const HeaderSection = styled.div`
    animation-duration: 2000ms;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    clip-path: polygon(0% 0%, 200% 0%, 0% 200%);
    text-transform: uppercase;
    font-style: italic;
    line-height: 0.85;
    font-family: "Beaufort for LOL", serif;
    font-weight: 800;
    letter-spacing: 0.03em;
    text-align: center;
    color: rgb(1, 1, 1);
    font-size: calc(61.82px + 2vw);
    margin-bottom: 40px;
    height: 80px;

    @keyframes iueStm {
        0% {
            clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
        }

        100% {
            clip-path: polygon(0% 0%, 200% 0%, 0% 200%);
        }
    }

    span {
        display: block;
        padding: 0px 15px 10px;
        margin-bottom: -10px;
    }
`;

const Section = styled.div`
    position: relative;
    display: block;
    margin: 0px auto;
    max-width: 1400px;
    box-sizing: border-box;
`;

const Navbar = styled.div`
    box-sizing: border-box;
    height: 50px;
    position: relative;
    display: flex;
    justify-content: space-between;
    -webkit-box-align: stretch;
    align-items: stretch;
    border: solid 1px rgb(193, 193, 193);

    .priceEffect {
        position: relative;
    }

    .priceEffect::after {
        content: "";
        position: absolute;
        top: 0px;
        left: -19px;
        width: 6%;
        padding-top: 6%;
        background-color: rgb(255, 255, 255);
        transform: translate(50%, -50%) rotate(45deg);
        border-right: solid 1px rgb(193, 193, 193);
    }
`;

const PriceRangeContent = styled.div`
    display: flex;
    cursor: pointer;
    height: 100%;
    min-height: 0px;
    padding: 0px 20px;
    border: 0px;
    box-shadow: none;
    background-color: transparent;
    -webkit-box-pack: center;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        top: 10px;
        bottom: 10px;
        right: 0px;
        width: 1px;
        background-color: rgb(193, 193, 193);
        transition: top 250ms ease 0s, bottom 250ms ease 0s;
    }

    .priceEffect:hover &::before {
        top: 0px;
        bottom: 0px;
    }

    .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.23);
        border-radius: 0;
    }
`;

const PriceRange = styled.div`
    position: relative;
    flex: 0 1 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

const PriceRangeInput = styled(TextField)`
    
    .MuiInputBase-root{
        border-radius: 8px;
        background-color: #fff;
    }
    input {
        border-radius: 40px;
        padding: 7.5px 0 7.5px 10px;
        width: 56px;
    }
    span{
        color: black;
    }
    
`;
const PriceRangeArrow = styled.span`
    font-size: 20px;
    font-weight: 700;
    color: #989898;
    margin: 0 10px;
    display: flex;
    align-items: center;
`;
const FilterContent = styled.div`
    display: flex; 
    width: 250px; 
    float: right;
    position: relative;
    flex: 0 1 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;

    z-index: 10;

    .filterEffect {
        position: relative;
        height: 100%;
        width: 100%;
    }

    .filterEffect::after {
        content: "";
        position: absolute;
        bottom: -16px;
        right: 0px;
        width: 6%;
        padding-bottom: 7%;
        background-color: rgb(255, 255, 255);
        transform: translate(50%, -50%) rotate(45deg);
        border-left: solid 1px rgb(193, 193, 193);
    }

    .filterEffect::before {
        content: "";
        position: absolute;
        top: 10px;
        bottom: 10px;
        left: 0px;
        width: 1px;
        background-color: rgb(193, 193, 193);
        transition: top 250ms ease 0s, bottom 250ms ease 0s;
    }

    &:hover .filterEffect::before {
        top: 0px;
        bottom: 0px;
    }
`;

const StyledButton = styled(Button)`
    background-color: transparent;
    border: none;
    position: relative;
    display: block;
    height: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
    letter-spacing: 0.1em;
    font-weight: 600;
    transition: color 300ms ease 0s;

    .buttonEffect {
        color: ${props => props.primary?"black" : "rgb(202, 202, 202)"} ;
    }

    &:hover {
        background-color: transparent;
    }

    &:hover .buttonEffect {
        color: black;
    }

    .buttonEffect::after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 3px;
        background-color: rgb(194, 144, 45);
        transform: scale(0, 1);
        transition: transform 300ms ease 0s;

        transform: ${props => props.primary? "scale(0.5, 1)" : "scale(0, 1)" } ;
    }

    &:hover .buttonEffect::after {
        transform: scale(0.5, 1);
    }
`

const StyledAccordion = styled(Accordion)`
    box-shadow: none;
    cursor: pointer;
    height: 100%;
    min-height: 0px;
    padding: 0px 30px;
    border: 0px;
    box-shadow: none;
    background-color: transparent;
    -webkit-box-pack: center;

    .css-o4b71y-MuiAccordionSummary-content {
        display: inline-block;
        -webkit-flex-grow: unset;
        flex-grow: unset;
    }

    .css-yw020d-MuiAccordionSummary-expandIconWrapper {
        margin-left: 10px;
    }

    .css-15v22id-MuiAccordionDetails-root {
        border: 1px solid rgb(202, 202, 202);
        position: absolute;
        top: 48px;
        width: 250px;
        left: 0;
        background-color: #ffffff;
    }

    .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root {
        height: 100%;
    }

    .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
        min-height: auto;
    }
`;
const StyledToggleButton = styled(ToggleButton)`
    border-radius: 50px;
    padding: 1px 10px;
    margin: 4px;
`;

const NFTFilter = () => {

    const [animation, setAnimation] = useState(false)

    const [range, setRange] = useState({
        min: 0,
        max: 100000
    })

    const onChangeInput = (e) => setRange({
        ...range,
        [e.target.name]: e.target.value
    });


    const [filterLabels, setFilterLabels] = useState([]);
    const [filter, setFilter] = useState({
        all: false,
        plot: false,
        avatar: false,
        car: false,
        castle: false,
    });
    const subFilter = {
        plot: { rarity: ["Silver", "Gold", "Platinum", "Diamond"], location: ["All", "Asia", "North", "East", "Forest", "Farm"] },
        avatar: { rarity: ["Rare"], collection: ["Greed", "Astronaut", "WSB"] },
        car: { rarity: ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic"] },
        castle: { rarity: ["Silver", "Gold", "Platinum"] },
    };

    const handleChange = (label) => {
        let _filter = { ...filter };

        let _filterLabels = [];

        _filter['all'] = false;
        _filter["plot"] = false;
        _filter["avatar"] = false;
        _filter["car"] = false;
        _filter["castle"] = false;

        const name = label.toLocaleLowerCase();
        _filter[name] = true;
        _filterLabels = [name];

        if (name === "all") {
            _filter['all'] = true;
            _filterLabels = [];
        }

        console.log(_filter, _filterLabels)
        setFilterLabels(_filterLabels);
        setFilter(_filter);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setAnimation(window.scrollY > document.body.clientHeight / 10);
        });
    }, []);

    return (
        <>
            <Container>

                <HeaderSection style={{animationName: animation ? "iueStm" : "none"}}>
                    {animation && <span>Marketplace</span>}
                </HeaderSection>
                
                <Section>
                    <Navbar>
                        <div className='priceEffect'>
                            <PriceRangeContent>
                                <PriceRange>
                                    <PriceRangeInput
                                        name="min"
                                        value={range.min}
                                        onChange={onChangeInput}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <span>BNB</span>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    <PriceRangeArrow>-</PriceRangeArrow>

                                    <PriceRangeInput
                                        name="max"
                                        value={range.max}
                                        onChange={onChangeInput}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <span>BNB</span>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </PriceRange>
                            </PriceRangeContent>
                        </div>

                        <div style={{ display: 'flex' }}>
                            {["All", "Plot", "Avatar", "Car", "Castle"].map((label, index) => (<StyledButton primary={filter[label.toLowerCase()] ? true : false} key={index} onClick={() => handleChange(label)}>
                                <div className='buttonEffect'>{label}</div>
                            </StyledButton>))}
                        </div>

                        <FilterContent>
                            <div className='filterEffect'>
                                {filterLabels.map((item, index) => (<>
                                    <StyledAccordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography sx={{ fontSize: "0.875rem", fontWeight: 500, color:"black" }}>{item.toUpperCase()}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {Object.entries(subFilter[item.toLowerCase()]).map(([key, value]) => (
                                                <ListItem key={key}>
                                                    <Box>
                                                        <p style={{
                                                            fontSize: "20px",
                                                            fontWeight: 500,
                                                            color: "#989898",
                                                        }}
                                                        >{key}</p>
                                                        {(value).map((filter) => (<>
                                                            <StyledToggleButton
                                                                value="check"
                                                            >
                                                                {filter}
                                                            </StyledToggleButton>
                                                        </>))}
                                                    </Box>
                                                </ListItem>
                                            ))}
                                        </AccordionDetails>
                                    </StyledAccordion>
                                </>))}
                            </div>
                        </FilterContent>

                    </Navbar>
                </Section>
            </Container>
        </>
    );
};

export default NFTFilter;
