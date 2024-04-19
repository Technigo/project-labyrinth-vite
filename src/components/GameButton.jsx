import { useGameStore } from "../stores/useGameStore";
import { useRef, useState } from "react";
import "./GameButton.css";

export const GameButton = ({ buttonName }) => {
  const {
    username,
    action,
    actions,
    direction,
    coordinates,
    setDirection,
    setIsStarted,
    isStarted,
    setLabData,
    setIsLoading,
    startGame,
    makeMove
  } = useGameStore();



  /*const userData = {
    username: username
  };*/
  const [possibleDirection, setPossibleDirection] = useState([
    "Start",
    "Reset",
  ]);

  // let possibleDirection = [];
  const buttonRef = useRef(null);



  // const checkAndDisableButton = (data) => {
  //   setPossibleDirection(["Start", "Reset"]);
  //   console.log("Inside Checkand Disable: ", data);
  //   data.actions.map((action) => {
  //     possibleDirection.push(action.direction);
  //   });
  //   console.log(" CheckandDiasble array: ", possibleDirection);
  //   const newData = possibleDirection;
  //   console.log("New Data: ", newData);
  //   setPossibleDirection(newData);
  // };



  const handleClick = (e) => {
    const direction = e.target.value;
    console.log("Inside handleClick: ", buttonName);
    console.log("Coordinates: ", coordinates)

    if (buttonName === "Restart") {
      setIsStarted(false);
    }

    if (buttonName === "Start") {
      console.log("onSubmit check: ", username);
      if (username === "") {
        alert("Please enter an user name");
        return null;
      }
    }

    if (isStarted) {
      makeMove(username, action, direction);
    } else if (isStarted === false) {
      startGame(username);
    }
  };

  return (
    <button
      ref={buttonRef}
      value={buttonName}
      id={buttonName.toLowerCase()}
      className={`control-button ${buttonName.toLowerCase()}-button ${
        possibleDirection[2] === buttonName.toLowerCase() ? "match" : "no-match"
      }`}
      onClick={handleClick}
    >
      {buttonName}
    </button>
  );
};
