import React from 'react'
import {Link} from 'react-router-dom'

export default function Brokerage() {
  return (
    <div className='container'> 
      <div className='row p-5 text-center border-top'>
        <div className='col-8 p-3'>
          <Link to="#" style={{textDecoration:"none"}}><h3 className='fs-4'>Brokerage Calculator</h3></Link>
          <ul style={{textAlign:"left", lineHeight:"2rem", fontSize:"16px"}} className='text-muted mt-4'>
            <li>Ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam,</li>
            <li>Labore facere eos dolores beatae accusantium totam aut nemo non, debitis</li>
            <li>Enim. Alias rem dolor cum optio? ans this is calculator is powerd</li>
            <li>Consectetur adipisicing elit. Cupiditate eveniet</li>
            <li>Accusamus minima adipisci id facere perspiciatis eos. Eveniet earum nis</li>
            <li>Doloribus officiis magnam recusandae, labore tempora hic ullam</li>
            <li>Enim Alias rem dolor cum optio? ans this is calculator is powerd</li>
          </ul>
        </div>
        <div className='col-4 p-4'>
          <Link to="#" style={{textDecoration:"none"}}><h3 className='fs-4'>List of charges</h3></Link>
        </div>
      </div>
    </div>
  )
}
