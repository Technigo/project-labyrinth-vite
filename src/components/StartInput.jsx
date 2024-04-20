import { useLabyrinthStore } from "../stores/useLabyrinthStore";

export const StartInput = () => {
  const { userName, setUserName, fetchStart } = useLabyrinthStore();

  const handleStartButtonClick = () => {
    if (userName === "") {
      alert("Please set a username. Thx!");
    } else {
      fetchStart(userName);
    }
  };

  return (
    <>
      <h1>The Maze</h1>
      <h2>Enter the labyrinth on your own risk.</h2>
      <h2>Can you find a way out of the maze?</h2>
      <label className="start-title" htmlFor="user-input">
        Enter your name:
      </label>
      <input
        className="user-input"
        id="user-input"
        type="text"
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button className="start-button" onClick={handleStartButtonClick}>
        Start Adventure
      </button>
    </>
  );
};
