import { useGameStore } from "../stores/useGameStore";
import { GameButton } from "./GameButton";
import "./style/UsernameInput.css";

export const UsernameInput = () => {
  const { setUserName, username } = useGameStore();

  return (
    <>
      <span>New wanderer:</span>
      <div className="start-user-info">
        <label className="name-label">
          <input
            type="text"
            className="name-box"
            value={username}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </label>
        <GameButton buttonName="Start" />
      </div>
    </>
  );
};
