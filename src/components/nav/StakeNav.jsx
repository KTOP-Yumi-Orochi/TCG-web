import React, { useState } from "react";
import styled from "styled-components";

import BSCNav from "assets/images/stake/bsc_nav.png";
import ETHNav from "assets/images/stake/eth_nav.png";

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  border-bottom: 2px solid #d9e3e9;
`;
const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 40px;
  cursor: pointer;
`;
const NavEffect = styled.span`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  height: 2px;
  background-color: #5bff7f;
  transition: .3s ease-in-out;
  transform: scaleX(0);
`
const NavImage = styled.img`
  width: 20px;
  height: auto;
  margin-right: 5px;
`;
const NavTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #000;
`;

export default function StakeNavbar() {
    const [selectedNav, setSelectedNav] = useState("All");
    return (
        <Navbar>
            <NavItem onClick={() => setSelectedNav("All")}>
            <NavTitle>All</NavTitle>
            <NavEffect style={selectedNav === "All" ? {transform: "scaleX(1)"} : {}} />
            </NavItem>
            <NavItem onClick={() => setSelectedNav("BSC")}>
            <NavImage src={BSCNav} alt="" />
            <NavTitle>BSC</NavTitle>
            <NavEffect style={selectedNav === "BSC" ? {transform: "scaleX(1)"} : {}} />
            </NavItem>
            <NavItem onClick={() => setSelectedNav("ETH")}>
            <NavImage src={ETHNav} alt="" />
            <NavTitle>ETH</NavTitle>
            <NavEffect style={selectedNav === "ETH" ? {transform: "scaleX(1)"} : {}} />
            </NavItem>
        </Navbar>
    );
}