import { useLabyrinthStore } from "../../store/useLabyrinthStore";
import locationImage from "../locationImage.json";
import "./Scene.css";

export const Scene = () => {
  const { locationDescription, coordinates } = useLabyrinthStore();
  const image = locationImage.find((img) => img.imgCoordinates === coordinates);

  return (
    <div className="scene-div">
      <img
        className="location-image"
        src={image.imageUrl}
        alt={image.altText}
      />
      <p>{locationDescription}</p>
    </div>
  );
};
