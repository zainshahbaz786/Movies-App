import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from   './Components/Login'
import HomePage from   './Components/HomePage'
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
        </Routes>
</BrowserRouter>



  </>
  )
}

export default App
