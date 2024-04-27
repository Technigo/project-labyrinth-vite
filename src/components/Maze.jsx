import { useLabyrint } from "../stores/useLabyrint";
import { useState, useEffect } from "react";
import { images } from "./Images";
import { Lottie } from "./Lottie";
import { Sound } from "./Sound";
import loadingAnimation from "../assets/Animation.json";

export const Maze = () => {
  // Extracting values from custom hook's return object
  const {
    loading,
    username,
    setUsername,
    fetchLabyrint,
    labyrint,
    fetchDirectionLabyrint,
    setDirection,
    setType,
    setRoom,
    setLabyrint,
  } = useLabyrint();

  // State variables
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showViewOption, setShowViewOption] = useState(null);
  const [pageLoaded, setPageLoaded] = useState(false);

  // useEffect hook to set pageLoaded state after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageLoaded(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // Get current image based on labyrinth coordinates
  const currentImage = images[labyrint?.coordinates];

  // Function to handle input change in the username field
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  // Function to handle submit button click
  const handleButtonClick = async () => {
    const username2 = username + Math.floor(Math.random() * 10000000);
    setUsername(username2);
    event.preventDefault();
    setIsSubmitted(true);
    await fetchLabyrint(username2);
  };

  // Function to handle return button click
  const handleReturnButtonClick = () => {
    setUsername("");
    setIsSubmitted(false);
    setLabyrint(null);
  };

  // useEffect hook to reset showViewOption when labyrinth actions change
  useEffect(() => {
    if (labyrint?.actions && labyrint.actions.length > 0) {
      setShowViewOption(null);
    }
  }, [labyrint]);

  // Function to handle direction button click
  const handleDirection = async (direction) => {
    try {
      setDirection(direction);
      setType(labyrint.actions.type);
      setRoom(labyrint.description);
      const newLabyrint = await fetchDirectionLabyrint(
        username,
        labyrint.actions[0].type,
        direction,
        labyrint.coordinates,
        labyrint.description
      );
      if (newLabyrint) {
        setLabyrint(newLabyrint);
      }
    } catch (error) {
      console.error("Failed to fetch new labyrinth:", error);
    }
  };

  // JSX to render the maze component
  return (
    <>
      {/* Render sound & return button */}
      <div className="button-container">
        <Sound />
        {/* Render return button only after form submission */}
        {isSubmitted && (
          <button onClick={handleReturnButtonClick} className="return-button">
            Go back ⮌
          </button>
        )}
      </div>
      {/* Render loading animation if page is not loaded or data is loading */}
      {(!pageLoaded || loading) && (
        <div>
          <Lottie animationUrl={loadingAnimation} width={500} height={500} />
        </div>
      )}
      {/* Render start form if username is not set or form is not submitted */}
      {!username || !isSubmitted ? (
        <div className="maze-container">
          <div className="image-container">
            <img src={images.start} alt="Start" className="start-image" />
          </div>
          <form onSubmit={handleButtonClick}>
            <div className="start-text-container">
              <h1>Welcome to the Maze Game!</h1>
              <p>
                Get ready for an exciting journey through the twists and turns
                of this cave! Will you be able to find your way out?
              </p>
              <label name="username" htmlFor="username">
                Enter your name:{" "}
              </label>
              <input
                value={username}
                type="text"
                onChange={handleInputChange}
                name="username"
                id="username"
                autoComplete="given-name"
              />
              <button onClick={handleButtonClick} className="start-button">
                Enter the maze
              </button>
            </div>
          </form>
        </div>
      ) : (
        // Render maze game if username is set and form is submitted
        <div className="maze-container">
          <div className="image-container">
            <img src={currentImage} alt="Maze" className="maze-image" />
          </div>
          {/* Render maze text container if labyrinth actions are available */}
          {labyrint && labyrint.actions && (
            <div className="maze-text-container">
              <h2>{labyrint.description}</h2>
              <section className="options-container">
                {/* Map through labyrinth actions to render options */}
                {labyrint.actions.map((action, index) => (
                  <div className="option" key={index}>
                    <button
                      className="view-button"
                      onClick={() =>
                        setShowViewOption(
                          showViewOption === index ? null : index
                        )
                      }
                    >
                      Look {action.direction}
                    </button>
                    {/* Render view option if selected */}
                    {showViewOption === index && (
                      <div className="option view-option">
                        <div
                          className="option-image"
                          style={{
                            backgroundImage: `url(${
                              images[labyrint.coordinates + action.direction]
                            })`,
                          }}
                        ></div>
                        <div className="option-button-container">
                          <p>{action.description}</p>
                          <button
                            className="direction-button"
                            onClick={() => handleDirection(action.direction)}
                          >
                            {" "}
                            Go {action.direction}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </section>
            </div>
          )}
        </div>
      )}
    </>
  );
};
