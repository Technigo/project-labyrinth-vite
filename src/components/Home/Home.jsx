import { useLabyrinthStore } from "../../store/useLabyrinthStore";
import { UsernameInput } from "../UsernameInput/UsernameInput";
import { Scene } from "../Scene/Scene";
import { SceneCard } from "../SceneCard/SceneCard";
import "./Home.css";

export const Home = () => {
  const { apiData, username } = useLabyrinthStore();

  return (
    <div className="container">
      {!username ? <UsernameInput /> : <Scene />}
      {apiData && <SceneCard />}
    </div>
  );
};
