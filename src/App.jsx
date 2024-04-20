import { StartInput } from "./components/StartInput";
import { DisplayLevel } from "./components/DisplayLevel";
import { useLabyrinthStore } from "./stores/useLabyrinthStore";

export const App = () => {
  const { playerJoinIn } = useLabyrinthStore();

  return <>{playerJoinIn ? <StartInput /> : <DisplayLevel />}</>;
};
