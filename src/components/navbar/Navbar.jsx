import React, { useContext, useState } from "react";
import "./Navbar.css";
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import ThemeContext from "../../context/ThemeContext";

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const [searchedText, isSearchedText] = useState("");
  const { movieList } = useMovieList(searchedText);
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  const navigator = useNavigate();

  console.log("movie List", movieList);

  function handleAutocompleteClick(e, id) {
    navigator(`/movie/${id}`);
  }

  return (
    <div className="navbar-wrapper">
      <div className="navbar-heading" onClick={() => navigator("/")}>
        Movix
      </div>

      <input
        className="navbar-input"
        onFocus={() => {
          setIsShown(true);
        }}
        onBlur={(e) => {
          setIsShown(false);
        }}

        onChange={useDebounce((e) => {
          isSearchedText(e.target.value);
        })}
        
        type="text"
        placeholder="search here ..."
      />

      <Tooltip title="Theme">
        {theme === "dark" ? (
          <div
            className="sun-mode"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              localStorage.setItem("app-theme", "light");
            }}
          >
            <img
              src="https://cdn.hugeicons.com/icons/sun-03-stroke-rounded.svg"
              alt="sun-03"
              width="34"
              height="34"
            />
          </div>
        ) : (
          <>
            <div
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                localStorage.setItem("app-theme", "dark");
              }}
            >
              <img
                className="theme-icon"
                src="https://cdn.hugeicons.com/icons/moon-02-stroke-rounded.svg"
                alt="moon-02"
                width="34"
                height="34"
              />
            </div>
          </>
        )}
      </Tooltip>
      {isShown && (
        <ul className="search-bar-autocomplete">
          <li>Autocomplete results ..... {searchedText}</li>
          {movieList.map((list) => (
            <li
              onMouseDown={(e) => handleAutocompleteClick(e, list.imdbID)}
              data-key={list.imdbID}
            >
              {list.Title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
