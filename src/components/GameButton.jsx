import { useGameStore } from "../stores/useGameStore";

export const GameButton = ({ buttonName }) => {
  const {
    username,
    action,
    direction,
    setDirection,
    setIsStarted,
    isStarted,
    setLabData,
    setIsLoading,
  } = useGameStore();

  let url = "";
  const start_URL = "https://labyrinth.technigo.io/start";
  const action_URL = "https://labyrinth.technigo.io/action";

  /*const userData = {
    username: username
  };*/

  const moveData = {
    username: username,
    type: action,
    direction: direction,
  };

  const postRequest = () => {
    setIsLoading(true);
    fetch(url, {
      method: "POST", // or 'PUT'
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(moveData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setLabData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleClick = () => {
    setDirection(buttonName);
    console.log("Inside handleClick: ", buttonName);

    if (isStarted) {
      url = action_URL;
    } else if (isStarted === false) {
      url = start_URL;
      setIsStarted();
    }

    if (buttonName === "Restart") {
      setIsStarted();
    }

    postRequest();
  };

  return (
    <button
      id={buttonName.toLowerCase()}
      className={`control-button ${buttonName}-button`}
      onClick={handleClick}
    >
      {buttonName}
    </button>
  );
};
