import axios from "axios";

export const startGame = async (username) => {
  return await axios.post("https://labyrinth.technigo.io/start", { username });
};

export const sendAction = async (username, type, direction) => {
  return await axios.post("https://labyrinth.technigo.io/action", { username, type, direction });
};
