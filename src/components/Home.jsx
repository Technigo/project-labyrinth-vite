import { useState } from 'react'
import { appContentStore } from '../stores/appContentStore'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const [inputUsername, setInputUsername] = useState('')
  const { setUsername, fetchGameData } = appContentStore()
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
      <h2>
        {/* Maybe we will use this the local storage context to display the saved usernamed from localstorage  */}
        Hi {inputUsername || 'Guest'}! Enter the labyrinth at your own risk. Can
        you find a way out of the maze?
      </h2>
      <input
        type="text"
        value={inputUsername}
        onChange={handleUsernameChange}
      />
      <button onClick={handleUsernameSubmit}>Start Game</button>
    </>
  )
}
