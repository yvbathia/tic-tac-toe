import React from "react";
import PropTypes from "prop-types";
import s from "./SelectSide.module.scss";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Cross from "../../Images/cross.png";
import Circle from "../../Images/circle.png";
import Image from "../../components/Image";

const propTypes = {
  isCrossSelected: PropTypes.bool.isRequired,
  setIsCrossSelected: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
};

const SelectSide = ({ isCrossSelected, setIsCrossSelected, setPage }) => {
  return (
    <div className={s.root}>
      <Title>Pick your side</Title>
      <div className={s.choiceContainer}>
        <div className={s.choice} onClick={() => setIsCrossSelected(true)}>
          <Image src={Cross} />
          <input
            type="radio"
            checked={isCrossSelected}
            onClick={() => setIsCrossSelected(true)}
          />
        </div>
        <div className={s.choice} onClick={() => setIsCrossSelected(false)}>
          <Image src={Circle} />
          <input
            type="radio"
            checked={!isCrossSelected}
            onClick={() => setIsCrossSelected(false)}
          />
        </div>
      </div>
      <Button onClick={setPage}>Continue</Button>
    </div>
  );
};

SelectSide.propTypes = propTypes;
export default SelectSide;
