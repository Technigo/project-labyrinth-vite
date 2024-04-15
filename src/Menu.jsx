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
  // to click button with press enter
  const onSubmit = (event) => {
    event.preventDefault();
    start(username);
  };
  return (
    <div className="Menu">
      <h1 className="Menu-title">Labyrinth Project</h1>
      <p className="Menu-name">
        Start your adventure by entering your name below:
      </p>
      {/* htmlFor is so that when clicking the label, the cursor activates (its for accessibility)  */}

      <form className="Menu-form" onSubmit={onSubmit}>
        <label className="Menu-label" htmlFor="input">
          Enter your username:
        </label>
        <input
          className="Menu-input"
          onChange={onChange}
          type="text"
          id="input"
        />
        <button className="Menu-button" onClick={onClick}>
          Start
        </button>
      </form>
    </div>
  );
};
