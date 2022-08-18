import React from 'react'
import './DetailView.css'

const DetailView = () => {
  return (
    <div className='main'>
    <div classname="container">
    <div   className="detail-th" style={{margin: '0px'}}>Net Plus Minus</div>
    <div className="detail-td" style={{color: 'red', margin: '0% 0% 4% 0%'}}>You Lost 15.0/- Coins.</div>
    <a href="#">
      <div className="detail-th" id='font' style={{margin: '0% 0% 8% 0%'}}>BACK TO LIST</div>
    </a>
  </div>
  </div>
  )
}

export default DetailView