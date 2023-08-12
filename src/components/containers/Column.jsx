import React from "react";
import column_map from "../../data/column_map";
import PropTypes from "prop-types";
function Column({ children }) {
  return <div className="column">{children}</div>;
}

Column.propTypes = {
  col: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

Column.defaultProps = {
  col: 1,
};

export default Column;
