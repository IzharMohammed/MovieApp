import React from "react";
import './MovieCard.css'
function MovieCard({ Poster, Title, Year, Type }) {
  return (
    <div >
      <div className="movie-wrapper">
        <div className="movie-image">
          <img src={Poster} />
        </div>
        <div className="movie-title">{Title}</div>
        <div className="movie-year">{Year}</div>
        <div className="movie-type">{Type}</div>
      </div>

{/*       <div className="movie-wrapper">
        <div className="movie-image">
          <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" />
        </div>
        <div className="movie-title">The Avengers</div>
        <div className="movie-year">2012</div>
        <div className="movie-type">movie</div>
      </div>

      <div className="movie-wrapper">
        <div className="movie-image">
          <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" />
        </div>
        <div className="movie-title">The Avengers</div>
        <div className="movie-year">2012</div>
        <div className="movie-type">movie</div>
      </div>*/}
    </div> 
  );
}

export default MovieCard;
