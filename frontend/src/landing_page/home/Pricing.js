import React from 'react'
import { Link } from 'react-router-dom'
import "../mediaquires.css";

export default function Pricing() {
  return (
    <div className='container'>
      <div className='row pricing-row'>
        <div className='col-4'>
          <h1 className='mb-3 fs-2' style={{ color: "rgb(66, 66, 66)" }}>Unbeatable Pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <Link to='#' className='mx-4' style={{ textDecoration: "none" }}>See Pricing</Link>
        </div>

        <div className='col-2'></div>

        <div className='col-6 text-center'>
          <div className='row'>
            <div className='col p-3 border pricing-box'>
              <h1 className='mb-3'>₹0</h1>
              <p>Free equity delivery and<br /> direct mutul funds</p>
            </div>
            <div className='col p-3 border pricing-box'>
              <h1 className='mb-3'>₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
