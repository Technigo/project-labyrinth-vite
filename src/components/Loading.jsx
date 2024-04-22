import { BsCompass } from "react-icons/bs";
import "../styling/Loading.css";

const Loading = () => {
  return (
    <div className="loadingContainer">
      <BsCompass className="loadingIcon" />
    </div>
  );
};

export default Loading;
