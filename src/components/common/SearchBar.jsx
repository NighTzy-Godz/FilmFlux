import React from "react";
import PropTypes from "prop-types";

function SearchBar({ value, onSearchChange }) {
  return (
    <React.Fragment>
      <input
        type="text"
        value={value}
        onChange={onSearchChange}
        placeholder="Search Here..."
      />
    </React.Fragment>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
