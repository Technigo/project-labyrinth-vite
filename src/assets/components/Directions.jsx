import { useGameStore } from "../stores/useGameStore";
import { East } from "./buttons/East";
import { North } from "./buttons/North";
import { South } from "./buttons/South";
import { West } from "./buttons/West";
import { MainButton } from "./buttons/MainButton";
import { useCallback } from "react";

export const Directions = () => {
  const { coordinates, actions, performAction, resetGame } = useGameStore();

  const startPosition = coordinates === "0,0";
  const endPosition = coordinates === "1,3";

  const onClickRestart = () => {
    console.log("User clicked restart");
    resetGame();
  };

  const onClickGo = useCallback(
    (type, direction) => {
      console.log(`User clicked ${direction}`);
      performAction(type, direction);
    },
    [performAction]
  );

  return (
    <>
      {!endPosition &&
        !startPosition &&
        actions.map((action) => {
          const ButtonComponent =
            {
              North: North,
              South: South,
              West: West,
              East: East,
            }[action.direction] || null;

          return (
            ButtonComponent && (
              <ButtonComponent
                key={`${action.direction}-${action.type}`}
                handleClick={() => onClickGo(action.type, action.direction)}
              />
            )
          );
        })}
      {!startPosition && (
        <MainButton
          style={{ position: "absolute", bottom: 20, right: 20 }}
          onClick={onClickRestart}
        >
          Restart
        </MainButton>
      )}
    </>
  );
};
