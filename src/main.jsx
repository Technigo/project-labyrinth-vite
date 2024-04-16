import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { useGameState } from "./assets/stores/gameStore.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <useGameState.Provider>
      <App />
    </useGameState.Provider>
  </React.StrictMode>
);
