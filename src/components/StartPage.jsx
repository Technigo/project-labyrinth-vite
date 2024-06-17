import { useState, useEffect } from "react";
import useLabyrinthStore from "../stores/useLabyrinthStore";
import { LoadingAnimation } from "./LoadingAnimation";
import './StartPage.css';

export const StartPage = ({ changeBgImg }) => {
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

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="start-container">
      <h1>Are you ready to begin your journey?</h1>
      <h2>The labyrinth awaits you...</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">What is your name, brave soul?</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Starting..." : "START GAME"}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
};
