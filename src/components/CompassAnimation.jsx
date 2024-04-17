import { Player } from "@lottiefiles/react-lottie-player"

export const CompassAnimation = () => {
  return (
    <div className="Animation-container">
      <Player
        loop
        autoplay
        src="https://assets7.lottiefiles.com/packages/lf20_exfgqmmf.json"
        className="lottie"
        speed={1}
      />
    </div>
  )
}