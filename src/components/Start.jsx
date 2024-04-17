import { useState, useRef } from "react"
import { useLabyrinthStore } from "../store/useLabyrinthStore"
import { Location } from '../components/Location'
import '../styles/Start.css'
import uniqid from 'uniqid'

export const Start = () => {
  //state variables
  const [ inputUsername, setInputUsername ] = useState("")
  const [ uniqueId, setUniqueId ] = useState("")
  //useRef
  const backgroundRef = useRef()
  //Store
  const { updateUsername, updateId, loggedIn, startGame } = useLabyrinthStore()


  const onUsernameChange = (e) => {
    const username = e.target.value
    setInputUsername(username)
    setUniqueId(username + uniqid())
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    startGame(uniqueId);
    updateUsername(inputUsername);
    updateId(uniqueId)
    setInputUsername("")
  }

  const changeBackground = (image) => {
    console.log(image)
    backgroundRef.current.style.backgroundImage = `url('public/${image}.jpg')`
  }

  return (
    <main className="main-container" ref={backgroundRef}>
      {loggedIn ? (
      <Location changeBackground={changeBackground}/>
      ) : (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Username"
        name="username"
        value={inputUsername}
        onChange={onUsernameChange}
      />
      <button disabled={inputUsername ? false : true} type="submit">
            Submit
          </button>
    </form>
      )}
    </main>
  )
}
