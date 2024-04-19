import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLabyrinthStore from "../store/useLabyrinthStore";

const Rooms = () => {
  const { currentRoom, performAction, isLoading, error, setLoading, setError } =
    useLabyrinthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        setLoading(true);
        await performAction();
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [performAction, setLoading, setError]);

  const handleAction = async (action) => {
    try {
      setLoading(true);
      await performAction(action);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
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
