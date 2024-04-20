import { UsernameInput } from "./UsernameInput";
import { GameButton } from "./GameButton";
import "./WelcomeScreen.css";

export const WelcomeScreen = () => {
  return (
    <div className="general-container">
      <div className="start-container">
        <h1>The Maze</h1>
        <p>
          Enter the labyrinth on your own risk... <br /> Can you find a way out
          of the maze??
        </p>
        <div className="start-user">
          <UsernameInput />
          {/*<GameButton buttonName="Start" />*/}
        </div>
      </div>
    </div>
  );
};
