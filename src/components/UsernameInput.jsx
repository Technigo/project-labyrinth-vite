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
          <input type="text" className="name-box" value={username} />
        </label>
        <GameButton
          buttonName="Start"
          onClick={() => {
            if (username.length === 0) {
              alert("Please write a user name");
            } else {
              setUserName(username);
            }
          }}
        />
      </div>
    </div>
  );
};
