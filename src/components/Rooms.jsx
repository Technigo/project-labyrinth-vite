import { useEffect } from "react";
import useLabyrinthStore from "../store/useLabyrinthStore";
import Loading from "./Loading";

const Rooms = () => {
  const {
    currentRoom,
    performAction,
    isLoading,
    error,
    setLoading,
    setError,
    username,
  } = useLabyrinthStore();

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        setLoading(true);
        await performAction(username, { direction: "start" });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [performAction, setLoading, setError, username]);

  const handleAction = async (action) => {
    try {
      setLoading(true);
      await performAction(username, action);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: </div>;
  }

  return (
    <div>
      <h2>{currentRoom.description}</h2>
      <ul>
        {currentRoom.actions.map((action, index) => (
          <li key={index}>
            <button onClick={() => handleAction(action)}>
              {action.direction}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
