import React, { useState, useEffect } from "react";

function Authentication() {
  const [id, setId] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/authentication/token/new?api_key=25410d167eb58e717d563b65bc206ff7&"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setId(data.request_token);
        console.log(data.request_token);
      });
  }, [id]);

  const btnClick = () => {
    window.open(
      `https://www.themoviedb.org/authenticate/${id}?redirect_to=http://localhost:3000/approved`
    );
  };

  const newId = async (request_token) => {
    await fetch(
      "https://api.themoviedb.org/3/authentication/session/new?api_key=25410d167eb58e717d563b65bc206ff7&",
      {
        method: "POST",
        body: { "request_token": `"${id}"` },
      }
    );
  };

  console.log(newId)

  return (
    <div>
      <button onClick={btnClick}>Rate</button>
    </div>
  );
}

export default Authentication;
