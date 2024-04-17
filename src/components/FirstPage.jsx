import { useRef, useState } from "react";

import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import { ActionPage } from "./ActionPage";

import "../style/FirstPage.css";

export const FirstPage = () => {
  // create ref for main container div
  const bgImgRef = useRef();

  const { loggedIn, startGame } = useLabyrinthStore();
  const [userInput, setUserInput] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    setUserInput("");
    startGame(userInput);
  };

  // function that changes the background img
  const changeBgImg = coordinates => {
    // replace the url for each coordinate
    bgImgRef.current.style.backgroundImage = `url('src/assets/backgrounds/${coordinates}.jpeg')`;
  };

  return (
    <div ref={bgImgRef} className="main-container">
      {loggedIn ? (
        <ActionPage changeBgImg={changeBgImg} />
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
