import { useState } from "react";
import { useAppContentStore } from "../stores/useAppContentStore";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/home.jpg";
import "./Home.css";

export const Home = () => {
  const [playerName, setPlayerName] = useState("");
  const { setUsername, fetchGameData } = useAppContentStore();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleStartGame = async () => {
    setUsername(playerName);
    await fetchGameData(playerName);
    navigate("/game");
  };

  return (
    <div
      className="home-body-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="home-container">
        <h1 className="home-title">Welcome to the Labyrinth Game!</h1>
        <p>
          Get ready for an exciting journey through the twists and turns of this
          labyrinth! Will you be able to find your way out?
        </p>
        <div className="form-group">
          <label htmlFor="playerName" className="form-element">
            Enter your name:
          </label>
          <input
            type="text"
            id="playerName"
            className="form-element home-input"
            placeholder=""
            value={playerName}
            onChange={handleInputChange}
          />
        </div>
        <button className="home-button" onClick={handleStartGame}>
          Start Game
        </button>
      </div>
    </div>
  );
};
