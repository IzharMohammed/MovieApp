import React, { useState } from "react";
import "./Navbar.css";
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";
function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const [searchedText , isSearchedText] = useState('');
  const {movieList} = useMovieList(!searchedText ? 'avengers' : searchedText );
  console.log('movie List' , movieList);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-heading">Movix</div>
      <input
        className="navbar-input"
        onFocus={() => {
          setIsShown(true);
        }}
        onBlur={() => {
          setIsShown(false);
        }}
        onChange={useDebounce((e)=>{
          console.log(e.target.value);
          console.log('searched text ' , searchedText);
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
          {
            movieList.map((list)=>(
              <li key={list.imdbID}>{list.Title}</li>
            ))
         } 
        </ul>
      }
    </div>
  );
}

export default Navbar;
