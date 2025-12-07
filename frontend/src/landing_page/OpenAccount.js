import React from 'react'
import "./mediaquires.css";

export default function OpenAccout() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center open-account-row'>
        <h1 className='mt-5 fs-2' style={{color:"rgb(66, 66, 66)"}}>
          Open a Tradex Account
        </h1>
        <p>
          Modern platform and apps, ₹0 investment, and flat ₹20 intraday and F&O trades.
        </p>
        <button 
          className='p-2 btn btn-primary fs-5' 
          style={{width:"20%", margin:"0 auto"}}
        >
          Sign Up for free
        </button>
      </div>
    </div>
  )
}
