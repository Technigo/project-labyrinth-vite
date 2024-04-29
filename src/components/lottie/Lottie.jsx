import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../../assets/Animation.json";
import "./lottie.css";

export const Lottie = ({ animationUrl }) => {
  return (
    <div className="lottie-overlay">
      <div className="lottie-container">
        <Player
          src={animationUrl || loadingAnimation}
          className="player"
          loop
          autoplay
        />
      </div>
    </div>
  );
};
