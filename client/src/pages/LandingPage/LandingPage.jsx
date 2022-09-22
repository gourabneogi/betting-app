import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <div className='Container'>
       <div className='wrapper'>
        <div className='title'>NICE1010</div>
        
        <div id="outer">
        <Link to="/user/login">
          <div class="button_slide slide_right" >LOGIN </div>
        </Link>
        </div>
       </div>
       
    </div>
  )
}

export default LandingPage
