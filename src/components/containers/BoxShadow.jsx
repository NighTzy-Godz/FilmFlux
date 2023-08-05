import React from "react";
import PropTypes from "prop-types";

function BoxShadow({ className, children }) {
  return <div className={`box_shadow ${className}`}>{children}</div>;
}

BoxShadow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

BoxShadow.defaultProps = {
  className: "",
};

export default BoxShadow;
