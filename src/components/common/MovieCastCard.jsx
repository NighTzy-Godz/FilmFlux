import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../assets/css/components/movie_cast_card.css";

function MovieCastCard({ data }) {
  const { id, profile_path, original_name, character, hasName } = data;
  const profile_poster_path = "https://image.tmdb.org/t/p/original";

  return (
    <div className="cast_card mb-4">
      <Link to={`/people/${id}`}>
        <img src={`${profile_poster_path + profile_path}`} alt="" />
      </Link>

      <div className="cast_card_details">
        <h4>{original_name}</h4>
        <p>{character}</p>
      </div>
    </div>
  );
}

MovieCastCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_path: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    original_name: PropTypes.string.isRequired,
    hasName: PropTypes.bool,
  }),
};

export default MovieCastCard;
