import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='container border-bottom mb-5 mt-5 hero-container'>
      <div className='row p-5 mt-5 text-center hero-row'>
        <h2 className='text-muted mt-4 hero-title'>Tradex Products</h2>
        <h4 className='text-muted mt-3 hero-subtitle'>Sleek, modern, and intuitive trading platforms</h4>
        <p className='text-muted mt-3 mb-5 hero-text'>Check out our <Link to="" className="hero-link" style={{fontWeight:"600", textDecoration:"none"}}>investment offerings →</Link></p>
      </div>
    </div>
  )
}
