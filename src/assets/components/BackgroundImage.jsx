import styled from "styled-components";
import { useGameStore } from "../stores/useGameStore"; 

// Styled components for backgrounds
const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; 
  opacity: 0.8;
`;

const StyledNoBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; 
  opacity: 0.8;
`;

export const BackgroundImage = () => {
  const { coordinates, loading } = useGameStore((state) => ({
    coordinates: state.coordinates,
    loading: state.loading,
  }));

  let imageUrl =
    "https://images.unsplash.com/photo-1550100136-e092101726f4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 

  const imageMap = {
    "0,0":
      "https://images.unsplash.com/photo-1468183654773-77e2f0bb6bf9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "0,1":
      "https://images.unsplash.com/photo-1499744349893-0c6de53516e6?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "0,2":
      "https://images.unsplash.com/photo-1548445929-4f60a497f851?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "0,3":
      "https://images.unsplash.com/photo-1573592371950-348a8f1d9f38?q=80&w=2849&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "1,0":
      "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "1,1":
      "https://plus.unsplash.com/premium_photo-1689902335785-b187c1c324f9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "1,3":
      "https://images.unsplash.com/photo-1603133292882-d6cc9c3d1f51?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };


  if (coordinates in imageMap) {
    imageUrl = imageMap[coordinates];
  }

  return (
    <div>
      {!loading ? (
        <StyledBackground imageUrl={imageUrl} />
      ) : (
        <StyledNoBackground />
      )}
    </div>
  );
};
