import { useStartLabyrinthStore } from "../stores/useStartLabyrinthStore";

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
    <>
      <label>
        {" "}
        Choose a very unique Username :)
        <input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <button onClick={handleStartButtonClick}>Start Adventure</button>
    </>
  );
};
