import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import MovieCard from "../movieCard/MovieCard";
import axios from "axios";
import searchMovie from "../../apis/omdb";
import './MoviePage.css'

function MoviePage() {
  const [movieList, setMovieList] = useState([]);

  async function getMovies(...name) {
    console.log(name);
 const moviesarr =  name.map((name=> searchMovie(name))); 
    console.log(moviesarr);
  const response1= await axios.all(moviesarr.map((arr)=> axios.get(arr))).then((data)=>data)
  console.log('here',response1);
  const movies =  response1.map(res=>res.data.Search);
    setMovieList([].concat(...movies));

/*     const response = await axios(searchMovie(name.map(name=> name )));
    console.log(response.data.Search);
    setMovieList(response.data.Search); */
  }

  useEffect(() => {
    getMovies('avengers','spider man','harry potter');
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
