import { GameButton } from "./GameButton";
import { TextBox } from "./TextBox";
import { useGameStore } from "../stores/useGameStore";
import "./PlayScreen.css"

export const PlayScreen = () => {
    const { username } = useGameStore();
  return (
    <>
                <p id="username">{username}</p>
      <div className="text-area">
      <TextBox />
      </div>
<div className="button-cross">
      <GameButton buttonName="East" id="east-button"/>
      <GameButton buttonName="South" />
      <GameButton buttonName="West" />
      <GameButton buttonName="North" />
          

      </div>
         <GameButton buttonName="Restart" />
      </>
  );
};
