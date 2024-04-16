import { DisplayStartLabyrinth } from "./components/DisplayStartLabyrinth";
import { UserInput } from "./components/UserInput";
import { useState } from "react";

export const App = () => {
  const [gameFlow, setGameFlow] = useState(false);

  return <> {gameFlow ? <DisplayStartLabyrinth /> : <UserInput />}</>;
};
