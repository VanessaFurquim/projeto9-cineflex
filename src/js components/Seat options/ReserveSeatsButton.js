import styledComponent from "styled-components";

export default function ShowReserveSeatsButton ( {postOrder} ) {
    return (
        <ReserveSeatsButton onClick = {postOrder}>Reservar assento(s)</ReserveSeatsButton>
    );
}

const ReserveSeatsButton = styledComponent.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    border: none;
    margin: 55px 75px 30px 75px;
    font-size: 18px;    
    color: #FFFFFF;
    line-height: 21px;
    
`;