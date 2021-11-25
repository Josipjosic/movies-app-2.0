import React, { useState, useEffect } from "react";
import RatingStars from "../RatingStars";
import './authentication.scss'

function Authentication(props) {
  const [id, setId] = useState();
  const [token, setToken] = useState();

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
  }, []);

  const btnClick = () => {
    window.open(`https://www.themoviedb.org/authenticate/${id}`);
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
  }

  return (
    <div>
      <div className="Rating-star">
        <RatingStars gotToken={token} onClick={btnClick}/>
      </div>
      <button onClick={sessionId}>Id</button>
      <button onClick={btnClick}>Click</button>
    </div>
  );
}

export default Authentication;
