import { useState } from "react";

import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import { ActionPage } from "./ActionPage";

export const FirstPage = () => {
  const { loggedIn, startGame } = useLabyrinthStore();
  const [userInput, setUserInput] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    setUserInput("");
    startGame(userInput);
  };

  return (
    <div>
      {loggedIn ? (
        <ActionPage />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Write your name:
            <input
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
            />
          </label>
          <button disabled={userInput ? false : true} type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};
