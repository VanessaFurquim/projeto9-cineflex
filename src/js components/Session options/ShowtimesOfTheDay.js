import { Link } from "react-router-dom";
import styledComponent from "styled-components";

export default function ShowtimesOfDay ({ daySessions }) {
    return (
        <>
            <section>
                <SessionWeekdayAndDate>{daySessions.weekday} - {daySessions.date}</SessionWeekdayAndDate>
                <SessionShowtimesContainer>
                    {
                        daySessions.showtimes.map(time => (
                            <Link to = {`/assentos/${daySessions.showtimes.id}`}>
                                <ShowtimeButton>
                                    <ShowtimeText>{time.name}</ShowtimeText>
                                </ShowtimeButton>
                            </Link>
                        ))
                    }
                </SessionShowtimesContainer>
            </section>
        </>
    );
}

const SessionWeekdayAndDate = styledComponent.h4`
    font-size: 20px;
    font-weight: 400;
    color: #293845;
    line-height: 23px;
    letter-spacing: 0.02em;
    margin-left: 25px;
    margin-bottom: 30px;
`;

const SessionShowtimesContainer = styledComponent.div`
    margin: 0 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
`;

const ShowtimeButton = styledComponent.button`
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    margin-bottom: 30px;
    margin-right: 8px;
    border-color: #E8833A;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ShowtimeText = styledComponent.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
`;