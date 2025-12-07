import React from 'react'
import { Link } from 'react-router-dom'

export default function RightSection({imageURL,productName,producDiscri,learnMore,}) {
  return (
    <div className='container mt-5 '>
      <div className='row'>
        <div className='col-6 mt-5 p-5'>
          <h1>{productName}</h1>
          <p>{producDiscri}</p>
          <Link to={learnMore} className="right-link">Learn more</Link>
        </div>
        <div className='col-6'>
          <img src={imageURL} alt='imag'/>
        </div>
      </div>
    </div>
  )
}
