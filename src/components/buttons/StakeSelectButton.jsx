import React, { useState } from "react";
import styled from "styled-components";

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    margin-right: 30px;
    overflow: hidden;
`;
const ButtonItem = styled.button`
    margin-right: 15px;
    padding: 10px 35px;
    border-radius: 100px;
    border: 2px solid transparent;
    background-color: #fff;
    font-size: 16px;
    font-weight: 700;
    color: #1e2329;
    white-space: nowrap;
    transition: .5s ease-in-out;
    cursor: pointer;
    outline: none;
`;
export default function StakeSelectButton() {
    const [selectedButton, setSelectedButton] = useState("All");

    return (
        <ButtonGroup>
            <ButtonItem onClick={() => setSelectedButton("All")} style={selectedButton === "All" ? { borderColor: "#5bff7f" } : {}}>All</ButtonItem>
            <ButtonItem onClick={() => setSelectedButton("Active")} style={selectedButton === "Active" ? { borderColor: "#5bff7f" } : {}}>Active</ButtonItem>
            <ButtonItem onClick={() => setSelectedButton("Expired")} style={selectedButton === "Expired" ? { borderColor: "#5bff7f" } : {}}>Expired</ButtonItem>
            <ButtonItem onClick={() => setSelectedButton("Coming soon")} style={selectedButton === "Coming soon" ? { borderColor: "#5bff7f", marginRight: "0" } : {}}>Coming soon</ButtonItem>
        </ButtonGroup>
    )
}