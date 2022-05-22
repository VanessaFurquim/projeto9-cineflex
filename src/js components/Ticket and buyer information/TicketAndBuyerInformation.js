import StyledComponent from "styled-components";

import MovieAndSessionInformation from "./MovieAndSessionInformation";
import BuyersInformation from "./BuyersInformation";
import MovieTicketsInformation from "./MovieTicketsInformation";
import BackToHomeButton from "./BackToHomeButton";

export default function TicketAndBuyerInformationPage () {
    return (
        <>
            <MovieAndSessionInformation />
            <BuyersInformation />
            <MovieTicketsInformation />
            <BackToHomeButton />
        </>
    );
}