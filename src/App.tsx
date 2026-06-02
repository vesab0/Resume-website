import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/index'
import Exploring from './pages/exploring'
import Hobbies from './pages/hobbies'
import Projects from './pages/projects'
import AppBackground from './components/AppBackground'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-black text-white">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <AppBackground />
        </div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exploring" element={<Exploring />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
