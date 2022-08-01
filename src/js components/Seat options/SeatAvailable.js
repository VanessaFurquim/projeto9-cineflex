import { useState } from "react";
import styledComponent from "styled-components";

export default function SeatAvailable ({ children, seat, selectedSeats, setSelectedSeats }) {

    const [select, setSelect] = useState(false);

    function selectedSeat (seat) {

		if (!seat.isAvailable) {
			alert("Assento indisponível");
			return;
		}

		setSelect(!select);

        if (selectedSeats.includes(seat.id)) {

            const listOfSelectedSeats = selectedSeats.filter(selectedSeat => selectedSeat !== seat.id)

        setSelectedSeats(listOfSelectedSeats);
        }

        if (!selectedSeats.includes(seat.id)) {

            setSelectedSeats([...selectedSeats, seat.id])
        }
	}

    return <>
                {
                    seat.isAvailable ?
                    <SeatButton  
                        status = {select}
                        onClick = {() => selectedSeat(seat)}
                    >
                            {children}
                    </SeatButton>
                :
                    <SeatUnavailable> 
                        {seat.name}
                    </SeatUnavailable>
                }
            </>
}

const SeatButton = styledComponent.button`
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