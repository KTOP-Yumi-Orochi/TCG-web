import React from "react";
import styled from "styled-components";
import Switch from '@mui/material/Switch';

const Container = styled.div`
    .css-1yjjitx-MuiSwitch-track {
        border-radius: 10px;
        background-color: #d9e3e9;
    }
    .css-julti5-MuiSwitch-root {
        padding: 8px;
    }
    .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked {
        color: #5bff7f;
    }
    .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track {
        background-color: #5bff7f;
    }
`

export default function StakeSwitch() {
    return (
        <Container>
            <Switch />
        </Container>
    );
}