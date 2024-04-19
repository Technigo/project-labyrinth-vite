import Lottie from "lottie-react"
import { useEffect, useRef } from "react"
import { appContentStore } from "../stores/appContentStore"
import cogWheels from "../assets/cog-wheels.json"
import "./StartPage.css"

export const StartPage = () => {
    const { loading, userName, toggleLoading, setGameData, setUserName, setDirections, setImageLink } = appContentStore()
    const focusRef = useRef()

    useEffect(() => {
      focusRef.current.focus()
    }, [])

    const startGame = () => {
      toggleLoading()
      fetch(`https://labyrinth.technigo.io/start`,{
            method: "POST",
            body: JSON.stringify({
              username: userName,
            }),
            headers: { "Content-Type": "application/json" },
        })
      .then((response) => response.json())
      .then((json) => {
        setGameData(json)
        if (json.actions.length === 1) {
        setDirections([json.actions[0].direction])
        } else if (json.actions.length === 2) {
          setDirections([json.actions[0].direction, json.actions[1].direction])
        }
        setImageLink(json.coordinates)
      })
      .catch((error) => {
        console.log("error:", error)
      })
      .finally(
        setTimeout(() => {
        toggleLoading()}, 2000)
      )
    }


    const handleSubmit = (event) => {
      event.preventDefault()
      startGame()
    }

  if (loading) {
    return (
      <div className="loading-page">
        <p>Loading...</p>
        <Lottie
          animationData={cogWheels}
          loop
          autoplay
          style={{ width: 400, height: 400 }}
        />
      </div>
    )
  } else {
    return (
      <div className="start-page">
        <p>Labyrinth Project</p>
        <h1>Welcome!</h1>
        <form onSubmit={handleSubmit}>
          <label className="name-input">
            Tell us your name:
            <input ref={focusRef} type="text" onChange={(event) => setUserName(event.target.value+"fsgjfhkj")} required/>
          </label>
          <button className="start-button" type="submit">Start</button>
        </form>
      </div>
    )
  }
}
