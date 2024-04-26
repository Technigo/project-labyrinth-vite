import { LabyrinthPath } from "./components/LabyrinthPath.jsx";
import { NameInput } from "./components/NameInput.jsx";
import { useLabyrinthStore } from "./stores/useLabyrinthStore.jsx";

export const App = () => {

const { gameData } = useLabyrinthStore();

  return (
  <> 
  {gameData ? <LabyrinthPath /> : <NameInput />}
  </>
  )
};