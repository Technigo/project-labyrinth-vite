import { useUserStore } from "../stores/useUserStore";
import "./User.css";

export const User = () => {
  const { userName, setUserName, fetchGameStart, loading, error } =
    useUserStore();

  const handleStartSubmit = (event) => {
    event.preventDefault();
    if (userName === "") {
      alert("Enter a username.");
    } else {
      fetchGameStart(userName);
    }
  };

  return (
    <div className="start-page">
      <div>
        {loading && (
          <div>
            <h1>Loading...</h1>
          </div>
        )}

        {error && (
          <div className="error">
            <h2>{error.message}</h2>
          </div>
        )}

        {!loading && !error && (
          <form className="user-form" onSubmit={handleStartSubmit}>
            <label>Enter a username: </label>
            <input
              className="placeholder"
              id="user-input"
              type="text"
              placeholder="New username..."
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <button
              className="start-button"
              type="submit"
              onClick={handleStartSubmit}>
              Start the game
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
