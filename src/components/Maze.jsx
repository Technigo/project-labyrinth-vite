import { useLoginStore } from '../stores/loginStore';
import { useState } from 'react';

import { LoginStart } from './LoginStart';
import { GameScreen } from './GameScreen';
import "./Maze.css"

export const Maze = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [description, setDescription] = useState('');
  const [actions, setActions] = useState([]);

  const handleLogin = async () => {
      // const { description, actions } = await useLoginStore.getState().startGame(); // Assuming startGame returns necessary data
      // setDescription(description);
      // setActions(actions);
      if(useLoginStore.getState().isLoggedIn()) {
        setIsLoggedIn(true); // Set isLoggedIn to true after successful login
        setDescription(useLoginStore.getState().gamedata.description)
      } else {
        alert('liaar!!!!!')
      }
  };

  return (
    <div className='maze-container'>
      {!isLoggedIn && <LoginStart onStartGameLogin={handleLogin} />}
      {isLoggedIn && <GameScreen description={description} actions={actions} />}
    </div>
  );
};
