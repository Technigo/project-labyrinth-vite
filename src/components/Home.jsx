import { useEffect } from "react";
import { useLabyrinthStore } from "../store/useLabyrinthStore";
import { UsernameInput } from "./UsernameInput";
import { Scene } from "./Scene";

export const Home = () => {
  const { apiData, username, loading } = useLabyrinthStore();

  useEffect(() => {
    console.log(apiData);
  }, [username]);

  return (
    <>
      {!username ? <UsernameInput /> : <Scene />}
      {loading && <div>Loading...</div>}
      <div>{apiData.description}</div>
    </>
  );
};
