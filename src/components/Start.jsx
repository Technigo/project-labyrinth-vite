import { useState, useRef } from 'react'
import { useLabyrinthStore } from '../store/useLabyrinthStore'
import { Location } from '../components/Location'
import { ReactTyped } from 'react-typed'
import useSound from 'use-sound'
import sound from '../assets/sound/sound.mp3'
import soundIcon from '../assets/audio.svg'
import '../styles/Start.css'
import uniqid from 'uniqid'

export const Start = () => {
  //state variables
  const [inputUsername, setInputUsername] = useState('')
  const [uniqueId, setUniqueId] = useState('')
  const [isPlaying, setIsPlaying] = useState(true)

  //useRef
  const backgroundRef = useRef()
  //Store
  const { updateUsername, updateId, loggedIn, startGame } = useLabyrinthStore()
  //sound
  const [play, { stop }] = useSound(sound, { volume: 0.5 });

  const toggleSound = () => {
    setIsPlaying( !isPlaying )
    console.log(isPlaying)
    if (isPlaying) {
      play()
    } else {
      stop()
    }
  }


  const onUsernameChange = (e) => {
    const username = e.target.value
    setInputUsername(username)
    setUniqueId(username + uniqid())
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    startGame(uniqueId)
    updateUsername(inputUsername)
    updateId(uniqueId)
    setInputUsername('')
  }

  const changeBackground = (image) => {
    console.log(image)
    backgroundRef.current.style.backgroundImage = `url('${image}.jpg')`
  }

  return (
    <main className="main-container" ref={backgroundRef}>
      {loggedIn ? (
        <Location changeBackground={changeBackground} />
      ) : (
        <>
        <div className="intro-text">
        <h1>
          Find a new world
          </h1>
        <h2>
        {' '}
            <ReactTyped
              strings={['Your Planet is in ruins.<br> You have travelled the universe to find a new settlement for the survivors of your world - only to fail over and over. This planet seems promising.. <br><br>Enter your name and search for a new place to live.']}
              typeSpeed={80}
  
            /></h2></div>
          <form onSubmit={onSubmit}>
            <input
              placeholder="Your name"
              name="username"
              type="text"
              value={inputUsername}
              onChange={onUsernameChange}
            />
            <button disabled={inputUsername ? false : true} type="submit" className="submit-button">
              Submit
            </button>
          </form>
 
        </>
      )}
       <button
          className="sound-button"
          onClick={() => { toggleSound() }}><img src={soundIcon} alt="sound" />
      </button>
    </main>
  )
}
