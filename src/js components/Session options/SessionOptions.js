import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styledComponent from "styled-components";

import { PageHeader } from "../PageHeader";
import ShowtimesOfTheDay from "./ShowtimesOfTheDay";
import Footer from "../Footer";

export default function SessionOptions () {

    const [sessions, setSessions] = useState(null);
    const { movieID } = useParams();

    useEffect(() => {
        const sessionsList = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`);
    
        sessionsList.then(APIResponse => {
            setSessions(APIResponse.data);
        });
    }, []);

    if(sessions === null) {
        return "Aguarde, por favor ...";
    } else {
        return (
            <>
                <PageHeader>
                    <PageHeaderTitle>Selecione o horário</PageHeaderTitle>
                </PageHeader>
                <section>
                    {
                        sessions.days.map(day => (
                            <ShowtimesOfTheDay key = {day.id} daySessions = {day} />
                        ))
                    }
                </section>
                <Footer />
            </>
        );
    }
}

const PageHeaderTitle = styledComponent.h1`
    font-size: 24px;
    font-weight: 400;
    color: #293845;
    line-height: 28px;
    letter-spacing: 0.04em;
`;