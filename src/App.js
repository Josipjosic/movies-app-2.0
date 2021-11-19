import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import "./App.css";
import Genres from "./components/Genres";
import Shuffle from "./components/img/Shuffle.png";

const API =
  "https://api.themoviedb.org/3/discover/movie?&api_key=25410d167eb58e717d563b65bc206ff7";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const [genreId, setGenreId] = useState([]);

  const showModalHandler = () => {
    setModalIsShowing(true);
  };

  const hideModalHandler = () => {
    setModalIsShowing(false);
  };

  const addMovieHandler = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    function fetchMoviesHandler() {
      fetch(API + `&with_genres=${genreId} + &page=${page}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setMovies(data.results);
          console.log(data.results);
        });
    }
    fetchMoviesHandler();
  }, [page, genreId]);

  return (
    <React.Fragment>
        {movies.slice(0, 6).map((movie) => (
         <Movie key={movie.id} {...movie} movieId={movie.id} />
        ))}
      <button className="buttonLoad" onClick={addMovieHandler}>
        Load
      </button>
      <button className="buttonModal" onClick={showModalHandler}>
        <img src={Shuffle} alt="shuffle img"></img>
      </button>
      {modalIsShowing && (
        <Genres closeModal={hideModalHandler} onChange={setGenreId} />
      )}
    </React.Fragment>
  );
}

export default App;
