import React from 'react'
import { Link } from 'react-router-dom'
import "../mediaquires.css";

export default function Stats() {
  return (
    <div className='container p-3'>
      <div className='row p-3 stats-row'>
        <div className='col-6 p-3'>
          <h1 className='fs-2 mb-4' style={{color:"rgb(66, 66, 66)"}}>Trust with confidence</h1>
          <h2 className='fs-5'>Customer first always</h2>
          <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

          <h2 className='fs-5'>No spam or gimmicks</h2>
          <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

          <h2 className='fs-5'>The Zerodha universe</h2>
          <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

          <h2 className='fs-5'>Do better with money</h2>
          <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>

        <div className='col-6 p-3'>
          <img src='media/images/ecosystem.png' alt='ecosys-Image' style={{width:"100%"}}/>

          <div className='text-center'>
            <Link to='' className='mx-4' style={{textDecoration:"none"}}>Explore our products <i class="bi bi-arrow-right"></i></Link>
            <Link to='' className='mx-4' style={{textDecoration:"none"}}>Try kite demo <i class="bi bi-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
