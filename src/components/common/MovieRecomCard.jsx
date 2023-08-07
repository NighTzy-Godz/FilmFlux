import React from "react";
import { Link } from "react-router-dom";
const MOVIE_POSTER_PATH = "https://image.tmdb.org/t/p/original/";
import PropTypes from "prop-types";
import "../../assets/css/components/movie_recom_card.css";

function MovieRecomCard({ data }) {
  const { id, poster_path, title, original_name } = data;

  return (
    <div className="movie_recom_card ">
      <div className="movie_recom_img">
        <Link to={`/movies/${id}`}>
          <img src={`${MOVIE_POSTER_PATH + poster_path}`} alt="" />
        </Link>
      </div>

      <h4>{title || original_name}</h4>
    </div>
  );
}

MovieRecomCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    original_name: PropTypes.string,
  }),
};

export default MovieRecomCard;
