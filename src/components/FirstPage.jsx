import { useState } from "react";
import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import { ActionPage } from "./ActionPage";
import "../style/FirstPage.css";

export const FirstPage = () => {
  const { loggedIn, startGame } = useLabyrinthStore();
  const [userInput, setUserInput] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    setUserInput("");
    startGame(userInput);
  };

  return (
    <div className="main-container">
      {loggedIn ? (
        <ActionPage />
      ) : (
        <div className="start-container">
          <h1 className="heading">Labyrinth</h1>
          <h2 className="subheading">
            Dare to tread the labyrinth&apos;s enigmatic paths, where secrets
            lurk in every shadow.
          </h2>
          <p className="description">
            Are you ready to uncover the secrets of the labyrinth? Embark on the
            journey and find out.
          </p>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="userName">Adventurer name:</label>
            <input
              id="userName"
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
            />
            <button
              className="submit-btn"
              disabled={userInput ? false : true}
              type="submit"
            >
              Start
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
