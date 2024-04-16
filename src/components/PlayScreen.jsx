import { GameButton } from "./GameButton";
import { TextBox } from "./TextBox";
import { useGameStore } from "../stores/useGameStore";

export const PlayScreen = () => {
    const { username } = useGameStore();
  return (
      <div>
          <p>{username}</p>
      <p> Labyrinth Project </p>
      <TextBox />

      <GameButton buttonName="East" />
      <GameButton buttonName="South" />
      <GameButton buttonName="West" />
          <GameButton buttonName="North" />
          
          <GameButton buttonName="Restart" />
    </div>
  );
};
