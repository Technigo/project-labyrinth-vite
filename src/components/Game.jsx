import { appContentStore } from '../stores/appContentStore'
import { Directions } from './directions/Directions'
import { Loading } from './loading/Loading'
import { useEffect, useState } from 'react'

import './Game.css'

export const Game = () => {
  const { gameData, loading, showDirections, toggleDirections } =
    appContentStore()
  const [backgroundStyle, setBackgroundStyle] = useState({})
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

  if (loading) {
    return <Loading />
  }

  return (
    <section className="content-wrapper" style={backgroundStyle}>
      <div className="text-container">
        <button className="btn" onClick={toggleDirections}>
          {showDirections ? 'Show Location' : 'Show Directions'}
        </button>
        {!showDirections && (
          <>
            <p className="paragraph">
              <span className="para-bold">Current Level:</span>{' '}
              {gameData?.coordinates}
            </p>
            <p className="paragraph">
              {' '}
              <span className="para-bold">Description:</span>{' '}
              {gameData?.description}
            </p>
          </>
        )}

        {showDirections && <Directions showDirections={showDirections} />}
      </div>
    </section>
  )
}
