import React from "react";
import './MovieCard.css'
import { useNavigate } from "react-router-dom";

function MovieCard({id,  Poster, Title, Year, Type }) {
  const navigator = useNavigate();

  function handleAutocompleteClick( id){
   navigator(`/movie/${id}`)
}

  return (
    <div  onClick={(e)=> handleAutocompleteClick(id)} >

      <div className="movie-wrapper">
        <div className="movie-image">
          <img src={Poster} />
        </div>
        <div className="movie-title">{Title}</div>
        <div className="movie-year">  Released : {Year}</div>
        <div className="movie-type">Type : {Type}</div>
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
