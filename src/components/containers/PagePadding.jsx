import React from "react";
import PropTypes from "prop-types";
import "../../assets/css/global.css";

function PagePadding({ className, children }) {
  return <div className={`${className} page_padding`}>{children}</div>;
}

PagePadding.proptypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

PagePadding.defaultProps = {
  className: "",
};

export default PagePadding;
