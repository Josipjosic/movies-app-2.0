import React, {useState} from "react";
import "./RatingStars.scss"


function RatingStars(props) {
  const [value, setValue ] = useState()

  async function postRating() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${props.movId}/rating?api_key=25410d167eb58e717d563b65bc206ff7&session_id=${props.takenToken}`,
      {
        method: "POST",
        body: JSON.stringify({
            value: value
        }),
        headers: { "Content-Type" : "application/json;charset=utf-8" },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  const getValue = (event) => {
      setValue(event.target.value)
      console.log(value)
  }

  return (
    <div className="vote-container">
      <button value="10" onClick={(event) => {getValue(event); postRating();}}>&#11088;</button>
      <button value="9" onClick={(event) => {getValue(event); postRating();}}>&#11088;</button>
      <button value="8" onClick={(event) => {getValue(event); postRating();}}>&#11088;</button>
      <button value="7" onClick={(event) => {getValue(event); postRating();}}>&#11088;</button>
      <button value="6" onClick={(event) => {getValue(event); postRating();}}>&#11088;</button>
      <button value="5" onClick={(event) => {getValue(event); postRating();}}>&#11088;</button>
      <button value="4" onClick={(event) => {getValue(event); postRating();}}>&#11088;</button>
      <button value="3" onClick={(event) => {getValue(event); postRating();}}>&#11088;</button>
      <button value="2" onClick={(event) => {getValue(event); postRating();}}>&#11088;</button>
      <button value="1" onClick={(event) => {getValue(event); postRating();}}>&#11088;</button>
    </div>
  );
}

export default RatingStars;
