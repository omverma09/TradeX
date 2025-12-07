import React from 'react'
import { Link } from 'react-router-dom'

export default function Founder() {
  return (
    <div className='containainer founder-container'>
      <div className='row p-3 border-top'>
        <h1 className=' text-center founder-heading' style={{ color: "rgb(66, 66, 66)" }}>People</h1>
      </div>

      <div className='row p-3 mt-4 text-muted founder-row' style={{lineHeight:"1.8", fontSize:"1.1em"}}>
        <div className='col-6 p-3 text-center founder-img-col'>
          <img src='media/images/founder.jpg' alt='Founter-image' className="founder-img" style={{borderRadius:"100%", width:"55%"}}/>
          <h5 className='mt-4'>Om Verma</h5>
          <p>Founder, CEO</p>
        </div>
        <div className='col-6 p-3 founder-tex'>
          <p>Om Verma bootstrapped and founded TradeX in 2025 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p founder-links>Connect on <Link to="/">Homepage</Link>    <Link to="#">TrandingQ&A</Link> <Link to="#">Twiter</Link></p>
        </div>
      </div>

    </div>
  )
}