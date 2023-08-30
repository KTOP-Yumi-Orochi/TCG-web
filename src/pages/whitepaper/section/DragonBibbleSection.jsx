import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import Image from "assets/images/whitepaper/dragon-bibble.jpg";
import DragonBibbleCard from "components/cards/DragonBibbleCard";

const ContainerAnimation = keyframes`
    0%{
        -webkit-transform: scale(1.2);
            -ms-transform: scale(1.2);
                transform: scale(1.2);
    }
    100%{
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
                transform: scale(1);
    }
`;
const Container = styled.section`
    width: 100%;
    height: ${(props) => props.height}px;
    animation: ${ContainerAnimation} 1s ease 1;
    webkit-animation: ${ContainerAnimation} 1s ease 1;
    background-position: center bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 150px
`;
const MenuContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 18px;
    row-gap: 23px;
`;

const menus = [
    {
        image: Image,
        title: "1. Introduction"
    },
    {
        image: Image,
        title: "2. Dragon Rank System"
    },
    {
        image: Image,
        title: "3. Tier1-Hunter Dragon Attributes"
    },
    {
        image: Image,
        title: "4. Tier2-Raider Dragon Attributes"
    },
    {
        image: Image,
        title: "5. Tier3-Battle Dragon Attributes"
    },
    {
        image: Image,
        title: "6. Tier4-Flying Dragon Attributes"
    },
    {
        image: Image,
        title: "7. Dragon Crafting"
    },
    {
        image: Image,
        title: "8. Dragon Gold"
    },
    {
        image: Image,
        title: "9. Dragon Traits & Sets"
    },
    {
        image: Image,
        title: "10. Dragon Eggs"
    },
    {
        image: Image,
        title: "11. Dragon Nesting"
    },
    {
        image: Image,
        title: "12. Dragon Battles"
    },
    {
        image: Image,
        title: "13. Dragon Customisation"
    },
    {
        image: Image,
        title: "14. Dragon Island"
    },
    {
        image: Image,
        title: "15. Dragon Rentals"
    },
    {
        image: Image,
        title: "16. Summary"
    },
]
export default function DragonBibbleSection({ size }) {
    return (
        <Container id="testing" height={size.height}>
            <MenuContainer>
                {menus.map((menu, index) => (
                    <Link key={index} to={`/whitepaper/dragon-bibble/${index}`}>
                        <DragonBibbleCard image={menu.image} title={menu.title} />
                    </Link>
                ))}
            </MenuContainer>
        </Container>
    );
}
