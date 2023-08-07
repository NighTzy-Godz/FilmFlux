import React from "react";
import PropTypes from "prop-types";

function MovieSocial({ icon, path }) {
  return (
    <div className="movie_social_details">
      <a href={`https://www.instagram.com/${path}`} target="_blank">
        <i className={icon}></i>
      </a>
    </div>
  );
}

MovieSocial.propTypes = {
  icon: PropTypes.string.isRequired,
  path: PropTypes.string,
};

export default MovieSocial;
