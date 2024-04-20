import Lottie from "react-lottie";
import AnimationData from "/src/AnimationData";

export const LoadingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};
