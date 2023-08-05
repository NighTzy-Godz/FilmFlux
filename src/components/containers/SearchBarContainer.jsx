import React from "react";
import PropTypes from "prop-types";
import "../../assets/css/container/search_bar_container.css";

function SearchBarContainer({ children }) {
  return <div className="search_bar_container">{children}</div>;
}

SearchBarContainer.propTypes = {
  children: PropTypes.node,
};

export default SearchBarContainer;
