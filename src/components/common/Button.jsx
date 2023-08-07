import React from "react";
import PropTypes from "prop-types";
import "../../assets/css/components/button.css";

function Button({ className, children, eventHandler }) {
  return (
    <React.Fragment>
      <button className={`button ${className}`} onClick={eventHandler}>
        {children}
      </button>
    </React.Fragment>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  eventHandler: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  eventHandler: () => {},
};

export default Button;
