import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../assets/Animation.json";

export const Lottie = ({ animationUrl, width, height }) => {
  return (
    <div
      className="lottie-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        background: "linear-gradient(135deg, #1b1b1b, #313131, #1b1b1b)",
      }}
    >
      <div style={{ width: width || "100%", height: height || "100%" }}>
        <Player
          src={animationUrl || loadingAnimation}
          className="player"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};
