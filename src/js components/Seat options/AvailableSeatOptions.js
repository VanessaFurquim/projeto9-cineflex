import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styledComponent from "styled-components";

import { PageHeader, PageHeaderTitle } from "../PageHeader";
import Legends from "./Legends";
import BuyersName from "./BuyersName";
import BuyersCPF from "./BuyersCPF";
import ReserveSeatsButton from "./ReserveSeatsButton";

export default function AvailableSeatOptions () {

	const [seatchart, setSeatchart] = useState(null);
	const { sessionID } = useParams();

    useEffect(() => {
        const seatList = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
    
        seatList.then(APIResponse => {
            setSeatchart(APIResponse.data);
        });
    }, []);

    if(seatchart === null) {
        return "Aguarde, por favor ...";
    } else {
        return (
      <>
            <PageHeader>
                <PageHeaderTitle>Selecione o(s) assento(s)</PageHeaderTitle>
            </PageHeader>
            <AvailableSeats>
                {
                    seatchart.seats.map(seat => (
                        <SeatOption status = {seat.isAvailable ? "available" : "unavailable"}>
							{seat.seatNumber}
						</SeatOption>
                    ))
                }
            </AvailableSeats>
			<Legends />
			<Form>
				<BuyersName />
				<BuyersCPF />
				<ReserveSeatsButton />
			</Form>
        </>
	);
}

const SeatOption = styledComponent.div`
	background: ${props => !props.status === "unavailable" ? '#FBE192' : props.status === "available" ? '#C3CFD9' : '#8DD7CF'}
`;

const AvailableSeats = styledComponent.section`
	width: 375px;
	height: auto;
	padding: 0 25px;
`;

const Form = styledComponent.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;