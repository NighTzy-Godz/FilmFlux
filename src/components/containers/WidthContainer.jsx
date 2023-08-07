import React from "react";
import PropTypes from "prop-types";
import "../../assets/css/global.css";

function WidthContainer({ className, children }) {
  return <div className={` ${className} container`}>{children}</div>;
}

WidthContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

WidthContainer.defaultProps = {
  className: "",
};

export default WidthContainer;
