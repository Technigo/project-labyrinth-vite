import { useGlobalStoreData } from "../store/Data";
import { LoginStart } from "../components/LoginStart";
import { GameScreen } from "../components/GameScreen";
import "../styles/Maze.css";

export const Maze = () => {
  const isLoggedIn = useGlobalStoreData((state) => state.isLoggedIn());

  return (
    <div className="maze-container">
      {!isLoggedIn && <LoginStart />}
      {isLoggedIn && <GameScreen />}
    </div>
  );
};
