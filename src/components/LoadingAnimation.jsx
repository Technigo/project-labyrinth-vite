import "../css/LoadingAnimation.css";

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="double-spinner">
        <div className="outer-spinner"></div>
        <div className="inner-spinner"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
