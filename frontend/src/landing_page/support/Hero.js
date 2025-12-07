import React from 'react'
import {Link} from 'react-router-dom'
import "../mediaquires.css"

export default function Hero() {
  return (
    <section className='containainer-fluid mt-5' id='supportHero'>
      <div className='p-5' id='supportWraper'>
         <h4>Support Portal</h4>
         <Link to="#">Track Ticket</Link>
      </div>
      <div className='row p-5 m-3'>
        <div className='col-6 p-5'>
          <h3 className='fs-3'>Search for an answer or browser help topic to create a ticket</h3>
          <input placeholder='Eg: how do i activate F&O, why is my order rejected.'/><br/>
          <Link to="#">Track Account opening</Link>
          <Link to="#">Track segment activation</Link>
          <Link to="#">Intraday margin</Link>
          <Link to="#">Kite user manual</Link>
        </div>
        <div className='col-6 p-3'>
          <h3 className='fs-3'>Featured</h3>
          <ol>
            <li><Link to="#">Current trackover and Delisting - january2024</Link></li>
            <li><Link to="#">Latest Intraday leverage MIS & CO</Link></li>
          </ol>
        </div>
      </div>
    </section>
  )
}
