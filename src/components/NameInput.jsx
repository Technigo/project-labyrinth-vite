import { useLabyrinthStore } from "../stores/useLabyrinthStore.jsx";
import "./NameInput.css";

export const NameInput = () => {
  const { userName, setUserName, fetchStart } = useLabyrinthStore();

  const handleStartButton = () => {
    if (userName === "") {
      alert("Please set a username to start your adventure.");
    } else {
      fetchStart(userName);
    }
  };

  return (
    <div className="start-container">
      <img className="start-img" src="src/components/Images/start.jpg" />
      <div className="start-text">
        <h1>Welcome to the maze</h1>
        <div className="input">
          <label className="username">Select a unique username:</label>
          <input
            className="input-field"
            type="text"
            placeholder="Write your username here"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <button
            type="submit"
            className="start-button"
            onClick={handleStartButton}
          >
            Enter the maze
          </button>
        </div>
      </div>
    </div>
  );
};
