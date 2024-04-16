import { useStartLabyrinthStore } from "../stores/useStartLabyrinthStore";

export const UserInput = () => {
  const { userName, setUserName } = useStartLabyrinthStore();

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
    </>
  );
};
