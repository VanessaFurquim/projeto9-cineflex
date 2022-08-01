import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styledComponent from "styled-components";

import { PageHeader, PageHeaderTitle } from "../PageHeader";
import SeatAvailable from "./SeatAvailable";
import Legends from "./Legends";
import Form from "./Form";
import Footer from "../Footer";

export default function AvailableSeatOptions ( {setSelectedMovie, setSelectedMovieSession} ) {

	const { sessionID } = useParams();
	const [seatchart, setSeatchart] = useState(null);
	const [selectedSeats, setSelectedSeats] = useState([]);

	const movieDateData = {};

    useEffect(() => {
        const seatList = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
    
        seatList.then(APIResponse => {
            setSeatchart(APIResponse.data);
        });

    }, []);

	function setInformation () {

		console.log("set info")

		movieDateData = {
			date: seatchart.day.date,
			time: seatchart.name
		};

		setSelectedMovie(seatchart.movie.title);
		setSelectedMovieSession(movieDateData);
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
			<Form selectedSeats = {selectedSeats} setInformation = {setInformation} />
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