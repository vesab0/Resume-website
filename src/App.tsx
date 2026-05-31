import Home from './pages/index'
import AppBackground from './components/AppBackground'
import './App.css'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <AppBackground />
      <div className=" relative z-10">
        <Home />
      </div>
    </div>
  )
}

export default App
