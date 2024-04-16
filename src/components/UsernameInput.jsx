import { useGameStore } from "../stores/useGameStore";
import { GameButton } from "./GameButton";
import "./UsernameInput.css";

export const UsernameInput = () => {
  const { setUserName, username } = useGameStore();

  return (
    <div>
      <p>{username} </p> New Username:
      <div className="start-user-info">
        <label className="name-label">
          <input
            className="name-box"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>
        <GameButton buttonName="Start" />
      </div>
    </div>
  );
};
