import Lottie from "react-lottie";
import animationData from "../../lotties/loader.json";
import "./Loading.css";

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="content-wrapper">
      <div>
        <h1 id="loading">Loading...</h1>
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </section>
  );
};
