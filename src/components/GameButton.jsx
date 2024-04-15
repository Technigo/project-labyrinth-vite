import { useStore } from "../stores/useStore";

export const GameButton = ({ buttonName }) => {
  const { username, action, direction, setDirection } = useStore();
  let toggleStart = false;
  let url = "";
  const start_URL = "https://labyrinth.technigo.io/start";
  const action_URL = "https://labyrinth.technigo.io/action";

  const move_Data = {
    username: { username },
    action: { action },
    direction: { direction },
  };

  console.log("ButtonName: ", buttonName);

  if (toggleStart) {
    url = action_URL;
  } else {
    url = start_URL;
    toggleStart = !toggleStart;
  }
  console.log("toggleStart: ", url);

  console.log("This is our data", move_Data);

  fetch(url, {
    method: "POST", // or 'PUT'
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(move_Data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <div>
      <button>{buttonName}</button>
    </div>
  );
};
