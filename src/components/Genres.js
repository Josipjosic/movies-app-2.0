import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "./Genres.css";

const GENRE_API =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=25410d167eb58e717d563b65bc206ff7";

const Genres = (props) => {
  const [genre, setGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [search, setSearch] = useState([]);


  useEffect(() => {
    function fetchGenres() {
      fetch(GENRE_API)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setGenre(data.genres);
          console.log(data.genres);
        });
    }
    fetchGenres();
  }, []);

  return (
    <Modal onClose={props.closeModal} >
      <div className="title-div">
        <h2>Movie Rullete</h2>
        <p>Select genre:</p>
      </div>
      <ul className="list-modal">
        {genre.map((genres) => (
          <li key={genres.id} className="list-style">
            <input
              type="radio"
              value={genres.id}
              onClick={() => {
                setSelectedGenre((prevArray) => [...prevArray, genres.id]);
              }}
            ></input>
            {genres.name}
          </li>
        ))}
      </ul>
      <button
        className="button-search"
        onClick={event=> props.onChange(selectedGenre)}
      >
        Search
      </button>
    </Modal>
  );
};

export default Genres;
