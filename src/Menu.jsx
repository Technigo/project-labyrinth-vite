import "./Menu.css";
import { useGameStateStore } from "./store";
import { useState } from "react";
export const Menu = () => {
  const start = useGameStateStore((state) => state.start);
  // here we define varible for when the game is loading
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const onChange = (event) => {
    setUsername(event.target.value);
  };
  const onClick = () => {
    start(username);
    setLoading(true);
  };
  // to click button with press enter
  const onSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    start(username);
  };
  return (
    // ${loading ? "menu-loading" : ""}`} this is  ternary operator
    <div className={`menu ${loading ? "menu-loading" : ""}`}>
      <h1 className="menu-title">Labyrinth Project</h1>
      <p className="menu-name">
        Start your adventure by entering your name below:
      </p>
      {/* htmlFor is so that when clicking the label, the cursor activates (its for accessibility)  */}

      <form className="menu-form" onSubmit={onSubmit}>
        <label className="menu-label" htmlFor="input">
          Enter your username:
        </label>
        <input
          className="menu-input"
          onChange={onChange}
          type="text"
          id="input"
        />
        <button className="menu-button" onClick={onClick}>
          Start
        </button>
      </form>
    </div>
  );
};
