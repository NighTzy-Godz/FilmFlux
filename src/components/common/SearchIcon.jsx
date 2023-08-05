import React from "react";
import PropTypes from "prop-types";

function SearchIcon({ onSearchClick }) {
  return (
    <React.Fragment>
      <i className="fa-solid fa-magnifying-glass" onClick={onSearchClick} />
    </React.Fragment>
  );
}

SearchIcon.propTypes = {
  onSearchClick: PropTypes.func,
};

export default SearchIcon;
