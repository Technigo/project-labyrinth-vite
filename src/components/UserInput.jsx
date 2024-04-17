import { useStartLabyrinthStore } from "../stores/useStartLabyrinthStore";

import "../styles/UserInput.css";

export const UserInput = () => {
  const { userName, setUserName, fetchStart } = useStartLabyrinthStore();

  const handleStartButtonClick = async () => {
    try {
      await fetchStart(userName); // Pass the userName to fetchStart
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="input-page">
      <label htmlFor="user-input"> Choose a very unique Username :)</label>
      <input
        id="user-input"
        type="text"
        value={userName}
        onChange={(event) => {
          if (event.target.value.length === 0) {
            alert("Please set the userName");
          } else {
            setUserName(event.target.value);
          }
        }}
      />
      <button onClick={handleStartButtonClick}>Start Adventure</button>
    </div>
  );
};
