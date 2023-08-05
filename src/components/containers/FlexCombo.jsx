import PropTypes from "prop-types";

const FlexCombo = ({ className, children }) => {
  return <div className={`flex_combo ${className}`}>{children}</div>;
};

FlexCombo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FlexCombo.defaultProps = {
  className: "",
};

export default FlexCombo;
