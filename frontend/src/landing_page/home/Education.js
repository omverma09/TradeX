import React from 'react'
import { Link } from 'react-router-dom'
import "../mediaquires.css";

export default function Education() {
  return (
    <div className='container mt-4'>
      <div className='row education-row'>
        <div className='col-6'>
          <img src='media/images/education.svg' alt='education' style={{width:"70%"}}/>
        </div>
        <div className='col-6'>
          <h2 className='mb-3 mt-5 fs-2' style={{color:"rgb(66, 66, 66)"}}>Free and open market education</h2>

          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <Link to='' className='mx-4' style={{textDecoration:"none"}}>Varsity <i class="bi bi-arrow-right"></i></Link>

          <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <Link to='' className='mx-4' style={{textDecoration:"none"}}>TradingQ&A <i class="bi bi-arrow-right"></i></Link>

        </div>
      </div>
    </div>
  )
}
