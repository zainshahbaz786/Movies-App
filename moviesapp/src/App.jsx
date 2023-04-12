import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from   './Components/Login'
import HomePage from   './Components/HomePage'
import AboutUs from   './Components/AboutUs'
import './App.css' 

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
{/* <Login/> */}

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
</BrowserRouter>



  </>
  )
}

export default App
