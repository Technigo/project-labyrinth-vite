import { useState, useEffect } from "react";
import { useLabyrinthStore } from "../stores/useLabyrinthStore";
import { Typewriter } from "./Typewriter";
import { HeartIcon } from "./HeartIcon";
import "../style/DisplayLevel.css";

export const DisplayLevel = () => {
  const { levelDescription, actions, fetchLevel } = useLabyrinthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isBeforeCheck, setIsBeforeCheck] = useState(true);
  const [checkDirection, setCheckDirection] = useState("");
  const [loadingText, setLoadingText] = useState("");

  const handleAction = async (event) => {
    setIsBeforeCheck(true);
    setIsLoading(true);
    setCheckDirection("");

    try {
      await fetchLevel(event.target.value);
    } catch (error) {
      console.error("Error getting the next step:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  const handleCheckDirection = (event) => {
    const newDirection = event.target.value;
    setCheckDirection("");
    setIsBeforeCheck(true);
    setTimeout(() => {
      setCheckDirection(newDirection);
    }, 100);

    setTimeout(() => {
      setIsBeforeCheck(false);
    }, 100);
  };

  const filtereActions = actions.filter(
    (action) => action.direction.toLowerCase() === checkDirection.toLowerCase()
  );

  const noPathText = [
    "Nothing more lies ahead in this direction. It's time to seek elsewhere. Your heart is filled with determination.",
    "A wall stops you. You see a small mouse holding a frozen piece of spaghetti by the wall. Knowing the mouse might one day find a way to heat up the spaghetti...fills you with determination.",
    "A ruin blocks your way. Amidst the rubble, a lone microwave hums with life. Its static melody...fills you with determination.",
    "You sense there's something in this direction you should pursue. It's shrouded in darkness A feeling of dread hangs over you...But you stay determined.",
  ];

  useEffect(() => {
    const loadingText = [
      "You saw something disappear really quickly behind the bushes. Was it... a flower?",
      "You catch a delightful scent. Could it be... grilling sausages?",
      "In the distance, you hear the bark of a dog. It must be a white, fluffy one. You know your guess is right...",
      "You feel something slippery under your feet. You realize that you are walking on ice all of a sudden...",
      "Is someone watching you? You look around. But there is no one...",
      "You took a small nap along the way. You thought you saw two jolly skeletons in your dream...",
    ];
    const randomNumberLoad = Math.floor(Math.random() * loadingText.length);
    setLoadingText(loadingText[randomNumberLoad]);
  }, [checkDirection]);

  const randomNumberPath = Math.floor(Math.random() * noPathText.length);

  return isLoading ? (
    <p className="loading-text">{loadingText}</p>
  ) : (
    <div className="level-display">
      <h3 className="level-title">
        <Typewriter text={levelDescription} delay={35} />
      </h3>
      <div className="level-action">
        {actions.length === 0 ? (
          <p className="end-text">
            <HeartIcon />
            The End
          </p>
        ) : (
          <div className="direction-description-container">
            {filtereActions.length > 0
              ? filtereActions
                  .filter(
                    (action) =>
                      action.direction.toLowerCase() ===
                      checkDirection.toLowerCase()
                  )
                  .map((action, index) => (
                    <div key={index} className="button-list">
                      <p className="direction-info">
                        * <Typewriter text={action.description} delay={20} />
                      </p>
                      <button
                        className={`direction-button ${action.direction.toLowerCase()}`}
                        value={action.direction}
                        onClick={handleAction}
                      >
                        * Go {action.direction}
                      </button>
                    </div>
                  ))
              : !isBeforeCheck && (
                  <p className="no-path-text">
                    *{" "}
                    <Typewriter
                      text={noPathText[randomNumberPath]}
                      delay={20}
                    />
                  </p>
                )}
          </div>
        )}
        {actions.length > 0 && (
          <div className="check-options">
            <p>Which direction do you want to check?</p>
            <div className="check-button-list">
              <button
                className="check-button"
                value="North"
                onClick={handleCheckDirection}
              >
                North
              </button>
              <button
                className="check-button"
                value="West"
                onClick={handleCheckDirection}
              >
                West
              </button>
              <button
                className="check-button"
                value="South"
                onClick={handleCheckDirection}
              >
                South
              </button>
              <button
                className="check-button"
                value="East"
                onClick={handleCheckDirection}
              >
                East
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
