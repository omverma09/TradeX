import React from 'react'

export default function Universe() {
  return (
    <div className='container mt-5'>
      <div className='row text-center'>
        <h3 className='text-muted'>The Tradex Universe</h3>
        <p className='text-muted'>Extend your trading and investment experience even further with our partner platforms</p>

        <div className='col-4 p-3 mt-5'>
          <img src='media/images/smallcaseLogo.png'style={{width:"50%"}} alt='img'/>
          <p className='text-small text-muted'>Our asset management venture</p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img src='media/images/zerodhaFundhouse.png' style={{width:"50%"}} alt='img' />
          <p className='text-small text-muted'>Options trading platform that lets</p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img src='media/images/sensibullLogo.svg'style={{width:"50%"}} alt='img' />
          <p className='text-small text-muted'>Investment research platform.</p>
        </div>

        <div className='col-4 p-3 mt-5'>
          <img src='media/images/streakLogo.png' style={{width:"40%"}}alt='img' />
          <p className='text-small text-muted'>Our asset management venture</p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img src='media/images/dittoLogo.png' style={{width:"35%"}} alt='img' />
          <p className='text-small text-muted'>Options trading platform that lets</p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img src='media/images/smallcaseLogo.png'style={{width:"50%"}} alt='img' />
          <p className='text-small text-muted'>Investment research platform.</p>
        </div>
        
        <button className='p-2 btn btn-primary fs-5 mt-5' style={{width:"20%", margin:"0 auto"}}>SignUp for free</button>

      </div>
    </div>
  )
}
