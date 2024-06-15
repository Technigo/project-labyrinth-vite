import { useState, useEffect } from "react";
import useLabyrinthStore from "../stores/useLabyrinthStore";

const StartPage = ({ changeBgImg }) => {
  const [username, setUsername] = useState("");
  const { startGame, loading, error } = useLabyrinthStore();

  useEffect(() => {
    changeBgImg("start");
  }, [changeBgImg]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      alert("Please enter your username");
      return;
    }
    startGame(username);
  };

  return (
    <div>
      <h1>Are you ready to begin your journey?</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Starting..." : "Start game"}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default StartPage;