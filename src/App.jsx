import { StartInput } from "./components/StartInput";
import { DisplayLevel } from "./components/DisplayLevel";
import { useLabyrinthStore } from "./stores/useLabyrinthStore";
import { BackgroundMusic } from "./components/BackgroundMusic";

export const App = () => {
  const { playerJoinIn } = useLabyrinthStore();

  return (
    <>
      {playerJoinIn ? <DisplayLevel /> : <StartInput />}
      <BackgroundMusic />
    </>
  );
};
