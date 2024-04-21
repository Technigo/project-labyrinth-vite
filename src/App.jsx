import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/home/Home'
import { Game } from './components/game/Game'

import './App.css'

export const App = () => {
  return (
    // created some routes to navigate to different pages
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}
