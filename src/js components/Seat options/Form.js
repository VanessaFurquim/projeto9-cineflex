import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styledComponent from "styled-components";

import BuyersName from "./BuyersName";
import BuyersCPF from "./BuyersCPF";
import ReserveSeatsButton from "./ReserveSeatsButton";

export default function Form ({ selectedSeats, setInformation }) {

    const navigate = useNavigate();

    const [typedCPF, setTypedCPF] = useState("");
    const [typedName, setTypedName] = useState("");

    function postOrder() {

		const body = {
			ids: selectedSeats,
			name: typedName,
			cpf: typedCPF
		};

		const postData = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body);

		postData.then(() => navigate("/sucesso"));
		postData.catch(() => alert("Algo deu errado."));
	}

    return (
        <>
        <BuyersName typedName = {typedName} setTypedName = {setTypedName} />
        <BuyersCPF typedCPF = {typedCPF} setTypedCPF = {setTypedCPF} />
        <ReserveSeatsButton postOrder = {postOrder} setInformation = {setInformation} />
        </>
    );
    
}

const FormStyle = styledComponent.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;