import React, { useContext } from "react";
import { gameContext } from "../context/GameProvider";

const Word = ({}) => {
  const { selectedWord, correctLetters } = useContext(gameContext);

  return (
    <div className="word" id="word">
      {selectedWord.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
