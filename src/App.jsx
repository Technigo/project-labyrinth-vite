import { DisplayStartLabyrinth } from "./components/DisplayStartLabyrinth";
import { UserInput } from "./components/UserInput";
import { useStartLabyrinthStore } from "./stores/useStartLabyrinthStore";

export const App = () => {
  const { gameFlow } = useStartLabyrinthStore();

  return (
  <> 
  {gameFlow ? <DisplayStartLabyrinth /> : <UserInput />}
  </>
  )
};

