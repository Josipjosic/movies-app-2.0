import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./MovieDetail.scss";

function MovieDetail(props) {
  //const MOVIE_ID = `https://api.themoviedb.org/3/movie/${id}?&api_key=25410d167eb58e717d563b65bc206ff7&`;
  const [detail, setDetail] = useState([]);
  const { id } = useParams("id");
  const [loading, setLoading ] = useState('false')

  useEffect(() => {
    function fetchDetail() {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}}?&api_key=25410d167eb58e717d563b65bc206ff7&`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setDetail(data);
          console.log(data);
        })
        .finally(()=>{
          setLoading(false)
        })
        ;
    }
    fetchDetail();
  }, [id]);

  let hero = detail.backdrop_path;

  if (!hero) {
    hero = detail.poster_path;
  }

  if(loading){
    return <p>Loading...</p>
  }

  const names = detail.production_companies

  const date = detail.release_date
  const dateR = date.substring(0,4)


  return (
    <div className="movieContainerDetail">
      <div className="movieDetail">
        <div className="movieBanner">
          <h3>
            {detail.title} ({dateR})
          </h3>
        </div>
        <div className="movieDetailImg">
          <img
            src={`http://image.tmdb.org/t/p/original/${hero}`}
            alt={detail.title}
          />
          <h5> {detail.overview} </h5>
        </div>
        <div className="movieDetailAbout">
          <h5>Rating : {detail.vote_average}</h5>
          <h5 className="movieDetailLng">
            Language: {detail.original_language}
          </h5>
          <h5>Popularity: {detail.popularity}</h5>
          <h5 className="movieDetailLngComp">Production Companies: {names.map((cName) => <li className="productionNames" key={cName.id}>{cName.name},</li>)} </h5>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MovieDetail;
