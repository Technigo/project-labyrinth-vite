import { useState, useEffect } from "react";
import soundFile from "../assets/cave.mp3";

export const Sound = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [audio] = useState(new Audio(soundFile));

  useEffect(() => {
    audio.loop = true;
    if (!isMuted) {
      audio.play();
    }
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isMuted, audio]);

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  return (
    <button className="sound-button" onClick={toggleSound}>
      {isMuted ? "🔊 Sound" : "🔇 Sound"}
    </button>
  );
};
