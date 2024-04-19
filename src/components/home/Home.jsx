import { useState } from 'react'
import { useAppContentStore } from '../../stores/useAppContentStore'
import { useNavigate } from 'react-router-dom'

import labyrinth from '/labyrinth.jpg'
import './Home.css'

export const Home = () => {
  const [inputUsername, setInputUsername] = useState('')
  const { setUsername, fetchGameData } = useAppContentStore()
  const navigate = useNavigate()
  // take the value of input
  const handleUsernameChange = (event) => {
    setInputUsername(event.target.value)
  }
  //   fetch the data async waiting for getting the name from InputUsername and on submit navigate to the game page
  const handleUsernameSubmit = async () => {
    setUsername(inputUsername)
    await fetchGameData(inputUsername)
    navigate('/game')
  }
  return (
    <>
      <div>
        <img className="home-img" src={labyrinth} />
      </div>
      <div className="home-wrapper">
        <div className="text-container">
          <h1 className="home-title">The Maze</h1>
          <p className="paragraph">
            Hi {inputUsername || 'Guest'}! Enter the labyrinth at your own risk.
            Can you find a way out of the maze?
          </p>
          <div className="userdetails-wrapper">
            <input
              className="home-input"
              type="text"
              placeholder="Enter username"
              value={inputUsername}
              onChange={handleUsernameChange}
            />
            <button className="btn" onClick={handleUsernameSubmit}>
              Start Game
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
