import React from 'react'
import Home from "../components/Home/Home"
import Navbar from "../components/Navbar/Navbar"

const HomePage = () => {
  return (
    <div>
      <Navbar activeButton={"HOME"} />
      <Home/>
    </div>
  )
}

export default HomePage