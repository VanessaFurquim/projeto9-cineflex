export default function MovieAndSessionInformation ({ selectedMovie, selectedMovieSession }) {

    console.log(selectedMovie)
    console.log(selectedMovieSession)
    return (
        <section class = "movie-and-session-information">
            <h5>Filme e sessão</h5>
            {/* <h6>{selectedMovie}</h6> */}
            <div class = "chosen-movie-session-date-and-time">
              {/* <h6>{selectedMovieSession.date} {selectedMovieSession.time} </h6> */}
            </div>
        </section>
    );
}