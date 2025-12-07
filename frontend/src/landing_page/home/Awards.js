import React from 'react';
import "../mediaquires.css";


export default function Awards() {
  return (
    <div className='container mt-5'>
      <div className='row award-row'>
        <div className='col-6 p-5'>
          <img src='media/images/largestBroker.svg' alt=''/>
        </div>
        <div className='col-6 p-5 mt-5'>
          <h1 className='fs-2'style={{color:"rgb(66, 66, 66)"}}>Largest stoke broker in India</h1>
          <p className='mb-5'>2+ millions TradX client contribute to over 15% of all ratail order volume in India daily by trading and investing in:</p>
          
          <div className='row'>
            <div className='col-6'>
              <ul>
                <li><p>Future and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li><p>Stokes and IPOS</p></li>
                <li><p>Derect mutul funds</p></li>
                <li><p>Bonds and Govt. securities</p></li>
              </ul>
            </div>
          </div>
          <img src='media/images/pressLogos.png' alt='' style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  )
}
