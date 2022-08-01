import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";
import MovieOptions from "./Movie Options/MovieOptions";
import SessionOptions from "./Session options/SessionOptions";
import AvailableSeatOptions from "./Seat options/AvailableSeatOptions";
import TicketAndBuyerInformation from "./Ticket and buyer information/TicketAndBuyerInformation";

export default function AppBody () {

    const [selectedMovie, setSelectedMovie] = useState({});
    const [selectedMovieSession, setSelectedMovieSession] = useState({});
    const [selectedSeats, setSelectedSeats] = useState([]);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path = "/" element = {<MovieOptions />} />
                <Route path = "/sessoes/:movieID" element = {<SessionOptions />} />
                <Route path = "/assentos/:sessionID" element = {<AvailableSeatOptions
                    setSelectedMovie = {setSelectedMovie}
                    setSelectedMovieSession = {setSelectedMovieSession}
                    />}
                />
                <Route path = "/sucesso" element = {<TicketAndBuyerInformation
                    selectedMovie = {selectedMovie}
                    selectedMovieSession = {selectedMovieSession}
                    />}
                />
            </Routes>
        </BrowserRouter>
    );
}