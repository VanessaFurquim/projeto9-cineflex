import axios from "axios";

import API_MOVIE_LIST from "../API.js/APILinks";

export default function requestingMovieList({setMovies}) {
    const movieList = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

    movieList.then(APIResponse => {
        setMovies(APIResponse.data);
    });
}