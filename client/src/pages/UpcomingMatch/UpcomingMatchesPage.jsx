import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import './UpcomingMatchesPage.css';


const UpcomingMatchesPage = () => {
  return (
    <div className='upcoming-container'>
        <Navbar/>
     <div className='main-contain'>
        <p>No Matches Available</p>
     </div>
    </div>
  )
}

export default UpcomingMatchesPage