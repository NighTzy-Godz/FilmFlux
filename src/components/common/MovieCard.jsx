import React from "react";
import "../../assets/css/components/movie_card.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BASE_IMG = "https://image.tmdb.org/t/p/w500";
import formatDate from "../../utils/formatDate";

function MovieCard({ data }) {
  const { id, backdrop_path, poster_path, release_date, original_title } = data;

  return (
    <div className="movie_card">
      <Link className="movie_card_img" to={`/movies/${id}`}>
        <img
          src={BASE_IMG + poster_path || BASE_IMG + backdrop_path}
          alt=""
          loading="lazy"
        />
      </Link>

      <div className="movie_card_details">
        <h3>{original_title}</h3>
        <p>{formatDate(release_date)}</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,

    original_title: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
