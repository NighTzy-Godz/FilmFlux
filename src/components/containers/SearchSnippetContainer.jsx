import React from "react";
import PropTypes from "prop-types";

function SearchSnippetContainer({ children }) {
  return <div>{children}</div>;
}

SearchSnippetContainer.propTypes = {
  children: PropTypes.node,
};

export default SearchSnippetContainer;
