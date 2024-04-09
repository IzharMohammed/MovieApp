import React, { useState } from "react";
import "./Navbar.css";
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";
import searchMovie, { movieinfo } from "../../apis/omdb";
import MovieDetails from "../../pages/MovieDetails";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const [searchedText , isSearchedText] = useState('');
  const {movieList} = useMovieList(searchedText );
  const navigator = useNavigate();

  console.log('movie List' , movieList);

     function handleAutocompleteClick(e , id){
          navigator(`/movie/${id}`)
    }


  return (
    <div className="navbar-wrapper">
      <div className="navbar-heading">Movix</div>
      <input
        className="navbar-input"
        onFocus={() => {
          setIsShown(true);
        }}
        onBlur={(e) => {
          setIsShown(false);
        }}
        onChange={useDebounce((e)=>{
          isSearchedText(e.target.value)
        })}
        type="text"
        placeholder="search here ..."
      />

      <img
        className="theme-icon"
        src="https://cdn.hugeicons.com/icons/moon-02-stroke-rounded.svg"
        alt="moon-02"
        width="24"
        height="24"
      />

      {
        isShown &&
        <ul className="search-bar-autocomplete">
          <li>Autocomplete results ..... {searchedText}</li>
          {
            movieList.map((list)=>(
              <li onMouseDown={(e)=> handleAutocompleteClick(e,list.imdbID)} data-key={list.imdbID}>{list.Title}</li>
            ))
         } 
        </ul>
      }


    </div>
  );
}

export default Navbar;
