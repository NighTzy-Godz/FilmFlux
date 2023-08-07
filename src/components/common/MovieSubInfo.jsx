import React from "react";
import PropTypes from "prop-types";

function MovieSubInfo({ title, data }) {
  return (
    <div className="movie_sub_info">
      <h3>{title}</h3>
      <p>{data ? data : "No Data"} </p>
    </div>
  );
}

MovieSubInfo.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired || PropTypes.number.isRequired,
};

export default MovieSubInfo;
