import { useEffect } from "react";
import { useStore } from "./stores/useStore";

export const App = () => {
  const { fetch, data } = useStore();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      Labyrinth Project
      <p>{data.description}</p>
    </div>
  );
};
