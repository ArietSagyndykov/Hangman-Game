import React, { createContext, useEffect, useState } from "react";
import { showNotification as show } from "../helpers/helperFunctions";

export const gameContext = createContext();

const words = [
  "Computer",
  "Programming",
  "Code",
  "Application",
  "React",
  "Javascript",
];
let randomNum = Math.floor(Math.random() * words.length);
let selectedWord = words[randomNum].toLowerCase();

const GameProvider = ({ children }) => {
  // Correct Letters

  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [playable, setPlayable] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  //displaying the word and stuff

  useEffect(() => {
    function handleKeyDown(event) {
      const { key, keyCode } = event;
      const letter = key.toLowerCase();

      if (playable && keyCode >= 65 && keyCode <= 90) {
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentCorrectLetters) => [
              ...currentCorrectLetters,
              letter,
            ]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentWrongLetters) => [
              ...currentWrongLetters,
              letter,
            ]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);
    setWrongLetters([]);
    setCorrectLetters([]);
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }
  // Wrong letters

  return (
    <gameContext.Provider
      value={{
        selectedWord,
        correctLetters,
        wrongLetters,
        showNotification,
        setShowNotification,
        setPlayable,
        playAgain,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameProvider;
