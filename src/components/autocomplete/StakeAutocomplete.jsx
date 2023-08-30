import React from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Paper } from "@mui/material";

const Container = styled.div`
    width: 500px;
    .css-1h51icj-MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-endAdornment {
        display: none;
    }
    .css-1h51icj-MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input {
        font-family: DM Sans,sans-serif;
        font-size: 16px;
        font-weight: 500;
        color: rgb(95, 113, 139);
    }
    .css-wb57ya-MuiFormControl-root-MuiTextField-root {
        background-color: #ededed;
        border-radius: 50px;
    }
    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.css-1h51icj-MuiAutocomplete-root .MuiOutlinedInput-root {
        padding-right: 20px;
    }
    .css-1h51icj-MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input {
        padding: 7.5px 4px 7.5px 15px;
        &::placeholder {
            color: #000;
            font-weight: 600;
        }
    }
    .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
        border: none;
        outline: none;
    }
`;

const data = [
    {label: "Duration: From lowest to highest"},
    {label: "Duration: From highest to lowest"},
    {label: "Rewards: From lowest to highest"},
    {label: "Rewards: From highest to lowest"},
    {label: "Stake: From lowest to highest"},
    {label: "Stake: From highest to lowest"},
    {label: "Time: Newest first"},
]

export default function StakeAutocomplete() {
    return (
        <Container>
            <Autocomplete
                id="combo-box-demo"
                options={data}
                renderInput={(params) => <TextField {...params} placeholder="Sort By" />}
                defaultValue="Time: Newest first"
                selectOnFocus={false}
                PaperComponent={({ children }) => (
                    <Paper style={{ backgroundColor: "#ededed", marginTop: "20px", borderRadius: "10px", color: "#5f718b", lineHeight: "40px", fontWeight: "500" }}>{children}</Paper>
                )}
                noOptionsText={'Sorry, no matching options.'}
            />
        </Container>
    )
}