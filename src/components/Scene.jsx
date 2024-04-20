import { useLabyrinthStore } from "../store/useLabyrinthStore";

export const Scene = () => {
  const { locationDescription } = useLabyrinthStore();
  return <div>{locationDescription}</div>;
};
