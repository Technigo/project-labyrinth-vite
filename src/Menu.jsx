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
    // ${loading ? "Menu-loading" : ""}`} this is  ternary operator
    <div className={`Menu ${loading ? "Menu-loading" : ""}`}>
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
