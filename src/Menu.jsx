import "./Menu.css";
import { useGameStateStore } from "./store";
import { useState } from "react";
export const Menu = () => {
  const start = useGameStateStore((state) => state.start);
  const [username, setUsername] = useState("");
  const onChange = (event) => {
    setUsername(event.target.value);
  };
  const onClick = () => {
    start(username);
  };
  return (
    <div className="Menu">
      <h1 className="Menu-title">Labyrinth Project</h1>
      <p className="Menu-name">Start your adventure by entering your name below:</p>
      <input className="Menu-input"onChange={onChange} type="text" placeholder="Enter your name" />
      <button className="Menu-button"onClick={onClick}>Start</button>
    </div>
  );
};
