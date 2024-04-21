import { useGameStore } from "./stores/useGameStore";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { PlayScreen } from "./components/PlayScreen";
import { GameAudio } from "./components/GameAudio";

export const App = () => {
  const { isStarted } = useGameStore();

  return <>
  {isStarted ? <PlayScreen /> : <WelcomeScreen />}
  <GameAudio />
  </>;
};
