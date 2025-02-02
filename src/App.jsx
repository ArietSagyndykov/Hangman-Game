import React from "react";
import styles from "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import GameProvider from "./context/GameProvider"; // Default import

const App = () => {
  return (
    <>
      <GameProvider>
        <Header />
        <div className="game-container">
          <Figure />
          <WrongLetters />
          <Word />
        </div>
        <Popup />
        <Notification />
      </GameProvider>
    </>
  );
};

export default App;
