import styledComponent from "styled-components";

export default function ShowReserveSeatsButton () {
    return (
        <ReserveSeatsButton>Reservar assento(s)</ReserveSeatsButton>
    );
}

const ReserveSeatsButton = styledComponent.button`
    margin-top: 40px;
    border: none;
    width: 225px;
    height: 42px;
    line-height: 21px;
    font-size: 18px;    
    color: #FFFFFF;
    background: #E8833A;
    border-radius: 3px;
`;