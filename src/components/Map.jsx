// Define the Map component
export const Map = ({ userCoordinates }) => {
  // Define the SVG path data for the labyrinth
  const labyrinthPathData = 'M10 10 H 90 V 90 H 10 L 10 10'

  // Define the position of the user in the labyrinth
  const [userX, userY] = userCoordinates
    .split(',')
    .map((coord) => parseInt(coord))

  return (
    <svg className="map" viewBox="0 0 100 100">
      {/* Draw the labyrinth */}
      <path d={labyrinthPathData} stroke="black" fill="none" />

      {/* Draw the user's position */}
      <circle cx={userX} cy={userY} r="3" fill="red" />
    </svg>
  )
}
