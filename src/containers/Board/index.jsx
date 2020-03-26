import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "./Board.module.scss";
import Title from "../../components/Title";
import { isUserWin, playAI } from "../../utils";
import { defaultGameState } from "../../constants";
import Button from "../../components/Button";
import Cross from "../../Images/cross.png";
import Circle from "../../Images/circle.png";
import Image from "../../components/Image";

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
  const [currentTurn, setCurrentTurn] = useState(isCrossSelected ? 0 : 1);
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
          if (isDualPlayMode) {
            setCurrentTurn((currentTurn + 1) % 2);
          } else {
            const getPos = playAI(newGameState);
            newGameState[getPos] = isCrossSelected ? 1 : 0;
            const isWinTheGame = isUserWin((currentTurn + 1) % 2, newGameState);
            if (isWinTheGame) {
              setCurrentTurn((currentTurn + 1) % 2);
              setGameOver(true);
            }
          }
          setGameState(newGameState);
        } else {
          setGameState(defaultGameState);
          setCurrentTurn(isCrossSelected ? 0 : 1);
        }
      }
    }
  };

  const onPopUpClose = isContinue => {
    setGameOver(false);
    if (isContinue) {
      if (
        (isCrossSelected && currentTurn === 0) ||
        (!isCrossSelected && currentTurn === 1)
      ) {
        setYourScore(yourScore + 1);
      } else {
        setOpponentScore(opponentScore + 1);
      }
      setGameState(defaultGameState);
      setCurrentTurn(isCrossSelected ? 0 : 1);
    } else {
      setGameState(defaultGameState);
      setCurrentTurn(isCrossSelected ? 0 : 1);
      setYourScore(0);
      setOpponentScore(0);
    }
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
              {element === 0 ? (
                <Image className={s.img} src={Cross} />
              ) : element === 1 ? (
                <Image className={s.img} src={Circle} />
              ) : (
                ""
              )}
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
            <Button onClick={() => onPopUpClose(true)}>Continue</Button>
            <Button onClick={() => onPopUpClose(false)}>New Game</Button>
          </div>
        </div>
      )}
    </div>
  );
};

Board.propTypes = propTypes;
export default Board;
