import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "./Board.module.scss";
import Title from "../../components/Title";
import { isUserWin } from "../../utils/findWinner";
import { defaultGameState, dataMap, defaultTurn } from "../../constants";
import Button from "../../components/Button";

const propTypes = {
  isDualPlayMode: PropTypes.bool.isRequired,
  isCrossSelected: PropTypes.bool.isRequired,
  gameState: PropTypes.array.isRequired,
  yourScore: PropTypes.number.isRequired,
  setYourScore: PropTypes.number.isRequired,
  opponentScore: PropTypes.number.isRequired,
  setOpponentScore: PropTypes.number.isRequired,
  setGameState: PropTypes.func.isRequired
};

const Board = ({
  gameState,
  setGameState,
  yourScore,
  opponentScore,
  setYourScore,
  setOpponentScore,
  isDualPlayMode,
  isCrossSelected
}) => {
  const [currentTurn, setCurrentTurn] = useState(defaultTurn);
  const [isGameOver, setGameOver] = useState(false);
  const onClick = index => {
    if (gameState[index] === 2) {
      let newGameState = [...gameState];
      newGameState[index] = currentTurn;
      const isWinTheGame = isUserWin(currentTurn, newGameState);
      if (isWinTheGame) {
        setGameOver(true);
      } else {
        if (newGameState.indexOf(2) !== -1) {
          setCurrentTurn((currentTurn + 1) % 2);
          setGameState(newGameState);
        } else {
          setGameState(defaultGameState);
          setCurrentTurn(defaultTurn);
        }
      }
    }
  };

  const onPopUpClose = () => {
    setGameOver(false);
    if (
      (isCrossSelected && currentTurn === 0) ||
      (!isCrossSelected && currentTurn === 1)
    ) {
      setYourScore(yourScore + 1);
    } else {
      setOpponentScore(opponentScore + 1);
    }
    setGameState(defaultGameState);
    setCurrentTurn(defaultTurn);
  };

  return (
    <div className={s.root}>
      <div className={s.head}>
        <Title>You</Title>
        <Button>
          {yourScore} : {opponentScore}
        </Button>
        <Title>{isDualPlayMode ? "Your Friend" : "AI"}</Title>
      </div>
      <div className={s.container}>
        {gameState.map((element, index) => {
          return (
            <div
              key={index}
              onClick={() => onClick(index)}
              onKeyPress={() => onClick(index)}
              className={s.box}
            >
              {dataMap[element]}
            </div>
          );
        })}
      </div>
      {isGameOver && (
        <div className={s.winnerPopUp}>
          <div className={s.popUpContent}>
            <Title>
              {(isCrossSelected && currentTurn === 0) ||
              (!isCrossSelected && currentTurn === 1)
                ? "You win"
                : "You loss"}
            </Title>
            <Button onClick={onPopUpClose}>Retry</Button>
          </div>
        </div>
      )}
    </div>
  );
};

Board.propTypes = propTypes;
export default Board;
