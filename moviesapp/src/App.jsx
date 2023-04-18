import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from   './Components/Login'
import HomePage from   './Components/HomePage'
import AboutUs from   './Components/AboutUs'
import FeaturedMovies from './Components/FeaturedMovies'
import './App.css' 
import AdminPage from './Components/AdminPage'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
{/* <Login/> */}

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/explore" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/library" element={<FeaturedMovies />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
</BrowserRouter>



  </>
  )
}

export default App
