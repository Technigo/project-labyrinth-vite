/*import { useLabyrinthStore } from "../stores/useLabyrinthStore"
import { useState } from "react"
import { GamePage } from "./GamePage"

export const StartPage = () => {
  const { startGame, loggedIn } = useLabyrinthStore()

  const [userName, setUserName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userName === "") {
      alert("Please let us know your name!")
    } else {
      startGame(userName)
    }
  }

  return (
    <div>
      {loggedIn ? (
        <GamePage />
      ) : (
        <div className="start-wrapper">
            <h1>Are you ready to begin your journey?</h1>
            <h2>Follow the footsteps of the legendary Lara Croft and Indiana Jones...</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">What is your name?</label>
                <input
                    id="userName"
                    value={userName}
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button type="submit">Begin journey</button>
            </form>
        </div>
      )}
    </div>
  )
}*/

// StartPage.js
import { useState } from "react";
import useLabyrinthStore from "../stores/useLabyrinthStore";

const StartPage = () => {
  const [username, setUsername] = useState("");
  const { startGame, loading, error } = useLabyrinthStore();

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

  