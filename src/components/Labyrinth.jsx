import { useEffect } from "react";
import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import { useUserStore } from "../stores/useUserStore";

export const Labyrinth = () => {
  //Destructure the data
  const { userName } = useUserStore();
  const { startData, loading, error, fetchStartData } = useLabyrinthStore();

  useEffect(() => {
    fetchStartData(userName);
  }, [fetchStartData, userName]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  //Not finished, need to get some form of state?
  return startData ? (
    <div>
      <h2>User</h2>
      <p>Name: {userName}</p>
      <p>Startdata: {startData.coordinates}</p>
    </div>
  ) : null;
};
