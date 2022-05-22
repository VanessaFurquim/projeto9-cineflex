import { useState, useEffect } from "react";
import axios from "axios";
import styledComponent from "styled-components";

// import API_MOVIE_LIST from "../API.js/APILinks";
import MoviePosterTemplate from "./MoviePoster";
// import requestingMovieList from "../API.js/APIRequests";

export default function MovieOptions () {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const movieList = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    
        movieList.then(APIResponse => {
            setMovies(APIResponse.data);
        });
    }, []);

    return (
        <>
            <PageHeader>
                <h1>Selecione o filme</h1>
            </PageHeader>
            <MovieOptionsContainer>
                {
                    movies.map(movie => (
                        <MoviePosterTemplate key = {movie.id} moviePoster = {movie.posterURL} />
                    ))
                }
            </MovieOptionsContainer>
        </>
    );
}

const PageHeader = styledComponent.div`
    width: 375px;
    height: 110px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 24px;
        font-weight: 400;
        color: #293845;
        line-height: 28px;
        letter-spacing: 0.04em;
    };
`;

const MovieOptionsContainer = styledComponent.section`
    width: 375px;
    height: auto;
    background: #FFFFFF;
    padding: 0 30px 30px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;