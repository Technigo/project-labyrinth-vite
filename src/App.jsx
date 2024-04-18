import { DisplayLabyrinth } from "./components/DisplayLabyrinth";
import { UserInput } from "./components/UserInput";
import { useLabyrinthStore } from "./stores/useLabyrinthStore";

export const App = () => {
  const { gameFlow } = useLabyrinthStore();

  return (
  <> 
  {gameFlow ? <DisplayLabyrinth /> : <UserInput />}
  </>
  )
};

