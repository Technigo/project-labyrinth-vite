import { useEffect, useRef } from "react"
import lottie from "lottie-web"
import loadingCompass from "../assets/animations/loading-compass.json"
import "../style/LoadingAnimation.css"

export const LoadingAnimation = () => {
  const container = useRef(null)

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loadingCompass,
    })

    return () => {
      anim.destroy()
    }
  }, [])

  return (
    <div className="loading-container" style={{ backgroundColor: "gray" }}>
      <div className="loading-animation" ref={container}></div>
    </div>
  )
}
