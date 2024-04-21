import backgroundMusic from "../assets/UNDERTALE.mp3";
import { SoundOnIcon } from "./SoundOnIcon";
import { SoundOffIcon } from "./SoundOffIcon";
import { useEffect, useState } from "react";

const myBackgroundMusic = new Audio(backgroundMusic);

export const BackgroundMusic = () => {
  const [isMusicPaused, setIsMusicPaused] = useState(true);

  const toggleMusic = () => {
    setIsMusicPaused((prev) => !prev);
  };

  useEffect(() => {
    if (isMusicPaused) {
      myBackgroundMusic.pause();
    } else {
      myBackgroundMusic.play();
    }
  }, [isMusicPaused]);

  return (
    <button className="sound-button" onClick={toggleMusic}>
      <SoundOnIcon
        className={`sound-icon ${isMusicPaused ? "" : "display-icon"}`}
      />
      <SoundOffIcon
        className={`sound-icon ${isMusicPaused ? "display-icon" : ""}`}
      />
    </button>
  );
};
