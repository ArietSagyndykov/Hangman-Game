import React, { useContext } from "react";
import { gameContext } from "../context/GameProvider";

const WrongLetters = () => {
  const { selectedWord, wrongLetters } = useContext(gameContext);

  return (
    <div className="wrong-letters-container">
      <div id="wrong-letters">
        {wrongLetters.length > 0 && <p>Wrong:</p>}
        {wrongLetters
          .map((letter, index) => <span key={index}>{letter}</span>)
          .reduce(
            (acc, curr) => (acc == null ? [curr] : [acc, ",", curr]),
            null
          )}
      </div>
    </div>
  );
};

export default WrongLetters;
