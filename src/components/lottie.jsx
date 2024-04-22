import { Player } from '@lottiefiles/react-lottie-player';

export const Lottie = () => {

  return (
    <div className="lottie-overlay">
        <Player
          src='https://lottie.host/6483601a-d5be-4f51-8822-9a5f375d00f9/bGyHW0SHFM.json'
          className="player"
          loop
          autoplay
        />
    </div>
  )
}