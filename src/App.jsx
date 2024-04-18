import { useGameStore } from "./stores/useGameStore";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { PlayScreen } from "./components/PlayScreen";

export const App = () => {
  const { isStarted } = useGameStore();

  return (
    <>
      {isStarted ? <PlayScreen /> : <WelcomeScreen />}
      </>
  );
};
