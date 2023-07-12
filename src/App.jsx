import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Stats from './pages/Stats'
import './App.css'

function App() {

  return (
    <div className="h-screen">
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Stats" element={<Stats/>}/>
    </Routes>
    </div>
  )
}

export default App
