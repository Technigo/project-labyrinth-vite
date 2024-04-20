import { useLabyrinthStore } from "../store/useLabyrinthStore";
import { UsernameInput } from "./UsernameInput";
import { Scene } from "./Scene";
import { SceneCard } from "./SceneCard";
import { Loading } from "./Loading";

export const Home = () => {
  const { username, loading } = useLabyrinthStore();

  return (
    <>
      {!username ? <UsernameInput /> : <Scene />}
      {loading && <Loading />}
      <SceneCard />
    </>
  );
};
