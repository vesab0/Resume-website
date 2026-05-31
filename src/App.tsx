import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/index'
import Exploring from './pages/exploring'
import Hobbies from './pages/hobbies'
import AppBackground from './components/AppBackground'
import './App.css'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black text-white">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <AppBackground />
        </div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exploring" element={<Exploring />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
