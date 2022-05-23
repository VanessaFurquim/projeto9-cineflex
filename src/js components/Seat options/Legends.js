import styledComponent from "styled-components";

export default function ShowLegends () {
    return (
        <LegendsContainer>
            <SingleDiagramContainer>
                <SeatDiagramSelected></SeatDiagramSelected>
                <SeatDiagramText>Selecionado</SeatDiagramText>
            </SingleDiagramContainer>
            <SingleDiagramContainer>
                <SeatDiagramAvailable></SeatDiagramAvailable>
                <SeatDiagramText>Disponível</SeatDiagramText>
            </SingleDiagramContainer>
            <SingleDiagramContainer>
                <SeatDiagramUnavailable></SeatDiagramUnavailable>
                <SeatDiagramText>Indisponível</SeatDiagramText>
            </SingleDiagramContainer>
        </LegendsContainer>
    );
}

const LegendsContainer = styledComponent.div`
    width: 375px;
    height: 50px;
    padding: 0 50px 20px 50px;
    margin-top: 15px;
    margin-bottom: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SingleDiagramContainer = styledComponent.div`
     width: 265px;
    display: flex;
     flex-direction: column;
     justify-content: space-betwwen;
     align-items: center;
`;

const SeatDiagramAvailable = styledComponent.div`
    width: 25px;
    height: 25px;
    background: #C3CFD9;
    border: 1px solid #7B8B99;
    border-radius: 17px;
    margin-bottom: 12px;
`;

const SeatDiagramSelected = styledComponent.div`
    width: 25px;
    height: 25px;
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
    border-radius: 17px;
    margin-bottom: 12px;
`;

const SeatDiagramUnavailable = styledComponent.div`
    width: 25px;
    height: 25px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;
    margin-bottom: 12px;
`;

const SeatDiagramText = styledComponent.p`
    font-size: 13px;
    font-weight: 400;
    color: #4E5A65;
    line-height: 15px;
    letter-spacing: -0.013em;
`;

