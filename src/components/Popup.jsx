import React, { useContext, useEffect, useState } from "react";
import { gameContext } from "../context/GameProvider";
import { checkWin } from "../helpers/helperFunctions";

const Popup = () => {
  const { wrongLetters, correctLetters, selectedWord, setPlayable, playAgain } =
    useContext(gameContext);

  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) == "win") {
    finalMessage = "Congratulations, you won!";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) == "lose") {
    finalMessage = "Unfortunately,you lost ";
    finalMessageRevealWord = ` The word was ${selectedWord}`;
    playable = false;
  }
  console.log(checkWin(correctLetters, wrongLetters, selectedWord));
  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div
      className="popup-container"
      style={finalMessage != "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>

        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
