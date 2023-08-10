import React from "react";
import PropTypes from "prop-types";

function SearchBar({ value, onSearchChange, onSearchClick }) {
  return (
    <React.Fragment>
      <input
        type="text"
        value={value}
        onChange={onSearchChange}
        onClick={onSearchClick}
        placeholder="Search Movies Here..."
      />
    </React.Fragment>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func,
};

SearchBar.defaultProps = {
  onSearchClick: () => {},
};

export default SearchBar;
