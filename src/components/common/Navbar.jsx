import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import WidthContainer from "../containers/WidthContainer";
import FlexCombo from "../containers/FlexCombo";
import SearchBarContainer from "../containers/SearchBarContainer";
import SearchBar from "./SearchBar";
import SearchIcon from "./SearchIcon";

import { getSearchedMovie, setSearchSnippet } from "../../store/slices/movie";

import LOGO from "../../assets/img/logo.png";
import "../../assets/css/components/navbar.css";
import useDebounce from "../../hooks/useDebounce";
import useSearchSnippetResult from "../../hooks/useSearchSnippetResult";
import SearchSnippet from "./SearchSnippet";

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

  const handleSearchButtonClick = () => {
    console.log("I am clicked");
  };

  return (
    <div className="navbar">
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
          <div className="nav_search">
            <SearchBarContainer>
              <SearchBar
                value={searchTerm}
                onSearchChange={handleSearchChange}
                onSearchClick={handleSearchInputClick}
              />
              <SearchIcon onSearchClick={handleSearchButtonClick} />
            </SearchBarContainer>
            {searchSnippetToggle && (
              <SearchSnippet searchResult={snippetResult} />
            )}
          </div>
        </FlexCombo>
      </WidthContainer>
    </div>
  );
}

export default Navbar;
