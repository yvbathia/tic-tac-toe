import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

const defaultProps = {
  className: "",
  onClick: () => {}
};

const Button = ({ children, onClick, className }) => (
  <button className={[s.btn, className].join(" ")} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
export default Button;
