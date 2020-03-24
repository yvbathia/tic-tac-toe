import React from "react";
import PropTypes from "prop-types";
import s from "./Image.module.scss";

const propTypes = {
  src: PropTypes.string.isRequired
};

const Image = ({ src }) => (
  <div className={s.logo}>
    <img className={s.img} src={src} alt="img" />
  </div>
);

Image.propTypes = propTypes;
export default Image;
