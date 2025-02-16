import Navbar from "../navbar/Navbar";
import MovieCard from "../movieCard/MovieCard";
import "./MoviePage.css";
import useMovieList from "../../hooks/useMovieList";
import { SparklesCore } from "../ui/sparkles";
import { HoverEffect } from "../ui/card-hover-effect";
import Cursor from "../Cursor";

function MoviePage() {
  const { movieList } = useMovieList(
    "avengers",
    "spider man",
    "iron man",
    "captain america",
    "thor",
    "harry potter"
  );
  console.log(`movie list:- ${JSON.stringify(movieList)}`);

  return (
    <>
      <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <Cursor />
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="movie-up-wrapper">
          {movieList.map((list) => (
            <MovieCard
              key={list.imdbID}
              id={list.imdbID}
              Poster={list.Poster}
              Title={list.Title}
              Year={list.Year}
              Type={list.Type}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MoviePage;
