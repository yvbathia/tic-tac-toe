import React from "react";
import s from "./PlayMode.module.scss";
import logo from "../../Images/logo.png";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Image from "../../components/Image";

const propTypes = {
  setIsDualPlayMode: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
};

const PlayMode = ({ setIsDualPlayMode, setPage }) => {
  const onClick = val => {
    setPage();
    setIsDualPlayMode(val);
  };
  return (
    <div className={s.root}>
      <Image src={logo} />
      <Title>Choose your play mode</Title>
      <div className={s.selector}>
        <Button onClick={() => onClick(false)}>With AI</Button>
        <Button onClick={() => onClick(true)}>With a friend</Button>
      </div>
    </div>
  );
};

PlayMode.propTypes = propTypes;
export default PlayMode;
