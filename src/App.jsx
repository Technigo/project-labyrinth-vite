import { Start } from './components/Start'
import { Location } from './components/Location'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  )
}
