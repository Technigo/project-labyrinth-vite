import { useStore } from "../stores/useStore";
import { useEffect } from "react";

export const GameButton = ({ buttonName }) => {
  const { username, action, direction, setDirection, setIsStarted, isStarted } =
    useStore();

  let url = "";
  const start_URL = "https://labyrinth.technigo.io/start";
  const action_URL = "https://labyrinth.technigo.io/action";

  const moveData = {
    username: username,
    type: action,
    direction: direction,
  };
  console.log("This is our data", moveData);

  const postRequest = () => {
    fetch(url, {
      method: "POST", // or 'PUT'
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(moveData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleClick = () => {
    setDirection(buttonName);
    console.log("Inside handleClick: ", url);

    if (isStarted) {
      url = action_URL;
    } else if (isStarted === false) {
      url = start_URL;
      setIsStarted();
    }
    postRequest();
  };

  return (
    <div>
      <button onClick={handleClick}>{buttonName}</button>
    </div>
  );
};
