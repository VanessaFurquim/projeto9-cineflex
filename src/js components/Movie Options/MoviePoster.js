import StyledComponent from "styled-components";

export default function MoviePosterTemplate ({moviePoster}) {
    return (
        <MoviePoster>
            <img src = {moviePoster} alt = "movie poster image" />
        </MoviePoster>
    );
}

const MoviePoster = StyledComponent.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 130px;
        height: auto;
    }
`;