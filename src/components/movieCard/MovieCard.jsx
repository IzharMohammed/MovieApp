import React from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

function MovieCard({ id, Poster, Title, Year, Type }) {
  const navigator = useNavigate();

  function handleAutocompleteClick(id) {
    navigator(`/movie/${id}`);
  }

  return (
    <div onClick={(e) => handleAutocompleteClick(id)}>
      <div className="movie-wrapper">
        <div className="movie-image">
          <img src={Poster} />
        </div>
        <div className="movie-title">{Title}</div>
        <div className="movie-year"> Released : {Year}</div>
        <div className="movie-type">Type : {Type}</div>
      </div>
    </div>
  );
}

export default MovieCard;
