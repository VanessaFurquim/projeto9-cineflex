import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styledComponent from "styled-components";

import { PageHeader, PageHeaderTitle } from "../PageHeader";
import Legends from "./Legends";
import BuyersName from "./BuyersName";
import BuyersCPF from "./BuyersCPF";
import ReserveSeatsButton from "./ReserveSeatsButton";
import Footer from "../Footer";

export default function AvailableSeatOptions () {

	const { sessionID } = useParams();
	const [seatchart, setSeatchart] = useState(null);
	const [selectSeat, setSelectSeat] = useState(false);

    useEffect(() => {
        const seatList = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
    
        seatList.then(APIResponse => {
            setSeatchart(APIResponse.data);
        });
    }, []);

	function selectedSeat (seat) {
		if (!seat.isAvailable) {
			alert("Assento indisponível");
			return;
		}

		setSelectSeat(true);
	}

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
						!seat.isAvailable ?
							<SeatUnavailable
								onClick = {() => selectedSeat(seat)}
							> 
							{seat.name}
							</SeatUnavailable>
							:
							<SeatAvailable
								status = {selectSeat}
								onClick = {() => selectedSeat(seat)}
							>
								{seat.name}
							</SeatAvailable>
                    ))
                }
            </AvailableSeats>
			<Legends />
			<Form>
				<BuyersName />
				<BuyersCPF />
				<ReserveSeatsButton />
			</Form>
			<Footer />
        </>
	)};
}

const AvailableSeats = styledComponent.section`
	width: 375px;
	height: auto;
	padding-left: 25px;
	padding-right: 18px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

const SeatAvailable = styledComponent.button`
	width: 25px;
    height: 25px;
	background: ${props => props.status ? "#8DD7CF" : "#C3CFD9"};
    border: 1px solid ${props => props.status ? "#1AAE9E" : "#7B8B99"};
	border-radius: 17px;
	margin-right: 7px;
	margin-bottom: 12px;
	font-size: 11px;
	font-weight: 400;
	line-height: 13px;
	letter-spacing: 0.04em;
	color: #000000;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SeatUnavailable = styledComponent.div`
    width: 25px;
    height: 25px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;
	margin-right: 7px;
	margin-bottom: 12px;
	font-size: 11px;
	font-weight: 400;
	line-height: 13px;
	letter-spacing: 0.04em;
	color: #000000;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Form = styledComponent.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;