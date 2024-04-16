import { Start } from "./components/Start";
import { Location } from "./components/Location";
import { useLabyrinthStore } from "./store/useLabyrinthStore";

export const App = () => {
  const { username } = useLabyrinthStore();
  if (!username) {
    return <Start />;
  }
  return <Location />;
};
