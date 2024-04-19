import { useAppContentStore } from '../../stores/useAppContentStore'
import { Directions } from '../directions/Directions'
import { Loading } from '../loading/Loading'
import { useEffect, useState } from 'react'
import { SVGMap } from '../SVGmap'
import { Link } from 'react-router-dom'
import map from '/map.png'
import './Game.css'

export const Game = () => {
  const { gameData, loading, showDirections, toggleDirections } =
    useAppContentStore()
  const [backgroundStyle, setBackgroundStyle] = useState({})
  const [showMap, setShowMap] = useState(false)
  // added style based on coordinates
  useEffect(() => {
    console.log('Coordinates:', gameData.coordinates)
    const backgroundImg = (coordinates) => {
      switch (coordinates) {
        case '':
          return 'url(/temple.jpg)'
        case '0,0':
          return 'url(/temple.jpg)'
        case '1,0':
          return 'url(/forest.jpg)'
        case '1,1':
          return 'url(/arch.jpg)'
        case '0,1':
          return 'url(/machine.jpg)'
        case '0,2':
          return 'url(/room.jpg)'
        case '0,3':
          return 'url(/library.jpg)'
        case '1,3':
          return 'url(/see.jpg)'
        default:
          return 'none'
      }
    }

    setBackgroundStyle({
      backgroundImage: backgroundImg(gameData?.coordinates),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    })
  }, [gameData.coordinates])

  const toggleShowMap = () => {
    setShowMap((prevShowMap) => !prevShowMap)
  }

  if (loading) {
    return <Loading />
  }
  const currentState = useAppContentStore.getState()

  // check if the current coordinates indicate that the user has reached the final destination
  const reachedDestination = gameData?.coordinates === '1,3'

  return (
    <section className="content-wrapper" style={backgroundStyle}>
      <div className="text-container">
        {/* render the "Show Directions" button only if showDirection is true and if destination is not reached */}

        <button className="btn" onClick={toggleDirections}>
          {showDirections ? 'Show Location' : 'Show Directions'}
        </button>

        {/* render different content based on whether showDirections is true and if destination is reached */}
        {!showDirections && !reachedDestination && (
          <>
            <p className="paragraph">
              <span className="para-bold">Current Level:</span>{' '}
              {gameData?.coordinates}
            </p>
            <p className="paragraph">
              {' '}
              <span className="para-bold">Description:</span>
              {gameData?.description}
            </p>
          </>
        )}

        {showDirections && !reachedDestination && (
          <Directions showDirections={showDirections} />
        )}

        {/* Render a different message if the destination is reached */}
        {reachedDestination && (
          <>
            <h2 className="end-title">Congratulations! You made it out.</h2>
            <p className="paragraph">
              <span className="para-bold">Current Level:</span>{' '}
              {gameData?.coordinates}
            </p>
            <p className="paragraph">
              {' '}
              <span className="para-bold">Description:</span>{' '}
              {gameData?.description}
            </p>
            <Link to="/" className="btn">
              Restart
            </Link>
          </>
        )}
      </div>

      {/* Show map and coordinates */}
      {showMap && (
        <div className="popup">
          <div className="popup-content">
            <span className="popup-close" onClick={toggleShowMap}></span>
            <SVGMap coordinates={currentState.gameData.coordinates} />
          </div>
        </div>
      )}

      {/* Button to toggle to show map */}
      <button id="plusButton" onClick={toggleShowMap}>
        {/* switching sign to indicate that can be toggle to close again */}
        {showMap ? '-' : <img className="map-btn" src={map} />}
      </button>
    </section>
  )
}
