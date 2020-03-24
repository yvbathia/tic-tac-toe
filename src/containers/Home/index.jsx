import React, { useState } from "react";
import s from "./Home.module.scss";
import PlayMode from "../PlayMode";
import SelectSide from "../SelectSide";
import Board from "../Board";
import { defaultGameState } from "../../constants";

const Home = () => {
  const [isDualPlayMode, setIsDualpPayMode] = useState(false);
  const [isCrossSelected, setIsCrossSelected] = useState(false);
  const [page, setPage] = useState(1);
  const [gameState, setGameState] = useState(defaultGameState);
  const [yourScore, setYourScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  return (
    <div className={s.root}>
      {page === 1 && (
        <PlayMode
          setIsDualPlayMode={setIsDualpPayMode}
          setPage={() => setPage(page + 1)}
        />
      )}
      {page === 2 && (
        <SelectSide
          setIsCrossSelected={setIsCrossSelected}
          isCrossSelected={isCrossSelected}
          setPage={() => setPage(page + 1)}
        />
      )}
      {page === 3 && (
        <Board
          isDualPlayMode={isDualPlayMode}
          isCrossSelected={isCrossSelected}
          gameState={gameState}
          setGameState={newList => setGameState(newList)}
          yourScore={yourScore}
          setYourScore={setYourScore}
          opponentScore={opponentScore}
          setOpponentScore={setOpponentScore}
        />
      )}
    </div>
  );
};

export default Home;
