import React from 'react'
import '../mediaquires.css'

export default function Hero() {
  return (
    <div className='container p-4 mb-5 hero-section'>
      <div className='row text-center'>
        <img 
          src='media/images/TradeXHome.png' 
          alt='Hero-Image' 
          className='mb-5 mt-5' 
          style={{height:"25rem", borderRadius:"20px"}} 
        />
        <h1 className='mt-4 fs-2' style={{color:"rgb(66, 66, 66)"}}>
          Invest in everything
        </h1>
        <p style={{color:"rgb(66, 66, 66)", fontSize:"1.4rem"}}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
        <button 
          className='p-2 btn btn-primary fs-5' 
          to="/signup" 
          style={{width:"20%", margin:"0 auto"}}
        >
          SignUp for free
        </button>
      </div>
    </div>
  )
}
