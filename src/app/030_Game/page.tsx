import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import App from "./components/App";

const Game = () => {
  return (
    <div>
      <StrictMode>
        <App />
      </StrictMode>
    </div>
  );
};
export default Game;
