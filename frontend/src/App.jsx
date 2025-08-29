import { Routes, Route, Link } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
