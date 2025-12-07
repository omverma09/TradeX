import React from 'react'
import {Link} from 'react-router-dom'

export default function Hero() {
  return (
    <div className='container hero-container'>
      <div className='row p-5 mb-3 mt-5 hero-row'>
        <h3 className='fs-3 text-center hero-heading' style={{ color: "rgb(66, 66, 66)", marginTop:"80px" }}>We pioneered the discount broking model in India.<br />Now, we are breaking ground with our technology.</h3>
      </div>

      <div className='row p-5 mt-5 border-top text-muted hero-row' style={{lineHeight:"1.8", fontSize:"1.1em"}}>
        <div className='col-6 p-5 hero-text'>
          <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

          <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

          <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
        </div>
        <div className='col-6 p-5 hero-text hero-links'>
          <p>In addition, we run a number of popular open online educational and     community initiatives to empower retail traders and investors.</p>
          <p><Link to='#' style={{textDecoration:"none", fontWeight:"600"}}>Rainmatter</Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
          <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <Link href='#' style={{textDecoration:"none", fontWeight:"600"}}>blog</Link> or see what the media is <Link href='#' style={{textDecoration:"none", fontWeight:"600"}}>saying about us</Link> or learn more about our business and product <Link href='#' style={{textDecoration:"none", fontWeight:"600"}}>philosophies</Link>.</p>
        </div>
      </div>

    </div>
  )
}
