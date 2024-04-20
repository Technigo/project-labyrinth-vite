import { useMemo } from "react";
import { East } from "./buttons/East";
import { North } from "./buttons/North";
import { South } from "./buttons/South";
import { West } from "./buttons/West";
import { MainButton } from "./buttons/MainButton";

export const Directions = ({
  actions,
  performAction,
  coordinates,
  resetGame,
}) => {
  const startPosition = coordinates === "0,0";
  const endPosition = coordinates === "1,3";

  const onClickGo = (type, direction) => {
    console.log(`User clicked ${direction}`);
    performAction(type, direction);
  };

  const directionComponents = useMemo(
    () => ({
      South: South,
      North: North,
      West: West,
      East: East,
    }),
    []
  );

  return (
    <>
      {!endPosition &&
        actions.map((action) => {
          const DirectionButton = directionComponents[action.direction];
          return (
            DirectionButton && (
              <DirectionButton
                handleClick={() => onClickGo(action.type, action.direction)}
                key={action.direction}
              />
            )
          );
        })}
      {!startPosition && (
        <MainButton
          onClick={() => {
            console.log("User clicked restart");
            resetGame();
          }}
          style={{ position: "absolute", bottom: "20px", right: "20px" }}
        >
          Restart
        </MainButton>
      )}
    </>
  );
};
