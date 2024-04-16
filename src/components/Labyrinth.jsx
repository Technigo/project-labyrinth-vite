import { useEffect } from "react";
import { useLabyrinthStore } from "../stores/useLabyrinthStore";

export const Labyrinth = () => {
  //Destructure the data
  const {
    userName,
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
};
