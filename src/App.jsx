// import { CounterComponent } from "./components/CounterComponent";
import { NewCounter } from "./components/NewCounter";
import { UsernameInput } from "./components/UsernameInput";
import { GameButton } from "./components/GameButton";

export const App = () => {
  return (
    <div>
      <NewCounter />
      <UsernameInput />
      <p> Labyrinth Project </p>

      <GameButton buttonName="East" />
      <GameButton buttonName="South" />
      <GameButton buttonName="West" />
      <GameButton buttonName="North" />
    </div>
  );
};
