import { createContext, useState } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [audio] = useState(new Audio("/src/audio/ambient-wave-48-tribute-17243.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <AudioContext.Provider value={{ audio, isPlaying, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
};