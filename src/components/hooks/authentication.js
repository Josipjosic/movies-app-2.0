import React, { useState, useEffect } from "react";
import RatingStars from "../RatingStars";
import "./authentication.scss";

function Authentication(props) {
  const [id, setId] = useState();
  const inistailToken = localStorage.getItem("token");
  const [token, setToken] = useState(inistailToken);
  const movieId = props.movieId

  
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/authentication/token/new?api_key=25410d167eb58e717d563b65bc206ff7"
      )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setId(data.request_token);
        console.log(data.request_token);
      });
  }, [movieId]);

  const btnClick = () => {
    if (inistailToken) {
      alert('You already made an authentication! Please approve it next. We wish you a happy rating! :)')
    } else {
      window.open(`https://www.themoviedb.org/authenticate/${id}`);
    }
  };

  async function sessionId() {
    const response = await fetch(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=25410d167eb58e717d563b65bc206ff7&request_token=${id}`,
      {
        method: "POST",
        body: { request_token: `"${id}"` },
      }
    );
    const data = await response.json();
    setToken(data.session_id);
    console.log(data);
    localStorage.setItem("token", token);
  }

  return (
    <div className="Authentication-buttons">
      <div className="Rating-star">
        <RatingStars movId={movieId} takenToken={inistailToken} fetchedId={id}/>
      </div>
      {<button onClick={sessionId}>2. Approve</button>}
      {<button onClick={btnClick}>1. Authenticate</button>}
    </div>
  );
}

export default Authentication;
