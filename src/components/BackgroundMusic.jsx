import backgroundMusic from "../assets/UNDERTALE.mp3";
import { SoundOnIcon } from "./SoundOnIcon";
import { SoundOffIcon } from "./SoundOffIcon";
import { useEffect, useState } from "react";

const myBackgroundMusic = new Audio(backgroundMusic);
myBackgroundMusic.volume = 0.1;
myBackgroundMusic.loop = true;

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
    <>
      <button
        className={`sound-icon ${isMusicPaused ? "hide-icon" : "display-icon"}`}
        onClick={toggleMusic}
      >
        <SoundOnIcon />
      </button>
      <button
        className={`sound-icon ${isMusicPaused ? "display-icon" : "hide-icon"}`}
        onClick={toggleMusic}
      >
        <SoundOffIcon />
      </button>
    </>
  );
};
