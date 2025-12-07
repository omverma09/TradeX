import React from 'react'
import { Link } from 'react-router-dom'

export default function Cofounder() {
    return (
        <div className='containainer cofounder-container'>
            <div className='row p-3 mt-4 text-muted cofounder-row' style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
                <div className='col-6 p-5 cofounder-text'>
                    <p>Rahul Jadhav bootstrapped and founded TradeX in 2025 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <Link to="/">Homepage</Link>    <Link to="#">TrandingQ&A</Link> <Link to="#">Twiter</Link></p>
                </div>
                <div className='col-6 p-3 text-center cofounder-img-col'>
                    <img src='media/images/cofounder.jpg' alt='Founter-image' className="cofounder-img" style={{ borderRadius: "100%", width: "50%" }} />
                    <h5 className='mt-4'>Rahul Jadhav</h5>
                    <p>Co-Founder</p>
                </div>
            </div>
        </div>
    )
}
