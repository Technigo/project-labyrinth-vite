import { Start } from './Start'
import { Location } from './Location'

export const App = () => {
  const data = useLabyrinthStore()

  if (!data.username) {
    return <Start />
  }

  return <Location  />
};


