import React, { useEffect, useRef } from "react";
import SearchSnippetCard from "./SearchSnippetCard";
import "../../assets/css/components/search_snippet.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchSnippet } from "../../store/slices/movie";

function SearchSnippet({ searchResult }) {
  const dispatch = useDispatch();
  const searchSnippetRef = useRef(null);
  const searchSnippetToggle = useSelector(
    (state) => state.entities.movies.searchSnippetToggle
  );

  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick);
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const handleBodyClick = (event) => {
    if (
      searchSnippetToggle &&
      !searchSnippetRef.current.contains(event.target)
    ) {
      dispatch(setSearchSnippet(false));
    }
  };

  const renderSearchCard = searchResult?.map((result) => {
    return (
      <React.Fragment key={result.id}>
        <SearchSnippetCard data={result} />
      </React.Fragment>
    );
  });

  return (
    <div className="search_snippet" ref={searchSnippetRef}>
      {searchResult.length === 0 ? <p>No Results Found</p> : renderSearchCard}
    </div>
  );
}

export default SearchSnippet;
