import { UsernameInput } from "./UsernameInput";
import { GameButton } from "./GameButton";
import "./WelcomeScreen.css";
import backgroundImg from "../../public/maze1.png";
import { useRef } from "react";

export const WelcomeScreen = () => {
  // const ref = useRef();
  // ref.current.style.backgroundImage = backgroundImg;

  return (
    <>
      <div className="start-container">
        <h1>The Maze</h1>
        <p>Enter the labyrinth on your own risk...</p>
        <p>Can you find a way out of the maze??</p>
        <div className="start-user">
          <UsernameInput />
          {/*<GameButton buttonName="Start" />*/}
        </div>
      </div>
    </>
  );
};
