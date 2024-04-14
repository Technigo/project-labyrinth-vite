import "./App.css";
import { useEffect } from "react";
import { useGameStateStore } from "./store";
import { Menu } from "./Menu";
import { Game } from "./Game";


export const App = () => {
  const username = useGameStateStore((state) => state.username);
  const gameState = useGameStateStore((state) => state.gameState);

  const move = useGameStateStore((state) => state.move);

  useEffect(() => {
    // start("Maze Man");
  }, []);

  console.log(gameState);

  return (
    <div className="App">
      {/* ! means not, show the menu when there is no username  */}
      {!username && <Menu />}

      {gameState && (
        <Game />
      )}
    </div>
  );
};
