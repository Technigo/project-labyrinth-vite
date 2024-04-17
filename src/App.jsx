import { Labyrinth } from "./components/Labyrinth";
import { UserInfo } from "./components/UserInfo";

export const App = () => {
  return (
    <>
      <div>
        Labyrinth Project
        <UserInfo />
      </div>
      <Labyrinth />
    </>
  );
};
