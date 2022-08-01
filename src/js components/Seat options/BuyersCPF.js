import { useState } from "react";
import styledComponent from "styled-components";

export default function ColectBuyersCPF ( {typedCPF, setTypedCPF} ) {

    return (
        <>
            <BuyersCPF>CPF do comprador:</BuyersCPF>
            <BuyersCPFInput
            type = "text"
            placeholder = "Digite seu CPF..."
            maxLength = {11}
            minLength = {11}
            required
            onChange = {event => setTypedCPF(event.target.value)} />
        </>
    );
}

const BuyersCPF = styledComponent.label`
    width: 100%;
    font-size: 18px;
    color: #293845;
    margin-bottom: 2px;
    text-align: start;
`;

const BuyersCPFInput = styledComponent.input`
    font-size: 18px;
    line-height: 21px;
    width: 100%;
    height: 50px;
    margin-bottom: 7px;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    padding: 18px;
`;