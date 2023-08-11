import React from "react";
import "../../assets/css/components/search_snippet_card.css";
import { Link } from "react-router-dom";

const POSTER_PATH = "https://image.tmdb.org/t/p/original";

function SearchSnippetCard({ data, onSnippetClick }) {
  const { id, poster_path, backdrop_path, title } = data;
  return (
    <Link
      className="search_snippet_card"
      to={`/movies/${id}`}
      onClick={onSnippetClick}
    >
      <div className="img">
        <img src={POSTER_PATH + poster_path || backdrop_path} alt="" />
      </div>
      <p>{title}</p>
    </Link>
  );
}

export default SearchSnippetCard;
