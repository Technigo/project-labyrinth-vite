import { GameButton } from "./GameButton";
import { TextBox } from "./TextBox";
import { useGameStore } from "../stores/useGameStore";
import Lottie from "lottie-react";
import compassAnimation from "../assets/animations/compass.json";
import "./PlayScreen.css";

export const PlayScreen = () => {
  const { username, isLoading } = useGameStore();
  return isLoading ? (
    <Lottie
      animationData={compassAnimation}
      loop
      autoPlay
      style={{ width: 250, height: 250, margin: "auto" }}
    />
  ) : (
    <>
      <p id="username">{username}</p>
      <div className="text-area">
        <TextBox />
      </div>
      <div className="button-cross">
        <GameButton buttonName="East" id="east-button" />
        <GameButton buttonName="South" />
        <GameButton buttonName="West" />
        <GameButton buttonName="North" />
      </div>
      <GameButton buttonName="Restart" />
    </>
  );
};
