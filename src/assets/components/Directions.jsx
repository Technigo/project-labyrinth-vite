import { useGameStore } from "../stores/useGameStore";
import { East } from "./buttons/East";
import { North } from "./buttons/North";
import { South } from "./buttons/South";
import { West } from "./buttons/West";
import { MainButton } from "./buttons/MainButton";

export const Directions = () => {
  const { coordinates, actions, performAction, resetGame } = useGameStore();

  console.log("Actions: ", actions); // Debug actions data
  console.log("Coordinates: ", coordinates); // Debug coordinates

  const startposition = coordinates === "";
  const endposition = coordinates === "1,3";

  console.log("Render Conditions: ", !endposition, !startposition);

  const onClickRestart = () => {
    console.log("User clicked restart");
    resetGame();
  };

  const onClickGo = (type, direction) => {
    console.log(`User clicked ${direction}`);
    performAction(type, direction);
  };

  return (
    <>
      {!endposition &&
        !startposition &&
        actions.map((action) => {
          const DirectionButton = {
            North: North,
            South: South,
            West: West,
            East: East,
          }[action.direction];
          return DirectionButton ? (
            <DirectionButton
              key={action.direction}
              handleClick={() => onClickGo(action.type, action.direction)}
            />
          ) : null;
        })}
      {!startposition && (
        <MainButton
          style={{ position: "absolute", bottom: "0", right: "0" }}
          onClick={onClickRestart}
        >
          Restart
        </MainButton>
      )}
    </>
  );
};
