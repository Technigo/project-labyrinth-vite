import "../css/LoadingAnimation.css";

const LoadingAnimation = () => {
  /*  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []); */

  return (
    <div className="loading-container">
      <div className="loader">
        {/*  <video ref={videoRef} autoPlay loop>
          <source src="/src/assets/circle.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </div>
  );
};

export default LoadingAnimation;
