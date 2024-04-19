import { GameButton } from "./GameButton";
import { TextBox } from "./TextBox";
import { useGameStore } from "../stores/useGameStore";
import Lottie from "lottie-react";

import footstepsAnimation from "../assets/animations/footsteps.json";
import "./PlayScreen.css";
import { useRef, useEffect } from "react";

export const PlayScreen = () => {
  const backgroundImage = useRef();
  const { username, isLoading, labData, coordinates } = useGameStore();

  useEffect(() => {
    backgroundImage.current.style.backgroundImage = `url('${coordinates}.jpg')`;
  }, [coordinates]);

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
          {labData.actions.map((action, index) => (
            <GameButton key={index} buttonName={action.direction} />
          ))}
          {/* <GameButton buttonName="East" />
          <GameButton buttonName="South" />
          <GameButton buttonName="West" />
          <GameButton buttonName="North" /> */}
        </div>
        <GameButton buttonName="Restart" />
      </div>
    </>
  );
};
