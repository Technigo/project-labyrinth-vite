import Lottie from "lottie-react";
import animationData from "../../animation.json";
import "./Loading.css"

export const Loading = () => {
  return (
    <div className="loader">
      <Lottie animationData={animationData} />
    </div>
  );
};
