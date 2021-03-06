import React from "react";
import s from "./PlayMode.module.scss";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Image from "../../components/Image";
import Cross from "../../Images/cross.png";
import Circle from "../../Images/circle.png";

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
      <div className={s.logo}>
        <Image className={s.img} src={Cross} />
        <Image className={s.img} src={Circle} />
      </div>
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
