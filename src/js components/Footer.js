import StyledComponent from "styled-components";

export default function Footer () {
    return (
        <ChosenMovieInformation>
            <MovieOption>
              <img src = "index.html" />
            </MovieOption>
            <h3>movie title</h3>
            <h3>session date - time</h3>
        </ChosenMovieInformation>
    );
}

const ChosenMovieInformation = StyledComponent.footer`
    width: 375px;
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
`;

const MovieOption = StyledComponent.div`
    
`;