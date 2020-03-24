import React from "react";
import PropTypes from "prop-types";
import s from "./Title.module.scss";

const propTypes = {
  children: PropTypes.node.isRequired
};

const Title = ({ children }) => <span className={s.root}>{children}</span>;

Title.propTypes = propTypes;
export default Title;
