import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import "./Home.css";

export const Home = () => {
  const { userName, setUserName, fetchStart, loading, error } =
    useLabyrinthStore();

  const handleStartSubmit = (event) => {
    event.preventDefault();
    if (userName === "") {
      alert("Please set a username.");
    } else {
      fetchStart(userName);
    }
  };

  return (
    <div className="input-page">
      {loading && (
        <div className="entering">
          <h2>Entering...</h2>
        </div>
      )}

      {error && (
        <div className="error">
          <h2>{error.message}</h2>
        </div>
      )}

      {!loading && !error && (
        <form onSubmit={handleStartSubmit}>
          <label>Enter your username: </label>
          <input
            className="input-field"
            id="user-input"
            type="text"
            placeholder="New username..."
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <button onClick={handleStartSubmit}>Start Labyrinth</button>
        </form>
      )}
    </div>
  );
};
