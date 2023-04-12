import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from   './Components/Login'
import HomePage from   './Components/HomePage'
import AboutUs from   './Components/AboutUs'
import FeaturedMovies from './Components/FeaturedMovies'
import './App.css' 

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
{/* <Login/> */}

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/library" element={<FeaturedMovies />} />
        </Routes>
</BrowserRouter>



  </>
  )
}

export default App
