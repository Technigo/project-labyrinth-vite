import { useEffect, useRef } from "react"
import lottie from "lottie-web"
import loadingImage from "../assets/animations/loading.json"
import "./LoadingAnimation.css"

export const LoadingAnimation = () => {
  const container = useRef(null)

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loadingImage,
    })

    return () => {
      anim.destroy()
    }
  }, [])

  return (
    <div className="loading-container" style={{ backgroundColor: "black" }}>
      <div className="loading-animation" ref={container}></div>
    </div>
  )
}