import { Player } from '@lottiefiles/react-lottie-player';

export const Lottie = () => {

  return (
    <div className="loader">
    <Player
      src='https://lottie.host/0d09879c-0184-4a99-a98d-671e7e6f85f0/ffgFwekCsa.json'
      className="player"
      loop
      autoplay
    />
    </div>
  )
}