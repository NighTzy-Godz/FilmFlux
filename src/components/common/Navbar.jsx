import React, { useState } from "react";
import WidthContainer from "../containers/WidthContainer";
import LOGO from "../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import BoxShadow from "../containers/BoxShadow";
import "../../assets/css/components/navbar.css";
import SearchBar from "./SearchBar";
import SearchIcon from "./SearchIcon";
import FlexCombo from "../containers/FlexCombo";
import SearchBarContainer from "../containers/SearchBarContainer";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.currentTarget.value);
  };

  const handleSearchClick = () => {
    console.log("I am clicked");
  };

  return (
    <BoxShadow className="navbar">
      <WidthContainer>
        <FlexCombo>
          <Link className="logo" to="/">
            <img src={LOGO} alt="" />
            <h1>FilmFlux</h1>
          </Link>

          <ul className="nav_links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/people">People</NavLink>
            </li>
          </ul>

          <SearchBarContainer>
            <SearchBar value={searchTerm} onSearchChange={handleSearchChange} />
            <SearchIcon onSearchClick={handleSearchClick} />
          </SearchBarContainer>
        </FlexCombo>
      </WidthContainer>
    </BoxShadow>
  );
}

export default Navbar;
