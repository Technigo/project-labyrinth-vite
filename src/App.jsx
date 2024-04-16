import { useEffect } from "react";
import { useStore } from "./stores/useStore";
import { Situation } from "./components/Situation";
import { Input } from "./components/Input";
import { Story } from "./components/Story";

export const App = () => {
  const fetch = useStore(state => state.fetch);
  const userName = useStore(state => state.userName);

  useEffect(() => {
    userName && fetch();
  }, [userName]);

  return (
    <div>
      <h1>Labyrinth Project</h1>
      <Story />
      {!userName ? <Input /> : <Situation />}
    </div>
  );
};
