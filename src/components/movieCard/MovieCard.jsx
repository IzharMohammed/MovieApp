import React, { useEffect, useRef } from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

function MovieCard({ id, Poster, Title, Year, Type }) {
  const navigator = useNavigate();
  const divRef = useRef(null);
  useEffect(() => {
    const div = divRef.current;
    if (div) {
      div.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 2,
        });
      });

      div.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 1,
        });
      });
    }
  }, []);
  function handleAutocompleteClick(id) {
    navigator(`/movie/${id}`);
  }

  return (
    <div ref={divRef} onClick={(e) => handleAutocompleteClick(id)}>
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
