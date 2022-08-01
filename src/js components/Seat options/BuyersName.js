import { useState } from "react";
import styledComponent from "styled-components";

export default function ColectBuyersName ( {typedName, setTypedName} ) {

    return (
        <>
            <BuyersName>Nome do comprador:</BuyersName>
            <BuyersNameInput
                type = "text"
                placeholder = "Digite seu nome..."
                required
                onChange = {event => setTypedName(event.target.value)}
                value = {typedName}
            />
        </>
    );
}
                
const BuyersName = styledComponent.label`
    width: 375px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: #293845;
`;

const BuyersNameInput = styledComponent.input`
    font-size: 18px;
    line-height: 21px;
    width: 100%;
    height: 50px;
    margin-bottom: 35px;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    padding: 18px;
`;