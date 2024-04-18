import { Home } from "./components/Home";
import { useLabyrinthStore } from "./stores/useLabyrinthStore";
import { Labyrinth } from "./components/Labyrinth";

export const App = () => {
  const { gameMode } = useLabyrinthStore();
  return <> {gameMode ? <Labyrinth /> : <Home />} </>;
};
