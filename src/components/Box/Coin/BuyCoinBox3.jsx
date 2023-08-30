import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 50px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 8px 2px hsla(0,0%,48.6%,.1);
    width: 600px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;
const InputField = styled.div`
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const InputTitle = styled.span`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    font-family: "Roboto";
    color: #333;
`;
const InputItem = styled.input`
    width: 100%;
    border: 1px solid #d9e3e9;
    border-radius: 5px;
    padding: 10px 35px 10px 15px;
    transition: .1s ease-in-out;
    font-family: "Roboto";
    box-sizing: border-box;
    outline: none;
    font-size: 20px;
    color: #333;
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
const Submitbutton = styled.button`
    width: 100%;
    padding: 15px 25px;
    background: #3485ff;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    transition: .2s ease-in-out;
    cursor: pointer;
    outline: none;
    border: none;
    &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
    }
`;
const BuyCoinBox1 = () => {
    const [RATIO, SetRATIO] = useState(0);
    const [inputEth, setInputEth] = useState();
    const [inputTcg, setInputTcg] = useState();
    async function getData() {
        try {
            const response = await fetch(
                `https://tcg.world/api/v1/utils/currency_in_usd/?address=0xF73d8276C15Ce56b2f4AeE5920e62F767A7f3aEA`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage?.getItem('token')}`,
                    },
                }
            );
            const data = await response.json();
            let ratio = (1 / (data.price_in_eth * 1.05)).toFixed(0);

            SetRATIO(ratio);
        } catch {
            console.error("Wrong card item response format");
        }
    }
    const onChangeInput = (e, type) => {
        console.log(e.target.value);

        const regex = /^[0-9]*\.?[0-9]*$/;
        if (!regex.test(e.target.value)) {
            e.preventDefault();
            return false;
        }


        if (type === "eth") {
            setInputEth(e.target.value);
            setInputTcg(e.target.value * RATIO);
        } else if (type === "tcg") {
            setInputTcg(e.target.value);
            setInputEth(e.target.value / RATIO);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            <InputContainer>
                <InputField>
                    <InputTitle>ETH Amount</InputTitle>
                    <InputItem type="number" placeholder="0.000" value={inputEth} onChange={(e) => onChangeInput(e, "eth")} />
                </InputField>
                <InputField>
                    <InputTitle>Amount of Tokens to be Received</InputTitle>
                    <InputItem type="number" placeholder="0.000" value={inputTcg} onChange={(e) => onChangeInput(e, "tcg")} />
                </InputField>
            </InputContainer>
            <Submitbutton>Submit</Submitbutton>
        </Container>
    )
}
export default BuyCoinBox1