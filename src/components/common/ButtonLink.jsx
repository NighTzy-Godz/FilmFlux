import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../../assets/css/components/button.css";
function ButtonLink({ className, children, path }) {
  return (
    <React.Fragment>
      <Link to={path} className={`button ${className}`}>
        {children}
      </Link>
    </React.Fragment>
  );
}

ButtonLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  path: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  className: "",
};

export default ButtonLink;
