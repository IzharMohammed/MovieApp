import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="navbar-wrapper">
      <div className="navbar-heading">Movix</div>
      <input
        className="navbar-input"
        onFocus={() => {
          console.log("on focus");
          setIsShown(true);
        }}
        onBlur={() => {
          console.log("on blur");
          setIsShown(false);
        }}
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
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      }
    </div>
  );
}

export default Navbar;
