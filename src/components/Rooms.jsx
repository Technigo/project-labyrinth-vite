import { useEffect, useState } from "react";
import useLabyrinthStore from "../store/useLabyrinthStore";
import Loading from "./Loading";
import locationData from "./location.json";
import "../styling/Rooms.css";

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
  const [roomImage, setRoomImage] = useState(null);

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

  useEffect(() => {
    if (currentRoom && currentRoom.coordinates) {
      const matchingLocation = locationData.locationImages.find(
        (location) => location.coordinates === currentRoom.coordinates
      );
      if (matchingLocation) {
        setRoomImage(matchingLocation.image);
      }
    }
  }, [currentRoom]);

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
    <div
      className="roomContainer"
      style={{
        backgroundImage: `url(${roomImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="roomContent">
        <h2 className="roomDescription">{currentRoom.description}</h2>
      </div>

      <ul className="roomList">
        {currentRoom.actions.map((action, index) => (
          <li key={index}>
            <button className="roomButton" onClick={() => handleAction(action)}>
              {action.direction}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
