import React from "react";
import PropTypes from "prop-types";
import "../../assets/css/global.css";

function WidthContainer({ children }) {
  return <div className="container">{children}</div>;
}

WidthContainer.propTypes = {
  children: PropTypes.node,
};

export default WidthContainer;
