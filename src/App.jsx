import { Home } from "./components/Home/Home";
import { Loading } from "./components/Loading/Loading";
import { useLabyrinthStore } from "./store/useLabyrinthStore";

export const App = () => {
  const { loading } = useLabyrinthStore();

  return <>{loading ? <Loading /> : <Home />}</>;
};
