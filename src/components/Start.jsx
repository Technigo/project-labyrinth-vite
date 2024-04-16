import { useState } from "react";
import { useLabyrinthStore } from "../store/useLabyrinthStore";

export const Start = () => {
  const [inputUsername, setInputUsername] = useState("");
  const { updateUsername, updateCoordinates } = useLabyrinthStore();

  const onUsernameChange = (e) => {
    const username = e.target.value;
    setInputUsername(username);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await startGame(inputUsername);
    updateUsername(inputUsername);
    updateCoordinates({ x: result.coordinates[0], y: result.coordinates[1] });
    // updateDescription()
    console.log(result);
  };

  // render an input, value = inputUsername, onChange =
  // render submit button
  // when clicking submit, post to the API to start the game
  // put return data into the store

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Username"
        name="username"
        value={inputUsername}
        onChange={onUsernameChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

async function startGame(username) {
  const result = await fetch("https://labyrinth.technigo.io/start", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Correct way to set Content-Type
    },
    body: JSON.stringify({ username: username }),
  });
  const resultJson = await result.json();

  return resultJson;
}
