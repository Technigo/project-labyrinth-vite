import { useEffect } from "react";
import { useLabyrinthStore } from "../stores/useLabyrinthStore";

export const Labyrinth = () => {
  //Destructure the data
  const {
    userName,
    startData,
    loading,
    error,
    fetchStartData,
    coordinates,
    description,
    actions,
  } = useLabyrinthStore();

  useEffect(() => {
    fetchStartData();
  }, [fetchStartData]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  //Not finished, need to get some form of state?
  return startData ? (
    <div>
      <h2>User</h2>
      <p>Name: {userName.username}</p>
      <p>Startdata: {startData.coordinates}</p>
    </div>
  ) : null;
};
