import styledComponent from "styled-components";

export default function ShowLegends () {
    return (
        <LegendsContainer>
            <SeatDiagramSelected></SeatDiagramSelected>
            <SeatDiagramText>Selecionado</SeatDiagramText>
            <SeatDiagramAvailable></SeatDiagramAvailable>
            <SeatDiagramText>Disponível</SeatDiagramText>
            <SeatDiagramUnavailable></SeatDiagramUnavailable>
            <SeatDiagramText>Indisponível</SeatDiagramText>
        </LegendsContainer>
    );
}

const LegendsContainer = styledComponent.div`
    width: 375px;
    height: 50px;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SeatDiagramAvailable = styledComponent.button`
    width: 25px;
    height: 25px;
    background: #C3CFD9;
border: 1px solid #7B8B99;
    border-radius: 17px;
`;

const SeatDiagramSelected = styledComponent.button`
    width: 25px;
    height: 25px;
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
    border-radius: 17px;
`;

const SeatDiagramUnavailable = styledComponent.button`
    width: 25px;
    height: 25px;
    background: #FBE192;
border: 1px solid #F7C52B;
    border-radius: 17px;
`;

const SeatDiagramText = styledComponent.p`
    font-size: 13px;
    font-weight: 400;
    color: #4E5A65;
    line-height: 15px;
    letter-spacing: -0.013em;
`;

