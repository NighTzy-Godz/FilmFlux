import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import WidthContainer from "../containers/WidthContainer";

import SearchBarContainer from "../containers/SearchBarContainer";
import SearchBar from "./SearchBar";

import { getSearchedMovie, setSearchSnippet } from "../../store/slices/movie";

import LOGO from "../../assets/img/logo.png";
import "../../assets/css/components/navbar.css";
import useDebounce from "../../hooks/useDebounce";
import useSearchSnippetResult from "../../hooks/useSearchSnippetResult";
import SearchSnippet from "./SearchSnippet";
import { setNavToggle } from "../../store/slices/nav";
import navLink from "../../data/navLink";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [initialized, setInitialized] = useState(true);

  const dispatch = useDispatch();
  const { results: searchResults } = useSelector(
    (state) => state.entities.movies.searchResults
  );
  const searchSnippetToggle = useSelector(
    (state) => state.entities.movies.searchSnippetToggle
  );
  const navToggle = useSelector((state) => state.entities.nav.navToggle);

  const { snippetResult } = useSearchSnippetResult(searchResults);
  const debouncedSearch = useDebounce(searchTerm, 1500);

  useEffect(() => {
    if (debouncedSearch) {
      setInitialized(false);
      dispatch(getSearchedMovie(debouncedSearch));
      dispatch(setSearchSnippet(true));
    } else if (!debouncedSearch && !initialized) {
      dispatch(getSearchedMovie(""));
      dispatch(setSearchSnippet(false));
    }
  }, [debouncedSearch, dispatch, initialized]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.currentTarget.value);
  };

  const handleSearchInputClick = () => {
    if (!searchSnippetToggle) {
      setTimeout(() => {
        dispatch(setSearchSnippet(true));
      }, 100);
    }
  };

  const handleNavToggle = () => {
    dispatch(setNavToggle(!navToggle));
  };

  return (
    <div className="navbar">
      <WidthContainer>
        <div className="nav_container">
          <Link className="logo" to="/">
            <img src={LOGO} alt="" />
            <h1>FilmFlux</h1>
          </Link>

          <div className={`nav_links ${navToggle ? "show" : ""}`}>
            <ul>
              {navLink.map((link) => (
                <li key={link.id} onClick={handleNavToggle}>
                  <NavLink to={link.path}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className={`nav_search ${navToggle ? "show" : ""}`}>
            <SearchBarContainer>
              <SearchBar
                value={searchTerm}
                onSearchChange={handleSearchChange}
                onSearchClick={handleSearchInputClick}
              />
            </SearchBarContainer>
            {searchSnippetToggle && (
              <SearchSnippet searchResult={snippetResult} />
            )}
          </div>

          <div className="navToggle">
            <i className="fa-solid fa-bars" onClick={handleNavToggle}></i>
          </div>
        </div>
      </WidthContainer>
    </div>
  );
}

export default Navbar;
