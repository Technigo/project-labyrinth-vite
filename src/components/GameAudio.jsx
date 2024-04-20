import AudioFile from "../assets/music/music1.mp3";
import { useEffect, useState } from "react";
import "./style/GameAudio.css";
import AudioOn from "../../public/volume_up.svg";
import AudioOff from "../../public/volume_off.svg";

const audio = new Audio(AudioFile);

export const GameAudio = () => {
  const [audioOn, setAudioOn] = useState(false);

  useEffect(() => {
    if (audioOn) {
      console.log("Hej");
      audio.play();
    } else {
      audio.pause();
    }
  }, [audioOn]);

  const toggleAudio = () => {
    setAudioOn(!audioOn);
  };

  return (
    <button id="game-audio" onClick={toggleAudio}>
      <img src={audioOn ? AudioOn : AudioOff} />
    </button>
  );
};
