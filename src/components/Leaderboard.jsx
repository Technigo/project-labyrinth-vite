import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Leaderboard.css";

export const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get("https://labyrinth.technigo.io/leaderboard");
        setLeaderboard(response.data);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((user, index) => (
          <li key={index}>
            {user.username}: {user.score}
          </li>
        ))}
      </ul>
    </div>
  );
};
