import React, { useEffect } from "react";
import { useState } from "react";
import "./MovieDetails.css";
import { movieinfo } from "../apis/omdb";
import { useParams } from "react-router-dom";
import axios from "axios";
function MovieDetails( ) {
  const [movieData, setMovieData] = useState(null);
  console.log("inside ");
  const { id } = useParams();
  console.log(id);
  const url = movieinfo(id);
  console.log(url);


// METHOD 1
/*   useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setMovieData(response.data);
    });
  }, url); */


  // METHOD 2 
  async function downloadMovie(){
    const response = await axios.get(url)
    console.log(response.data);
    setMovieData(response.data)
  }

  useEffect(()=>{
    downloadMovie()
  },url)


  console.log("Data : ", movieData);
  return (
    <>
      <div className="movieDetails-wrapper">
        {movieData ? (
          <>
            <div className="movieDetails-image">
              <img src={movieData.Poster} />
            </div>
            <div className="movieDetails-title">{movieData.Title}</div>
            <div className="movieDetails-year">{movieData.Year}</div>
            <div className="movieDetails-type">Type : {movieData.Type}</div>
            <div className="movieDetails-type">Actors : {movieData.Actors}</div>
            <div className="movieDetails-type">Genre : {movieData.Genre}</div>
            <div className="movieDetails-type">
              Language : {movieData.Language}
            </div>
            <div className="movieDetails-type">
              Released : {movieData.Released}
            </div>
            <div className="movieDetails-type">
              Rating : {movieData.imdbRating}
            </div>
          </>
        ) : (
          <div>Loading ....</div>
        )}
      </div>
    </>
  );
}

export default MovieDetails;
