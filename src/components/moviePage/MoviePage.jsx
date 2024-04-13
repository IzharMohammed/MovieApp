import Navbar from "../navbar/Navbar";
import MovieCard from "../movieCard/MovieCard";
import "./MoviePage.css";
import useMovieList from "../../hooks/useMovieList";

function MoviePage() {
   const {movieList}= useMovieList('avengers','spider man' , 'iron man' , 'captain america','thor','harry potter')


  return (
    <>
     {/*  <Navbar /> */}
      <div className="movie-up-wrapper">
        {movieList.map((list) => (
          <MovieCard
            id={list.imdbID}
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
