import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateTicket() {
  return (
    <div className='containainer'>
      <div className='row p-5 mb-3 mt-5'>
        <h1 className='fs-3 text-center'>To create a Ticket, select a relevant topic</h1>

        <div className='col-4 p-5 mb-2 mt-2'>
          <h1 className='fs-5 text-muted'><i class="bi bi-plus-circle-fill fa-sm" style={{marginRight:"7px"}}></i>Account opening</h1>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Online open account</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Offline open account</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Company patnership</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Opening</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>NRI Account Opening</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Charges at TradeX</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Getting started</Link><br/>
        </div>
        <div className='col-4 p-5 mb-2 mt-2'>
          <h1 className='fs-5 text-muted'><i class="bi bi-person-circle" style={{marginRight:"7px"}}></i>Your TradeX Account</h1>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Online open account</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Offline open account</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Company patnership</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Opening</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>NRI Account Opening</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Charges at TradeX</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Getting started</Link><br/>
        </div>
        <div className='col-4 p-5 mb-2 mt-2'>
          <h1 className='fs-5 text-muted'><i class="bi bi-link-45deg" ></i>Importent Links</h1>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Online open account</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Offline open account</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Company patnership</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Opening</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>NRI Account Opening</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Charges at TradeX</Link><br/>
          <Link to="#" style={{textDecoration:"none",lineHeight:"2.5rem"}}>Getting started</Link><br/>
        </div>
      </div>
      
    </div>
  )
}
