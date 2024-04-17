import { useStartLabyrinthStore } from "../stores/useStartLabyrinthStore";

import "../styles/UserInput.css";

export const UserInput = () => {
  const { userName, setUserName, fetchStart } = useStartLabyrinthStore();

  const handleStartButtonClick = () => {
    if (userName === "") {
      alert("Please set a username. Thx!");
    } else {
      fetchStart(userName);
    }
  };

  return (
    <div className="input-page">
      <label htmlFor="user-input"> Choose a very unique Username :)</label>
      <input
        className="input-field"
        id="user-input"
        type="text"
        placeholder="drummrollonthestreet"
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button onClick={handleStartButtonClick}>Start Adventure</button>
    </div>
  );
};
