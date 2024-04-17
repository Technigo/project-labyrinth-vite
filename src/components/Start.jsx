import { useState } from "react";
import { useLabyrinthStore } from "../store/useLabyrinthStore";
import { Location } from './Location'
import uniqid from 'uniqid';

export const Start = () => {
  //state variables
  const [ inputUsername, setInputUsername ] = useState("");
  const [ uniqueId, setUniqueId ] = useState("")
  //Store
  const { updateUsername, updateId, loggedIn, startGame } = useLabyrinthStore();

  const onUsernameChange = (e) => {
    const username = e.target.value;
    setInputUsername(username);
    setUniqueId(username + uniqid())
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    startGame(uniqueId);
    updateUsername(inputUsername);
    updateId(uniqueId)

  };

  // render an input, value = inputUsername, onChange =
  // render submit button
  // when clicking submit, post to the API to start the game
  // put return data into the store

  return (
    <div>
      {loggedIn ? (
        <Location />
      ) : (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Username"
        name="username"
        value={inputUsername}
        onChange={onUsernameChange}
      />
      <button disabled={inputUsername ? false : true} type="submit">
            Submit
          </button>
    </form>
      )}
    </div>
  );
};
