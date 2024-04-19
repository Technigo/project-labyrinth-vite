import Lottie from 'react-lottie'
import { animationData } from 'src/lotties/loader.json'

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <section className="content-wrapper">
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      {/* <div className="text-container">
        <h1 className="paragraph">Loading...</h1>
      </div> */}
    </section>
  )
}
