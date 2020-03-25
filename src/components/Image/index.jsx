import React from "react";
import PropTypes from "prop-types";
import s from "./Image.module.scss";

const propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};

const defaultProps = {
  className: ""
};

const Image = ({ src, className }) => (
  <div className={[s.logo, className].join(" ")}>
    <img className={s.img} src={src} alt="img" />
  </div>
);

Image.defaultProps = defaultProps;
Image.propTypes = propTypes;
export default Image;
