import { useLabyrinthStore } from "../../store/useLabyrinthStore";
import { UsernameInput } from "../UsernameInput/UsernameInput";
import { Scene } from "../Scene/Scene";
import { SceneCard } from "../SceneCard/SceneCard";
import { Loading } from "../Loading/Loading";
import "./Home.css";

export const Home = () => {
  const { username, loading } = useLabyrinthStore();

  return (
    <div className="container">
      {!username ? <UsernameInput /> : <Scene />}
      {loading && <Loading />}
      <SceneCard />
    </div>
  );
};
