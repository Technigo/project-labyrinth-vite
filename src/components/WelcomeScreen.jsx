import { UsernameInput } from "./UsernameInput";
import { GameButton } from "./GameButton";

export const WelcomeScreen = () => {
  return (
    <>
      <UsernameInput />
      <GameButton buttonName="Start" />
    </>
  );
};
