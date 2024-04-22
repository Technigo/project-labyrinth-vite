import { useLocation } from "react-router-dom";

const BackgroundWrapper = ({ children }) => {
  const location = useLocation();
  const isStartGamePage = location.pathname === "/";

  const backgroundStyle = isStartGamePage
    ? { backgroundImage: "url(/Labyrinth.jpg)" }
    : {};

  return (
    <div style={backgroundStyle} className="startBackground">
      {children}
    </div>
  );
};

export default BackgroundWrapper;
