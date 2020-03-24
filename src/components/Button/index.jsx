import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

const defaultProps = {
  onClick: () => {}
};

const Button = ({ children, onClick }) => (
  <button className={s.btn} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
export default Button;
