import React, { useContext } from 'react';
import styled from "styled-components";
import TabButton from 'components/buttons/TabButton';
import { LandingContext } from 'contexts/LandingContext';

const TabTitle = styled.div`
    position: relative;
    height: 3.958vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
`;
const TabItems = styled.span`
    box-sizing: border-box;
    width: 14.74vw;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    border-right: 0.0093rem solid #656565;
    height: 2.865vw;
    cursor: pointer;
`;

export default function NewsTabs() {
    const {newsTab, setNewsTab } = useContext(LandingContext);
    return (
        <>
            <TabTitle>
                <TabItems>
                    <TabButton content='Latest News' onClick={() => setNewsTab("latest")} color={newsTab === "latest" ? "#FF1C6E" : "white"} textShadow={newsTab === "latest" ? "0px 4px 6px #FF1C6E" : ""} />
                </TabItems>
                <TabItems>
                    <TabButton content='Medium Articles' onClick={() => setNewsTab("medium")} color={newsTab === "medium" ? "#FF1C6E" : "white"} textShadow={newsTab === "medium" ? "0px 4px 6px #FF1C6E" : ""} />
                </TabItems>
                <TabItems style={{ border: "none" }}>
                    <TabButton content='Youtube Content' onClick={() => setNewsTab("youtube")} color={newsTab === "youtube" ? "#FF1C6E" : "white"} textShadow={newsTab === "youtube" ? "0px 4px 6px #FF1C6E" : ""} />
                </TabItems>
            </TabTitle>
        </>
    );
}