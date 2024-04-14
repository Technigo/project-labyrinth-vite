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
    <div>
      <h1>Labyrinth Project</h1>
      <p>Start your adventure by entering your name below:</p>
      <input onChange={onChange} type="text" placeholder="Enter your name" />
      <button onClick={onClick}>Start</button>
    </div>
  );
};
