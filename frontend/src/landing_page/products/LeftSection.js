import React from 'react';
import { Link } from 'react-router-dom';

export default function LeftSection({imageURL,productName,producDiscri,tryDemo,learnMore,googlePlay,appStore}) {
  return (
    <div className='container mt-5 left-section-container'>
      <div className='row align-items-center left-section-row'>

        <div className='col-md-6 col-12 text-center mb-4 mb-md-0 left-section-image"'>
          <img src={imageURL} alt='imag' className="img-fluid"/>
        </div>

        <div className='col-md-6 col-12 mt-3 p-md-5 text-center text-md-start left-section-text'>
          <h1 className="left-section-title" >{productName}</h1>
          <p className="left-section-desc" >{producDiscri}</p>

          <div className='mt-4 left-section-links'>
            <Link to={tryDemo} className="me-4" >Try Demo</Link>
            <Link to={learnMore} style={{marginLeft:"50px"}}>Learn more</Link>
          </div>

          <Link to={googlePlay} ><img src="media/images/googlePlayBadge.svg" className='mt-4 store-badge' alt='img'/></Link>
          <Link to={appStore} style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg" className='mt-4 store-badge ms-3' alt='img'/></Link>
        </div>

      </div>
    </div>
  )
}
