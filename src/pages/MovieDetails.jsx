import React, { useEffect } from "react";
import { useState } from "react";
import "./MovieDetails.css";
import { movieinfo } from "../apis/omdb";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/movieCard/MovieCard";
import Rating from "@mui/material/Rating";

function MovieDetails() {
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
   async function downloadMovie() {
    const response = await axios.get(url);
    console.log(response.data);
    setMovieData(response.data);
  }
  
  useEffect(() => {
    downloadMovie();
  }, [url , id ]); 

  console.log("Data : ", movieData);

  const customIconSize = {
    fontSize: 50, // Custom size in pixels
  };

  return (
    <div className="root">
      <div className="movieDetails-wrapper">
        {movieData ? (
          <>
            <MovieCard
              Poster={movieData.Poster}
              Title={movieData.Title}
              Year={movieData.Released}
              Type={movieData.Type}
            />
          </>
        ) : (
          <div>Loading ....</div>
        )}
      </div>
      {movieData && (
        <div className="movieDetails-plot">
          <div> Plot : {movieData.Plot}</div>
          <div>Actors : {movieData.Actors}</div>
          <div>
            Genre :{" "}
            {movieData.Genre.split(",").map((genre) => (
              <span className="genre">{genre}</span>
            ))}
          </div>
          <div className="rating">
            <Rating
              name="half-rating"
              style={customIconSize}
              defaultValue={movieData.imdbRating}
              precision={0.1}
              max={10}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
