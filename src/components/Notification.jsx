import React, { useContext } from "react";
import { gameContext } from "../context/GameProvider";

const Notification = () => {
  const { showNotification } = useContext(gameContext);
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
