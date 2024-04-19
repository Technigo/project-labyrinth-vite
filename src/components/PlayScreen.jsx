import { GameButton } from "./GameButton";
import { TextBox } from "./TextBox";
import { useGameStore } from "../stores/useGameStore";
import Lottie from "lottie-react";

import footstepsAnimation from "../assets/animations/footsteps.json";
import "./PlayScreen.css";
import { useRef } from "react";
import backgroundImg from "../../public/maze1.png";

export const PlayScreen = () => {
  const backgroundImage = useRef();
  const changeBackgroundImage = () => {
    backgroundImage.current.style.backgroundImg = `url('src/public/maze1.png')`;
  };
  const { username, isLoading } = useGameStore();
  return isLoading ? (
    <Lottie
      animationData={footstepsAnimation}
      loop
      autoPlay
      style={{ width: 250, height: 250, margin: "auto" }}
    />
  ) : (
    <>
      <div ref={backgroundImage} className="general-container">
        <p id="username">{username}</p>
        <div className="text-area">
          <TextBox />
        </div>
        <div className="button-cross">
          <GameButton buttonName="East" />
          <GameButton buttonName="South" />
          <GameButton buttonName="West" />
          <GameButton buttonName="North" />
        </div>
        <GameButton buttonName="Restart" />
      </div>
    </>
  );
};
