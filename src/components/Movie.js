import React from 'react';
import './Movie.css'

const IMG_API =
 "https://image.tmdb.org/t/p/w500";

const Movie = (props) => (
    <div className="movie" > 
        <div className="movie-vote">
            <span >{props.vote_average}</span>
        </div>
        <img className="img" src={IMG_API + props.poster_path} alt={props.original_title} />   
        <div className="movie-info">
            <h3>{props.title} ({props.release_date}) </h3>
            <h5 className="movie-lang">Language: {props.original_language} </h5>
        </div>
    
    </div>
)

export default Movie;