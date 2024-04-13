import { useEffect } from "react";
import { useStore } from "./stores/useStore";
import { Message } from "./components/Message";
import { Input } from "./components/Input";

export const App = () => {
  const { fetch, loading, userName } = useStore();

  useEffect(() => {
    userName && fetch();
  }, [userName]);

  return (
    <div>
      <h1>Labyrinth Project</h1>
      {!userName ? (
        <Input />
      ) : loading ? (
        <p>Adventure loading...</p>
      ) : (
        <Message />
      )}
    </div>
  );
};
