import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import MovieCard from "../movieCard/MovieCard";
import axios from "axios";
import searchMovie from "../../apis/omdb";
import './MoviePage.css'
function MoviePage() {
  const [movieList, setMovieList] = useState([]);

  async function getMovies(name) {
    const response = await axios(searchMovie(name));
    console.log(response.data.Search);
    setMovieList(response.data.Search);
  }

  useEffect(() => {
    getMovies("spider-man");
  }, []);

  return (
    <>
      <Navbar />
      <div className="movie-up-wrapper">
      {movieList.map((list) => (
        <MovieCard
          key={list.imdbID}
          Poster={list.Poster}
          Title={list.Title}
          Year={list.Year}
          Type={list.Type}
        />
      ))}
      </div>
    </>
  );
}

export default MoviePage;
