import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Inplay.css'

const Inplay = () => {
  return (
    <div className='inplay-container'>
      <Navbar/>
     <div className='cricket-football-main-div CFH-Btn-outer'>
        <button onclick="#" class="cricket-button cricket-btn-color-change" id="cricket-button">CRICKET</button>
        <button onclick="#" class="football-button " id="football-button">
            <img className='football-img' src='http://nice1010.fun/images/football_white.ico'/>
            FOOTBALL
        </button>
    </div>
    </div>
  )
}

export default Inplay