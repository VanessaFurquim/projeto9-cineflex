import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styledComponent from "styled-components";

import { PageHeader, PageHeaderTitle } from "../PageHeader";
import SeatAvailable from "./SeatAvailable";
import Legends from "./Legends";
import BuyersName from "./BuyersName";
import BuyersCPF from "./BuyersCPF";
import ReserveSeatsButton from "./ReserveSeatsButton";
import Footer from "../Footer";

export default function AvailableSeatOptions () {

	const { sessionID } = useParams();
	const [seatchart, setSeatchart] = useState(null);
	const [selectSeat, setSelectSeat] = useState(false);
	const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        const seatList = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
    
        seatList.then(APIResponse => {
            setSeatchart(APIResponse.data);
        });
    }, []);

	function postOrder({ typedName, typedCPF }) {

		const body = {
			ids: selectedSeats.map(seat => seat.id),
			name: typedName,
			cpf: typedCPF
		};
		const postData = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body);

		postData.then(response => {});
		postData.catch();
	}

	console.log(selectedSeats);

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
                    seatchart.seats.map((seat, index) => (
						<SeatAvailable 
							key = {index}
							seat = {seat} 
							selectedSeats = {selectedSeats}
							setSelectedSeats = {setSelectedSeats}
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
				<Link to = "/sucesso">
					<ReserveSeatsButton postOrder = {postOrder} />
				</Link>
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

const Form = styledComponent.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;