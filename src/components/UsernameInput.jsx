import { useGameStore } from "../stores/useGameStore";
import { GameButton } from "./GameButton";
import "./UsernameInput.css";

export const UsernameInput = () => {
  const { setUserName, username } = useGameStore();

  /* const handleUserInput = () => {
    if (username != "") {
      addTask(username);
      setUserName("");
    } else {
      alert("Please write a user name");
    }
  };*/

  return (
    <div>
      <p>{username} </p> New Username:
      <div className="start-user-info">
        <label className="name-label">
          <input
            type="text"
            className="name-box"
            value={username}
            onChange={(event) => {
              if (event.target.value.lenght === 0) {
                alert("Please write a user name");
              } else {
                setUserName(event.target.value);
              }
            }}
          />
        </label>
        <GameButton /*onClick=(handleUserInput)*/ buttonName="Start" />
      </div>
    </div>
  );
};
