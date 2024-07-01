import { useUserStore } from "./stores/useUserStore";
import { Labyrinth } from "./components/Labyrinth";
import { User } from "./components/User";

export const App = () => {
  const { loggedIn } = useUserStore();

  return <>{loggedIn ? <Labyrinth /> : <User />}</>;
};
