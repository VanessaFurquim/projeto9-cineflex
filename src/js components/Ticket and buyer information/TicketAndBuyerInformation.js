import StyledComponent from "styled-components";

import MovieAndSessionInformation from "./MovieAndSessionInformation";
import BuyersInformation from "./BuyersInformation";
import MovieTicketsInformation from "./MovieTicketsInformation";
import BackToHomeButton from "./BackToHomeButton";

export default function TicketAndBuyerInformationPage ({ selectedMovie, selectedMovieSession }) {
    return (
        <>
            <MovieAndSessionInformation
                selectedMovie = {selectedMovie}
                selectedMovieSession = {selectedMovieSession}
            />
            <BuyersInformation />
            <MovieTicketsInformation />
            <BackToHomeButton />
        </>
    );
}